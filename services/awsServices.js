const fs = require('fs');
const AWS = require('aws-sdk');

const bucketName = process.env.AWS_BUCKET;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccesKey = process.env.AWS_SECRET_ACCESS_KEY;

const storage = new AWS({
  accessKeyId,
  secretAccesKey,
});

const uploadInBucket = (fileName, body) => storage.upload({
  Bucket: bucketName, 
  Key: fileName,
  Body: body, 
}).promise(); 

module.exports = { uploadInBucket };