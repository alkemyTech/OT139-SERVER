var express = require('express');
var router = express.Router();
const { unSuscriberUser } = require ('../controllers/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.delete('/:id' , unSuscriberUser);

module.exports = router;
