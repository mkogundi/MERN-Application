# MERN Movie App - Quick Start Guide

## Starting the Application

### Terminal 1 - Start Backend Server
```bash
cd server
npm install
npm run dev
```

### Terminal 2 - Start Frontend Development Server
```bash
cd client
npm install
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- API Proxy: http://localhost:3000/api

## Quick Test Credentials

You can register new users or use this admin account:
- Username: admin
- Password: admin123

## Project Structure Overview

- **server/**: Express.js backend with MongoDB
- **client/**: React frontend built with Vite
- All API endpoints are prefixed with `/api`

## Environment Variables

Backend (.env file in server/):
```
MONGODB_URI=mongodb://localhost:27017/mern-movie-app
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
NODE_ENV=development
```

## Features Implemented

✅ User Registration and Login
✅ Authentication with JWT
✅ Browse Movies with Pagination
✅ Filter Movies by Genre
✅ Filter Movies by Year
✅ Admin Dashboard
✅ Add/Delete Genres (Admin Only)
✅ Add/Update/Delete Movies (Admin Only)
✅ Logout Functionality
✅ Admin Access Control

## Next Steps

1. Make sure MongoDB is running locally
2. Update environment variables if needed
3. Install dependencies in both folders
4. Run both servers in separate terminals
5. Access the app at http://localhost:3000
