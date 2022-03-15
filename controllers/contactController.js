const { BAD_REQUEST, OK } = require('../constants/httpCodes');
const senderEmail = require('./senderEmailController');
const createEmail = require('../service/createEmail');

exports.senderEmailContact = async (req, res) => {
  const {email , text , subject , textHtml} = createEmail(req.body.email);
 
  try {
      const response = await senderEmail(email , subject , text , textHtml);
      res.status(OK).send({
          status: response,
          msg:'Correo enviado',
      });
  } catch(error) {
          res.status(BAD_REQUEST).send({
              msg:'Error al enviar el correo'
          });
  }
};
