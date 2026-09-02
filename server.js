import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// GoDaddy injects the PORT via environment; fallback to 3000 for local testing
const PORT = process.env.PORT || 3000;

const distDir = join(__dirname, 'dist');

// Check that the build exists before starting
if (!existsSync(distDir)) {
  console.error('ERROR: dist/ folder not found. Run "npm run build" first.');
  process.exit(1);
}

// API endpoint to serve contact info directly from server environment variables
app.get('/api/contact-info', (_req, res) => {
  res.json({
    phone: process.env.CONTACT_NUMBER || process.env.VITE_CONTACT_NUMBER || '919219616304',
    email: process.env.CONTACT_EMAIL || process.env.VITE_CONTACT_EMAIL || 'sales@swastikmixtures.com',
    facebook: process.env.FACEBOOK_URL || process.env.VITE_FACEBOOK_URL || 'https://www.facebook.com/share/19W93nerbE/',
    linkedin: process.env.LINKEDIN_URL || process.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/nikhil-mittal-01ab94426?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    instagram: process.env.INSTAGRAM_URL || process.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/swastikmixtures?igsi=NXB3emMyc2xiMzEw',
    youtube: process.env.YOUTUBE_URL || process.env.VITE_YOUTUBE_URL || '#',
  });
});

// Serve static assets with aggressive caching (hashed filenames are safe)
app.use(
  '/assets',
  express.static(join(distDir, 'assets'), {
    maxAge: '1y',
    immutable: true,
  })
);

// Serve all other static files (SVGs, favicon, etc.) with short cache
app.use(express.static(distDir, { maxAge: '1h' }));

// SPA fallback: for any route not matching a static file, serve index.html
app.get('*', (_req, res) => {
  res.sendFile(join(distDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Swastik Mixtures server running on port ${PORT}`);
});
