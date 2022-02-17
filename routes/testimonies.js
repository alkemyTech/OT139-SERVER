var express = require('express')
var router = express.Router()
const db = require('../models/index')
const Sequelize = require('sequelize')

/*GET testimony by id */
router.get('/:id/public', async (req, res, next) => {
  const testimonies = await db.Testimony.findOne({
    where: {
      id: req.params.id,
    },
  })
  if (testimonies) {
    res.json(testimonies)
  } else {
    res.status(404)
  }
})

module.exports = router
