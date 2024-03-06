const storageService = require("../services/storageService");
const pool = require("../database");
const fs = require("fs-extra");
const { NotFoundError, DatabaseError } = require("../middlewares/errorTypes");

const ALBUMS_PATH = process.env.LOCAL_UPLOAD_PATH || "./uploads";

// Create a new album
const createAlbum = async (req, res, next) => {
  const { albumName, albumDescription } = req.body;

  try {
    // Check if album with the same name exists in the database
    const existingAlbums = await pool.query(
      "SELECT * FROM albums WHERE album_name = ?",
      [albumName]
    );

    if (existingAlbums.length > 0) {
      return res
        .status(409)
        .json({ message: "Album with this name already exists" });
    }

    // Insert album into the database
    const result = await pool.query(
      "INSERT INTO albums (album_name, album_description) VALUES (?, ?)",
      [albumName, albumDescription]
    );

    const albumId = result.insertId;

    // Create a folder for the album in S3 or locally
    if (process.env.AWS_ENABLED === "true") {
      // Create a 'folder' in S3
      const folderName = `albums/${albumId}/`;
      await storageService.createFolderInS3(folderName);
    } else {
      // Create a directory in local filesystem
      await fs.ensureDir(`${process.env.LOCAL_UPLOAD_PATH}/albums/${albumId}`);
    }

    res.status(201).json({
      albumId: albumId,
      albumName: albumName,
      albumDescription: albumDescription,
    });
  } catch (error) {
    next(new DatabaseError("Error creating album", error));
  }
};

// Update an existing album
const updateAlbum = async (req, res, next) => {
  const albumId = req.params.albumId;
  const { albumName, albumDescription, coverPhotoId, visible } = req.body;

  try {
    // Update album details in the database
    const result = await pool.query(
      "UPDATE albums SET album_name = ?, album_description = ?, cover_photo_id = ?, visible = ? WHERE album_id = ?",
      [albumName, albumDescription, coverPhotoId, visible, albumId]
    );

    if (result.affectedRows === 0) {
      throw new NotFoundError("Album not found");
    }

    res.json({
      albumId: albumId,
      albumName: albumName,
      albumDescription: albumDescription,
      coverPhotoId: coverPhotoId,
      visible: visible,
    });
  } catch (error) {
    next(error);
  }
};

// Get all albums
const getAlbums = async (req, res, next) => {
  try {
    const query = `
        SELECT 
          a.*, 
          p.photo_path AS cover_photo_path 
        FROM 
          albums a
        LEFT JOIN 
          photos p ON a.cover_photo_id = p.photo_id`;

    const albums = await pool.query(query);
    res.json(albums);
  } catch (error) {
    next(new DatabaseError("Error fetching albums", error));
  }
};

// Get a single album by ID
const getAlbumById = async (req, res, next) => {
  const albumId = req.params.albumId;

  try {
    const query = `
        SELECT 
          a.*, 
          p.photo_path AS cover_photo_path 
        FROM 
          albums a
        LEFT JOIN 
          photos p ON a.cover_photo_id = p.photo_id
        WHERE 
          a.album_id = ?`;

    const album = await pool.query(query, [albumId]);

    if (album.length === 0) {
      return res.status(404).json({ message: "Album not found" });
    }

    res.json(album[0]);
  } catch (error) {
    next(new DatabaseError("Error fetching album", error));
  }
};

module.exports = {
  createAlbum,
  updateAlbum,
  getAlbums,
  getAlbumById,
  // ... any other exported methods ...
};
