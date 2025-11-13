# Module 4: Express Routes & API Endpoints

## What You'll Learn
- Create organized Express routes
- Multiple endpoints
- Query parameters
- Error handling
- Proper HTTP methods (GET, POST, PUT, DELETE)

## Prerequisites
✅ Module 1: Bare Minimum Backend

## Project Structure

```
server/
├── server.js           # Main entry point
├── routes/
│   ├── movieRoutes.js  # Movie endpoints
│   └── genreRoutes.js  # Genre endpoints
└── data/
    └── movies.json     # Sample data
```

## Implementation

### Step 1: Create Sample Data `data/movies.json`

```json
{
  "movies": [
    {
      "id": 1,
      "title": "Inception",
      "year": 2010,
      "genre": "Sci-Fi",
      "director": "Christopher Nolan",
      "rating": 8.8
    },
    {
      "id": 2,
      "title": "The Shawshank Redemption",
      "year": 1994,
      "genre": "Drama",
      "director": "Frank Darabont",
      "rating": 9.3
    },
    {
      "id": 3,
      "title": "The Dark Knight",
      "year": 2008,
      "genre": "Action",
      "director": "Christopher Nolan",
      "rating": 9.0
    },
    {
      "id": 4,
      "title": "Pulp Fiction",
      "year": 1994,
      "genre": "Drama",
      "director": "Quentin Tarantino",
      "rating": 8.9
    },
    {
      "id": 5,
      "title": "Forrest Gump",
      "year": 1994,
      "genre": "Drama",
      "director": "Robert Zemeckis",
      "rating": 8.8
    }
  ]
}
```

### Step 2: Create `routes/movieRoutes.js`

```javascript
const express = require('express');
const router = express.Router();

// Sample movie data (in real app, this would come from database)
const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    director: "Christopher Nolan",
    rating: 8.8
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    director: "Frank Darabont",
    rating: 9.3
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    director: "Christopher Nolan",
    rating: 9.0
  }
];

// GET all movies
// URL: /api/movies
// Query: ?genre=Sci-Fi&year=2010
router.get('/', (req, res) => {
  try {
    const { genre, year } = req.query;
    
    let filtered = movies;
    
    // Filter by genre if provided
    if (genre) {
      filtered = filtered.filter(m => m.genre.toLowerCase() === genre.toLowerCase());
    }
    
    // Filter by year if provided
    if (year) {
      filtered = filtered.filter(m => m.year === parseInt(year));
    }
    
    res.json({
      success: true,
      count: filtered.length,
      data: filtered
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching movies',
      error: error.message
    });
  }
});

// GET single movie by ID
// URL: /api/movies/1
router.get('/:id', (req, res) => {
  try {
    const movieId = parseInt(req.params.id);
    const movie = movies.find(m => m.id === movieId);
    
    if (!movie) {
      return res.status(404).json({
        success: false,
        message: 'Movie not found'
      });
    }
    
    res.json({
      success: true,
      data: movie
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching movie',
      error: error.message
    });
  }
});

// POST new movie (add movie)
// URL: /api/movies
// Body: { title, year, genre, director, rating }
router.post('/', (req, res) => {
  try {
    const { title, year, genre, director, rating } = req.body;
    
    // Validation
    if (!title || !year || !genre) {
      return res.status(400).json({
        success: false,
        message: 'Please provide title, year, and genre'
      });
    }
    
    // Create new movie
    const newMovie = {
      id: movies.length + 1,
      title,
      year: parseInt(year),
      genre,
      director: director || 'Unknown',
      rating: parseFloat(rating) || 0
    };
    
    movies.push(newMovie);
    
    res.status(201).json({
      success: true,
      message: 'Movie added successfully',
      data: newMovie
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error adding movie',
      error: error.message
    });
  }
});

// PUT update movie
// URL: /api/movies/1
// Body: { title, year, genre, director, rating }
router.put('/:id', (req, res) => {
  try {
    const movieId = parseInt(req.params.id);
    const movie = movies.find(m => m.id === movieId);
    
    if (!movie) {
      return res.status(404).json({
        success: false,
        message: 'Movie not found'
      });
    }
    
    // Update fields
    if (req.body.title) movie.title = req.body.title;
    if (req.body.year) movie.year = parseInt(req.body.year);
    if (req.body.genre) movie.genre = req.body.genre;
    if (req.body.director) movie.director = req.body.director;
    if (req.body.rating) movie.rating = parseFloat(req.body.rating);
    
    res.json({
      success: true,
      message: 'Movie updated successfully',
      data: movie
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating movie',
      error: error.message
    });
  }
});

// DELETE movie
// URL: /api/movies/1
router.delete('/:id', (req, res) => {
  try {
    const movieId = parseInt(req.params.id);
    const index = movies.findIndex(m => m.id === movieId);
    
    if (index === -1) {
      return res.status(404).json({
        success: false,
        message: 'Movie not found'
      });
    }
    
    const deletedMovie = movies.splice(index, 1);
    
    res.json({
      success: true,
      message: 'Movie deleted successfully',
      data: deletedMovie[0]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting movie',
      error: error.message
    });
  }
});

module.exports = router;
```

### Step 3: Update `server.js` to Use Routes

```javascript
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const movieRoutes = require('./routes/movieRoutes');

// Mount routes
app.use('/api/movies', movieRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false,
    message: 'Route not found' 
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
```

## Testing with curl

```bash
# Get all movies
curl http://localhost:5000/api/movies

# Get movies by genre
curl "http://localhost:5000/api/movies?genre=Drama"

# Get movies by year
curl "http://localhost:5000/api/movies?year=1994"

# Get single movie
curl http://localhost:5000/api/movies/1

# Add new movie
curl -X POST http://localhost:5000/api/movies \
  -H "Content-Type: application/json" \
  -d '{"title":"Avatar","year":2009,"genre":"Sci-Fi","director":"James Cameron","rating":7.8}'

# Update movie
curl -X PUT http://localhost:5000/api/movies/1 \
  -H "Content-Type: application/json" \
  -d '{"rating":8.9}'

# Delete movie
curl -X DELETE http://localhost:5000/api/movies/1
```

## Testing with Postman

1. Open Postman
2. Create GET request: `http://localhost:5000/api/movies`
3. Click "Send" - You should get all movies
4. Try different endpoints
5. Test with different query parameters

## HTTP Methods Explained

| Method | Purpose | Example |
|--------|---------|---------|
| GET | Fetch data | Get all movies |
| POST | Create data | Add new movie |
| PUT | Update data | Update movie details |
| DELETE | Remove data | Delete movie |

## Query Parameters

```
/api/movies?genre=Sci-Fi&year=2010&page=1&limit=10
                ↓              ↓      ↓        ↓
             genre           year   page     limit
```

## Response Format

Every response should follow this pattern:
```json
{
  "success": true/false,
  "message": "Description",
  "data": {},
  "error": "Error message if any"
}
```

## Common Status Codes

- `200` - OK (request succeeded)
- `201` - Created (resource created)
- `400` - Bad Request (invalid input)
- `404` - Not Found (resource doesn't exist)
- `500` - Server Error

## Next Steps

- **Module 5: Frontend-Backend Integration** - Call these endpoints from React
- **Module 6: MongoDB** - Replace mock data with real database

## Key Concepts

- **Routes**: Define API endpoints
- **HTTP Methods**: GET, POST, PUT, DELETE
- **Query Parameters**: Filter and customize requests
- **Error Handling**: Respond appropriately to errors
- **Status Codes**: Tell client what happened

---

**Now you have a working backend API with multiple endpoints!** 📡
