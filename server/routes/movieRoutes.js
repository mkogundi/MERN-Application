const express = require('express');
const router = express.Router();
const { getMovies, getMovie, addMovie, updateMovie, deleteMovie } = require('../controllers/movieController');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

// Get all movies (public)
router.get('/', getMovies);

// Get single movie (public)
router.get('/:id', getMovie);

// Add movie (Admin only)
router.post('/', authMiddleware, adminMiddleware, addMovie);

// Update movie (Admin only)
router.put('/:id', authMiddleware, adminMiddleware, updateMovie);

// Delete movie (Admin only)
router.delete('/:id', authMiddleware, adminMiddleware, deleteMovie);

module.exports = router;
