'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c596621d8ce098b619ba739ec8c76d2c",
"assets/AssetManifest.bin.json": "b6be55e14ae27c3ae3249fc08319a79b",
"assets/AssetManifest.json": "1ebf1dd936f2e84af14c9a1e75e1c962",
"assets/assets/images/alimento_suave.png": "787dbd23f40fb20e2ac8f214040b656a",
"assets/assets/images/alvarado.png": "8ded0d0dee4106d6fdac2900f0e79537",
"assets/assets/images/alvarado2.png": "a5ab105c57a91bf20efbaebba079b5e8",
"assets/assets/images/analgesico.png": "e522b1bcc2bd1bf013d4cc1fd4a08949",
"assets/assets/images/campeon.png": "dbf894f4423875fc5c047b6f1d184fa4",
"assets/assets/images/celular.png": "6039ae5b104acc81ed52aa493629ca28",
"assets/assets/images/checklist.png": "0ff1a06bde2f5bb6c7faca67c9264ae6",
"assets/assets/images/comida_solida.png": "7402d2cd0cd702a92f4451059ef79566",
"assets/assets/images/consentimiento_icon.png": "9e533de4657000081b3bb5958ba2fc41",
"assets/assets/images/derrota.png": "9bb3c3958822690bbf8a5098f432129b",
"assets/assets/images/hospital_bg.png": "15c64e5952ce827451ed1ef39c8b5e56",
"assets/assets/images/hospital_runner_bg.png": "0b6a87a754398fb824e1ac2752b868b8",
"assets/assets/images/inicio2.png": "b648eff14023fb71e228b8145a702451",
"assets/assets/images/intruc.png": "ee96df25976e4d1ccb298d308fe6ef23",
"assets/assets/images/item_correct.png": "46e26a91b10f89ea021686de4b97dc30",
"assets/assets/images/item_wrong.png": "ae478bfe09e2067ed1b6f68c132f597c",
"assets/assets/images/jeringa_sin_etiqueta.png": "77a0b8400ff567332cd39fe30e9fe32f",
"assets/assets/images/medicina1.png": "37b6df02f91e6eb9681aaa11a51a7b53",
"assets/assets/images/medicina2.png": "07b925fe8a8336d912f8e99793e16876",
"assets/assets/images/medicina3.png": "25c4314b70f93c425a1bfa895e7e2432",
"assets/assets/images/medicina4.png": "fe7974afee4a296a99211c9075e87f21",
"assets/assets/images/medicina5.png": "ce13b06140ebfa2b2580ddcb404f4fea",
"assets/assets/images/nurse_avatar.png": "8b3e30d2e16d175345739a856e30018a",
"assets/assets/images/puzzle_0.png": "3992707d852c26c8a7fd82eedf172a19",
"assets/assets/images/quirofano_fondo.png": "60bb8cd17fa38f60251d4d979511e67a",
"assets/assets/images/quirurgico_fondo.png": "083147e2e2f2a42ffbd5fb87f24a01f0",
"assets/assets/images/quirurgico_fondo2.png": "58327b77a01c5e3f904782e220e3b9bc",
"assets/assets/images/resosuse_background.png": "7969697d1f91bb740b4dac3e75c395d0",
"assets/assets/images/skills_background.png": "88ee0616f247e87efa8e2d038eb12363",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ec8ded96136e832ab03dcab65d7ee446",
"assets/NOTICES": "f85c1ff2df4e9a5fc81d2f4ec8b4845e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "c84f24b8ad35b307c61757729878a54f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dec4b99acced79683be2b9b4a89b0d20",
"/": "dec4b99acced79683be2b9b4a89b0d20",
"main.dart.js": "c8f8984a4b683f6d8376d896315edbc3",
"manifest.json": "782dfd397eb4a4a73e6fd3a5522448d5",
"version.json": "8ea70ce0881d9aa62eecdef24a0fecd2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
