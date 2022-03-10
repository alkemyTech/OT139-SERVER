const express = require('express');
const { getAllCategories } = require('../controllers/categoriesContollers');
const router = express.Router();

router.get('/', getAllCategories);


module.exports = router;