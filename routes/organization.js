const express = require('express');
const router = express.Router();

router.get('/1/public', (req, res, next) => {
  res.json({
    name: 'Somos Mas',
    image: '/images/LOGO-SOMOS-MAS.png',
    phone: '1160112988',
    address: 'Barrio La Cava',
    welcomeText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie interdum rutrum. Nulla luctus est eget feugiat condimentum.',
    social: {
      facebook: 'https://www.facebook.com/corpsomosmas',
      twitter: 'https://twitter.com/somosmas',
      vimeo: 'https://vimeo.com/somosmas',
      linkedin: 'https://www.linkedin.com/company/somosmas/',
      flirk: 'https://www.flickr.com/photos/corporacionsomosmas/albums',
      youTube: 'https://www.youtube.com/user/corposomosmas',
    },
  });
});

module.exports = router;
