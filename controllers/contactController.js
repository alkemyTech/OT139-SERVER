const db = require('../models');

const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await db.User.findAll();
    res.status(200).json({
      ok: true,
      msg: 'Succesful request',
      result: contacts,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllContacts };
