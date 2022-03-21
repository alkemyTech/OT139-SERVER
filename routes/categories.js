const express = require('express');
const { getAllCategories } = require('../controllers/categoriesContollers');
const {
  updateCategories,
} = require('../controllers/categoriesController.js');
const router = express.Router();

router.get('/', getAllCategories);
router.put('/:id', updateCategories);

module.exports = router;
