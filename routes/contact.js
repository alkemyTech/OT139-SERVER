const express = require('express');
const router = express.Router();
const { senderEmailContact } = require('../controllers/contactController');

router.post('/', senderEmailContact);

module.exports = router;
