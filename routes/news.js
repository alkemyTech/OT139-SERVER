const express = require('express');
const router = express.Router();
const { detailNewsGet } = require('../controllers/newsControllers');

router.get('/:id', detailNewsGet);

module.exports = router;
