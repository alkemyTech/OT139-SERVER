const db = require('../models');

const updatedActivity = async (req, res) => {
  const { id } = req.params;

  try {
    const activity = await db.Activity.update({ id }, req.body);
    res.json(activity);
  } catch (error) {
    res.status(404).send('Actividad no encontrada: ', error);
  }
};

module.exports = {
  updatedActivity,
};
