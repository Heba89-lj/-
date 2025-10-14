self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("qr-drive-cache").then(cache => {
      return cache.addAll([
        "/qr-pwa/",
        "/qr-pwa/index.html",
        "/qr-pwa/main.html",
        "/qr-pwa/manifest.json",
        "/qr-pwa/icon-192.png",
        "/qr-pwa/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
