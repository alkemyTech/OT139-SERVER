const db = require('../models');

const getAll = async () => {
  const response = await db.User.findAll();
  return response;
};

module.exports = { getAll };