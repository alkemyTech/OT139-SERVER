const { HTTP_CODES } = require('../constants/httpCodes');
const db = require('../models');

const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await db.Contacts.findAll();
    res.status(HTTP_CODES.ACCEPTED).json({
      ok: true,
      msg: 'Succesful request',
      result: contacts,
    });
  } catch (error) {
    res
      .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
      .json({ ok: false, msg: 'internal server error', error });
    console.log(error);
  }
};

module.exports = { getAllContacts };
