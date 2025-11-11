const Genre = require('../models/Genre');

// Get all genres
exports.getGenres = async (req, res) => {
  try {
    const genres = await Genre.find().sort({ createdAt: -1 });
    res.json(genres);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Add new genre (Admin only)
exports.addGenre = async (req, res) => {
  try {
    const { name, description } = req.body;

    // Check if genre already exists
    let genre = await Genre.findOne({ name });
    if (genre) {
      return res.status(400).json({ message: 'Genre already exists' });
    }

    genre = new Genre({ name, description });
    await genre.save();

    res.status(201).json({
      message: 'Genre added successfully',
      genre
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete genre (Admin only)
exports.deleteGenre = async (req, res) => {
  try {
    const genre = await Genre.findByIdAndDelete(req.params.id);
    if (!genre) {
      return res.status(404).json({ message: 'Genre not found' });
    }
    res.json({ message: 'Genre deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
