const express = require('express');
const router = express.Router();
const {
  updatedActivity,
  createActivity,
  getAllActivities,
} = require('../controllers/activitiesController');

router.get('/', getAllActivities);
router.post('/', createActivity);
router.put('/:id', updatedActivity);

module.exports = router;
