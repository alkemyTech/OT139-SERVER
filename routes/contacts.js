const express = require('express');
const router = express.Router();
const { addContact, getAllContacts } = require('../controllers/contactController');
const validatingContactValues = require('../middleware/contactValidation');
const { isAdmin } = require('../middlewares/verify');

router.post('/', validatingContactValues, addContact);

router.get('/', isAdmin, getAllContacts);

module.exports = router;
