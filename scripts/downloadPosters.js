const fs = require('fs');
const path = require('path');

// Movie poster colors - using color gradients for visual distinction
const moviePosters = [
  { filename: 'the-matrix.jpg', title: 'The Matrix', colors: ['#00ff00', '#000000'] },
  { filename: 'inception.jpg', title: 'Inception', colors: ['#1a1a2e', '#16213e'] },
  { filename: 'shawshank-redemption.jpg', title: 'Shawshank Redemption', colors: ['#8b4513', '#654321'] },
  { filename: 'dark-knight.jpg', title: 'The Dark Knight', colors: ['#1a1a1a', '#2d2d2d'] },
  { filename: 'interstellar.jpg', title: 'Interstellar', colors: ['#000033', '#003366'] },
  { filename: 'spirited-away.jpg', title: 'Spirited Away', colors: ['#ff1493', '#ff69b4'] },
  { filename: 'pulp-fiction.jpg', title: 'Pulp Fiction', colors: ['#ffff00', '#000000'] },
  { filename: 'forrest-gump.jpg', title: 'Forrest Gump', colors: ['#87ceeb', '#90ee90'] },
  { filename: 'avatar.jpg', title: 'Avatar', colors: ['#0066cc', '#00ccff'] },
  { filename: 'avengers.jpg', title: 'The Avengers', colors: ['#cc0000', '#003366'] }
];

const posterDir = path.join(__dirname, '../client/public/assets/posters');

// Create directory if it doesn't exist
if (!fs.existsSync(posterDir)) {
  fs.mkdirSync(posterDir, { recursive: true });
}

// Create simple SVG placeholder with movie title
const createSvgPoster = (title, color1, color2) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="440" height="660" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="440" height="660" fill="url(#grad)"/>
  <text x="220" y="330" font-size="36" font-weight="bold" text-anchor="middle" dy="0.3em" fill="white" font-family="Arial, sans-serif">
    <tspan x="220" dy="0">${title}</tspan>
    <tspan x="220" dy="50" font-size="24">🎬</tspan>
  </text>
</svg>`;
};

// Create PNG-like placeholder using canvas (fallback to SVG-to-data-url)
const createPosterImage = async (filename, title, color1, color2) => {
  return new Promise((resolve, reject) => {
    try {
      const svg = createSvgPoster(title, color1, color2);
      const filepath = path.join(posterDir, filename.replace('.jpg', '.svg'));
      fs.writeFileSync(filepath, svg, 'utf-8');
      console.log(`✅ Created: ${filename.replace('.jpg', '.svg')}`);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

const createAllPosters = async () => {
  try {
    console.log('🎬 Creating local movie poster placeholders...\n');
    
    for (const poster of moviePosters) {
      await createPosterImage(poster.filename, poster.title, poster.colors[0], poster.colors[1]);
    }
    
    console.log(`\n✨ Successfully created ${moviePosters.length} movie poster placeholders!`);
    console.log(`📁 Posters saved to: ${posterDir}`);
    console.log('\n⚠️  Note: These are SVG placeholders. For production, replace with actual movie poster images.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Creation failed:', error);
    process.exit(1);
  }
};

createAllPosters();
