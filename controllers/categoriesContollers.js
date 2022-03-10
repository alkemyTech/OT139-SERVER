const db = require('../models');
const { OK, BAD_REQUEST } = require('../constants/httpCodes');

const getAllCategories = async (req, res) => {
  try {
    const data = await db.categories.findAll({ attributes: ['name'] });
    res.status(OK).json(data);
  } catch (error) {
    res.status(BAD_REQUEST).send('Hubo un error al traer las categorias');
    console.log(error);
  }
};
