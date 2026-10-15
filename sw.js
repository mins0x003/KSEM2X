/* K무한매수(KSEM2X) 서비스워커 V1.5 (261015)
   - 같은 주소의 화면(HTML·manifest·아이콘·data/kodex.json)만 처리, 외부 시세 API는 건드리지 않음
   - 매번 서버에 '바뀌었나?' 확인(no-cache → 안 바뀌면 304로 가볍게) → 새 버전 업로드·시세 자동 갱신이 즉시 반영
   - 인터넷이 끊기면 마지막으로 받은 화면을 보여줌 */
const CACHE = "kmuhan-v1.5-261015";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
));
self.addEventListener("fetch", e => {
  const req = e.request, u = new URL(req.url);
  if (req.method !== "GET" || u.origin !== self.location.origin) return;
  e.respondWith(
    fetch(req, { cache: "no-cache" }).then(r => {
      if (r.ok) { const c = r.clone(); caches.open(CACHE).then(ca => ca.put(req, c)); }
      return r;
    }).catch(() => caches.match(req, { ignoreSearch: true }))
  );
});
