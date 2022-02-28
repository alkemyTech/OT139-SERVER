const usersService = require('../services/users');

const getAll = async (req, res, next) => {
  try {
    const users = await usersService.getAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll };