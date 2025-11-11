import React, { useState, useEffect } from 'react';
import { movieService, genreService } from '../services/api';
import './Admin.css';

export const Admin = () => {
  const [activeTab, setActiveTab] = useState('movies');
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [newGenre, setNewGenre] = useState('');
  const [newGenreDesc, setNewGenreDesc] = useState('');
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    genre: '',
    year: new Date().getFullYear(),
    director: '',
    rating: 0,
    posterUrl: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchGenres();
    if (activeTab === 'movies') fetchMovies();
  }, [activeTab]);

  const fetchMovies = async () => {
    try {
      const res = await movieService.getMovies('', '', 1, 100);
      setMovies(res.data.movies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const fetchGenres = async () => {
    try {
      const res = await genreService.getGenres();
      setGenres(res.data);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  const handleAddGenre = async (e) => {
    e.preventDefault();
    try {
      await genreService.addGenre(newGenre, newGenreDesc);
      setMessage('Genre added successfully!');
      setNewGenre('');
      setNewGenreDesc('');
      fetchGenres();
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error adding genre');
    }
  };

  const handleAddMovie = async (e) => {
    e.preventDefault();
    try {
      await movieService.addMovie(newMovie);
      setMessage('Movie added successfully!');
      setNewMovie({
        title: '',
        description: '',
        genre: '',
        year: new Date().getFullYear(),
        director: '',
        rating: 0,
        posterUrl: ''
      });
      fetchMovies();
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error adding movie');
    }
  };

  const handleDeleteMovie = async (id) => {
    if (window.confirm('Are you sure?')) {
      try {
        await movieService.deleteMovie(id);
        setMessage('Movie deleted successfully!');
        fetchMovies();
        setTimeout(() => setMessage(''), 3000);
      } catch (error) {
        setMessage('Error deleting movie');
      }
    }
  };

  const handleDeleteGenre = async (id) => {
    if (window.confirm('Are you sure?')) {
      try {
        await genreService.deleteGenre(id);
        setMessage('Genre deleted successfully!');
        fetchGenres();
        setTimeout(() => setMessage(''), 3000);
      } catch (error) {
        setMessage('Error deleting genre');
      }
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      
      {message && <div className="message">{message}</div>}

      <div className="admin-tabs">
        <button
          className={activeTab === 'genres' ? 'active' : ''}
          onClick={() => setActiveTab('genres')}
        >
          Manage Genres
        </button>
        <button
          className={activeTab === 'movies' ? 'active' : ''}
          onClick={() => setActiveTab('movies')}
        >
          Manage Movies
        </button>
      </div>

      {activeTab === 'genres' && (
        <div className="admin-section">
          <h2>Add New Genre</h2>
          <form onSubmit={handleAddGenre} className="form">
            <input
              type="text"
              placeholder="Genre Name"
              value={newGenre}
              onChange={(e) => setNewGenre(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Description"
              value={newGenreDesc}
              onChange={(e) => setNewGenreDesc(e.target.value)}
            />
            <button type="submit">Add Genre</button>
          </form>

          <h3>Existing Genres</h3>
          <div className="list">
            {genres.map(genre => (
              <div key={genre._id} className="list-item">
                <div>
                  <strong>{genre.name}</strong>
                  {genre.description && <p>{genre.description}</p>}
                </div>
                <button
                  onClick={() => handleDeleteGenre(genre._id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'movies' && (
        <div className="admin-section">
          <h2>Add New Movie</h2>
          <form onSubmit={handleAddMovie} className="form">
            <input
              type="text"
              placeholder="Title"
              value={newMovie.title}
              onChange={(e) => setNewMovie({...newMovie, title: e.target.value})}
              required
            />
            <textarea
              placeholder="Description"
              value={newMovie.description}
              onChange={(e) => setNewMovie({...newMovie, description: e.target.value})}
              required
            />
            <select
              value={newMovie.genre}
              onChange={(e) => setNewMovie({...newMovie, genre: e.target.value})}
              required
            >
              <option value="">Select Genre</option>
              {genres.map(genre => (
                <option key={genre._id} value={genre._id}>{genre.name}</option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Year"
              value={newMovie.year}
              onChange={(e) => setNewMovie({...newMovie, year: parseInt(e.target.value)})}
              required
            />
            <input
              type="text"
              placeholder="Director"
              value={newMovie.director}
              onChange={(e) => setNewMovie({...newMovie, director: e.target.value})}
              required
            />
            <input
              type="number"
              placeholder="Rating (0-10)"
              value={newMovie.rating}
              onChange={(e) => setNewMovie({...newMovie, rating: parseFloat(e.target.value)})}
              min="0"
              max="10"
            />
            <input
              type="text"
              placeholder="Poster URL"
              value={newMovie.posterUrl}
              onChange={(e) => setNewMovie({...newMovie, posterUrl: e.target.value})}
            />
            <button type="submit">Add Movie</button>
          </form>

          <h3>Existing Movies</h3>
          <div className="list">
            {movies.map(movie => (
              <div key={movie._id} className="list-item">
                <div>
                  <strong>{movie.title}</strong>
                  <p>{movie.year} - {movie.genre?.name}</p>
                  <p>{movie.director}</p>
                </div>
                <button
                  onClick={() => handleDeleteMovie(movie._id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
