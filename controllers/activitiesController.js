const db = require('../models');
const HTTP_CODES = require('./../constants/httpCodes');

const getAllActivities = async (req, res) => {
  try {
    const activities = await db.Activities.findAll();
    res.status(HTTP_CODES.OK).json(activities);
  } catch (error) {
    res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).json(error);
  }
};

const createActivity = async (req, res) => {
  const { name, content } = req.body;
  if (!name || !content) {
    return res.status(HTTP_CODES.BAD_REQUEST).json({
      msg: 'Faltan datos para crear la actividad',
    });
  }
  try {
    const activity = await db.Activities.create({ name, content });
    res.status(HTTP_CODES.CREATED).json(activity);
  } catch (error) {
    res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).json(error);
  }
};

const updatedActivity = async (req, res) => {
  const { id } = req.params;
  const { name, content } = req.body;

  try {
    const activity = await db.Activities.update(
      { name, content },
      {
        where: {
          id,
        },
      }
    );
    res.json(activity);
  } catch (error) {
    res.status(HTTP_CODES.BAD_REQUEST).json({
      msg: `Actividad con ID: ${id}, no encontrada`,
      error: error.message,
    });
  }
};

module.exports = {
  updatedActivity,
  createActivity,
  getAllActivities,
};
