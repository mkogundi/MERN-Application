# Module 1: Bare Minimum Backend

## What You'll Learn
- Basic Express server
- Simple GET endpoint
- JSON responses
- No database, no authentication - just the basics

## Starting Point

### `server.js` - Bare Minimum Backend
```javascript
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Simple GET endpoint
app.get('/api/hello', (req, res) => {
  res.json({ 
    message: 'Hello from the backend!',
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
```

### `package.json` Dependencies
```json
{
  "name": "mern-movie-app-server",
  "version": "1.0.0",
  "description": "Backend for MERN Movie App",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
}
```

### `.env` - Environment Variables
```
PORT=5000
NODE_ENV=development
```

## How to Run

```bash
cd server
npm install
npm run dev
```

Your server should start at `http://localhost:5000`

## Test It

### Using curl:
```bash
curl http://localhost:5000/api/hello
curl http://localhost:5000/api/health
```

### Using Postman:
1. Open Postman
2. Create GET request to `http://localhost:5000/api/hello`
3. Click Send
4. You should see JSON response

### Using browser:
Go to `http://localhost:5000/api/hello` in your browser

You should see:
```json
{
  "message": "Hello from the backend!",
  "timestamp": "2025-11-13T12:34:56.789Z"
}
```

## What It Does

✅ Creates a basic Express server
✅ Listens on port 5000
✅ Has two GET endpoints
✅ Returns JSON responses
✅ No database, no authentication

## Next Steps

Once this works and you can call it from the frontend, move to:
- **Module 4: Express Routes** - Add more endpoints
- **Module 6: MongoDB** - Connect a database

## Key Concepts

- **Express**: Web framework for Node.js
- **CORS**: Allow cross-origin requests (frontend can call backend)
- **GET Request**: Fetch data from server
- **JSON**: Data format for API responses
- **Port**: Server listens on a specific port (5000)

---

**That's it! This is the bare minimum backend to get started.** 🚀
