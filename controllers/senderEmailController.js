const sgMail = require('@sendgrid/mail');
const HTTP_CODES = require('../constants/httpCodes');
const STATUS = require('../constants/constantEmailSender');

async function senderEmail(recieverEmail, emailSubject, emailText, emailHtml) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const sendStatus = STATUS.SUCCESS;
  const msg = {
    to: recieverEmail,
    from: process.env.SENDGRID_VERIFIED_SENDER,
    subject: emailSubject,
    text: emailText,
    html: emailHtml,
  };

  try {
    const response = await sgMail.send(msg);
    if (response[0].statusCode === HTTP_CODES.ACCEPTED) {
      return sendStatus;
    } else {
      const responseNotAccepted = {
        StatusCode: response[0].statusCode,
        SendStatus: STATUS.CONFLICT,
      }
      return responseNotAccepted;
    }
  } catch (error) {
    return error;
  }
}
