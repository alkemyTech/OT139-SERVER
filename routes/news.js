const express = require('express');
const router = express.Router();
const news=require('../controllers/NewController');

router.get('/',news.news);

module.exports = router;