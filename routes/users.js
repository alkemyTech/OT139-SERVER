const express = require('express');
const router = express.Router();
const { userValidation } = require('../middleware/userValidation');
const { authUser, deleteUser } = require('../controllers/usersController');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/auth/login', userValidation(), authUser);
router.delete('/:id', deleteUser);

module.exports = router;
