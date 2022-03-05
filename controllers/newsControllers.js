const db = require('../models');
const HTTP_CODES = require('../constants/httpCodes');

const detailNewsGet = async (req, res) => {
  const { id } = req.params;

  try {
    const newsById = await db.Entries.findByPk({ id });
    res.json(newsById);
  } catch (err) {
    res
      .status(HTTP_CODES.NOT_FOUND)
      .json({ Error: `Novedad con Id ${id} no encontrada : ${err}` });
  }
};

module.exports = {
  detailNewsGet,
};
