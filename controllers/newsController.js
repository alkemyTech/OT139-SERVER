const db = require('../models');
const HTTP_CODES = require('../constants/httpCodes');

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
};
const Entries = require('../models/entries');
const HTTP_CODES = require('../constants/httpCodes');

  async function newsCreate(req, res) {

    const name = req.body.name;
    const content = req.body.content;
    const imageUrl = req.body.imageUrl;

    const fieldsComplete = name || content || imageUrl;
    if (!fieldsComplete) {
      res.status(HTTP_CODES.BAD_REQUEST).send('Falta completar alguno de los campos')
    }
    try {
    await Entries.create({ 
    name,
    content,
    imageUrl,
    categoryId: "News",
    });
    res.status(HTTP_CODES.OK).send('Se ha creado correctamente')
  } catch(error) {
      res.status(HTTP_CODES.BAD_REQUEST).send(error);
  }
};
