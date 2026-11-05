const CACHE = 'fes-v1';
const DS = '_ds/finpec-design-system-f2149bfe-f668-44a4-8d88-3a02dff94a5c/';
const PRECACHE = [
  'FES Redesign.dc.html', 'FES-Lista-Mobile.dc.html', 'support.js', 'manifest.webmanifest',
  DS + 'tokens/fonts.css', DS + 'tokens/colors.css', DS + 'tokens/typography.css', DS + 'tokens/spacing.css', DS + 'tokens/base.css',
  DS + 'components/finpec-components.css', DS + 'styles.css', DS + '_ds_bundle.js',
  'assets/finpec-mark.png', 'assets/finpec-logo-branco.png',
  'assets/pwa/icon-192.png', 'assets/pwa/icon-512.png', 'assets/pwa/icon-180.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(PRECACHE.map(u => c.add(u).catch(() => null)))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })
      .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('FES Redesign.dc.html'))));
    return;
  }
  e.respondWith(caches.match(req).then(hit => {
    const net = fetch(req).then(res => { if (res && (res.ok || res.type === 'opaque')) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return res; }).catch(() => hit);
    return hit || net;
  }));
});
