const db = require('../models');
const { validationResult } = require('express-validator');

const add = async (req, res) => {
    const { name, email } = req.body;
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      res.status(422).json({
        ok: false,
        msg: 'ERROR VALIDATING DATA.',
        error: errors.array(),
      })
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
    } catch (err) {
      res.status(400).json({
        ok: false,
        msg: 'ERROR CREATING NEW CONTACT.',
        error: err,
      })
    }
}

module.exports = { add };