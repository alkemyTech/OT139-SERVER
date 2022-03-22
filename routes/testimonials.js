const express = require('express');
var router = express.Router();
const {
  getTestimonials,
  testimonialsUpdate,
} = require('../controllers/testimonialsController');

router.get('/', getTestimonials);
router.put('/:id', testimonialsUpdate);

module.exports = router;