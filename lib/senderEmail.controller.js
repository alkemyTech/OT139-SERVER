const sgMail = require('@sendgrid/mail');

function senderEmail(recieverEmail){
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: recieverEmail,
  from: process.env.VERIFIED_SENDER, // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

sgMail
  .send(msg)
  .then((response) => {
    console.log(response[0].statusCode)
    console.log(response[0].headers)
  })
  .catch((error) => {
    console.error(error)
  })
}
