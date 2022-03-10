const { BAD_REQUEST } = require('../constants/httpCodes');
const senderEmail = require ('./senderEmailController');

exports.senderEmailContact = async (req, res) => {
    const text = 'Gracias por contactarnos y querer formar parte de la SOMOS MAS';
    const subject = 'Gracias por su contacto';
    const email = req.body.email;
    const textHtml = `<strong>${text}</strong>`;
    
    try{
        await senderEmail(email , subject , text , textHtml);
    }catch(error){
            res.status(BAD_REQUEST).send({
                msg:'Error al enviar el correo'
            });
            console.log(error);
    }
}