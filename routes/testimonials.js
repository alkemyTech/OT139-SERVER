const express = require('express');
var router = express.Router();
const {
  getTestimonials,
  testimonialsUpdate,
  testimonialsCreate,
} = require('../controllers/testimonialsController');

router.get('/', getTestimonials);
router.post('/', testimonialsCreate);
router.put('/:id', testimonialsUpdate);

module.exports = router;
