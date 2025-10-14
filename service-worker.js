self.addEventListener('install', event => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', event => {
  // يسمح للصفحة بالعمل حتى بدون إنترنت جزئياً
});
