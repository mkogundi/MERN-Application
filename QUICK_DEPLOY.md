# Quick Deployment Steps

## 1. MongoDB Atlas (5 min)
- Sign up: https://mongodb.com/cloud/atlas
- Create free cluster
- Create user (username: `movieapp`)
- Allow network access: 0.0.0.0/0
- Copy connection string: `mongodb+srv://movieapp:PASSWORD@cluster.mongodb.net/movieapp`

## 2. Backend on Render (10 min)

**Prepare:**
```bash
# Update server/.env with MongoDB URI
MONGODB_URI=mongodb+srv://movieapp:PASSWORD@cluster.mongodb.net/movieapp
NODE_ENV=production
```

**Deploy:**
- Sign up: https://render.com (with GitHub)
- Create Web Service
- Connect your repo
- Build: `npm install`
- Start: `npm start`
- Add env variables in Render dashboard
- Deploy and get URL: `https://mern-movie-backend.onrender.com`

## 3. Frontend on Vercel (5 min)

**Prepare:**
```bash
# Update client/.env.production
VITE_API_URL=https://mern-movie-backend.onrender.com/api
```

**Deploy:**
- Sign up: https://vercel.com (with GitHub)
- New project → Import repo
- Root directory: `client`
- Build: `npm run build`
- Set env variable in Vercel dashboard
- Deploy and get URL: `https://your-app.vercel.app`

## 4. Test Live App
- Open `https://your-app.vercel.app`
- Browse movies
- Check console for errors
- If CORS error, update backend `.env` with frontend URL

---

**Total Time: ~20 minutes**
**Cost: FREE ($0)**
