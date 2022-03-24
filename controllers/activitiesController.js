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

const updatedActivity = async (req, res) => {
  const { id } = req.params;

  try {
    const activity = await db.Activity.update({ id }, req.body);
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
  getAllActivities,
};
