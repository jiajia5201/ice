"use strict";var precacheConfig=[["https://alibaba.github.io/ice/rax-materials/operating-dashboard/favicon.png","0d4cca8dcc3deff70425210396f97a03"],["https://alibaba.github.io/ice/rax-materials/operating-dashboard/images/alert-cc2b3de1.png","cc2b3de182e48ba11b409194542c2259"],["https://alibaba.github.io/ice/rax-materials/operating-dashboard/images/avatar-44478d27.png","44478d278bc5b625667a7d3546c0f89b"],["https://alibaba.github.io/ice/rax-materials/operating-dashboard/images/colum-height-b9e1bdea.png","b9e1bdeaf6469feb8801c6ff337f9768"],["https://alibaba.github.io/ice/rax-materials/operating-dashboard/images/edit-square-94f5b359.png","94f5b359b593c22b0fb6f4cd23cc5510"],["https://alibaba.github.io/ice/rax-materials/operating-dashboard/images/icons/icon-128x128.png","b57be776006e9f6d03dd474a5056f1b1"],["https://alibaba.github.io/ice/rax-materials/operating-dashboard/images/icons/icon-144x144.png","fb496b753a6e98c0b94c5bac70716243"],["https://alibaba.github.io/ice/rax-materials/operating-dashboard/images/icons/icon-152x152.png","4b19f343321ef4252c1355055bd37e6b"],["https://alibaba.github.io/ice/rax-materials/operating-dashboard/images/icons/icon-192x192.png","10e08149886fe7bab53a5129bb816d95"],["https://alibaba.github.io/ice/rax-materials/operating-dashboard/images/icons/icon-384x384.png","1d47255a502d9817a71d3d87d8c9e1d7"],["https://alibaba.github.io/ice/rax-materials/operating-dashboard/images/icons/icon-512x512.png","2a1f755aa55f24023788feb696cda025"],["https://alibaba.github.io/ice/rax-materials/operating-dashboard/images/icons/icon-72x72.png","195ecd89be117baf5ceac2a97a5ed3b5"],["https://alibaba.github.io/ice/rax-materials/operating-dashboard/images/icons/icon-96x96.png","31e0f34da6949ee21607d28b7b7acd2c"],["https://alibaba.github.io/ice/rax-materials/operating-dashboard/images/issues-close-e2dda16c.png","e2dda16cd874f8dc66c4d569c2bfb704"],["https://alibaba.github.io/ice/rax-materials/operating-dashboard/images/mobile-6f58281b.png","6f58281bb69cad48fa2b38aeab0fa558"],["https://alibaba.github.io/ice/rax-materials/operating-dashboard/images/not-found-4fc3e7d8.png","4fc3e7d83a32de31050d10727fefe786"],["https://alibaba.github.io/ice/rax-materials/operating-dashboard/images/security-scan-51e12625.png","51e126251e55f3fb52df41149770663e"],["https://alibaba.github.io/ice/rax-materials/operating-dashboard/images/star-2e6c5d88.png","2e6c5d88f40d6bbf0ee08eaf19e8191c"],["https://alibaba.github.io/ice/rax-materials/operating-dashboard/images/tag-5f6dfe9f.png","5f6dfe9f162cf953b19c54af6e6bac2f"],["https://alibaba.github.io/ice/rax-materials/operating-dashboard/images/warning-88105f00.png","88105f00ce01cba3e8e4f4ad572848b2"],["https://alibaba.github.io/ice/rax-materials/operating-dashboard/index.html","bdcbf82425c8215fe5157a9acf0afe86"],["https://alibaba.github.io/ice/rax-materials/operating-dashboard/js/atag.js","9ebc33665a6c9d7a2926e081cfa6c5ba"],["https://alibaba.github.io/ice/rax-materials/operating-dashboard/js/index.min.js","b020b85a32f58b804a847936156cbbda"],["https://alibaba.github.io/ice/rax-materials/operating-dashboard/js/vendor.js","419a554a58d3184432c66f0272e755d7"],["https://alibaba.github.io/ice/rax-materials/operating-dashboard/manifest.json","62b40e7c1f8bc8e38fdb30f369d2ecfe"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var t=new URL(a);return"/"===t.pathname.slice(-1)&&(t.pathname+=e),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(a,e,t,r){var i=new URL(a);return r&&i.pathname.match(r)||(i.search+=(i.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var t=new URL(e).pathname;return a.some(function(a){return t.match(a)})},stripIgnoredUrlParameters=function(a,e){var t=new URL(a);return t.hash="",t.search=t.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(a){return e.every(function(e){return!e.test(a[0])})}).map(function(a){return a.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],t=a[1],r=new URL(e,self.location),i=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),i]}));function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(e){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!e.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var e=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(t){return Promise.all(t.map(function(t){if(!e.has(t.url))return a.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching);(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),e=urlsToCacheKeys.has(t));0,e&&a.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(t)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});