const db = require('../models');
const HTTP_CODES = require('./../constants/httpCodes');

const updatedActivity = async (req, res) => {
  const { id } = req.params;

  try {
    const activity = await db.Activity.update({ id }, req.body);
    res.json(activity);
  } catch (error) {
    res
      .status(HTTP_CODES.NOT_FOUND)
      .json({
        Msg: `Actividad con ID: ${id}, no encontrada`,
        Error: error.message,
      });
  }
};

module.exports = {
  updatedActivity,
};
