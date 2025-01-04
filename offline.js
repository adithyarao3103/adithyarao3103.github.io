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
    // Handle navigation (HTML) requests, e.g., index.html
    if (event.request.mode === 'navigate') {
        // Always fetch the HTML page from the network, never from cache
        event.respondWith(fetch(event.request));
    } else if (event.request.destination === 'image') {
        // Handle image caching
        event.respondWith(
            caches.open(CACHE_NAME)
                .then((cache) => {
                    return cache.match(event.request)
                        .then((cachedResponse) => {
                            if (cachedResponse) {
                                return cachedResponse; // Serve from cache if available
                            }
                            return fetch(event.request)
                                .then((networkResponse) => {
                                    cache.put(event.request, networkResponse.clone()); // Cache the new image
                                    return networkResponse; // Return the network response
                                })
                                .catch(() => {
                                    // Return a fallback image if network fails
                                });
                        });
                })
        );
    }
});