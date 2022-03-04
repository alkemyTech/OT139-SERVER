const express = require('express');
const { add } = require('../controllers/contactController');
const validation = require('../middlewares/contact');
const router = express.Router();

router.post('/', validation, add);

module.exports = router;