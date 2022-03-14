const express = require('express');
const router = express.Router();
const {updated, getNewsById, deleteNews} = require('../controllers/newsController');

router.put('/:id', updated);
router.get('/:id', getNewsById);
router.delete('/:id', deleteNews);

module.exports = router;
