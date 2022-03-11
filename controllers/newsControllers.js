const db = require('../models');
const HTTP_CODES = require('../constants/httpCodes');

const news = async (req, res) => {
    try {
        const news = await db.Entries.findAll({
            attributes: ['name','imageUrl','createdAt'],
            where: { categoryID:"news" }
        });
        res.status(HTTP_CODES.OK).send(news);
    } catch(err) {
        res.status(HTTP_CODES.NOT_FOUND).send('try again,the server could some problem in this moment');
    };
};

const getNewsById = async (req, res) => {
  const { id } = req.params;
  try {
    const newsById = await db.Entries.findByPk({ id });
    res.json(newsById);
  } catch (err) {
    res
      .status(HTTP_CODES.NOT_FOUND)
      .json({ msg: `Novedad con Id ${id} no encontrada`, error: err.message });
  }
};

module.exports = {
  getNewsById,
  news
};
