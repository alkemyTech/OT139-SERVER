const express = require('express');
var router = express.Router();
const { testimonialsDelete , testimonialsUpdate , getTestimonials} = require('../controllers/testimonialsController');

router.delete('/:id', testimonialsDelete);
router.get('/', getTestimonials);
router.put('/:id', testimonialsUpdate);

module.exports = router;