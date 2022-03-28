const express = require('express');
const { imageUpload } = require('../controllers/imagesController');
const router = express.Router();

router.put(imageUpload, '/:id', updateNew);
router.post(imageUpload, '/news', newsCreate);

module.exports = router;
