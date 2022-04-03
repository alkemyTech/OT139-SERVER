const db = require('../models');
const HTTP_CODES = require('../constants/httpCodes');

const getAllNews = async (req, res) => {
  try {
    if (req.body.isTest) {
      throw new Error('Error al obtener las noticias');
    }
    const news = await db.Entries.findAll({
      attributes: ['id', 'name', 'imageUrl', 'createdAt'],
      where: { categoryID: 'news' },
    });
    if (!news) {
      return res.status(HTTP_CODES.NOT_FOUND).json({
        msg: 'No hay noticias',
      });
    }
    res.status(HTTP_CODES.OK).json(news);
  } catch (err) {
    res
      .status(HTTP_CODES.NOT_FOUND)
      .send('try again,the server could some problem in this moment');
  }
};

const updateNew = async (req, res) => {
  const { name, content, imageUrl } = req.body;
  const { id } = req.params;
  try {
    const news = await db.Entries.findOne({
      where: { id },
    });
    if (!news) {
      return res.status(HTTP_CODES.NOT_FOUND).json({
        msg: `No se encontro la noticia con ID: ${id}`,
      });
    }

    const newsUpdated = await db.Entries.update(
      {
        name,
        content,
        imageUrl,
      },
      {
        where: {
          id,
        },
      }
    );
    if (!newsUpdated) {
      return res
        .status(HTTP_CODES.NOT_FOUND)
        .send('No se pudo actualizar la noticia');
    }
    res.status(HTTP_CODES.OK).send('Datos actualizados correctamente');
  } catch (error) {
    res
      .status(HTTP_CODES.BAD_REQUEST)
      .send({ msg: 'Ocurrio un error al actualizar los datos' });
  }
};

const getNewsById = async (req, res) => {
  const { id } = req.params;

  try {
    const newsById = await db.Entries.findByPk(id);
    if (!newsById) {
      return res.status(HTTP_CODES.NOT_FOUND).json({
        msg: 'News con Id: ' + id + ' no encontrado',
        error: 'News not found',
      });
    }
    res.json(newsById);
  } catch (err) {
    res
      .status(HTTP_CODES.NOT_FOUND)
      .json({ msg: `Error al buscar por ID`, error: err.message });
  }
};

async function deleteNews(req, res) {
  const { id } = req.params;

  if (Number(id) < 0 || isNaN(id)) {
    return res.status(HTTP_CODES.BAD_REQUEST).json({
      error: 'Invalid news id',
    });
  }

  try {
    const existsNews = await db.Entries.findOne({ where: { id } });
    if (!existsNews) {
      return res.status(HTTP_CODES.NOT_FOUND).json({
        error: 'News not found',
      });
    }

    const deleted = await db.Entries.destroy({ where: { id } });
    if (!deleted) {
      return res.status(HTTP_CODES.BAD_REQUEST).json({
        error: 'News not deleted',
      });
    }

    return res.status(HTTP_CODES.OK).json({
      ok: true,
    });
  } catch (err) {
    return res.status(HTTP_CODES.BAD_REQUEST).json({
      error: 'News not deleted',
    });
  }
}
async function newsCreate(req, res) {
  const { name, content, imageUrl } = req.body;

  if (!name || !content || !imageUrl) {
    return res
      .status(HTTP_CODES.BAD_REQUEST)
      .send('Falta completar alguno de los campos');
  }

  try {
    await db.Entries.create({
      name,
      content,
      imageUrl,
      categoryId: 'News',
    });
    res.status(HTTP_CODES.OK).send('Se ha creado correctamente');
  } catch (error) {
    res
      .status(HTTP_CODES.BAD_REQUEST)
      .send({ error, msg: 'Error al crear la noticia' });
  }
}

module.exports = {
  getNewsById,
  deleteNews,
  getAllNews,
  updateNew,
  newsCreate,
};
