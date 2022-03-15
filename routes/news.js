const express = require('express');
const router = express.Router();
const { getAllNews, getNewsById, deleteNews } = require('../controllers/newsController');

router.get('/', getAllNews); //get all news
router.get('/:id', getNewsById);
router.delete('/:id', deleteNews);

module.exports = router;
