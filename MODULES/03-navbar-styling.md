# Module 3: Navbar Component & Styling

## What You'll Learn
- Create a reusable Navbar component
- CSS styling for navigation
- Dark theme implementation
- Responsive navigation

## Prerequisites
✅ Module 2: React Router

## Installation

No additional packages needed!

## Implementation

### Step 1: Create `components/Navbar.jsx`

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          🎬 The Movies Hub
        </Link>

        {/* Navigation Links */}
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
```

### Step 2: Create `components/Navbar.css` - Light Theme

```css
.navbar {
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
}

.navbar-logo:hover {
  color: #007bff;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0;
}

.nav-link {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: #f0f0f0;
  color: #007bff;
}
```

### Step 3: Create `components/Navbar.css` - Dark Theme

```css
/* Dark Theme Version */
.navbar {
  background-color: #1a1a1a;
  border-bottom: 1px solid #333;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #feca57;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
}

.navbar-logo:hover {
  color: #ff6b6b;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0;
}

.nav-link {
  color: #e0e0e0;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: #333;
  color: #ff6b6b;
}

.nav-link.active {
  color: #ff6b6b;
  border-bottom: 2px solid #ff6b6b;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-menu {
    gap: 1rem;
  }

  .nav-link {
    padding: 6px 10px;
    font-size: 0.9rem;
  }
}
```

### Step 4: Update `App.jsx` to include Navbar

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### Step 5: Update `App.css` for Dark Theme

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  background-color: #0a0a0a;
  color: #e0e0e0;
}

.app {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

h1 {
  text-align: center;
  color: #feca57;
  margin-bottom: 20px;
}

p {
  text-align: center;
  color: #b0b0b0;
  font-size: 16px;
  margin-bottom: 30px;
}

.btn {
  display: inline-block;
  background-color: #ff6b6b;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  cursor: pointer;
}

.btn:hover {
  background-color: #ff5252;
}
```

## Color Scheme

### Light Theme
- Background: `#ffffff`
- Text: `#333`
- Primary: `#007bff` (blue)
- Hover: `#f0f0f0`

### Dark Theme
- Background: `#0a0a0a` (almost black)
- Navbar: `#1a1a1a` (dark gray)
- Text: `#e0e0e0` (light gray)
- Primary: `#ff6b6b` (red)
- Accent: `#feca57` (yellow)

## Testing

1. Run your app: `npm run dev`
2. You should see a styled Navbar at the top
3. Click links to navigate
4. Check that hover effects work

## Features Included

✅ Logo with emoji
✅ Multiple navigation links
✅ Hover effects
✅ Responsive design
✅ Dark theme colors
✅ Smooth transitions
✅ Sticky positioning

## Customization

### Change Colors
Edit `Navbar.css`:
```css
.navbar-logo {
  color: #YOUR_COLOR; /* Change logo color */
}
```

### Add More Links
In `Navbar.jsx`:
```jsx
<li className="nav-item">
  <Link to="/movies" className="nav-link">
    Movies
  </Link>
</li>
```

### Active Link Indicator
Add this to `components/Navbar.jsx`:
```jsx
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  return (
    // ... navbar code
    <Link 
      to="/" 
      className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
    >
      Home
    </Link>
  );
}
```

## Next Steps

- **Module 4: Express Routes** - Add more backend endpoints
- **Module 5: Frontend-Backend Integration** - Connect frontend to backend
- **Module 7: Movie Feature** - Add movies to your pages

## Key Concepts

- **Component Reusability**: Navbar can be used on all pages
- **CSS Styling**: Create consistent visual design
- **Dark Theme**: Better UX for many users
- **Responsive Design**: Works on different screen sizes

---

**Your app now has a professional-looking navbar!** 🎨
