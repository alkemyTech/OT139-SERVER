const express = require('express');
const router = express.Router();
const { news } = require('../controllers/newController');

router.get('/', news);

module.exports = router;
