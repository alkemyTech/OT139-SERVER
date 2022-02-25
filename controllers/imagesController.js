const fs = require('fs'); 
const imageUpload = require('../services/imageUploader')

const uploadImage = (req, res) => {
        const file = req.file;

        response = imageUpload.upload(file);
        res.send(response);
};

module.exports = {uploadImage};