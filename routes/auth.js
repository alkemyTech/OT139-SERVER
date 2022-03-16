const express = require('express');
const router = express.Router();
const { getUserData } = require('../controllers/authController');
const { verifyUser } = require('../middleware/authMiddleware');

router.get('/me', verifyUser, getUserData);

module.exports = router;
