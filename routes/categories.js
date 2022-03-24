const express = require('express');
const router = express.Router();
const {
  updateCategories,
  createCategories,
  deleteCategories,
} = require('../controllers/categoriesController.js');

router.put('/:id', updateCategories);
router.post('/categories', createCategories);
router.delete('/:id', deleteCategories);
module.exports = router;
