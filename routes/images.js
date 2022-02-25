const express = require('express');
const router = express.Router();
const imagesController = require('../controllers/imagesController');

const multer = require('multer'); 
const upload = multer({ dest: 'temp/' }); 

router.post('/upload', upload.single('image'), imagesController.uploadImage);

module.exports = router;