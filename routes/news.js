const express = require('express');
const router = express.Router();
const { getNewsById } = require('../controllers/newsControllers');

router.get('/:id', getNewsById);

module.exports = router;
