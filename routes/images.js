const express = require('express');
const router = express.Router();

const multer = require('multer'); 
const upload = multer({ dest: 'temp/' }); 


router.post('/images', upload.single('image'), (req, res) => {
    const file = req.file;
    console.log(file)
    res.send("OK")
});

module.exports = imagesTestRouter;