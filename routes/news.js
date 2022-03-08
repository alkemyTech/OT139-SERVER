const express = require('express');
const router = express.Router();
const { deleteNews } = require('../controllers/newsController');

router.delete('/:id', deleteNews);

module.exports = router;
