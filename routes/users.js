const express = require('express');
var router = express.Router();
const { getAll, deleteUser } = require('../controllers/usersController');

/* GET users listing. */
router.get('/', getAll);

router.delete('/:id', deleteUser);

module.exports = router;
