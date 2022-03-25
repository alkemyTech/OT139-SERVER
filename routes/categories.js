const express = require('express');
const router = express.Router();
const {
  deleteCategory,
  updateCategories,
  createCategories,
  deleteCategory,
} = require('../controllers/categoriesController.js');

router.get('/', getAllCategories);
router.put('/:id', updateCategories);
router.delete('/:id', deleteCategory);
router.post('/categories', createCategories);

module.exports = router;
