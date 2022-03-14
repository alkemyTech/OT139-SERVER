const express = require('express');
const router = express.Router();
const {
  getFirstOrganization,
  editOrganization,
} = require('../controllers/organizationsController');

router.get('/1/public', getFirstOrganization);
router.put('/:id', editOrganization);

module.exports = router;
