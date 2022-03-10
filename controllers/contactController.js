const senderEmail = require ('./senderEmailController');

exports.senderEmailContact = async (req, res) => {
    const text = 'Gracias por contactarnos y querer formar parte de la SOMOS MAS';
    const subject = 'Gracias por su contacto';
    const email = req.body.email;
    const textHtml = `<strong>${text}</strong>`
    console.log(textHtml)
    
    // try{
    //     senderEmail(email , subject , text , textHtml)
    // }
}