const jwt = require("jsonwebtoken");

const generateJsonWebToken = (userData) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      userData,
      "secretkey",
      {
        expiresIn: "24h",
      },
      (err, token) => {
        if (err) {
          reject("No se pudo generar el JWT : ", err);
        } else {
          resolve(token);
        }
      }
    );
  });
};

const verifyJsonWebToken = (token, callback) => {
  jwt.verify(token, "secretkey", function (err, decoded) {
    if (err) {
      return callback(err);
    } else {
      return callback(null, decoded);
    }
  });
};

module.exports = {
  generateJsonWebToken,
  verifyJsonWebToken,
};
