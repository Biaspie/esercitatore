const CACHE_NAME = 'quiz-app-v2';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './home.html',
    './quiz.html',

    './stats.html',
    './login.html',
    './style.css',
    './login.js',
    './home.js',
    './quiz.js',
    './user-data.js',
    './firebase-config.js',
    './questions.json',
    './favicon.svg',

    './stats.js',
    './leaderboard.js',
    // Firebase SDKs are loaded from CDN. Caching them might be tricky due to updates,
    // but for pure offline, we rely on browser caching or need to cache them here.
    // Note: Opaque responses (CDN) can be cached but not inspected.
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    // Navigation preload response if available
    // Cache First Strategy
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request).catch(() => {
                // If fetch fails (offline) and not in cache, we could show a fallback page
                // For now, simpler is better.
            });
        })
    );
});
