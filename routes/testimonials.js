const express = require('express');
var router = express.Router();
const {
  getTestimonials,
  testimonialsUpdate,
  testimonialsCreate,
  testimonialsDelete,
} = require('../controllers/testimonialsController');

router.delete('/:id', testimonialsDelete);
router.get('/', getTestimonials);
router.put('/:id', testimonialsUpdate);
router.post('/testimonials', testimonialsCreate);


module.exports = router;
