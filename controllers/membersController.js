const db = require('../models');
const {
  OK,
  CREATED,
  BAD_REQUEST,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} = require('../constants/httpCodes');

async function getMembers(req, res) {
  try {
    const members = await db.Members.findAll();

    if (!members?.length) {
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

const createMember = async (req, res, next) => {
  const { name } = req.body;

  if (typeof name !== 'string') {
    res.status(BAD_REQUEST).send('nombre debe ser una string');
  }

  try {
    await db.Members.create({ name });
    res.status(CREATED).json({ message: 'member created' });
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

module.exports = {
  getMembers,
  createMember,
};