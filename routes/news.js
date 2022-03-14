const express = require('express');
const router = express.Router();
const {update, getNewsById, deleteNews} = require('../controllers/newsController');

router.put('/:id', update);
router.get('/:id', getNewsById);
router.delete('/:id', deleteNews);

module.exports = router;
