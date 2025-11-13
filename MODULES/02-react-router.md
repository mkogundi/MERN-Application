# Module 2: React Router - Multiple Pages

## What You'll Learn
- Setup React Router
- Create multiple pages
- Navigate between pages
- Basic routing structure

## Prerequisites
✅ Completed Module 1: Bare Minimum Frontend

## Installation

```bash
cd client
npm install react-router-dom
```

## Implementation

### Step 1: Update `App.jsx` with Router

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Main content will render here based on route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} /> {/* Catch-all for 404 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

### Step 2: Create `pages/Home.jsx`

```jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <h1>The Movies Hub</h1>
      <p>Welcome to our movie app!</p>
      <Link to="/about" className="btn">
        Learn More
      </Link>
    </div>
  );
}
```

### Step 3: Create `pages/About.jsx`

```jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="container">
      <h1>About Us</h1>
      <p>This is a MERN application for browsing movies.</p>
      <p>Built with React, Node.js, Express, and MongoDB.</p>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </div>
  );
}
```

### Step 4: Update `App.css` with Navigation Styles

```css
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
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
  color: #333;
  margin-bottom: 20px;
}

p {
  text-align: center;
  color: #666;
  font-size: 16px;
  margin-bottom: 30px;
}

.btn {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}
```

## How It Works

1. **Router**: Wraps all your routes
2. **Routes**: Container for all Route definitions
3. **Route**: Maps a path to a component
   - `path`: URL path (e.g., "/")
   - `element`: Component to render
4. **Link**: Navigate without page reload

## Navigation Flow

```
User clicks link
         ↓
React Router detects path change
         ↓
Routes component matches path
         ↓
Correct component renders
         ↓
Page updates without reload
```

## Testing

Run your app:
```bash
npm run dev
```

Test these paths:
- `http://localhost:5173/` → Shows Home page
- `http://localhost:5173/about` → Shows About page
- `http://localhost:5173/anything` → Shows Home page (catch-all)

## Common Routing Patterns

### Dynamic Routes (for later modules)
```jsx
<Route path="/movie/:id" element={<MovieDetail />} />
```

### Protected Routes (for authentication)
```jsx
<Route 
  path="/admin" 
  element={user ? <Admin /> : <Navigate to="/login" />} 
/>
```

### Nested Routes
```jsx
<Route path="/settings" element={<Settings />}>
  <Route path="profile" element={<Profile />} />
  <Route path="security" element={<Security />} />
</Route>
```

## Next Steps

Once routing works:
- **Module 3: Navbar Component** - Add persistent navigation
- **Module 5: Frontend-Backend Integration** - Fetch data from your backend

## Key Concepts

- **SPA (Single Page Application)**: Page doesn't reload on navigation
- **Client-side Routing**: JavaScript handles navigation
- **Link Component**: Better than `<a>` tags for routing
- **Routes**: Defines all possible paths in your app

---

**Now you have multiple pages! Next, add a Navbar to navigate between them.** 📖
