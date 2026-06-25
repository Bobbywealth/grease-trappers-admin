import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, 'dist');
const port = process.env.PORT || 10000;

const app = express();

// Cache static assets aggressively
app.use('/assets', express.static(path.join(distPath, 'assets'), {
  maxAge: '1y',
  immutable: true,
}));

// Serve root-level static files (favicon, etc.)
app.use(express.static(distPath, {
  maxAge: '1d',
}));

// Health
app.get('/healthz', (_req, res) => res.send('ok'));

// SPA fallback — serve index.html for any non-asset route
app.get(/^(?!\/assets|\/healthz).*/, (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Grease Trappers admin listening on :${port}`);
});