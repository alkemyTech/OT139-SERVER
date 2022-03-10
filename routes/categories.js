const express = require('express');
const { getAllCategorie } = require('../controllers/categoriesController');
const router = express.Router();

router.get('/categories', getAllCategorie);


module.exports = router;