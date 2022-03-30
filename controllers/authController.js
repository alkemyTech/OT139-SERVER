const db = require('../models');
const { OK, BAD_REQUEST, NOT_FOUND } = require('../constants/httpCodes');
const { verifyJsonWebToken, sanitizeToken } = require('../helpers/jwt');

async function getUserData(req, res) {
  let userData = {};
  const token = req.headers.authorization;

  verifyJsonWebToken(token, (error, decoded) => {
    userData = {...decoded};
  });

  try {
    const authenticatedUser = await db.Users.findOne({
      where: { email: userData.email },
    });

    if (!authenticatedUser) {
      return res.status(NOT_FOUND).json({
        error: 'User not found',
      });
    }
    return res.status(OK).json({
      firstName: authenticatedUser.firstName,
      lastName: authenticatedUser.lastName,
      email: authenticatedUser.email,
      password: authenticatedUser.password,
      roleId: authenticatedUser.roleId,
    });
  } catch (err) {
    return res.status(BAD_REQUEST).json({
      error: 'User not found',
    });
  }
}

module.exports = {
  getUserData,
};
