const express = require('express');
const router = express.Router();
const {
  addContact,
  getAllContacts,
} = require('../controllers/contactController');
const { senderEmailContact } = require('../service/EmailService');
const validatingContactValues = require('../middlewares/contactValidation');
const { isAdmin } = require('../middlewares/verify');

router.post('/', validatingContactValues, addContact);
router.get('/', isAdmin, getAllContacts);
router.post('/', senderEmailContact);

module.exports = router;
