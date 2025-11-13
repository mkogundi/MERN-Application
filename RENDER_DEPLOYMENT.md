# Deploy Backend to Render - Step by Step

## Step 1: Prepare Your Code

### 1.1 Ensure `.env` is in `.gitignore`
Check that your `server/.env` file is NOT committed to GitHub (sensitive data):

```bash
# Verify .gitignore in server folder contains:
node_modules/
.env
.env.local
.DS_Store
```

### 1.2 Verify `package.json` has correct start script

Your `server/package.json` should have:
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js",
  "seed": "node seeds/seedMovies.js",
  "seed:images": "node seeds/seedMoviesWithImages.js"
}
```

### 1.3 Push code to GitHub

```bash
git add .
git commit -m "Ready for Render deployment"
git push origin master
```

---

## Step 2: Create Render Account

1. Go to https://render.com
2. Click "Sign Up"
3. **Sign up with GitHub** (recommended - easier integration)
4. Authorize Render to access your GitHub account
5. Verify your email

---

## Step 3: Deploy to Render

### 3.1 Create New Web Service

1. Click **"New +"** button (top right)
2. Select **"Web Service"**
3. Click **"Connect a repository"**

### 3.2 Select Your Repository

1. Find your repository `MERN-Application`
2. Click **"Connect"**
3. If you don't see it, click "Configure account" and grant access

### 3.3 Configure Web Service

Fill in the following:

| Field | Value |
|-------|-------|
| **Name** | `mern-movie-backend` |
| **Environment** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Region** | Choose closest to you (e.g., `Singapore`, `Frankfurt`) |
| **Branch** | `master` |

### 3.4 Add Environment Variables

1. Scroll down to **"Environment"**
2. Click **"Add Environment Variable"**
3. Add the following variables:

```
MONGODB_URI = mongodb+srv://karanmanu17_db_user:vXmlrQXRv66jWM9S@cluster0.fiazucg.mongodb.net/movieapp?appName=Cluster0

PORT = 5000

NODE_ENV = production
```

**One by one:**
- Click "Add Environment Variable"
- Enter key (e.g., `MONGODB_URI`)
- Enter value (your MongoDB connection string)
- Click checkmark
- Repeat for PORT and NODE_ENV

### 3.5 Deploy

1. Click **"Create Web Service"**
2. Wait for deployment (5-10 minutes)
3. You'll see logs streaming in the console

---

## Step 4: Monitor Deployment

### Watch the Logs

You should see output like:
```
npm warn added 52 packages, and audited 53 packages
...
> mern-movie-app-server@1.0.0 start
> node server.js

Server is running on port 5000 in production mode
MongoDB connected
```

### Deployment Status

- **Building** → Installing dependencies
- **Deploying** → Starting the server
- **Live** ✅ → Your backend is live!

---

## Step 5: Get Your Backend URL

Once deployment is complete:

1. You'll see your service URL at the top
2. Copy this URL (e.g., `https://mern-movie-backend.onrender.com`)
3. **Save this for frontend deployment!**

### Test Your Backend

Open in browser or Postman:
```
https://mern-movie-backend.onrender.com/api/health
```

You should see:
```json
{
  "status": "Server is running",
  "environment": "production"
}
```

---

## Step 6: Test API Endpoints

### Get All Movies
```
GET https://mern-movie-backend.onrender.com/api/movies
```

### Get All Genres
```
GET https://mern-movie-backend.onrender.com/api/genres
```

Both should return data if MongoDB is connected correctly.

---

## Troubleshooting

### "Build failed" or "Build error"

**Check logs:**
1. Go to your service on Render
2. Click **"Logs"** tab
3. Look for error messages
4. Common issues:
   - Missing dependencies in `package.json`
   - Wrong `node_modules` in git
   - Incorrect file paths

**Solution:**
```bash
# Ensure node_modules is in .gitignore
# Then:
git rm -r --cached node_modules
git commit -m "Remove node_modules from git"
git push
```

### "MongoDB connection error"

**Check:**
1. Connection string is correct in environment variables
2. MongoDB Atlas network access includes Render's IP
3. Database user credentials are correct

**Fix:**
1. Go to your Render service
2. Click **"Environment"**
3. Update `MONGODB_URI` if needed
4. Service will auto-redeploy

### "Cannot GET /api/movies"

**Check:**
1. Server is actually running (check logs)
2. API endpoints exist in `server/routes/`
3. Routes are properly registered in `server/server.js`

---

## Important Notes

⚠️ **Cold Start**
- Render's free tier will sleep after 15 minutes of inactivity
- First request after sleep takes 30 seconds to respond
- This is normal and expected on free tier

✅ **Auto-Deploy**
- Any push to `master` branch will trigger automatic redeployment
- No manual redeploy needed

🔐 **Keep Secrets Safe**
- Never commit `.env` files
- Always use Render's environment variable UI for sensitive data
- MongoDB URI should ONLY be in Render's dashboard

---

## Next Step

Once your backend is live and working:

➡️ **Move to Vercel for frontend deployment**

You'll need the backend URL (e.g., `https://mern-movie-backend.onrender.com`) for the frontend.

---

## Backend URL Reference

After deployment, you'll have:
```
https://mern-movie-backend.onrender.com/api
```

This is what you'll use in the frontend's `.env.production`:
```
VITE_API_URL=https://mern-movie-backend.onrender.com/api
```

---

**Let me know when your backend is live! 🚀**
