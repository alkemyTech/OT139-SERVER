const db = require('../models');

const getAll = async (req, res,) => {
  try {
    await db.User.findAll()
    .then(users => {
      return res.status(200).json({
        ok: true,
        msg: 'Successful request',
        result: users,
      })
    })
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll };