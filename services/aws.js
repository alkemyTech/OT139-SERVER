const fs = require('fs');
const AWS = require('aws-sdk');

const bucketName = process.env.AWS_BUCKET;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const sercetAccesKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new AWS.S3({
  accessKeyId,
  sercetAccesKey
});

const uploadFile = (file) => {
  const uploadParams = {
    Bucket: bucketName,
    Body: file,
  };

  return s3.upload(uploadParams).promise();
};

module.exports = { uploadFile };