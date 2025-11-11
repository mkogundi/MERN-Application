const Movie = require('../models/Movie');

// Get all movies with filtering
exports.getMovies = async (req, res) => {
  try {
    const { genre, year, page = 1, limit = 10 } = req.query;
    let filter = {};

    if (genre) {
      filter.genre = genre;
    }

    if (year) {
      filter.year = parseInt(year);
    }

    const skip = (page - 1) * limit;
    const movies = await Movie.find(filter)
      .populate('genre')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Movie.countDocuments(filter);

    res.json({
      movies,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit)
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get single movie
exports.getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).populate('genre');
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Add new movie (Admin only)
exports.addMovie = async (req, res) => {
  try {
    const { title, description, genre, year, director, rating, posterUrl } = req.body;

    const movie = new Movie({
      title,
      description,
      genre,
      year,
      director,
      rating,
      posterUrl
    });

    await movie.save();
    await movie.populate('genre');

    res.status(201).json({
      message: 'Movie added successfully',
      movie
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update movie (Admin only)
exports.updateMovie = async (req, res) => {
  try {
    let movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    const { title, description, genre, year, director, rating, posterUrl } = req.body;

    if (title) movie.title = title;
    if (description) movie.description = description;
    if (genre) movie.genre = genre;
    if (year) movie.year = year;
    if (director) movie.director = director;
    if (rating) movie.rating = rating;
    if (posterUrl) movie.posterUrl = posterUrl;

    await movie.save();
    await movie.populate('genre');

    res.json({
      message: 'Movie updated successfully',
      movie
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete movie (Admin only)
exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json({ message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
