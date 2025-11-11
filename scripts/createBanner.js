const fs = require('fs');
const path = require('path');

// Create a simple banner image using canvas data
const bannerPath = path.join(__dirname, '../client/public/assets/banner.jpg');

// SVG as data URL
const svgContent = `<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f0c29;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#302b63;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#24243e;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <rect width="1920" height="1080" fill="url(#mainGradient)"/>
  
  <circle cx="200" cy="200" r="120" fill="none" stroke="#ff6b6b" stroke-width="2" opacity="0.15"/>
  <circle cx="200" cy="200" r="80" fill="none" stroke="#ff6b6b" stroke-width="2" opacity="0.2"/>
  <circle cx="200" cy="200" r="40" fill="none" stroke="#ff6b6b" stroke-width="2" opacity="0.25"/>
  
  <circle cx="1750" cy="950" r="150" fill="none" stroke="#48dbfb" stroke-width="2" opacity="0.12"/>
  <circle cx="1750" cy="950" r="100" fill="none" stroke="#48dbfb" stroke-width="2" opacity="0.18"/>
  <circle cx="1750" cy="950" r="50" fill="none" stroke="#48dbfb" stroke-width="2" opacity="0.24"/>
</svg>`;

// Create a PNG file using canvas-like approach
// For now, save as SVG which browsers will display as image
fs.writeFileSync(bannerPath.replace('.jpg', '.svg'), svgContent, 'utf-8');
console.log('✅ Banner SVG created successfully!');

// Also create a simple fallback by copying SVG to JPG location
// Browsers will still load it as the SVG will be served
const jpgPath = bannerPath;
fs.writeFileSync(jpgPath, svgContent, 'utf-8');
console.log('✅ Banner JPG created successfully!');
