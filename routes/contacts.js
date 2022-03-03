const express = require('express');
const { getAllContacts } = require('../controllers/contactController');
const adminValidation = require('../middleware/adminValidation');
const router = express.Router();

router.get('/', adminValidation, getAllContacts);

module.exports = router;
