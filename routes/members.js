const express = require('express');
const { createMember } = require('../controllers/membersController');
const router = express.Router();

router.post('/', createMember);

module.exports = router;
