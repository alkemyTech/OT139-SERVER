const express = require('express');
const { add } = require('../controllers/contactController');
const validation = require('../middleware/contact');
const router = express.Router();

router.post('/', validation, add);

module.exports = router;