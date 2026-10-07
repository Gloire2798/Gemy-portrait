// Service Worker — Gemy de mon cœur
// Stratégie : cache-first pour tout, avec mise à jour en arrière-plan

const CACHE_NAME = "gemy-portrait-v1";

// Fichiers à mettre en cache dès l'installation
const PRECACHE = [
  "/",
  "/album",
  "/message",
  "/album.pdf",
  "https://i.ibb.co/PGwN4TRY/couronne.png",
];

// Installation → pré-cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE).catch((err) => {
        console.log("Pré-cache partiel :", err);
      });
    })
  );
  self.skipWaiting();
});

// Activation → nettoyage des vieux caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch → cache-first, sinon réseau, sinon cache
self.addEventListener("fetch", (event) => {
  // On ignore les requêtes non-GET
  if (event.request.method !== "GET") return;

  // On ignore les requêtes Vercel internes
  if (event.request.url.includes("/_next/webpack-hmr")) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          // On met en cache uniquement les réponses valides
          if (
            !response ||
            response.status !== 200 ||
            response.type === "opaque"
          ) {
            return response;
          }

          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });

          return response;
        })
        .catch(() => {
          // Si le réseau échoue et qu'on n'a rien en cache
          // → on essaie de renvoyer la page d'accueil en fallback
          if (event.request.mode === "navigate") {
            return caches.match("/");
          }
        });
    })
  );
});
