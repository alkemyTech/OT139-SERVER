const express = require('express');
const router = express.Router();
const {
  deleteCategory,
  updateCategories,
  createCategories,
} = require('../controllers/categoriesController.js');

router.put('/:id', updateCategories);
router.delete('/:id', deleteCategory);
router.post('/categories', createCategories);

module.exports = router;
