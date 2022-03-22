const express = require('express');
const {
  updateCategories,
  getAllCategories,
} = require('../controllers/categoriesController.js');
const router = express.Router();

router.get('/', getAllCategories);
router.put('/:id', updateCategories);

module.exports = router;
