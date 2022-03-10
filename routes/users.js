const express = require('express');
var router = express.Router();
const { authUser, getAll, deleteUser } = require('../controllers/usersController');
const { userValidation } = require('../middleware/userValidation');

/* GET users listing. */
router.get('/', getAll);

router.post('/auth/login', userValidation(), authUser);
router.delete('/:id', deleteUser);

module.exports = router;
