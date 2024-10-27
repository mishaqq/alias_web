'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a093785119b98031f15092105a518af3",
"assets/AssetManifest.bin.json": "2f3543c2b464240514b55df1e2bf4062",
"assets/AssetManifest.json": "c2056ca2d99265b3085bfc4f1534dcd8",
"assets/assets/images/arrow_home.png": "6114de4e32b81a8a1b9e2fcaac991580",
"assets/assets/images/cat_shy.png": "d125e758e3c99e43d1abb42b23ce2324",
"assets/assets/images/cat_shy_exclamation.png": "f8e17176d876a5fd23c5215e36226650",
"assets/assets/images/claus.jpg": "e4f5a8c0bcaf77e71a203a3160cbb48d",
"assets/assets/images/cloud.png": "c5a184bbe2994077d3b58d1c2bc0aeff",
"assets/assets/images/cloud1.png": "1b79510a3e44f92996aff8ddd47e4fb2",
"assets/assets/images/crab.jpg": "b90522444e821e86c92e4799f6b3dc5e",
"assets/assets/images/datebaio.png": "7d186ded3bf2dc65e824c186b25a1e61",
"assets/assets/images/duck.jpg": "f34849a59176c5b1434a2c00817bb074",
"assets/assets/images/fish_dead.png": "818ca28b6059c0eacd80bb5e35716bc6",
"assets/assets/images/gost.jpg": "c4a7d55fd2fa316746b9784d86273536",
"assets/assets/images/green.jpg": "dda77e6af58598dfc8c3bfec661ab3f4",
"assets/assets/images/hai.jpg": "e91d5ea7656d6885166deeaa4ee82c60",
"assets/assets/images/logo.png": "c14cbc473295f85d473a3095d4002bb1",
"assets/assets/images/panda.jpg": "c23d53936ed3dc592236377d6439e316",
"assets/assets/images/plate.jpg": "c0fa6324b02da2b2bb15b5e3460d374d",
"assets/assets/images/post_logo.png": "0c460d46db028be2fe5f89b362526f84",
"assets/assets/images/pumpkin.jpg": "951d28fb7c08a90c93eb7bb049a2739a",
"assets/assets/images/sapce.jpg": "461422aa782211e02038dd75593927fd",
"assets/assets/images/snowman.jpg": "d4f883ecdd31fda513ae7fa35ac6952b",
"assets/assets/images/taping_cat.gif": "7c1d098d0b78de09d33f9a73a08fd994",
"assets/assets/images/test.svg": "b721975e3b52a1ccd36aca369415a4c8",
"assets/assets/images/vampire.jpg": "4401c1bfbc90f0258e47767c86c62444",
"assets/assets/images/wale.jpg": "629ea660d4fe381672edace1075755a7",
"assets/assets/images/wow.png": "43dd248812f130e260c62ef8a6183586",
"assets/FontManifest.json": "b712797b98d9596ceba49fcc7c480570",
"assets/fonts/AnonymousPro-Bold.ttf": "f5e69393343726e8479a8f5d77f50739",
"assets/fonts/AnonymousPro-BoldItalic.ttf": "af5fee7f74b556bf44550ec4c974c05a",
"assets/fonts/AnonymousPro-Regular.ttf": "1c0a292f3473dd6684c2cbee0f6ee5f3",
"assets/fonts/MaterialIcons-Regular.otf": "7b661b8cd8c41142747434ffd333f969",
"assets/NOTICES": "f52e5bc6bfb9fc3fc822a3cefc87720c",
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
"flutter_bootstrap.js": "c2af16baff06debf0cdc1bbedf8c62bc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e9b5892fdeb6a312693784b875b46b7e",
"/": "e9b5892fdeb6a312693784b875b46b7e",
"main.dart.js": "b7f0b32ee74b0b7b650f69bb88d856cb",
"manifest.json": "8204be0c4713c8cd1dfcf9b2013c9569",
"splash/img/dark-1x.png": "5dceb33cb08ad6ec3cf8bfc209aedfcb",
"splash/img/dark-2x.png": "c18ab577d88c095eb7ffed265264e56d",
"splash/img/dark-3x.png": "a41fdcd5881a925c0cac1de473ead0d4",
"splash/img/dark-4x.png": "62027e06dd802a611dcfb419d97869a2",
"splash/img/light-1x.png": "5dceb33cb08ad6ec3cf8bfc209aedfcb",
"splash/img/light-2x.png": "c18ab577d88c095eb7ffed265264e56d",
"splash/img/light-3x.png": "a41fdcd5881a925c0cac1de473ead0d4",
"splash/img/light-4x.png": "62027e06dd802a611dcfb419d97869a2",
"version.json": "d46490a8cf1a4608d13edc75b32edb71"};
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
