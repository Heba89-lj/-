self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("qr-drive-cache").then(cache => {
      return cache.addAll([
        "/Heba89-lj/",
        "/Heba89-lj/index.html",
        "/Heba89-lj/main.html",
        "/Heba89-lj/manifest.json",
        "/Heba89-lj/icon-192.png",
        "/Heba89-lj/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
