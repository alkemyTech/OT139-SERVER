const express = require('express');
const router = express.Router();
const { getOrganization } = require('../controllers/organizationsController');

router.get('/1/public', getOrganization);

module.exports = router;
