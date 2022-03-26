const db = require('../models');
const {
  OK,
  CREATED,
  BAD_REQUEST,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} = require('../constants/httpCodes');

async function getMembers(req, res) {
  try {
    const members = await db.Members.findAll();

    if (!members?.length) {
      return res.status(NOT_FOUND).json({
        error: 'Members not found',
      });
    }
    return res.status(OK).json(members);
  } catch (err) {
    return res.status(BAD_REQUEST).json({
      error: 'Members not found',
    });
  }
}
const deleteMember = async (req, res) => {
  try {
    await db.members.destroy({ where: { id: req.params.id } });
    res.status(OK).json({ msg: 'Miembro eliminado correctamente' });
  } catch (error) {
    res
      .status(BAD_REQUEST)
      .json({ msg: 'Ocurrio un error al intentar eliminar al miembro' });
  }
};

const createMember = async (req, res, next) => {
  const { name } = req.body;

  if (typeof name !== 'string') {
    res.status(BAD_REQUEST).send('nombre debe ser una string');
  }

  try {
    await db.Members.create({ name });
    res.status(CREATED).json({ message: 'member created' });
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

const updateMember = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const member = await db.Members.findOne({ where: { id } });
    if (!member) {
      return res.status(NOT_FOUND).json({
        error: 'Members not found',
      });
    }
    await member.update({ name });
    res.status(OK).json({ message: 'Member updated' });
  } catch (error) {
    res
      .status(BAD_REQUEST)
      .json({ msg: 'Error al actualizar Miembro ', error: error.message });
  }
};

const destroy = async (req, res) => {
  try {
    await db.members.destroy({ where: { id: req.params.id } });
    res.status(OK).send('Miembro eliminado correctamente');
  } catch (error) {
    res
      .status(BAD_REQUEST)
      .send({ msg: 'Ocurrio un error al intentar eliminar al miembro' });
    console.log(error);
  }
};

module.exports = {
  getMembers,
  createMember,
  updateMember,
  destroy,
  deleteMember,
};
