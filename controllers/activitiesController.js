const db = require('../models');
const HTTP_CODES = require('./../constants/httpCodes');

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
};
