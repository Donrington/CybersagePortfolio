const CACHE_NAME = 'cybersage-portfolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/circle2.png',
  '/projects/deets.png',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Hind:wght@400;500;600;800;900&family=Montserrat:wght@400;500;600;800;900&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  window.deferredPrompt = event;
});