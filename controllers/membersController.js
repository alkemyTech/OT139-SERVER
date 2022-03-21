const db = require('../models');
const { OK, BAD_REQUEST, NOT_FOUND } = require('../constants/httpCodes');

async function getMembers(req, res) {
  try {
    const members = await db.Members.findAll();

    if (!members || !members?.length) {
      return res.status(NOT_FOUND).json({
        error: 'Members not found',
      });
    }

    return res.status(OK).json(members);
  } catch (err) {
    return res.status(BAD_REQUEST).json({
      error: 'Members not found',
    });
  }
}

module.exports = {
  getMembers,
};
