/* Handover Log offline worker. Cache: hl-a3a94a76cfd4 (version 2026.11.20-1519) */
const CACHE = "hl-a3a94a76cfd4";
const FILES = ["./", "apple-touch-icon.png", "docx.iife.js", "favicon.png", "fonts.css", "ibm-plex-mono-latin-400-normal.woff2", "ibm-plex-mono-latin-500-normal.woff2", "ibm-plex-mono-latin-600-normal.woff2", "ibm-plex-mono-latin-ext-400-normal.woff2", "ibm-plex-mono-latin-ext-500-normal.woff2", "ibm-plex-mono-latin-ext-600-normal.woff2", "ibm-plex-sans-condensed-latin-500-normal.woff2", "ibm-plex-sans-condensed-latin-600-normal.woff2", "ibm-plex-sans-condensed-latin-700-normal.woff2", "ibm-plex-sans-condensed-latin-ext-500-normal.woff2", "ibm-plex-sans-condensed-latin-ext-600-normal.woff2", "ibm-plex-sans-condensed-latin-ext-700-normal.woff2", "ibm-plex-sans-latin-400-normal.woff2", "ibm-plex-sans-latin-500-normal.woff2", "ibm-plex-sans-latin-600-normal.woff2", "ibm-plex-sans-latin-ext-400-normal.woff2", "ibm-plex-sans-latin-ext-500-normal.woff2", "ibm-plex-sans-latin-ext-600-normal.woff2", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "index.html", "manifest.webmanifest", "pdfmake.min.js", "tinos-latin-400-italic.woff2", "tinos-latin-400-normal.woff2", "tinos-latin-700-italic.woff2", "tinos-latin-700-normal.woff2", "tinos-latin-ext-400-italic.woff2", "tinos-latin-ext-400-normal.woff2", "tinos-latin-ext-700-italic.woff2", "tinos-latin-ext-700-normal.woff2"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("hl-") && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const req = e.request; if(req.method !== "GET") return;
  const url = new URL(req.url); if(url.origin !== location.origin) return;
  if(req.mode === "navigate"){ e.respondWith(caches.match("index.html").then(r => r || fetch(req))); return; }
  e.respondWith(caches.match(req, {ignoreSearch: true}).then(r => r || fetch(req)));
});
