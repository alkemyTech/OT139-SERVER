const db = require('../models');
const HTTP_CODES = require('../constants/httpCodes');

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
};
