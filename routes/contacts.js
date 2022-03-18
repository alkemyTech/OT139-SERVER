const express = require('express');
const { getAllContacts } = require('../controllers/contactController');
const { isAdmin } = require('../middlewares/verify');
const router = express.Router();

router.get('/', isAdmin, getAllContacts);

module.exports = router;
