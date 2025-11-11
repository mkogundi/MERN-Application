import React, { useState, useEffect, useRef } from 'react';
import { movieService, genreService } from '../services/api';
import { useAuth } from '../context/AuthContext';
import './Movies.css';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const searchTimeoutRef = useRef(null);

  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    
    searchTimeoutRef.current = setTimeout(() => {
      fetchMovies();
    }, 300);
    
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [selectedGenre, selectedYear, page, searchQuery]);

  const fetchGenres = async () => {
    try {
      const res = await genreService.getGenres();
      setGenres(res.data);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const res = await movieService.getMovies(selectedGenre, selectedYear, page);
      let filtered = res.data.movies;
      
      // Filter by search query
      if (searchQuery.trim()) {
        filtered = filtered.filter(movie =>
          movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          movie.director.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      
      setMovies(filtered);
      setTotalPages(res.data.pages);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

  return (
    <div className="movies-container">
      <h1>Movie Catalog</h1>
      
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by movie title or director..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setPage(1);
          }}
          className="search-input"
        />
      </div>
      
      <div className="filters">
        <select value={selectedGenre} onChange={(e) => { setSelectedGenre(e.target.value); setPage(1); }}>
          <option value="">All Genres</option>
          {genres.map(genre => (
            <option key={genre._id} value={genre._id}>{genre.name}</option>
          ))}
        </select>

        <select value={selectedYear} onChange={(e) => { setSelectedYear(e.target.value); setPage(1); }}>
          <option value="">All Years</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="loading">Loading movies...</p>
      ) : (
        <>
          <div className="movies-grid">
            {movies.length > 0 ? (
              movies.map(movie => (
                <div key={movie._id} className="movie-card">
                  <div className="poster">
                    {movie.posterUrl ? (
                      <img src={movie.posterUrl} alt={movie.title} onError={(e) => e.target.src = 'https://via.placeholder.com/300x450?text=No+Poster'} />
                    ) : (
                      <div className="no-poster">No Poster</div>
                    )}
                  </div>
                  <h3>{movie.title}</h3>
                  <p className="year">{movie.year}</p>
                  <p className="genre">{movie.genre?.name}</p>
                  <p className="director">Director: {movie.director}</p>
                  <p className="rating">★ {movie.rating}/10</p>
                  <p className="description">{movie.description.substring(0, 100)}...</p>
                </div>
              ))
            ) : (
              <p className="no-movies">No movies found</p>
            )}
          </div>

          <div className="pagination">
            <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1}>
              Previous
            </button>
            <span>Page {page} of {totalPages}</span>
            <button onClick={() => setPage(Math.min(totalPages, page + 1))} disabled={page === totalPages}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};
