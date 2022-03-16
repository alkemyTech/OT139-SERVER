const express = require('express');
const { add } = require('../controllers/contactController');
const validatingContactValues = require('../middleware/contactValidation');
const router = express.Router();

router.post('/', validatingContactValues, add);

module.exports = router;