const fs = require('fs'); 
const imageUploadService = require('../services/imageUploadeService');

const imageUpload = (req, res) => {
   const file = req.file;
   const response = imageUploadService.upload(file);
   
   res.send(response);
};

module.exports = {imageUpload};