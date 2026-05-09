const CACHE_NAME = 'health-agenda-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Instalação e Cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Resposta offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
    return response || fetch(event.request);
    })
  );
});