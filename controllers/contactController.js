const { BAD_REQUEST, OK } = require('../constants/httpCodes');
const  senderEmail = require ('./senderEmailController');

exports.senderEmailContact = async (req, res) => {
    const text = 'Gracias por contactarnos y querer formar parte de la ONG SOMOS MAS';
    const subject = 'Gracias por su contacto';
    const email = req.body.email;
    const textHtml = `<div><strong>${text}</strong></div>
                      <div><img src='https://ibb.co/vdnxBzY' alt='logo ong'/>
                      <h3>ONG SOMOS MAS</h3>
                      </div>`;

    try{
        await senderEmail(email , subject , text , textHtml);
        res.status(OK).send({
            msg:'Correo enviado'
        });
    }catch(error){
            res.status(BAD_REQUEST).send({
                msg:'Error al enviar el correo'
            });
            console.log(error);
    }
}