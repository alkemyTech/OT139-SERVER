const db = require('../models');
const { validationResult } = require('express-validator');
const {
  OK,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  HTTP_CODES,
} = require('../constants/httpCodes');

const addContact = async (req, res) => {
  const { name, email, phone, message } = req.body;
  const errorsValidationResult = validationResult(req);

  if (!errorsValidationResult.isEmpty()) {
    return res.status(BAD_REQUEST).json({
      ok: false,
      msg: 'Error validating data',
      result: null,
      errorsMapped: errors.mapped(),
    });
  }

  try {
    const newContact = await db.Contacts.create({
      name,
      email,
      phone,
      message,
    });
    res.status(OK).json({
      ok: true,
      msg: 'Success creating new contact',
      result: newContact,
    });
  } catch (errors) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: 'Error creating contact.',
      error: errors,
    });
  }
};

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
  }
};

module.exports = { getAllContacts, addContact };
