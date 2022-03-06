const { validationResult } = require('express-validator');
import { OK , BAD_REQUEST } from '../constants/httpCodes';
const db = require('../models');

exports.add = async (req, res) => {
    const { name, email } = req.body;
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      const errorsObj = errors.mapped();
      
      return res.status(BAD_REQUEST).json({
        ok: false,
        msg: "Error validating data",
        result: null,
        errors: errorsObj
      });
    }
  
    try {
      db.Contact.create({
          name, 
          email
      })
      .then(newContact => {
          res.status(OK).json({
              ok: true,
              msg: "Success creating new contact",
              result: newContact
          })
      })
      .catch(error => {
        res.status(BAD_REQUEST).json({
          ok: false,
          msg: "Error creating new contact",
          result: error
        })
      })

    } catch (errors) {
      return res.status(BAD_REQUEST).json({
        ok: false,
        msg: 'Error creating contact.',
        error: errors,
      })
    }
}
