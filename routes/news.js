const express = require('express');
const router = express.Router();
const { getNewsById, deleteNews } = require('../controllers/newsController');

router.get('/:id', getNewsById);
router.delete('/:id', deleteNews);

module.exports = router;
