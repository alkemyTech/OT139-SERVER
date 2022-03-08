const express = require('express');
var router = express.Router();
const { testimonialsUpdate } = require('../controllers/testimonialsController');

router.put('/:id', testimonialsUpdate);

module.exports = router;