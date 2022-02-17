var express = require('express')
var router = express.Router()
const { body, validationResult } = require('express-validator')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

/* POST auth user. */
router.post(
  '/auth/login',
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
  async function (req, res, next) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(), ok: false })
    }

    const { email, password } = req.body
    const user = await db.User.find({
      where: {
        email: email,
      },
    })

    //Do I need to encrypt or decrypt one of the passwords here?
    if (user && user.password == password) {
      res.json(user)
    } else {
      res.status(401).json({ ok: false })
    }
  }
)

module.exports = router
