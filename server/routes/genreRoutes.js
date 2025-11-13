const express = require('express');
const router = express.Router();
const { getGenres } = require('../controllers/genreController');

// Get all genres (public)
router.get('/', getGenres);

module.exports = router;
