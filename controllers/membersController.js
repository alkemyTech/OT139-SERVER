const db = require('../models');
const {
  BAD_REQUEST,
  CREATED,
  INTERNAL_SERVER_ERROR,
} = require('../constants/httpCodes');

const createMember = (req, res, next) => {
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
  createMember,
};
