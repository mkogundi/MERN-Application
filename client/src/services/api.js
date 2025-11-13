import axios from 'axios';

const API_URL = '/api';

const api = axios.create({
  baseURL: API_URL
});

// Movie services
export const movieService = {
  getMovies: (genre, year, page, limit) => 
    api.get('/movies', { params: { genre, year, page, limit } }),
  getMovie: (id) => 
    api.get(`/movies/${id}`)
};

// Genre services
export const genreService = {
  getGenres: () => 
    api.get('/genres')
};

export default api;
