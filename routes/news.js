const express = require('express');
const router = express.Router();
const {updated} = require('../controllers/newsController');


router.put('/:id', updated);

module.exports = router;