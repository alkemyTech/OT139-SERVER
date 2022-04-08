const express = require('express');
const router = express.Router();
const {
  updateNew,
  getNewsById,
  deleteNews,
  newsCreate,
  getAllNews,
} = require('../controllers/newsController');

router.get('/', getAllNews);
router.put('/:id', updateNew);
router.get('/:id', getNewsById);
router.delete('/:id', deleteNews);
router.post('/', newsCreate);

module.exports = router;
