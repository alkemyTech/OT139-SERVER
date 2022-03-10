const { categories } = require('../models');
const { OK, BAD_REQUEST } = require('../constants/httpCodes');

const getAllCategories = async (req, res) => {
  try {
    const name = await categories.findAll(
      {
         attributes: ['name'] 
      });
    res.status(OK).send(name);
  } catch (error) {
    res.status(BAD_REQUEST).send('Hubo un error al traer las categorias');
    console.log(error);
  }
};

module.exports = {
  getAllCategories
};
