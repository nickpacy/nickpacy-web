const express = require('express');
const albumController = require('../controllers/albumController');

const router = express.Router();

// Get all albums
router.get('/', albumController.getAlbums);

// Get a single album by ID
router.get('/:albumId', albumController.getAlbumById);

// Create a new album
router.post('/', albumController.createAlbum);

// Update an existing album
router.put('/:albumId', albumController.updateAlbum);

module.exports = router;
