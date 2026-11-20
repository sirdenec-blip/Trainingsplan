// Service Worker für TTB: macht die App offline nutzbar.
// Strategie: erst das Netz (damit Updates sofort ankommen), bei fehlendem/schlechtem Empfang nach 3 s die gespeicherte Kopie.
// Anfragen an Google (Anmeldung, Drive) werden nicht angefasst.
const CACHE="ttb-0.99.2";
const CORE=["./","./index.html","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-maskable-512.png","./icons/apple-touch-icon.png"];

self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch",e=>{
  const r=e.request;
  if(r.method!=="GET"||new URL(r.url).origin!==self.location.origin)return;
  e.respondWith((async()=>{
    const c=await caches.open(CACHE);
    const net=fetch(r).then(res=>{if(res.ok)c.put(r,res.clone());return res});
    const fallback=async()=>(await c.match(r,{ignoreSearch:true}))||(r.mode==="navigate"?await c.match("./index.html"):undefined);
    try{
      return await Promise.race([net,new Promise((_,rej)=>setTimeout(()=>rej(new Error("timeout")),3000))]);
    }catch(x){
      const m=await fallback();if(m)return m;
      return net; // nichts gespeichert: doch auf das Netz warten
    }
  })());
});
