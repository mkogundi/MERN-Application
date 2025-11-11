@echo off
REM MERN Movie App - Setup Script for Windows

echo ===================================
echo MERN Movie App - Installation Setup
echo ===================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Node.js is not installed. Please install Node.js first.
    echo Download from: https://nodejs.org/
    pause
    exit /b 1
)

echo [OK] Node.js is installed
node --version
echo.

REM Setup Backend
echo [*] Setting up Backend...
cd server
echo [*] Installing backend dependencies...
call npm install

REM Create .env file if it doesn't exist
if not exist .env (
    echo [*] Creating .env file...
    copy .env.example .env
    echo [INFO] .env file created. Please update it with your MongoDB URI and other settings.
)
cd ..
echo [OK] Backend setup complete
echo.

REM Setup Frontend
echo [*] Setting up Frontend...
cd client
echo [*] Installing frontend dependencies...
call npm install
cd ..
echo [OK] Frontend setup complete
echo.

echo ===================================
echo Installation Complete!
echo ===================================
echo.
echo To start the application:
echo.
echo Terminal 1 - Backend:
echo   cd server
echo   npm run dev
echo.
echo Terminal 2 - Frontend:
echo   cd client
echo   npm run dev
echo.
echo Then open http://localhost:3000 in your browser
echo.
pause
