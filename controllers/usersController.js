const db = require('../models');
const { OK, BAD_REQUEST } = require('../constants/httpCodes');

exports.getAll = async (req, res, next) => {
  try {
    db.User.findAll()
      .then(users => {
        return res.status(OK).json({
          results: users
        })
      })
  } catch (error) {
    res
      .status(BAD_REQUEST)
      .send({ msg: 'Ocurrio un error al traer a los usuarios' });
  }
}

exports.deleteUser = async (req, res) => {
  try {
    await db.User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(OK).send('Fue Dado de Baja exitosamente! Hasta Pronto!');
  } catch (errors) {
    res
      .status(BAD_REQUEST)
      .send({ msg: 'Ocurrio un error al tratar de dar de baja al usuario' });
    console.error(errors.message);
  }
};
