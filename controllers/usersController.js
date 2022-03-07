const User = require('../models/user');
const { OK , BAD_REQUEST } = require('../constants/httpCodes');

exports.deleteUser = async (req, res) => {
  try {
    await User.destroy({ 
      where: { 
      id: req.params.id
    }});
    res.status(OK).send('Fue Dado de Baja exitosamente! Hasta Pronto!');
  } catch (errors) {
    res.status(BAD_REQUEST).send({msg:'Ocurrio un error al tratar de dar de baja al usuario'});
    console.error(errors.message);
  }
};
