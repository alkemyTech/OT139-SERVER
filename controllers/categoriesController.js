const db = require('../models');
const { OK, BAD_REQUEST, NOT_FOUND } = require('../constants/httpCodes');

async function updateCategories(req, res) {
  const { id } = req.params;
  const category = req.body;

  try {
    if (Number(id) < 0 || isNaN(id)) {
      return res.status(BAD_REQUEST).json({
        error: 'Invalid category id',
      });
    }

    const existsCategory = await db.Categories.findByPk(id);

    if (!existsCategory) {
      return res.status(NOT_FOUND).json({
        error: 'Category not found',
      });
    }

    const updated = await db.Categories.update(
      {
        ...category,
        updatedAt: Date.now(),
      },
      { where: { id } }
    );

    if (!updated) {
      return res.status(BAD_REQUEST).json({
        error: 'Category not updated',
      });
    }

    return res.status(OK).json({
      ok: true,
    });
  } catch (err) {
    return res.status(BAD_REQUEST).json({
      error: 'Category not updated',
    });
  }
}

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

async function createCategories(req, res) {
  const name = req.body.name;
  const description = req.body.description;

  const nameIsString = isNaN(name);
  if (!nameIsString) {
    res.status(BAD_REQUEST).json({
      error: 'el nombre de la categoría no puede ser numerico',
    });
  }
  try {
    await db.Categories.create({
      name,
      description,
    });
    res.status(OK).json({ ok: true });
  } catch (error) {
    res.status(BAD_REQUEST).json(error);
  }
}

module.exports = {
  deleteCategories,
  updateCategories,
  createCategories,
};
