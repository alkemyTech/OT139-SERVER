const db = require("../models/index.js");

async function getUserData(req, res, next) {
  try {
    const token = req.headers.authorization;

    // @TODO Quitar el codigo hardcodeado del userId
    // Verificar el token y obtener el id del payload
    const userId = 1;

    const authenticatedUser = await db.User.findByPk(userId);

    if (!authenticatedUser) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    return res.status(200).json(authenticatedUser);
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
    });
  }
}

module.exports = {
  getUserData,
}