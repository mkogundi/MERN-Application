# MERN Movie App - Deployment Guide

## Complete Deployment Steps

### Part 1: MongoDB Atlas Setup (Database)

1. **Create MongoDB Atlas Account**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up for a free account
   - Click "Create" to start a new project

2. **Create a Cluster**
   - Choose "Build a Database"
   - Select "FREE" tier
   - Choose your region (closest to your users)
   - Click "Create Cluster"

3. **Create Database User**
   - Go to "Database Access" → "Add New Database User"
   - Username: Choose a secure username (e.g., `movieapp`)
   - Password: Generate a strong password
   - Database User Privileges: "Read and write to any database"
   - Click "Add User"

4. **Configure Network Access**
   - Go to "Network Access" → "Add IP Address"
   - Click "Allow access from anywhere" (0.0.0.0/0)
   - Click "Confirm"

5. **Get Connection String**
   - Go to "Clusters" → "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password
   - Replace `myFirstDatabase` with `movieapp`
   
   **Example:**
   ```
   mongodb+srv://movieapp:your_password@cluster.mongodb.net/movieapp
   ```

---

### Part 2: Backend Deployment (Render)

1. **Prepare Backend for Production**
   - Update `server/package.json` to remove dev dependencies from deployment:
   ```json
   "engines": {
     "node": "18"
   }
   ```

2. **Create `.env` File in Server Directory**
   ```
   MONGODB_URI=mongodb+srv://movieapp:your_password@cluster.mongodb.net/movieapp
   PORT=5000
   NODE_ENV=production
   ```

3. **Create Render Account**
   - Go to https://render.com
   - Sign up with GitHub account (recommended)

4. **Deploy Backend to Render**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: `mern-movie-backend`
     - **Environment**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Region**: Choose closest to you
   - Add Environment Variables:
     - `MONGODB_URI`: Your MongoDB Atlas connection string
     - `NODE_ENV`: `production`
   - Click "Create Web Service"
   - Wait for deployment (5-10 minutes)

5. **Get Backend URL**
   - After deployment completes, copy the URL (e.g., `https://mern-movie-backend.onrender.com`)
   - This will be your `VITE_API_URL` for frontend

---

### Part 3: Frontend Deployment (Vercel)

1. **Update Frontend Configuration**
   - Create `.env.production` file in `client/` directory:
   ```
   VITE_API_URL=https://mern-movie-backend.onrender.com/api
   ```

2. **Update `client/src/services/api.js`**
   - Add API URL configuration:
   ```javascript
   const API_URL = import.meta.env.VITE_API_URL || '/api';
   ```

3. **Update `vite.config.js`** (if needed for production)
   ```javascript
   export default defineConfig({
     plugins: [react()],
     server: {
       proxy: {
         '/api': {
           target: 'http://localhost:5000',
           changeOrigin: true,
         }
       }
     }
   })
   ```

4. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub account

5. **Deploy Frontend to Vercel**
   - Click "New Project"
   - Import your GitHub repository
   - Framework: `Vite`
   - Root Directory: `client`
   - Configure:
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Add Environment Variables:
     - `VITE_API_URL`: Your Render backend URL (e.g., `https://mern-movie-backend.onrender.com/api`)
   - Click "Deploy"
   - Wait for deployment (2-5 minutes)

6. **Get Frontend URL**
   - After deployment, your frontend will be live at a Vercel URL
   - Example: `https://mern-movie-app.vercel.app`

---

### Part 4: Update Backend CORS

1. **Update `server/server.js`** to allow Vercel frontend:
   ```javascript
   app.use(cors({
     origin: ['https://your-vercel-url.vercel.app', 'http://localhost:3000'],
     credentials: true
   }));
   ```

2. **Redeploy backend on Render** after changes

---

### Part 5: Seed Database (Production)

1. **Option A: Use MongoDB Atlas Direct**
   - Use MongoDB Compass to connect to Atlas
   - Manually insert 10 movie documents

2. **Option B: Create Seed API Endpoint** (Recommended)
   - Add a temporary seed endpoint to backend
   - Call it once to populate database

---

## Deployment Checklist

### MongoDB Atlas
- ✅ Account created
- ✅ Cluster created in free tier
- ✅ Database user created
- ✅ Network access configured
- ✅ Connection string copied

### Backend (Render)
- ✅ `.env` file configured locally
- ✅ Repository pushed to GitHub
- ✅ Web Service created on Render
- ✅ Environment variables set
- ✅ Deployment successful
- ✅ Backend URL obtained

### Frontend (Vercel)
- ✅ `.env.production` created
- ✅ `api.js` updated with environment variable
- ✅ Repository synced
- ✅ Project imported to Vercel
- ✅ Build command set correctly
- ✅ Environment variable set
- ✅ Deployment successful
- ✅ Frontend URL obtained

### Integration
- ✅ Backend CORS updated with Vercel URL
- ✅ Backend redeployed
- ✅ Frontend and backend communicating
- ✅ Database populated with movies

---

## Troubleshooting

### "Connection refused" or CORS errors
- Check Render deployment logs
- Verify MongoDB connection string
- Check Vercel environment variables
- Ensure backend URL is correct in frontend

### Movies not loading
- Check browser console for API errors
- Verify database has data
- Check MongoDB connection
- Verify API endpoints work (test in Postman)

### Frontend showing old version
- Hard refresh (Ctrl+Shift+R)
- Clear browser cache
- Check Vercel deployment status

### Build failures
- Check build logs in Vercel/Render
- Verify Node version compatibility
- Check for missing dependencies
- Ensure correct root directory selected

---

## Environment Variables Summary

### Production URLs
- **Frontend**: `https://your-app.vercel.app`
- **Backend**: `https://mern-movie-backend.onrender.com`
- **Database**: `mongodb+srv://movieapp:password@cluster.mongodb.net/movieapp`

### Keep Secrets Safe
- Never commit `.env` files
- Use `.gitignore` to exclude them
- Always set sensitive data in platform UI (Vercel, Render)

---

## Next Steps After Deployment

1. **Test all features**
   - Landing page loads
   - Browse movies
   - Search functionality works
   - Filtering works

2. **Monitor performance**
   - Check Render logs for errors
   - Monitor MongoDB usage
   - Check Vercel analytics

3. **Set up auto-deploy**
   - Both Vercel and Render auto-deploy on git push
   - No manual redeploy needed

4. **Add custom domain** (optional)
   - Vercel: "Settings" → "Domains"
   - Render: Add domain in service settings

---

## Cost Breakdown

- **MongoDB Atlas**: Free tier (up to 512MB)
- **Render**: Free tier (goes to sleep after 15 min inactivity)
- **Vercel**: Free tier with auto-scaling
- **Total**: FREE for production deployment! 🎉

---

## Important Notes

⚠️ **Before deploying:**
- Test locally first: `npm run dev` (backend) + `npm run dev` (frontend)
- Verify all features work
- Double-check connection strings
- Update API URLs in environment variables

✅ **After deploying:**
- Test the live URLs
- Monitor error logs
- Keep dependencies updated
- Plan for scaling if needed

---

This deployment configuration will make your MERN app live and accessible to the public!
