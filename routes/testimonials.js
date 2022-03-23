const express = require('express');
var router = express.Router();
const {
  getTestimonials,
  testimonialsUpdate,
  testimonialsCreate
} = require('../controllers/testimonialsController');

router.get('/', getTestimonials);
router.put('/:id', testimonialsUpdate);
router.post('/testimonials', testimonialsCreate);


module.exports = router;
