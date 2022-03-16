const { validationResult } = require('express-validator');
const { OK, BAD_REQUEST, INTERNAL_SERVER_ERROR } = require('../constants/httpCodes');
const db = require('../models');

exports.add = async (req, res) => {
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
