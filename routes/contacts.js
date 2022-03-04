const express = require('express');
const { add } = require('../controllers/contactController');
const router = express.Router();

router.post('/', add)

module.exports = router;