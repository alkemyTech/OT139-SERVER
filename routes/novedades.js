const express = require('express');
const router = express.Router();
const {updated} = require('../controllers/novedadesController');


router.put('/:id', updated);