# 📸 Adding Movie Posters to Your Database

## ✅ What's Been Updated

1. **New seed file with real poster images** - `seedMoviesWithImages.js`
2. **Enhanced CSS** - Better poster display with hover effects
3. **Fallback images** - If a poster URL fails, a placeholder appears
4. **Better styling** - Larger poster height (350px) and smooth zoom effect

## 🚀 How to Populate with Movie Posters

### Step 1: Run the Seed Command
```bash
cd server
npm run seed:images
```

Expected output:
```
MongoDB connected for seeding...
Cleared existing data
✅ 8 genres created
✅ 22 movies created
✨ Database seeded successfully!
```

### Step 2: Refresh Your Browser
- Go to http://localhost:3000
- You should now see all movies with actual poster images!

---

## 📊 Movies Added (with Real Posters)

| Movie | Genre | Year | Rating |
|-------|-------|------|--------|
| The Matrix | Sci-Fi | 1999 | 8.7 |
| Inception | Sci-Fi | 2010 | 8.8 |
| The Avengers | Action | 2012 | 8.0 |
| The Shawshank Redemption | Drama | 1994 | 9.3 |
| Forrest Gump | Drama | 1994 | 8.8 |
| The Pursuit of Happyness | Drama | 2006 | 8.2 |
| Superbad | Comedy | 2007 | 7.6 |
| The Grand Budapest Hotel | Comedy | 2014 | 8.1 |
| The Ring | Horror | 2002 | 7.1 |
| A Quiet Place | Horror | 2018 | 7.5 |
| Titanic | Romance | 1997 | 7.8 |
| The Notebook | Romance | 2004 | 7.8 |
| Interstellar | Sci-Fi | 2014 | 8.6 |
| Spirited Away | Animation | 2001 | 8.6 |
| Toy Story | Animation | 1995 | 8.3 |
| The Dark Knight | Action | 2008 | 9.0 |
| Jaws | Thriller | 1975 | 8.0 |
| Se7en | Thriller | 1995 | 8.6 |
| Your Name | Animation | 2016 | 8.4 |
| Avatar | Sci-Fi | 2009 | 7.8 |
| Gladiator | Action | 2000 | 8.5 |
| The Lion King | Animation | 1994 | 8.5 |
| Pulp Fiction | Drama | 1994 | 8.9 |

---

## 🎨 Visual Features

✅ **Real movie posters** from IMDb
✅ **Hover effect** - Image zooms slightly on hover
✅ **Smooth transitions** - 0.3s animation
✅ **Fallback images** - If image fails to load
✅ **Responsive layout** - Looks great on mobile too
✅ **Better proportions** - 350px height for better display

---

## 🔧 Adding More Movies with Posters

To add more movies to the seed file:

1. Open `server/seeds/seedMoviesWithImages.js`
2. Add a new object to the movies array:

```javascript
{
  title: 'Movie Title',
  year: 2024,
  genre: genres.find(g => g.name === 'GenreName')._id,
  director: 'Director Name',
  rating: 8.5,
  description: 'Movie description here',
  posterUrl: 'https://example.com/poster.jpg'
}
```

3. Run: `npm run seed:images`

---

## 🖼️ Poster URL Tips

### Good Sources:
- IMDb: `https://m.media-amazon.com/images/...`
- TMDB: `https://image.tmdb.org/t/p/w300/...`
- Unsplash: `https://unsplash.com/...`
- Placeholder: `https://via.placeholder.com/300x450`

### Image Size:
- **Width**: 300-400px
- **Height**: 450px (3:2 aspect ratio)
- **Format**: JPG or PNG

---

## 💾 Updating Existing Movies

To update a movie's poster in the admin panel:

1. Login with admin credentials
2. Go to Admin Panel
3. Add the movie details including posterUrl
4. Or manually update in MongoDB:

```javascript
db.movies.updateOne(
  { title: "Movie Name" },
  { $set: { posterUrl: "https://new-url.jpg" } }
)
```

---

## ⚡ Quick Reference Commands

```bash
# Seed with images
npm run seed:images

# Seed with placeholder images (old)
npm run seed

# Start backend
npm run dev

# Start frontend
cd ../client && npm run dev
```

---

**All done! Your movies now have professional poster images! 🎬**
