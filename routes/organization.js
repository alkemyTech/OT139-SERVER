const express = require('express');
const router = express.Router();
const { getFirstOrganization } = require('../controllers/organizationsController');

router.get('/1/public', getFirstOrganization);

module.exports = router;
