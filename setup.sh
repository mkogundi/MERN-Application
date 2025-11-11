#!/bin/bash

# MERN Movie App - Setup Script for Unix/Linux/Mac

echo "==================================="
echo "MERN Movie App - Installation Setup"
echo "==================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "[ERROR] Node.js is not installed. Please install Node.js first."
    echo "Download from: https://nodejs.org/"
    exit 1
fi

echo "[OK] Node.js is installed"
node --version
echo ""

# Setup Backend
echo "[*] Setting up Backend..."
cd server
echo "[*] Installing backend dependencies..."
npm install

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "[*] Creating .env file..."
    cp .env.example .env
    echo "[INFO] .env file created. Please update it with your MongoDB URI and other settings."
fi
cd ..
echo "[OK] Backend setup complete"
echo ""

# Setup Frontend
echo "[*] Setting up Frontend..."
cd client
echo "[*] Installing frontend dependencies..."
npm install
cd ..
echo "[OK] Frontend setup complete"
echo ""

echo "==================================="
echo "Installation Complete!"
echo "==================================="
echo ""
echo "To start the application:"
echo ""
echo "Terminal 1 - Backend:"
echo "  cd server"
echo "  npm run dev"
echo ""
echo "Terminal 2 - Frontend:"
echo "  cd client"
echo "  npm run dev"
echo ""
echo "Then open http://localhost:3000 in your browser"
echo ""
