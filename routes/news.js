const express = require('express');
const router = express.Router();
const {update, getNewsById, deleteNews, newsCreate} = require('../controllers/newsController');

router.put('/:id', update);
router.get('/:id', getNewsById);
router.delete('/:id', deleteNews);

router.post('/news', newsCreate);

module.exports = router;
