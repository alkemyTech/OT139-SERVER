const express = require('express');
const router = express.Router();
const {
  getMembers,
  createMember,
  deleteMember
} = require('../controllers/membersController');

router.get('/', getMembers);
router.post('/', createMember);
router.delete('/:id', deleteMember);

module.exports = router;
