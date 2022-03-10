const express = require('express');
var router = express.Router();
const { senderEmailContact } = require('../controllers/contactController');

router.post('/', senderEmailContact);

module.exports = router;
