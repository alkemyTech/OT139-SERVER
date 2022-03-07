const express = require('express');
const router = express.Router();
const { getNewsById, deleteNews } = require('../controllers/newsController');
const { newsCreate } = require('../controllers/newsController');

router.get('/:id', getNewsById);
router.delete('/:id', deleteNews);

router.post('/news', newsCreate);

module.exports = router;
