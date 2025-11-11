import axios from 'axios';

const API_URL = '/api';

const api = axios.create({
  baseURL: API_URL
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth services
export const authService = {
  register: (username, email, password) => 
    api.post('/auth/register', { username, email, password }),
  login: (username, password) => 
    api.post('/auth/login', { username, password }),
  getCurrentUser: () => 
    api.get('/auth/me')
};

// Movie services
export const movieService = {
  getMovies: (genre, year, page, limit) => 
    api.get('/movies', { params: { genre, year, page, limit } }),
  getMovie: (id) => 
    api.get(`/movies/${id}`),
  addMovie: (movieData) => 
    api.post('/movies', movieData),
  updateMovie: (id, movieData) => 
    api.put(`/movies/${id}`, movieData),
  deleteMovie: (id) => 
    api.delete(`/movies/${id}`)
};

// Genre services
export const genreService = {
  getGenres: () => 
    api.get('/genres'),
  addGenre: (name, description) => 
    api.post('/genres', { name, description }),
  deleteGenre: (id) => 
    api.delete(`/genres/${id}`)
};

export default api;
