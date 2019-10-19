/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/Users/Administrator/Documents/Blog/public/2019/Crash-Report/index.html","15d9da12f7d583432fad316cb167e1fc"],["C:/Users/Administrator/Documents/Blog/public/2019/HTML-Test/index.html","1b74ca95d758f7ad8d5995b29515e981"],["C:/Users/Administrator/Documents/Blog/public/2019/hello-world/index.html","71e34cadf53c2c31f95309d152b692aa"],["C:/Users/Administrator/Documents/Blog/public/2019/三体精选/index.html","1bde8b679a709ee52d0f69c364ad941f"],["C:/Users/Administrator/Documents/Blog/public/2019/分享一个快读/index.html","4f72e9d518a10d6fcc47f7ab3663547e"],["C:/Users/Administrator/Documents/Blog/public/2019/图床推荐/index.html","1c064673edcb38dc07880e78d93d7384"],["C:/Users/Administrator/Documents/Blog/public/2019/题解-P1462-【通往奥格瑞玛的道路】/index.html","08549b37a1875aa52a15e01533821ed3"],["C:/Users/Administrator/Documents/Blog/public/2019/题解-P2782-【友好城市】/index.html","65c20a0012291d3d13daf8cd8a1df3bc"],["C:/Users/Administrator/Documents/Blog/public/2019/题解-P3353-【在你窗外闪耀的星星】/index.html","9a51da19ab996e923a3afdfe1779eabb"],["C:/Users/Administrator/Documents/Blog/public/404.html","f83a615fc252b017aaaa472e74476634"],["C:/Users/Administrator/Documents/Blog/public/archives/2019/10/index.html","f89f378094bd138be47aa5bd975d902c"],["C:/Users/Administrator/Documents/Blog/public/archives/2019/index.html","3d2c107cb9b32ee5d3c2642c251a1c4e"],["C:/Users/Administrator/Documents/Blog/public/archives/index.html","ec9177781d5fd0c198f51081a11252d5"],["C:/Users/Administrator/Documents/Blog/public/categories/index.html","0a343e73f8a5bd0aac18a83d5fc0fb57"],["C:/Users/Administrator/Documents/Blog/public/categories/主站/index.html","531532f585291199c27ae7fa8fbbe3ca"],["C:/Users/Administrator/Documents/Blog/public/css/index.css","fceab32a56aed7f64318a4e283ca5a4b"],["C:/Users/Administrator/Documents/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/Administrator/Documents/Blog/public/gallery/index.html","3fae60f86088a006b02e9c9db7d25cfd"],["C:/Users/Administrator/Documents/Blog/public/google7b82fc823a037c09.html","4e434a0c2ddf0c64515811d326757b35"],["C:/Users/Administrator/Documents/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/Administrator/Documents/Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/Administrator/Documents/Blog/public/index.html","6e702ea0722e0c175b0763a1b4544aba"],["C:/Users/Administrator/Documents/Blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["C:/Users/Administrator/Documents/Blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["C:/Users/Administrator/Documents/Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["C:/Users/Administrator/Documents/Blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/Administrator/Documents/Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/Administrator/Documents/Blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["C:/Users/Administrator/Documents/Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/Administrator/Documents/Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["C:/Users/Administrator/Documents/Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/Administrator/Documents/Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/Administrator/Documents/Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/Administrator/Documents/Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/Administrator/Documents/Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/Administrator/Documents/Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/Administrator/Documents/Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/Administrator/Documents/Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/Administrator/Documents/Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/Administrator/Documents/Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/Administrator/Documents/Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/Administrator/Documents/Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/Administrator/Documents/Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/Administrator/Documents/Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/Administrator/Documents/Blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/Administrator/Documents/Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/Administrator/Documents/Blog/public/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["C:/Users/Administrator/Documents/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/Administrator/Documents/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/Administrator/Documents/Blog/public/melody-favicon-512.png","07f8a9e93c9afb80558effbd2ab5832d"],["C:/Users/Administrator/Documents/Blog/public/tags/index-1.html","0a343e73f8a5bd0aac18a83d5fc0fb57"],["C:/Users/Administrator/Documents/Blog/public/tags/index.html","0ec0f7dfe54cea0895a421f4d4d8b797"],["C:/Users/Administrator/Documents/Blog/public/tags/小技巧/index.html","97b0d7092022829f67255cf21356a294"],["C:/Users/Administrator/Documents/Blog/public/tags/题解/index.html","e5ad720468a1371736ada9d94bcd7af7"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







