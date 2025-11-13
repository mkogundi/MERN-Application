# MERN Teaching Modules

This branch contains a bare minimum MERN app with organized teaching modules. Start with the bare minimum and add features incrementally.

## 📚 Module Structure

### Module 1: Bare Minimum (Starting Point)
- **Frontend**: Basic Vite + React app with one page
- **Backend**: Basic Express server with one GET endpoint
- **Database**: No database yet
- **Files**:
  - `MODULES/01-bare-minimum-frontend.md` - Basic React app
  - `MODULES/01-bare-minimum-backend.md` - Basic Express server

### Module 2: Setup React Router
- Add multi-page routing
- Create Home and About pages
- **Files**:
  - `MODULES/02-react-router.md` - Router configuration
  - `MODULES/02-router-example.jsx` - Example component

### Module 3: Styling with CSS
- Basic CSS styling
- Navbar component
- Dark theme setup
- **Files**:
  - `MODULES/03-navbar-component.jsx` - Complete Navbar
  - `MODULES/03-navbar-styling.css` - Navbar styles
  - `MODULES/03-dark-theme.css` - Dark theme CSS

### Module 4: Backend API Setup
- Express routes
- JSON responses
- CORS configuration
- **Files**:
  - `MODULES/04-express-routes.md` - Route setup
  - `MODULES/04-api-example.js` - Example endpoints

### Module 5: Frontend-Backend Integration
- Axios setup
- API service layer
- Fetch data from backend
- **Files**:
  - `MODULES/05-axios-setup.md` - Axios configuration
  - `MODULES/05-api-service.js` - API service example

### Module 6: MongoDB Connection
- Mongoose setup
- Schema creation
- Basic CRUD operations
- **Files**:
  - `MODULES/06-mongodb-setup.md` - MongoDB connection
  - `MODULES/06-mongoose-schema.js` - Schema example

### Module 7: Movie Feature
- Display movies from database
- Search functionality
- Filtering by genre/year
- **Files**:
  - `MODULES/07-movie-list.jsx` - Movie display
  - `MODULES/07-movie-api.js` - Movie endpoints
  - `MODULES/07-search-debounce.md` - Search implementation

### Module 8: Authentication (Optional)
- User registration
- User login
- JWT tokens
- Protected routes
- **Files**:
  - `MODULES/08-user-model.js` - User schema
  - `MODULES/08-auth-routes.js` - Auth endpoints
  - `MODULES/08-auth-context.jsx` - Auth context

### Module 9: Admin Features (Optional)
- Add movies
- Edit movies
- Delete movies
- Admin dashboard
- **Files**:
  - `MODULES/09-admin-panel.jsx` - Admin component
  - `MODULES/09-admin-routes.js` - Admin endpoints

## 🎯 How to Use These Modules

### For Beginners:
1. Start with Module 1 (Bare minimum)
2. Follow modules sequentially
3. Copy code from `MODULES/` folder
4. Understand each concept before moving on

### For Instructors:
1. Each module is self-contained
2. Code is organized and commented
3. Use modules as teaching material
4. Students can follow along step-by-step

### Building Step-by-Step:

```bash
# Start with bare minimum
git checkout lecture_branch

# Module 1: Bare minimum running
# Test: npm run dev (both frontend and backend)

# Module 2: Add routing
# Copy from MODULES/02-react-router.md
# Test: Navigate between pages

# Module 3: Add styling
# Copy Navbar from MODULES/03-navbar-component.jsx
# Test: Navbar renders with styles

# Module 4: Add API
# Copy from MODULES/04-api-example.js
# Test: API returns data

# ... and so on
```

## 📁 File Organization

```
MERN app/
├── MODULES/                    # Teaching modules
│   ├── 01-bare-minimum-frontend.md
│   ├── 01-bare-minimum-backend.md
│   ├── 02-react-router.md
│   ├── 02-router-example.jsx
│   ├── 03-navbar-component.jsx
│   ├── 03-navbar-styling.css
│   ├── 03-dark-theme.css
│   ├── 04-express-routes.md
│   ├── 04-api-example.js
│   ├── 05-axios-setup.md
│   ├── 05-api-service.js
│   ├── 06-mongodb-setup.md
│   ├── 06-mongoose-schema.js
│   ├── 07-movie-list.jsx
│   ├── 07-movie-api.js
│   ├── 07-search-debounce.md
│   ├── 08-user-model.js
│   ├── 08-auth-routes.js
│   ├── 08-auth-context.jsx
│   ├── 09-admin-panel.jsx
│   └── 09-admin-routes.js
├── client/                     # Current working frontend
├── server/                     # Current working backend
└── TEACHING_MODULES.md         # This file
```

## ✨ Key Features of This Structure

✅ **Modular**: Each feature is a separate module
✅ **Progressive**: Start simple, add complexity
✅ **Reusable**: Copy-paste ready code
✅ **Documented**: Each module has explanations
✅ **Tested**: Each module works independently
✅ **Teaching-Focused**: Designed for learning

## 🚀 Getting Started

1. Read `MODULES/01-bare-minimum-frontend.md`
2. Read `MODULES/01-bare-minimum-backend.md`
3. Run both frontend and backend
4. Test that they work
5. Move to Module 2

---

**Ready to teach? Start with Module 1! 📖**
