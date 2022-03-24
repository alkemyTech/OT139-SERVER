const { verifyJsonWebToken } = require('../helpers/jwt');
const { UNAUTHORIZED, FORBIDDEN } = require('../constants/httpCodes');

function verifyUser(req, res, next) {
  const token = req.headers.authorization;

  const token2 = token.split(' ')[1];
  if (!token) {
    return res.status(FORBIDDEN).json({
      error: 'A token is required for authentication',
    });
  }

  verifyJsonWebToken(token2, (error, decodedToken) => {
    if (error) {
      return res.status(UNAUTHORIZED).json({
        msg: 'Invalid token',
        error,
      });
    } else {
      res.locals.user = decodedToken;
      next();
    }
  });
}

module.exports = {
  verifyUser,
};
