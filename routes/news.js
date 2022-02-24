const express = require('express');
const router = express.Router();
const db = require('models');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const newsById = await db.Entries.findByPk({ id: id });
    res.json(newsById);
  } catch (err) {
    res
      .status(404)
      .json({ Error: `Novedad con Id ${id} no encontrada :` + err });
  }
});

module.exports = router;
