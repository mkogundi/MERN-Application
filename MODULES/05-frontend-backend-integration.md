# Module 5: Frontend-Backend Integration

## What You'll Learn
- Setup Axios for API calls
- Create API service layer
- Fetch data from backend
- Display data in React
- Error handling

## Prerequisites
✅ Module 1: Bare Minimum Frontend
✅ Module 4: Express Routes

## Installation

```bash
cd client
npm install axios
```

## Implementation

### Step 1: Create `services/api.js`

```javascript
import axios from 'axios';

// Set base URL for all requests
const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Movie API endpoints
export const movieService = {
  // Get all movies
  getAllMovies: async (genre = null, year = null) => {
    try {
      const params = {};
      if (genre) params.genre = genre;
      if (year) params.year = year;
      
      const response = await api.get('/movies', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  },

  // Get single movie by ID
  getMovieById: async (id) => {
    try {
      const response = await api.get(`/movies/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching movie:', error);
      throw error;
    }
  },

  // Add new movie
  addMovie: async (movieData) => {
    try {
      const response = await api.post('/movies', movieData);
      return response.data;
    } catch (error) {
      console.error('Error adding movie:', error);
      throw error;
    }
  },

  // Update movie
  updateMovie: async (id, movieData) => {
    try {
      const response = await api.put(`/movies/${id}`, movieData);
      return response.data;
    } catch (error) {
      console.error('Error updating movie:', error);
      throw error;
    }
  },

  // Delete movie
  deleteMovie: async (id) => {
    try {
      const response = await api.delete(`/movies/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting movie:', error);
      throw error;
    }
  }
};

export default api;
```

### Step 2: Create `pages/Movies.jsx`

```jsx
import React, { useState, useEffect } from 'react';
import { movieService } from '../services/api';
import './Movies.css';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState('');

  // Fetch movies on component mount
  useEffect(() => {
    fetchMovies();
  }, [selectedGenre]);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await movieService.getAllMovies(
        selectedGenre || null
      );
      setMovies(result.data || []);
    } catch (err) {
      setError('Failed to fetch movies');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="container"><p>Loading movies...</p></div>;
  }

  if (error) {
    return <div className="container"><p className="error">{error}</p></div>;
  }

  return (
    <div className="container">
      <h1>Movies</h1>

      {/* Genre Filter */}
      <div className="filters">
        <select 
          value={selectedGenre} 
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="filter-select"
        >
          <option value="">All Genres</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Action">Action</option>
        </select>
      </div>

      {/* Movies Grid */}
      {movies.length > 0 ? (
        <div className="movies-grid">
          {movies.map(movie => (
            <div key={movie.id} className="movie-card">
              <h3>{movie.title}</h3>
              <p><strong>Year:</strong> {movie.year}</p>
              <p><strong>Genre:</strong> {movie.genre}</p>
              <p><strong>Director:</strong> {movie.director}</p>
              <p><strong>Rating:</strong> {movie.rating}/10</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
}
```

### Step 3: Create `pages/Movies.css`

```css
.filters {
  margin: 20px 0;
  display: flex;
  gap: 10px;
  justify-content: center;
}

.filter-select {
  padding: 10px 15px;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #1a1a1a;
  color: #e0e0e0;
  font-size: 1rem;
  cursor: pointer;
}

.filter-select:hover {
  border-color: #ff6b6b;
}

.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.movie-card {
  background-color: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.movie-card:hover {
  border-color: #ff6b6b;
  box-shadow: 0 0 15px rgba(255, 107, 107, 0.3);
  transform: translateY(-5px);
}

.movie-card h3 {
  color: #feca57;
  margin-bottom: 15px;
}

.movie-card p {
  color: #b0b0b0;
  margin: 8px 0;
  font-size: 0.95rem;
}

.movie-card strong {
  color: #e0e0e0;
}

.error {
  color: #ff6b6b;
  text-align: center;
  padding: 20px;
}

@media (max-width: 768px) {
  .movies-grid {
    grid-template-columns: 1fr;
  }
}
```

### Step 4: Update `pages/Home.jsx` to fetch data

```jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { movieService } from '../services/api';
import './Home.css';

export default function Home() {
  const [movieCount, setMovieCount] = useState(0);

  useEffect(() => {
    fetchMovieCount();
  }, []);

  const fetchMovieCount = async () => {
    try {
      const result = await movieService.getAllMovies();
      setMovieCount(result.count || 0);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div className="container">
      <h1>The Movies Hub</h1>
      <p>Welcome to our movie app!</p>
      <p>We have {movieCount} movies in our database</p>
      <Link to="/movies" className="btn">
        Browse Movies
      </Link>
    </div>
  );
}
```

### Step 5: Update `App.jsx` with Movies route

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
```

## How It Works

```
┌─────────────┐
│   Browser   │
└──────┬──────┘
       │
       │ (1) User clicks "Browse Movies"
       ▼
┌─────────────────────┐
│  React Component    │
│  (Movies.jsx)       │
└──────┬──────────────┘
       │
       │ (2) useEffect triggered
       ▼
┌─────────────────────┐
│  API Service        │
│  (api.js)           │
│  movieService...()  │
└──────┬──────────────┘
       │
       │ (3) Axios GET request
       ▼
┌─────────────────────┐
│  Backend Server     │
│  (Express)          │
│  GET /api/movies    │
└──────┬──────────────┘
       │
       │ (4) Query database
       ▼
┌─────────────────────┐
│    Database         │
│   (JSON/MongoDB)    │
└──────┬──────────────┘
       │
       │ (5) Return data
       ▼
┌─────────────────────┐
│  Browser displays   │
│  movies in grid     │
└─────────────────────┘
```

## Testing

1. Make sure backend is running:
   ```bash
   cd server
   npm run dev
   ```

2. In another terminal, start frontend:
   ```bash
   cd client
   npm run dev
   ```

3. Go to `http://localhost:5173`

4. Click "Browse Movies" button

5. You should see movies from your backend!

## Common Issues & Solutions

### CORS Error
- Make sure `cors` is installed on backend
- Check that `app.use(cors())` is in `server.js`

### Movies not loading
- Check browser console (F12) for errors
- Verify backend is running on port 5000
- Check network tab to see API response

### API not responding
- Make sure backend server is running
- Check that port 5000 is correct
- Try `http://localhost:5000/api/health` in browser

## Next Steps

- **Module 6: MongoDB** - Replace mock data with real database
- **Module 7: Search & Filter** - Add advanced filtering
- **Module 8: Authentication** - Add login/register

## Key Concepts

- **Axios**: HTTP client for making requests
- **API Service**: Centralized place for API calls
- **useEffect**: Fetch data when component mounts
- **State Management**: Store fetched data in state
- **Error Handling**: Handle API errors gracefully
- **Loading State**: Show loading indicator while fetching

---

**Congratulations! Your frontend is now connected to your backend!** 🎉
