const sgMail = require('@sendgrid/mail');

async function senderEmail(recieverEmail) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const sendStatus = '';
  const msg = {
    to: recieverEmail,
    from: process.env.SENDGRID_VERIFIED_SENDER, // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  await sgMail
    .send(msg)
    .then((response) => {
      sendStatus = response[0].statusCode;
    })
    .catch((error) => {
      sendStatus = error.response.body.errors[0];
    });

    if (sendStatus !== 202) {
      return sendStatus;
    } else 
    {return "SUCCESS"}
}