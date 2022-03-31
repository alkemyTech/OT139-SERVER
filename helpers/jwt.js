const jwt = require('jsonwebtoken');

const generateJsonWebToken = (userData) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      userData,
      process.env.SECRET_PRIVATE_KEY,
      {
        expiresIn: '24h',
      },
      (err, token) => {
        if (err) {
          reject('No se pudo generar el JWT: ', err);
        } else {
          resolve(token);
        }
      }
    );
  });
};

const verifyJsonWebToken = (token, callback) => {
  jwt.verify(token, process.env.SECRET_PRIVATE_KEY, (err, decoded) => {
    return callback(err, decoded);
  });
};

let sanitizeToken = (token = '') => {
  return token.split(' ')[0];
};

module.exports = {
  generateJsonWebToken,
  verifyJsonWebToken,
  sanitizeToken,
};
