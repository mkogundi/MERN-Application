# MERN Movie App - Complete Installation Guide

## Prerequisites

Before starting, ensure you have the following installed on your system:

### 1. **Node.js and npm**
- Download and install from: https://nodejs.org/
- This project requires Node.js v14 or higher
- Verify installation:
  ```bash
  node --version
  npm --version
  ```

### 2. **MongoDB**
- Option A: Local MongoDB installation
  - Download from: https://www.mongodb.com/try/download/community
  - Start MongoDB service/daemon
  
- Option B: MongoDB Atlas (Cloud)
  - Sign up at: https://www.mongodb.com/cloud/atlas
  - Create a cluster and get your connection string

### 3. **Git** (Optional, but recommended)
- Download from: https://git-scm.com/

## Installation Steps

### Step 1: Navigate to Project Root
```bash
cd "c:\Users\Admin\Documents\Sideprojects\MERN app"
```

### Step 2: Install Backend Dependencies
```bash
cd server
npm install
```

### Step 3: Configure Backend Environment
1. Copy the example environment file:
   ```bash
   copy .env.example .env
   ```

2. Edit the `.env` file with your settings:
   ```
   MONGODB_URI=mongodb://localhost:27017/mern-movie-app
   JWT_SECRET=your_secure_random_string_here
   PORT=5000
   NODE_ENV=development
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=admin123
   ```

### Step 4: Install Frontend Dependencies
```bash
cd ../client
npm install
```

## Running the Application

### Terminal 1 - Start Backend Server
```bash
cd server
npm run dev
```

Expected output:
```
Server is running on port 5000
MongoDB connected
```

### Terminal 2 - Start Frontend Development Server
```bash
cd client
npm run dev
```

Expected output:
```
VITE v4.2.0  ready in XXX ms

➜  Local:   http://localhost:3000/
```

## Accessing the Application

1. Open your browser and navigate to: **http://localhost:3000**
2. You'll be redirected to the login page
3. Either register a new account or use test credentials

## Test Credentials

### Admin User
- Username: `admin`
- Password: `admin123`
- This account has access to the Admin Panel

### Creating New User Account
- Click on "Register here" link from the login page
- Fill in username, email, and password
- Account created with regular user privileges

## MongoDB Setup

### Local MongoDB (Recommended for Development)

1. **Windows**: Install MongoDB Community Edition
2. **Mac**: `brew install mongodb-community`
3. **Linux**: Follow official MongoDB documentation

Start MongoDB:
```bash
# Windows (if installed as service)
mongod

# Mac/Linux
brew services start mongodb-community
# or
mongod --dbpath /path/to/data
```

### MongoDB Atlas (Cloud)

1. Create an account at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get your connection string (looks like):
   ```
   mongodb+srv://username:password@cluster.mongodb.net/mern-movie-app?retryWrites=true&w=majority
   ```
4. Update `MONGODB_URI` in your `.env` file

## Troubleshooting

### npm/node not found
- Make sure Node.js is installed
- Restart your terminal after installation
- On Windows, add Node.js to your PATH environment variable

### MongoDB connection error
- Ensure MongoDB is running
- Check your MONGODB_URI in .env
- Verify network connectivity if using MongoDB Atlas

### Port already in use
- Default ports are 3000 (frontend) and 5000 (backend)
- If ports are in use, modify in:
  - Backend: `server/server.js`
  - Frontend: `client/vite.config.js`

### CORS errors
- Ensure backend is running on http://localhost:5000
- Check CORS configuration in `server/server.js`

## Project File Structure

```
MERN app/
├── .github/
│   └── copilot-instructions.md
├── server/
│   ├── models/              (MongoDB schemas)
│   ├── controllers/         (Business logic)
│   ├── routes/              (API endpoints)
│   ├── middleware/          (Auth middleware)
│   ├── server.js            (Main server file)
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
├── client/
│   ├── src/
│   │   ├── pages/          (Page components)
│   │   ├── components/     (UI components)
│   │   ├── context/        (React Context)
│   │   ├── services/       (API calls)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── .gitignore
├── README.md
├── QUICK_START.md
├── setup.bat               (Windows setup script)
├── setup.sh                (Unix/Linux/Mac setup script)
└── .gitignore
```

## API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user
- `GET /auth/me` - Get current user (requires JWT)

### Movie Endpoints
- `GET /movies` - Get all movies (with filters)
- `GET /movies/:id` - Get single movie
- `POST /movies` - Add movie (admin only)
- `PUT /movies/:id` - Update movie (admin only)
- `DELETE /movies/:id` - Delete movie (admin only)

### Genre Endpoints
- `GET /genres` - Get all genres
- `POST /genres` - Add genre (admin only)
- `DELETE /genres/:id` - Delete genre (admin only)

## Features Checklist

- ✅ User Registration and Login
- ✅ JWT Authentication
- ✅ Browse Movies with Pagination
- ✅ Filter by Genre
- ✅ Filter by Year
- ✅ Admin Dashboard
- ✅ Manage Genres (Add/Delete)
- ✅ Manage Movies (Add/Update/Delete)
- ✅ Responsive UI
- ✅ Admin Access Control

## Development Notes

### Backend Technology Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: bcryptjs
- **CORS**: cors package

### Frontend Technology Stack
- **Library**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Styling**: CSS3

## Building for Production

### Backend Production Build
```bash
cd server
npm install --production
NODE_ENV=production npm start
```

### Frontend Production Build
```bash
cd client
npm run build
npm run preview
```

The built frontend will be in the `dist` folder.

## Support & Documentation

- React Documentation: https://react.dev
- Express Documentation: https://expressjs.com
- MongoDB Documentation: https://docs.mongodb.com
- Vite Documentation: https://vitejs.dev

## License

MIT License - Feel free to use this project for learning and development.

---

**Happy Coding! 🚀**
