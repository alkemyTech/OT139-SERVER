const express = require('express');
const router = express.Router();
const {
  updateCategories,
} = require('../controllers/categoriesController.js');

router.put('/:id', updateCategories);

module.exports = router;
