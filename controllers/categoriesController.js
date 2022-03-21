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

    const updated = await db.Categories.update({
        ...category,
        updatedAt: Date.now(),
    },{ where: { id } });

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

module.exports = {
  updateCategories,
};
