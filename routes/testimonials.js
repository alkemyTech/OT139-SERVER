const express = require('express');
var router = express.Router();
const { testimonialsDelete } = require('../controllers/testimonialsController');

router.delete('/:id', testimonialsDelete);

module.exports = router;