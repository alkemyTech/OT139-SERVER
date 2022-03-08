const db = require('../models');
const {
  OK,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} = require('../constants/httpCodes');

async function getUserData(req, res, next) {
  try {
    const { id } = res.locals.user;
    const authenticatedUser = await db.User.findByPk(id);

    if (!authenticatedUser) {
      return res.status(NOT_FOUND).json({
        error: 'User not found',
      });
    }

    return res.status(OK).json(authenticatedUser);
  } catch (err) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      error: 'Internal server error',
    });
  }
}

module.exports = {
  getUserData,
};
