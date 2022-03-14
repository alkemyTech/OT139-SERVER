const { OK, BAD_REQUEST } = require('../constants/httpCodes');
const db = require('../models');
const HTTP_CODES = require('../constants/httpCodes');

const update = async (req, res) => {
    try {
        await db.Entries.update({
            name: req.body.name,
            content: req.body.content,
            imageUrl: req.file.filename,
            categoryId: req.body.categoryId,
            type: req.body.type
        }, {
            where: {
                id: req.params.id
            }
        })
        res.status(OK).send("Datos actualizados correctamente")
    } catch (error) {
        res.status(BAD_REQUEST).send({ msg: "Ocurrio un error al actualizar los datos" })
        console.log(error)
    }
}

const getNewsById = async (req, res) => {
  const { id } = req.params;

  try {
    const newsById = await db.Entries.findByPk(id);
    res.json(newsById);
  } catch (err) {
    res
      .status(HTTP_CODES.NOT_FOUND)
      .json({ msg: `Novedad con Id ${id} no encontrada`, error: err.message });
  }
};

async function deleteNews(req, res) {
  const { id } = req.params;

  if (Number(id) < 0 || isNaN(id)) {
    return res.status(HTTP_CODES.BAD_REQUEST).json({
      error: 'Invalid news id',
    });
  }

  try {
    const existsNews = await db.Entries.findOne({ where: { id } });
    if (!existsNews) {
      return res.status(HTTP_CODES.NOT_FOUND).json({
        error: 'News not found',
      });
    }

    const deleted = await db.Entries.destroy({ where: { id } });
    if (!deleted) {
      return res.status(HTTP_CODES.BAD_REQUEST).json({
        error: 'News not deleted',
      });
    }

    return res.status(HTTP_CODES.OK).json({
      ok: true,
    });
  } catch (err) {
    return res.status(HTTP_CODES.BAD_REQUEST).json({
      error: 'News not deleted',
    });
  }
}

module.exports = {
  getNewsById,
  deleteNews,
  update
};
