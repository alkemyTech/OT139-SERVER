var express = require('express')
var router = express.Router()

/*GET public data of the organization */
router.get('/1/public', async (req, res, next) => {
  res.json({
    name: 'Somos Mas',
    image:
      'https://drive.google.com/file/d/1-j70Zmn2B1-0T_67JHJbNLKkI9sACMNi/view?usp=sharing',
    phone: '1160112988',
    address: 'Barrio La Cava',
    welcomeText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie interdum rutrum. Nulla luctus est eget feugiat condimentum.',
  })
})

module.exports = router
