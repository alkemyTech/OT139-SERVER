const express = require('express');
const router = express.Router();
const { getUserData } = require('../controllers/authController');

router.get('/me', getUserData);

module.exports = router;
