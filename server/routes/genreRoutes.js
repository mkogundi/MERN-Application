const express = require('express');
const router = express.Router();
const { getGenres, addGenre, deleteGenre } = require('../controllers/genreController');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

// Get all genres
router.get('/', getGenres);

// Add genre (Admin only)
router.post('/', authMiddleware, adminMiddleware, addGenre);

// Delete genre (Admin only)
router.delete('/:id', authMiddleware, adminMiddleware, deleteGenre);

module.exports = router;
