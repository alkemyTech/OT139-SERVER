const db = require('../models');
const { OK, BAD_REQUEST, NOT_FOUND } = require('../constants/httpCodes');

async function deleteNews(req, res) {
  const { id } = req.params;

  if (Number(id) < 0 || isNaN(id)) {
    return res.status(BAD_REQUEST).json({
      error: 'Invalid news id',
    });
  }

  try {
    const existsNews = await db.Entries.findOne({ where: { id } });
    if (!existsNews) {
      return res.status(NOT_FOUND).json({
        error: 'News not found',
      });
    }

    const deleted = await db.Entries.destroy({ where: { id } });
    if (!deleted) {
      return res.status(BAD_REQUEST).json({
        error: 'News not deleted',
      });
    }

    return res.status(OK).json({
      ok: true,
    });
  } catch (err) {
    return res.status(BAD_REQUEST).json({
      error: 'News not deleted',
    });
  }
}

module.exports = {
  deleteNews,
};
