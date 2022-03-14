const express = require('express');
const router = express.Router();
const {
  getOrganization,
  editOrganization,
} = require('../controllers/organizationsController');

router.get('/:id/public', getOrganization);
router.put('/:id', editOrganization);

module.exports = router;
