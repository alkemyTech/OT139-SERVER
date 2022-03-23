const express = require('express');
const router = express.Router();
const {
  deleteCategories,
  updateCategories,
  createCategories,
} = require('../controllers/categoriesController.js');

router.put('/:id', updateCategories);
router.delete('/:id', deleteCategories);
router.post('/categories', createCategories);

module.exports = router;
