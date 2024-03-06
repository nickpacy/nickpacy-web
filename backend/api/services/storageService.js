const AWS = require('aws-sdk');
const multer = require('multer');
const fs = require('fs-extra');
const path = require('path');

require('dotenv').config();

// Configure AWS S3
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const s3 = new AWS.S3();
const LOCAL_UPLOAD_PATH = process.env.LOCAL_UPLOAD_PATH || './uploads';
const S3_BUCKET = process.env.S3_BUCKET_NAME;

// Configure storage for local and S3
const storage = process.env.AWS_ENABLED === 'true' ?
  multer.memoryStorage() : // Use memory storage for S3 upload
  multer.diskStorage({     // Use disk storage for local upload
    destination: (req, file, cb) => cb(null, LOCAL_UPLOAD_PATH),
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  });

// Upload function
const upload = multer({ storage: storage }).single('image');

// Function to upload to S3
async function uploadToS3(file, filename) {
  const params = {
    Bucket: S3_BUCKET,
    Key: filename,
    Body: file.buffer,
    ContentType: file.mimetype
  };

  return s3.upload(params).promise();
}

async function createFolderInS3(folderName) {
    if (!S3_BUCKET) {
        throw new Error('S3 Bucket name is not defined in environment variables');
    }
    const params = {
      Bucket: S3_BUCKET,
      Key: folderName, // folderName should end with a '/'
      Body: Buffer.from('') // Empty content
    };
  
    return s3.upload(params).promise();
  }

module.exports = {
  upload,
  uploadToS3,
  createFolderInS3
};
