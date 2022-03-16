const { verifyJsonWebToken } = require('../helpers/jwt');
const {
  UNAUTHORIZED,
  FORBIDDEN,
} = require('../constants/httpCodes');

function verifyUser(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(FORBIDDEN).json({
      error: 'A token is required for authentication',
    });
  }

  verifyJsonWebToken(token, (error, decodedToken) => {
    if (error) {
      return res.status(UNAUTHORIZED).json({
        error: 'Invalid token',
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
