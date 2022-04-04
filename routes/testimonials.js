const express = require('express');
var router = express.Router();
const {
  getTestimonials,
  testimonialsUpdate,
  testimonialsCreate,
  deleteTestimony,
} = require('../controllers/testimonialsController');

router.delete('/:id', deleteTestimony);
router.get('/', getTestimonials);
router.post('/', testimonialsCreate);
router.put('/:id', testimonialsUpdate);

module.exports = router;
