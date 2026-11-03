// Gebetsapp Service Worker: App offline verfügbar machen.
// Nach Änderungen an index.html/texte.js die Version erhöhen.
const VERSION='gebetsapp-v15';
const SHELL=['./','index.html','texte.js','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/apple-touch-icon.png','icons/christus.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  if(new URL(req.url).origin!==location.origin)return;
  // Zuerst Netz (neueste Fassung), offline aus dem Cache
  e.respondWith(fetch(req).then(r=>{if(r.ok){const c=r.clone();caches.open(VERSION).then(x=>x.put(req,c));}return r;}).catch(()=>caches.match(req).then(h=>h||caches.match('index.html'))));
});
