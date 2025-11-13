# Quick Reference: MERN Teaching Modules

## 📚 Modules Overview

### Module 1: Bare Minimum (Foundation)
**Time: 30 mins**

**Frontend**: Basic React app with Vite
- Single component rendering
- Basic styling
- No routing yet

**Backend**: Basic Express server
- Two simple GET endpoints
- No database yet

**Files to Copy**:
- `MODULES/01-bare-minimum-frontend.md` - Copy App.jsx, App.css, main.jsx, index.css
- `MODULES/01-bare-minimum-backend.md` - Copy server.js, package.json

**Test**: 
- Frontend: `npm run dev` at localhost:5173
- Backend: `npm run dev` at localhost:5000

---

### Module 2: React Router (Multi-page)
**Time: 20 mins**

**What You Learn**:
- Multiple pages
- Navigation between pages
- Link component
- Routes configuration

**Dependencies**: `react-router-dom`

**Files to Copy**:
- `MODULES/02-react-router.md` - Copy Router setup, Home.jsx, About.jsx

**Test**:
- Navigate between Home and About pages
- Check that URL changes
- Verify no page reload

---

### Module 3: Navbar & Styling (UI)
**Time: 30 mins**

**What You Learn**:
- Reusable components
- CSS styling
- Dark theme implementation
- Responsive design
- Hover effects

**Files to Copy**:
- `MODULES/03-navbar-styling.md` - Copy Navbar.jsx, Navbar.css, updated App.css

**Test**:
- Navbar displays on all pages
- Links work correctly
- Hover effects visible
- Colors match dark theme

---

### Module 4: Express Routes (API)
**Time: 40 mins**

**What You Learn**:
- GET requests (fetch all, fetch one)
- POST requests (create)
- PUT requests (update)
- DELETE requests (remove)
- Query parameters
- Error handling
- HTTP status codes

**Files to Copy**:
- `MODULES/04-express-routes.md` - Copy movieRoutes.js, updated server.js

**Test with curl**:
```bash
curl http://localhost:5000/api/movies
curl http://localhost:5000/api/movies/1
curl "http://localhost:5000/api/movies?genre=Drama"
```

---

### Module 5: Frontend-Backend Integration (Connect)
**Time: 45 mins**

**What You Learn**:
- Axios setup
- API service layer
- Fetch data in React
- Display data
- Error handling
- Loading states

**Dependencies**: `axios`

**Files to Copy**:
- `MODULES/05-frontend-backend-integration.md` - Copy api.js, Movies.jsx, Movies.css

**Test**:
- Click "Browse Movies" on home page
- See movies displayed from backend
- Filter by genre works
- No CORS errors

---

## 📋 Teaching Flow Chart

```
Week 1: Fundamentals
├── Module 1: Bare Minimum (Day 1-2)
│   └── Students get basic frontend and backend running
├── Module 2: React Router (Day 2-3)
│   └── Add multi-page navigation
└── Module 3: Navbar & Styling (Day 3-4)
    └── Make UI look professional

Week 2: API & Connection
├── Module 4: Express Routes (Day 5-6)
│   └── Build REST API endpoints
└── Module 5: Frontend-Backend Integration (Day 6-7)
    └── Connect frontend to backend

Week 3: Database & Advanced (Optional)
├── Module 6: MongoDB (Day 8-9)
├── Module 7: Search & Filtering (Day 9-10)
└── Module 8: Authentication (Day 10-11)
```

## 🎯 Step-by-Step Teaching Guide

### Session 1: Setup & Bare Minimum (2 hours)

**Objectives**:
- [ ] Students have Node.js and npm installed
- [ ] Vite frontend running
- [ ] Express backend running
- [ ] Understand basic React component
- [ ] Understand basic Express server

**Activities**:
1. Show Module 1 frontend code
2. Have students copy code to their project
3. Run `npm run dev` and show in browser
4. Show Module 1 backend code
5. Have students copy code to their project
6. Run backend and test endpoints with curl

**Homework**:
- [ ] Modify App.jsx title
- [ ] Add more fields to API response

---

### Session 2: Routing & Navigation (2 hours)

**Objectives**:
- [ ] Students understand React Router
- [ ] Can create multiple pages
- [ ] Can navigate between pages
- [ ] Understand Link component

**Activities**:
1. Explain why routing is needed
2. Show Module 2 code
3. Have students add Routes to App.jsx
4. Create Home.jsx and About.jsx
5. Test navigation

**Homework**:
- [ ] Add a third page (e.g., Contact)
- [ ] Add link to Contact page in Navbar

---

### Session 3: Navbar & Styling (2 hours)

**Objectives**:
- [ ] Students can create reusable components
- [ ] Understand CSS for web design
- [ ] Know about dark/light themes
- [ ] Can style components

**Activities**:
1. Explain importance of consistent UI
2. Show Module 3 Navbar component
3. Explain dark theme colors
4. Have students copy Navbar.jsx
5. Have students copy Navbar.css
6. Customize colors together

**Homework**:
- [ ] Change brand name in Navbar
- [ ] Add a custom color scheme
- [ ] Make Navbar responsive on mobile

---

### Session 4: Express Routes (2.5 hours)

**Objectives**:
- [ ] Students understand REST API
- [ ] Can create CRUD endpoints
- [ ] Understand HTTP methods
- [ ] Can test APIs with curl/Postman

**Activities**:
1. Explain what REST API is
2. Show HTTP methods (GET, POST, PUT, DELETE)
3. Show Module 4 code
4. Have students create movieRoutes.js
5. Mount routes in server.js
6. Test each endpoint with curl

**Homework**:
- [ ] Create genreRoutes with same CRUD operations
- [ ] Test all endpoints in Postman
- [ ] Add query parameter for pagination

---

### Session 5: Integration & Data Display (3 hours)

**Objectives**:
- [ ] Connect frontend to backend
- [ ] Fetch data from API
- [ ] Display data in React
- [ ] Understand async/await
- [ ] Handle loading and error states

**Activities**:
1. Explain how frontend and backend communicate
2. Show Module 5 api.js
3. Have students create api.js
4. Create Movies.jsx component
5. Add useEffect hook
6. Display movies in grid
7. Test that data appears

**Final Project**: Movies app working end-to-end!

---

## 🔧 Troubleshooting Guide

### "Cannot GET /api/movies"
→ Backend server not running
→ Solution: Start backend with `npm run dev`

### "CORS error"
→ Frontend and backend on different ports
→ Solution: Check cors() is in server.js

### "Movies not showing"
→ API endpoint not returning data
→ Solution: Test with curl first

### "Cannot find module"
→ Dependency not installed
→ Solution: Run `npm install`

### "Port 5000 already in use"
→ Another process using port
→ Solution: Change PORT in .env or kill process

---

## 💡 Pro Teaching Tips

### 1. Start Simple
- Begin with bare minimum
- Add features one by one
- Don't overload students

### 2. Show Real Examples
- Use real movie data
- Make examples relatable
- Show practical use cases

### 3. Code Together
- Live coding in class
- Let students follow along
- Pause to explain concepts

### 4. Test Frequently
- Test after each module
- Show what works
- Debug together

### 5. Encourage Customization
- Let students change colors
- Add their own data
- Create variations

### 6. Break into Groups
- Pair programming
- Code reviews
- Peer learning

---

## 📊 Estimated Timeline

| Module | Time | Difficulty |
|--------|------|------------|
| Module 1 | 30 min | ⭐ Easy |
| Module 2 | 20 min | ⭐ Easy |
| Module 3 | 30 min | ⭐⭐ Easy-Medium |
| Module 4 | 40 min | ⭐⭐ Medium |
| Module 5 | 45 min | ⭐⭐⭐ Medium-Hard |
| **Total** | **2.5 hrs** | - |

---

## ✅ Checklist for Success

- [ ] All modules organized in MODULES/ folder
- [ ] Each module has clear code examples
- [ ] Each module has clear explanations
- [ ] Examples are tested and working
- [ ] Students can copy-paste code
- [ ] Each module builds on previous ones
- [ ] Progression from simple to complex
- [ ] Optional advanced modules available

---

## 🎓 Learning Outcomes

After completing all modules, students will:
- ✅ Understand React fundamentals
- ✅ Know how to structure a React app
- ✅ Understand Express and REST APIs
- ✅ Know how frontend and backend communicate
- ✅ Be able to build a full-stack MERN application
- ✅ Understand best practices and patterns
- ✅ Be ready for Module 6-9 (advanced topics)

---

**Ready to teach? Start with Module 1!** 📖
