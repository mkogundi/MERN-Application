# MERN Movie App - Troubleshooting & FAQ

## Common Issues & Solutions

### 1. npm/Node.js Not Found

**Problem:** 
```
npm : The term 'npm' is not recognized as the name of a cmdlet
```

**Solution:**
1. Verify Node.js is installed:
   ```bash
   node --version
   npm --version
   ```
2. If not installed, download from https://nodejs.org/
3. After installation, restart your terminal
4. On Windows, you may need to add Node.js to your PATH:
   - Right-click "This PC" → Properties
   - Click "Advanced system settings"
   - Click "Environment Variables"
   - Add Node.js bin folder to PATH (typically `C:\Program Files\nodejs`)

---

### 2. MongoDB Connection Error

**Problem:**
```
MongoDB connection error: connect ECONNREFUSED 127.0.0.1:27017
```

**Solutions:**

#### If using Local MongoDB:
1. Check if MongoDB is running:
   ```bash
   # Windows
   mongod
   
   # Mac
   brew services list | grep mongodb-community
   
   # Linux
   systemctl status mongod
   ```

2. Start MongoDB if not running:
   ```bash
   # Windows (if installed as service)
   net start MongoDB
   
   # Mac
   brew services start mongodb-community
   
   # Linux
   sudo systemctl start mongod
   ```

3. Verify connection string in `.env`:
   ```
   MONGODB_URI=mongodb://localhost:27017/mern-movie-app
   ```

#### If using MongoDB Atlas:
1. Get your connection string from MongoDB Atlas dashboard
2. Add it to `.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mern-movie-app?retryWrites=true&w=majority
   ```
3. Ensure whitelist includes your IP address in MongoDB Atlas
4. Check if cluster is running in MongoDB Atlas dashboard

---

### 3. Port Already in Use

**Problem:**
```
listen EADDRINUSE: address already in use :::5000
```

**Solution:**

#### Find and kill process using the port:

**Windows:**
```bash
# Find process using port 5000
netstat -ano | findstr :5000

# Kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F
```

**Mac/Linux:**
```bash
# Find and kill process
lsof -i :5000 | awk 'NR!=1 {print $2}' | xargs kill -9
```

#### Or change the port:

**Backend (.env):**
```
PORT=5001
```

**Frontend (vite.config.js):**
```javascript
server: {
  port: 3001,
  proxy: {
    '/api': {
      target: 'http://localhost:5001',
      changeOrigin: true,
    }
  }
}
```

---

### 4. CORS Errors in Browser Console

**Problem:**
```
Access to XMLHttpRequest at 'http://localhost:5000/api/...' from origin 'http://localhost:3000' 
has been blocked by CORS policy
```

**Solutions:**
1. Ensure backend is running on correct port
2. Check CORS configuration in `server/server.js`:
   ```javascript
   app.use(cors()); // Should be present
   ```
3. Verify API proxy in `client/vite.config.js`
4. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
5. Clear browser cache and cookies

---

### 5. 401 Unauthorized Error

**Problem:**
```
Error: Request failed with status code 401
```

**Causes & Solutions:**
1. **No authentication token:**
   - Ensure you're logged in
   - Check `localStorage` has `token` key
   
2. **Expired token:**
   - Logout and login again
   - Tokens expire after 24 hours by default

3. **Protecting routes that shouldn't be protected:**
   - Public routes: `GET /movies`, `GET /genres`, `/auth/register`, `/auth/login`
   - Protected routes: Everything else (add `authMiddleware`)

---

### 6. 403 Forbidden Error (Admin Routes)

**Problem:**
```
Error: Access denied. Admin privileges required.
```

**Solution:**
- Only admin users can access admin endpoints
- Your account must have `isAdmin: true` set in database
- Currently, the only admin is created via the admin credentials in `.env`
- To make another user admin, manually update MongoDB:
  ```javascript
  db.users.updateOne({username: "username"}, {$set: {isAdmin: true}})
  ```

---

### 7. Movies Not Appearing After Adding

**Problem:**
- Movie added successfully but doesn't appear in list

**Solutions:**
1. Refresh the page
2. Check browser console for errors
3. Verify genre was selected when adding movie
4. Check MongoDB to see if document was created:
   ```bash
   mongo
   > use mern-movie-app
   > db.movies.find()
   ```

---

### 8. Environment Variables Not Loading

**Problem:**
- Backend can't read environment variables

**Solutions:**
1. Ensure `.env` file exists in `server/` directory
2. Restart the backend server after creating/editing `.env`
3. Check file is named exactly `.env` (not `.env.txt` or `.env.example`)
4. Verify variables are in correct format: `KEY=VALUE`
5. No quotes needed unless value has spaces

---

### 9. Frontend Shows "Loading..." Forever

**Problem:**
- Page stuck on loading state

**Solutions:**
1. Check browser console for errors (F12)
2. Verify backend is running on http://localhost:5000
3. Check backend logs for errors
4. Verify `.env` in server directory has correct MongoDB URI
5. Try hard refresh (Ctrl+Shift+R)
6. Clear browser cache

---

### 10. Can't Login Even with Correct Credentials

**Problem:**
- Login fails with "Invalid credentials"

**Solutions:**
1. Verify username/password are correct (case-sensitive)
2. Check MongoDB to see if user exists:
   ```bash
   mongo
   > use mern-movie-app
   > db.users.find()
   ```
3. Ensure bcryptjs hashed the password correctly
4. Try registering a new account
5. Check backend logs for specific error

---

## FAQ

### Q: Do I need to be admin to browse movies?
**A:** No, browsing movies is available to all logged-in users. Only admin features (add/edit/delete movies and genres) require admin privileges.

---

### Q: How do I become an admin?
**A:** By default, no users are admin. You need to:
1. Create a user manually in MongoDB with `isAdmin: true`
2. Or login with the admin credentials from `.env` (if you're the first user)
3. Ask an existing admin to grant you admin privileges

---

### Q: Can I delete MongoDB data?
**A:** Yes. To reset the database:
```bash
mongo
> use mern-movie-app
> db.dropDatabase()
```

Then restart the backend. It will create a fresh database on next query.

---

### Q: How do I change the JWT expiration time?
**A:** Edit `server/controllers/authController.js`:
```javascript
const token = jwt.sign(
  { userId: user._id, isAdmin: user.isAdmin },
  process.env.JWT_SECRET,
  { expiresIn: '7d' }  // Change this: '24h', '7d', '30d', etc.
);
```

---

### Q: Can multiple users browse movies simultaneously?
**A:** Yes, the app supports multiple users. Each user gets their own authentication token.

---

### Q: How do I add movie poster images?
**A:** Currently, movies are added with a `posterUrl` field. You can:
1. Use external image URLs
2. Implement image upload functionality
3. Use placeholder images from services like TMDB, IMDb, or Unsplash

---

### Q: What's the maximum file size for poster images?
**A:** Currently, only URLs are stored. If implementing file upload, configure in the backend.

---

### Q: Can I deploy this app to production?
**A:** Yes, but you should:
1. Change JWT_SECRET to a strong random string
2. Use MongoDB Atlas instead of local MongoDB
3. Build the frontend: `npm run build`
4. Deploy backend to services like Heroku, AWS, DigitalOcean
5. Deploy frontend to Netlify, Vercel, or similar
6. Update API URLs for production
7. Enable HTTPS
8. Set up proper logging and monitoring

---

### Q: How do I back up my data?
**A:** 

**Local MongoDB:**
```bash
mongodump --db mern-movie-app --out ./backup
```

**MongoDB Atlas:**
- Use built-in backup features in MongoDB Atlas dashboard

---

### Q: Can I use this for learning?
**A:** Absolutely! This is a great learning project for:
- RESTful API design
- Database modeling with Mongoose
- JWT authentication
- React with Hooks and Context API
- Vite build configuration
- Component-based architecture

---

### Q: How do I add more features?
**A:** Follow this pattern:
1. Add database model in `server/models/`
2. Create controller in `server/controllers/`
3. Create route in `server/routes/`
4. Add API service in `client/src/services/api.js`
5. Create React component in `client/src/pages/` or `client/src/components/`
6. Test the feature

---

### Q: Is there a search feature?
**A:** Currently, you can filter by genre and year. To add search:
1. Add search input to Movies component
2. Update backend `getMovies` controller to handle search query
3. Use MongoDB `$regex` for text search

---

### Q: How do I modify the styling?
**A:** All CSS files are in:
- `client/src/pages/*.css` - Page-level styles
- `client/src/components/*.css` - Component styles
- `client/src/index.css` - Global styles

Edit these files to customize the appearance.

---

### Q: What if I want to use TypeScript?
**A:** You'll need to:
1. Install TypeScript dependencies
2. Configure `tsconfig.json`
3. Convert `.js/.jsx` files to `.ts/.tsx`
4. Update import paths
5. Add type definitions

This is an advanced enhancement.

---

### Q: How do I enable HTTPS?
**A:** For production:
1. Get SSL certificate (from Let's Encrypt, AWS, etc.)
2. Configure your hosting provider
3. Update CORS policy in backend
4. Update API URLs in frontend

For local development, HTTPS is not necessary.

---

## Getting Help

If you encounter issues not listed here:

1. **Check the logs:**
   - Backend logs in terminal
   - Browser console (F12)
   - MongoDB logs

2. **Verify configuration:**
   - `.env` file is correct
   - Both servers running
   - MongoDB is running

3. **Common fixes:**
   - Restart both servers
   - Clear browser cache
   - Close and reopen terminal
   - Restart MongoDB

4. **Search online:**
   - Copy the error message
   - Search on Stack Overflow
   - Check official documentation

---

**Remember:** Always check the console/logs first when debugging! 🐛

