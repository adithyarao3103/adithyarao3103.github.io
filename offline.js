// sw.js
const CACHE_NAME = 'offline';
const OFFLINE_URL = 'offline.html';

// Add your image URLs here
const CACHED_IMAGES = [
    '/assets/flares.webp'
];

const ASSETS_TO_CACHE = [
    OFFLINE_URL,
    ...CACHED_IMAGES
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS_TO_CACHE))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        Promise.all([
            self.clients.claim(),
            // Clean up old caches
            caches.keys().then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((cacheName) => cacheName !== CACHE_NAME)
                        .map((cacheName) => caches.delete(cacheName))
                );
            })
        ])
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .catch(() => {
                    return caches.open(CACHE_NAME)
                        .then((cache) => cache.match(OFFLINE_URL));
                })
        );
    } else if (event.request.destination === 'image') {
        // Handle image requests
        event.respondWith(
            caches.open(CACHE_NAME)
                .then((cache) => {
                    return cache.match(event.request)
                        .then((cachedResponse) => {
                            if (cachedResponse) {
                                return cachedResponse;
                            }
                            return fetch(event.request)
                                .then((networkResponse) => {
                                    cache.put(event.request, networkResponse.clone());
                                    return networkResponse;
                                })
                                .catch(() => {
                                    // Return a fallback image if the image fails to load
                            });
                        });
                })
        );
    }
});