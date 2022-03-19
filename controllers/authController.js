const db = require('../models');
const { OK, BAD_REQUEST, NOT_FOUND } = require('../constants/httpCodes');

async function getUserData(req, res) {
  const userId = res.locals?.user?.id;

  if (!userId) {
    return res.status(BAD_REQUEST).json({
      error: 'User not found',
    });
  }

  try {
    const authenticatedUser = await db.Users.findByPk(userId);

    if (!authenticatedUser) {
      return res.status(NOT_FOUND).json({
        error: 'User not found',
      });
    }

    return res.status(OK).json(authenticatedUser);
  } catch (err) {
    return res.status(BAD_REQUEST).json({
      error: 'User not found',
    });
  }
}

module.exports = {
  getUserData,
};
