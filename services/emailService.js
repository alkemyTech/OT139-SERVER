const sgMail = require('@sendgrid/mail');
const { OK, BAD_REQUEST, ACCEPTED } = require('../constants/httpCodes');
const STATUS = require('../constants/constantEmailSender');

const createEmail = (email) => {
  const dataEmail = {
    email: email,
    text: 'Gracias por contactarnos y querer formar parte de la ONG SOMOS MAS',
    subject: 'Gracias por su contacto',
  };
  const createTextHtml = `<div><strong>${dataEmail.text}</strong></div>
                        <div><img src='https://ibb.co/vdnxBzY' alt='logo ong'/>
                        <h3>ONG SOMOS MAS</h3>
                        </div>`;

  dataEmail.textHtml = createTextHtml;

  return dataEmail;
};

const senderEmailContact = async (emailContact) => {
  const { email, text, subject, textHtml } = createEmail(emailContact);

  try {
    const response = await senderEmail(email, subject, text, textHtml);

    return {
      status: response,
      msg: 'Correo enviado!',
    };
  } catch (error) {
    return {
      status: response,
      msg: 'Error al enviar el correo',
    };
  }
};

async function senderEmail(recieverEmail, emailSubject, emailText, emailHtml) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const sendStatus = STATUS.SUCCESS;
  const sendStatusError = STATUS.CONFLICT;
  const msg = {
    to: recieverEmail,
    from: process.env.SENDGRID_VERIFIED_SENDER,
    subject: emailSubject,
    text: emailText,
    html: emailHtml,
  };

  try {
    const response = await sgMail.send(msg);
    if (response[0].statusCode === ACCEPTED) {
      return sendStatus;
    }
  } catch (error) {
    return sendStatusError;
  }
}

module.exports = { senderEmailContact };
