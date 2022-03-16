const express = require('express');
const { add } = require('../controllers/contactController');
const checkFormValues = require('../middleware/contactValidation');
const router = express.Router();

router.post('/', checkFormValues, add);

module.exports = router;