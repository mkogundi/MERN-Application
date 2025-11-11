# MERN Movie App

A full-stack MERN (MongoDB, Express, React, Node.js) application for browsing and managing movies.

## Features

### User Features
- **Authentication**: Register and login functionality
- **Browse Movies**: View all movies in the catalog
- **Filter Movies**: Filter by genre or year of release
- **Pagination**: Browse through movies with pagination
- **Responsive Design**: Mobile-friendly interface

### Admin Features
- **Manage Genres**: Add and delete movie genres
- **Manage Movies**: Add, update, and delete movies
- **Admin Access Control**: Only users with admin privileges can access admin features

## Project Structure

```
MERN app/
├── server/                 # Backend (Node.js + Express)
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware (auth)
│   ├── server.js          # Main server file
│   └── package.json
│
└── client/                 # Frontend (React + Vite)
    ├── src/
    │   ├── pages/         # Page components
    │   ├── components/     # Reusable components
    │   ├── context/        # React context (Auth)
    │   ├── services/       # API services
    │   ├── App.jsx        # Main app component
    │   ├── main.jsx       # React entry point
    │   └── index.css      # Global styles
    ├── index.html         # HTML template
    ├── vite.config.js     # Vite configuration
    └── package.json
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Update `.env` with your MongoDB URI and JWT secret:
   ```
   MONGODB_URI=mongodb://localhost:27017/mern-movie-app
   JWT_SECRET=your_secret_key_here
   PORT=5000
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=admin123
   ```

5. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The client will be available at `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (requires token)

### Movies
- `GET /api/movies` - Get all movies (supports filters: genre, year, page, limit)
- `GET /api/movies/:id` - Get movie details
- `POST /api/movies` - Add new movie (admin only)
- `PUT /api/movies/:id` - Update movie (admin only)
- `DELETE /api/movies/:id` - Delete movie (admin only)

### Genres
- `GET /api/genres` - Get all genres
- `POST /api/genres` - Add new genre (admin only)
- `DELETE /api/genres/:id` - Delete genre (admin only)

## Usage

### For Regular Users
1. Register a new account or login with existing credentials
2. Browse the movie catalog
3. Use filters to search by genre or year
4. View movie details and ratings

### For Admin Users
1. Login with admin credentials
2. Navigate to Admin Panel
3. Manage genres (add/delete)
4. Manage movies (add/update/delete)

## Database Schema

### User
```javascript
{
  username: String (required, unique),
  email: String (required, unique),
  password: String (required, hashed),
  isAdmin: Boolean (default: false),
  createdAt: Date
}
```

### Genre
```javascript
{
  name: String (required, unique),
  description: String,
  createdAt: Date
}
```

### Movie
```javascript
{
  title: String (required),
  description: String (required),
  genre: ObjectId (reference to Genre),
  year: Number (required),
  director: String (required),
  rating: Number (0-10),
  posterUrl: String,
  createdAt: Date
}
```

## Technologies Used

### Backend
- **Node.js**: JavaScript runtime
- **Express**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB ODM
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT authentication
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variable management

### Frontend
- **React 18**: UI library
- **Vite**: Build tool
- **React Router**: Client-side routing
- **Axios**: HTTP client
- **CSS3**: Styling

## Security Features

- Password hashing with bcryptjs
- JWT-based authentication
- Protected routes and admin endpoints
- Environment variable management
- CORS configuration

## Future Enhancements

- User ratings and reviews
- Watchlist functionality
- Advanced search and sorting
- User profile management
- Movie recommendations
- Image upload for movie posters
- Pagination improvements
- Dark mode support

## License

MIT

## Support

For issues or questions, please contact the development team.
