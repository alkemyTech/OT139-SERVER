const express = require('express');
const { getMembers } = require('../controllers/membersController');
const router = express.Router();

router.get('/', getMembers);

module.exports = router;
