const express = require('express');
const router = express.Router();
const {
  deleteCategories,
  updateCategories,
} = require('../controllers/categoriesControllers.js');

router.put('/:id', updateCategories);
router.delete('/:id', deleteCategories);

module.exports = router;
