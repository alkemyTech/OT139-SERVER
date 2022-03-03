const express = require('express');
var router = express.Router();
const { deleteUser } = require('../controllers/usersController');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
  console.log(req.body);
});

router.delete('/:id', deleteUser);

module.exports = router;
