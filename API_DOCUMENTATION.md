# MERN Movie App - API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication

### Token Format
```
Authorization: Bearer <token>
```

Tokens are obtained from login/register endpoints and should be included in the `Authorization` header for protected routes.

---

## Endpoints

### 1. Authentication Endpoints

#### Register User
```
POST /auth/register
```

**Request Body:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Success Response (201):**
```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "username": "john_doe",
    "email": "john@example.com",
    "isAdmin": false
  }
}
```

**Error Response (400):**
```json
{
  "message": "User already exists"
}
```

---

#### Login User
```
POST /auth/login
```

**Request Body:**
```json
{
  "username": "john_doe",
  "password": "securePassword123"
}
```

**Success Response (200):**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "username": "john_doe",
    "email": "john@example.com",
    "isAdmin": false
  }
}
```

**Error Response (400):**
```json
{
  "message": "Invalid credentials"
}
```

---

#### Get Current User
```
GET /auth/me
```

**Headers:**
```
Authorization: Bearer <token>
```

**Success Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "username": "john_doe",
  "email": "john@example.com",
  "isAdmin": false,
  "createdAt": "2024-01-15T10:30:00.000Z"
}
```

**Error Response (401):**
```json
{
  "message": "No token, authorization denied"
}
```

---

### 2. Movie Endpoints

#### Get All Movies
```
GET /movies?genre=<genreId>&year=<year>&page=<page>&limit=<limit>
```

**Query Parameters:**
- `genre` (optional): Genre ID to filter by
- `year` (optional): Release year to filter by
- `page` (optional, default: 1): Page number for pagination
- `limit` (optional, default: 10): Items per page

**Success Response (200):**
```json
{
  "movies": [
    {
      "_id": "507f1f77bcf86cd799439012",
      "title": "Inception",
      "description": "A mind-bending thriller...",
      "genre": {
        "_id": "507f1f77bcf86cd799439001",
        "name": "Sci-Fi"
      },
      "year": 2010,
      "director": "Christopher Nolan",
      "rating": 8.8,
      "posterUrl": "https://example.com/inception.jpg",
      "createdAt": "2024-01-15T10:30:00.000Z"
    }
  ],
  "total": 150,
  "page": 1,
  "pages": 15
}
```

**Example Requests:**
```bash
# Get all movies
curl http://localhost:5000/api/movies

# Get movies by genre with pagination
curl "http://localhost:5000/api/movies?genre=507f1f77bcf86cd799439001&page=1&limit=10"

# Get movies by year
curl "http://localhost:5000/api/movies?year=2020"

# Combined filters
curl "http://localhost:5000/api/movies?genre=507f1f77bcf86cd799439001&year=2020&page=1"
```

---

#### Get Single Movie
```
GET /movies/:id
```

**Parameters:**
- `id`: Movie ID (MongoDB ObjectId)

**Success Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439012",
  "title": "Inception",
  "description": "A mind-bending thriller...",
  "genre": {
    "_id": "507f1f77bcf86cd799439001",
    "name": "Sci-Fi"
  },
  "year": 2010,
  "director": "Christopher Nolan",
  "rating": 8.8,
  "posterUrl": "https://example.com/inception.jpg",
  "createdAt": "2024-01-15T10:30:00.000Z"
}
```

**Error Response (404):**
```json
{
  "message": "Movie not found"
}
```

---

#### Add New Movie (Admin Only)
```
POST /movies
```

**Headers:**
```
Authorization: Bearer <admin_token>
```

**Request Body:**
```json
{
  "title": "New Movie",
  "description": "Movie description here",
  "genre": "507f1f77bcf86cd799439001",
  "year": 2024,
  "director": "Director Name",
  "rating": 7.5,
  "posterUrl": "https://example.com/poster.jpg"
}
```

**Success Response (201):**
```json
{
  "message": "Movie added successfully",
  "movie": {
    "_id": "507f1f77bcf86cd799439013",
    "title": "New Movie",
    "description": "Movie description here",
    "genre": {
      "_id": "507f1f77bcf86cd799439001",
      "name": "Drama"
    },
    "year": 2024,
    "director": "Director Name",
    "rating": 7.5,
    "posterUrl": "https://example.com/poster.jpg",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**Error Response (403):**
```json
{
  "message": "Access denied. Admin privileges required."
}
```

---

#### Update Movie (Admin Only)
```
PUT /movies/:id
```

**Headers:**
```
Authorization: Bearer <admin_token>
```

**Request Body** (all fields optional):
```json
{
  "title": "Updated Title",
  "rating": 8.2
}
```

**Success Response (200):**
```json
{
  "message": "Movie updated successfully",
  "movie": {
    "_id": "507f1f77bcf86cd799439012",
    "title": "Updated Title",
    "description": "Movie description here",
    "genre": {...},
    "year": 2024,
    "director": "Director Name",
    "rating": 8.2,
    "posterUrl": "https://example.com/poster.jpg",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

---

#### Delete Movie (Admin Only)
```
DELETE /movies/:id
```

**Headers:**
```
Authorization: Bearer <admin_token>
```

**Success Response (200):**
```json
{
  "message": "Movie deleted successfully"
}
```

**Error Response (404):**
```json
{
  "message": "Movie not found"
}
```

---

### 3. Genre Endpoints

#### Get All Genres
```
GET /genres
```

**Success Response (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439001",
    "name": "Sci-Fi",
    "description": "Science Fiction movies",
    "createdAt": "2024-01-15T10:30:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439002",
    "name": "Drama",
    "description": "Drama movies",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
]
```

---

#### Add New Genre (Admin Only)
```
POST /genres
```

**Headers:**
```
Authorization: Bearer <admin_token>
```

**Request Body:**
```json
{
  "name": "Thriller",
  "description": "Thriller movies"
}
```

**Success Response (201):**
```json
{
  "message": "Genre added successfully",
  "genre": {
    "_id": "507f1f77bcf86cd799439003",
    "name": "Thriller",
    "description": "Thriller movies",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**Error Response (400):**
```json
{
  "message": "Genre already exists"
}
```

---

#### Delete Genre (Admin Only)
```
DELETE /genres/:id
```

**Headers:**
```
Authorization: Bearer <admin_token>
```

**Success Response (200):**
```json
{
  "message": "Genre deleted successfully"
}
```

**Error Response (404):**
```json
{
  "message": "Genre not found"
}
```

---

## Error Codes

| Code | Meaning |
|------|---------|
| 200 | OK - Request successful |
| 201 | Created - Resource created successfully |
| 400 | Bad Request - Invalid input data |
| 401 | Unauthorized - Missing or invalid token |
| 403 | Forbidden - Insufficient permissions (not admin) |
| 404 | Not Found - Resource not found |
| 500 | Server Error - Internal server error |

---

## Response Format

All responses follow this format:

**Success:**
```json
{
  "message": "Operation successful",
  "data": {...}
}
```

**Error:**
```json
{
  "message": "Error description"
}
```

---

## Testing with cURL

### Register a new user
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "password": "password123"
  }'
```

### Get all movies
```bash
curl http://localhost:5000/api/movies
```

### Add a movie (admin)
```bash
curl -X POST http://localhost:5000/api/movies \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Movie",
    "description": "Test description",
    "genre": "GENRE_ID",
    "year": 2024,
    "director": "Test Director",
    "rating": 8.0,
    "posterUrl": ""
  }'
```

---

## Rate Limiting

Currently, no rate limiting is implemented. This should be added for production use.

## CORS Policy

The API accepts requests from:
- http://localhost:3000 (development)
- Can be configured for production domains in `server.js`

---

**Last Updated**: January 2024
