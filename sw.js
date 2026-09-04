// Service worker minimal, requis par Chrome/Android pour proposer
// une vraie installation d'appli plutôt qu'un simple raccourci.
// Ne met rien en cache pour l'instant : chaque requête va sur le réseau normalement.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
