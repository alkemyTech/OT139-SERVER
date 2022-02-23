//Mock jwt auth
//Delete when jwt is ready
const verifyJsonWebToken = (token, callback) => {
  return callback(null, { password: '1234567' });
};

module.exports = verifyJsonWebToken;
