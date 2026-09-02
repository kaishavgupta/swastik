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
