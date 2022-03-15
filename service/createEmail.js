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

module.exports = createEmail