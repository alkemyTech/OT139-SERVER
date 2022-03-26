const express = require('express');
const router = express.Router();
const {
  updatedActivity,
  getAllActivities,
} = require('../controllers/activitiesController');

router.get('/', getAllActivities);
router.put('/:id', updatedActivity);

module.exports = router;
