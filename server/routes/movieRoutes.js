const express = require('express');
const router = express.Router();
const { getMovies, getMovie } = require('../controllers/movieController');

// Get all movies (public)
router.get('/', getMovies);

// Get single movie (public)
router.get('/:id', getMovie);

module.exports = router;
