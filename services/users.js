const usersRepository = require('../repositories/users');

const getAll = async () => {
    const users = await usersRepository.getAll();
    return users;
};

module.exports = { getAll };