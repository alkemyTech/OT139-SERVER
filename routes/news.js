const express = require('express');
const router = express.Router();
const { news, getNewsById } = require('../controllers/newsController');

router.get('/', news); //get all news
router.get('/:id', getNewsById);

module.exports = router;
