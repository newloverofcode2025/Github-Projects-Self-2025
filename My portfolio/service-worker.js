self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('portfolio-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/styles.css',
                '/js/script.js',
                '/images/hero.webp',
                '/images/project1.webp',
                '/images/project2.webp',
                '/images/project3.webp'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});