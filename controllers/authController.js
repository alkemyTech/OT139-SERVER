const db = require('../models');
const { OK, BAD_REQUEST, NOT_FOUND } = require('../constants/httpCodes');
const { verifyJsonWebToken } = require('../helpers/jwt');

async function getUserData(req, res) {
  /*const userId = res.locals?.user?.id;

  if (!userId) {
    return res.status(BAD_REQUEST).json({
      error: 'User not found',
    });
  }*/
  let userData = {};
  const token = req.headers.authorization;
  const token2 = token.split(' ')[1];

  verifyJsonWebToken(token2, (error, decoded) => {
    userData = decoded;
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
