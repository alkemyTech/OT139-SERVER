const express = require('express');
const router = express.Router();
const {
  getAllCategories,
  updateCategories, 
  createCategories,
} = require('../controllers/categoriesController.js');

router.get('/', getAllCategories);
router.put('/:id', updateCategories);
router.post('/categories', createCategories);

module.exports = router;
