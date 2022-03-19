const express = require('express');
var router = express.Router();
const { testimonialsDelete , testimonialsUpdate } = require('../controllers/testimonialsController');

router.delete('/:id', testimonialsDelete);
router.put('/:id', testimonialsUpdate);

module.exports = router;