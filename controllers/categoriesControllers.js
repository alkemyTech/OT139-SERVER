const db = require('../models');
const HTTP_CODES = require('../constants/httpCodes');

const deleteCategories = async (req, res) => {
  const { id } = req.params;
  try {
    await db.Categories.destroy({
      where: {
        id,
      },
    });
    res.status(HTTP_CODES.OK).json('Categoria eliminada exitosamente');
  } catch (errors) {
    res.status(HTTP_CODES.BAD_REQUEST).json({
      msg: `Error al eliminar categoria con ID: ${id}`,
      errors: errors.message,
    });
  }
};

module.exports = {
  deleteCategories,
};
