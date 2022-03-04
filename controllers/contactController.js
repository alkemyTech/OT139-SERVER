const db = require('../models');
const { validationResult } = require('express-validator');

const add = async (req, res) => {
    const { name, email } = req.body;
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      const errorsObj = errors.mapped();
      
      return res.status(422).json({
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
          res.status(201).json({
              ok: true,
              msg: "Success creating new contact",
              result: newContact
          })
      })

    } catch (errors) {
      return res.status(400).json({
        ok: false,
        msg: 'Error creating contact.',
        error: errors,
      })
    }
}

module.exports = { add };