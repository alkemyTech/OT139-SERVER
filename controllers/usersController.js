const User = require('../models/user');
import { Ok, BadRequest } from '../constants/httpCodes';

exports.deleteUser = async (req, res) => {
  try {
    await User.destroy({ 
      where: { 
      id: req.params.id
    }});
    res.status(Ok).send('Fue Dado de Baja exitosamente! Hasta Pronto!');
  } catch (errors) {
    res.status(BadRequest).send({msg:'Ocurrio un error al tratar de dar de baja al usuario'});
    console.error(errors.message);
  }
};
