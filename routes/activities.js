const express = require('express');
const router = express.Router();
const { updatedActivity } = require('../controllers/activitiesController');

router.put('/:id', updatedActivity);
