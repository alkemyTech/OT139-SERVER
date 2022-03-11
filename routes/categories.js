const express = require('express');
const router = express.Router();
const { deleteCategories } = require('../controllers/categoriesControllers.js');

router.delete('/:id', deleteCategories);

module.exports = router;
