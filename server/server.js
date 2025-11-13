const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://movie-application-manish-kogundis-projects.vercel.app',
    'https://movie-application-topaz.vercel.app'
  ],
  credentials: true
}));
app.use(express.json());

// MongoDB Connection with retry logic
let mongoConnected = false;
let connectionAttempts = 0;
const MAX_RETRIES = 5;

console.log('🔍 Attempting MongoDB connection...');
console.log('📍 MongoDB URI:', process.env.MONGODB_URI ? process.env.MONGODB_URI.substring(0, 50) + '...' : 'NOT SET');

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 10,
      retryWrites: true,
      w: 'majority',
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 10000,
      family: 4 // Use IPv4
    });
    
    mongoConnected = true;
    console.log('✅ MongoDB connected successfully on attempt', connectionAttempts + 1);
    connectionAttempts = 0; // Reset on success
  } catch (err) {
    mongoConnected = false;
    connectionAttempts++;
    console.error(`❌ MongoDB connection error (attempt ${connectionAttempts}/${MAX_RETRIES}):`, err.message);
    
    if (connectionAttempts < MAX_RETRIES) {
      console.log(`🔄 Retrying in 5 seconds...`);
      setTimeout(connectMongoDB, 5000);
    } else {
      console.error('⚠️ Max connection retries reached. Server will continue but MongoDB is unavailable.');
    }
  }
};

connectMongoDB();

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/genres', require('./routes/genreRoutes'));
app.use('/api/movies', require('./routes/movieRoutes'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Server is running', 
    environment: process.env.NODE_ENV,
    mongoConnected: mongoConnected,
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
});
