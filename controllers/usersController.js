const User = require('../models/user');

exports.deleteUser = async (req, res) => {
  try {
    await User.destroy({ where:{ id: req.params.id }});
    res.status(200).send('Fue Dado de Baja exitosamente! Hasta Pronto!');
  } catch (error) {
    res.status(400).send('Ocurrio un error al tratar de dar de baja al usuario');
  }
};
