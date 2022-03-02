const sgMail = require('@sendgrid/mail');
const Acepted = require('../constants/httpCodes');

async function senderEmail(recieverEmail) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const sendStatus = 'Success';
  const msg = {
    to: recieverEmail,
    from: process.env.SENDGRID_VERIFIED_SENDER,
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  await sgMail
    .send(msg)
    .then((response) => {
      if(response[0].statusCode === Acepted) {
        return sendStatus;
      }
    })
    .catch((error) => {
      return error;
    });

}