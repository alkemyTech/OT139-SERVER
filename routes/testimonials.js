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
router.post('/', testimonialsCreate);
router.put('/:id', testimonialsUpdate);

module.exports = router;
