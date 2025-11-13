# Module 1: Bare Minimum Frontend

## What You'll Learn
- Basic React app structure
- Vite setup
- Simple component rendering
- No styling, no routing - just the basics

## Starting Point

### `App.jsx` - Bare Minimum
```jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>The Movies Hub</h1>
      <p>Welcome to our movie app!</p>
    </div>
  );
}

export default App;
```

### `App.css` - Basic Styling
```css
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
}

p {
  text-align: center;
  color: #666;
}
```

### `main.jsx` - Entry Point
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### `index.css` - Global Styles
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#root {
  width: 100%;
  margin: 0;
  padding: 0;
}
```

### `package.json` Dependencies
```json
{
  "name": "mern-movie-app-client",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "vite": "^5.0.0"
  }
}
```

## How to Run

```bash
cd client
npm install
npm run dev
```

Your app should open at `http://localhost:5173`

## What It Does

✅ Renders a simple page with title and welcome message
✅ Basic CSS styling
✅ No complexity - just the basics

## Next Steps

Once this works, move to **Module 2: React Router** to add multiple pages!

## Key Concepts

- **JSX**: Write HTML-like syntax in JavaScript
- **Components**: Reusable pieces of UI
- **Vite**: Fast build tool for React
- **CSS**: Style your components

---

**That's it! This is the bare minimum to get a React app running.** 🚀
