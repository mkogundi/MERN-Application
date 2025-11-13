# Update Vercel Environment Variable

Your Render backend URL has been updated. Now update Vercel's environment variable:

## Steps:

1. **Go to Vercel Dashboard**: https://vercel.com
2. **Select your project** (The Movies Hub or your project name)
3. **Click "Settings"** (top menu)
4. **Click "Environment Variables"** (left sidebar)
5. **Find `VITE_API_URL`** variable
6. **Update the value**:
   ```
   https://mern-movie-backend-7355.onrender.com/api
   ```
7. **Click "Save"**
8. **Go back to "Deployments"** tab
9. **Click the three dots** on the latest deployment
10. **Select "Redeploy"**
11. **Wait for deployment** to complete (2-5 minutes)

---

## Or it may auto-update

Since you pushed to GitHub, Vercel might automatically:
- Detect the GitHub commit
- Auto-redeploy with the new environment variable

**Check your Vercel dashboard** - you should see a new deployment in progress!

---

## Verify it works:

Once Vercel redeploys, test:
1. Open your Vercel frontend URL
2. Try browsing movies
3. Check browser console for any errors
4. Movies should load from the Render backend

---

**Your URLs are now:**
- **Backend**: https://mern-movie-backend-7355.onrender.com
- **Frontend**: https://your-vercel-url.vercel.app
- **Database**: MongoDB Atlas (configured in Render)

🎉 **Your MERN app is live!**
