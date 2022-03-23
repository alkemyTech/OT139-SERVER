const express = require('express');
const router = express.Router();
const {
  updateCategories, createCategories,
} = require('../controllers/categoriesController.js');

router.put('/:id', updateCategories);
router.post('/categories', createCategories);
module.exports = router;
