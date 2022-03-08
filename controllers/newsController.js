const db = require('../models');
const HTTP_CODES = require('../constants/httpCodes');

async function deleteNews(req, res) {
  return res.status(200).json({
    ok: true,
  });
}

module.exports = {
  deleteNews,
};
