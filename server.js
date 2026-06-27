// Genetic Echoes — zero-dependency static server.
// Binds to all network interfaces so you can open it on your phone
// (same Wi-Fi) using the "Network" URL printed below.
//   npm start            → serves on port 8000
//   PORT=3000 npm start  → custom port

import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import { extname, join, normalize, sep } from 'node:path';
import { networkInterfaces } from 'node:os';

const PORT = Number(process.env.PORT) || 8000;
const ROOT = process.cwd();

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
  '.mjs':  'text/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.webp': 'image/webp',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
  '.txt':  'text/plain; charset=utf-8',
  '.md':   'text/markdown; charset=utf-8',
  '.map':  'application/json; charset=utf-8'
};

const server = http.createServer(async (req, res) => {
  try {
    let urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
    if (urlPath === '/' || urlPath === '') urlPath = '/index.html';

    const filePath = normalize(join(ROOT, urlPath));
    // block path traversal outside the project folder
    if (filePath !== ROOT && !filePath.startsWith(ROOT + sep)) {
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      return res.end('403 Forbidden');
    }
    if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('404 Not Found');
    }
    const data = await readFile(filePath);
    res.writeHead(200, {
      'Content-Type': TYPES[extname(filePath).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-cache'
    });
    res.end(data);
  } catch {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('500 Server Error');
  }
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n  Port ${PORT} is already in use. Try:  PORT=8080 npm start\n`);
  } else {
    console.error('\n  Server error:', err.message, '\n');
  }
  process.exit(1);
});

function lanIPs() {
  const out = [];
  const nets = networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name] || []) {
      const isIPv4 = net.family === 'IPv4' || net.family === 4;
      if (isIPv4 && !net.internal) out.push(net.address);
    }
  }
  return out;
}

server.listen(PORT, '0.0.0.0', () => {
  const ips = lanIPs();
  const bar = '─'.repeat(52);
  console.log(`\n  🧬  Genetic Echoes — server running`);
  console.log(`  ${bar}`);
  console.log(`  On this Mac:   http://localhost:${PORT}`);
  if (ips.length) {
    ips.forEach((ip) =>
      console.log(`  On your phone: http://${ip}:${PORT}   ← type this (same Wi-Fi)`)
    );
  } else {
    console.log(`  On your phone: no Wi-Fi address found — are you connected to Wi-Fi?`);
  }
  console.log(`  ${bar}`);
  console.log(`  If your phone can't connect, allow "node" in`);
  console.log(`  System Settings → Network → Firewall when prompted.`);
  console.log(`  Press Ctrl+C to stop.\n`);
});
