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

var precacheConfig = [["C:/Users/Administrator/Blog/public/2019/Crash-Report/index.html","0fca23525aec05847d5296010946c5c1"],["C:/Users/Administrator/Blog/public/2019/GDB简单实用教程/index.html","c4bd55cc6f0042eee54e79e37899e03d"],["C:/Users/Administrator/Blog/public/2019/LaTeX数学符号大全/index.html","fdd1b2c11ae3da44250738d072b54d41"],["C:/Users/Administrator/Blog/public/2019/hello-world/index.html","822d2f8273a6931d1acb45aa4c0f9113"],["C:/Users/Administrator/Blog/public/2019/【数据结构】并査集/index.html","de8174550a02337e236b120b30190228"],["C:/Users/Administrator/Blog/public/2019/【数据结构】线段树/index.html","d9345f4a8be0da1e9c2592a093e5401b"],["C:/Users/Administrator/Blog/public/2019/【算法笔记】快速幂/index.html","f6719d8f22e2d3b6639b55de971d63ac"],["C:/Users/Administrator/Blog/public/2019/【算法笔记】树链剖分/index.html","8b769e06d164c88c4ef3f783a96effa8"],["C:/Users/Administrator/Blog/public/2019/三体精选/index.html","2ab433b8f5f36eee1ea06879a9ed5449"],["C:/Users/Administrator/Blog/public/2019/使用EagleGet快速下载bilibili上的港澳台专属番剧/index.html","cf4b507073878083d17f178732c4f93a"],["C:/Users/Administrator/Blog/public/2019/分享一个快读/index.html","92adccf5067593b87953e5a80dc85e7e"],["C:/Users/Administrator/Blog/public/2019/图床推荐/index.html","8730640ed0d4a444a7c57a740e5bdff3"],["C:/Users/Administrator/Blog/public/2019/知乎收藏·如果有一个以召唤化学元素战斗的世界会是怎样？/index.html","394b924ea20c8e4f64b4a78a23015662"],["C:/Users/Administrator/Blog/public/2019/知乎收藏·如果有一节永远有电的五号电池，能用来做什么？/index.html","002db4034aa6dc0df037cd0de3ba611c"],["C:/Users/Administrator/Blog/public/2019/知乎收藏·战机的后掠翼，变后掠翼，三角翼，鸭翼各自的特点是什么？/index.html","b337e136be1ab39975e33bf924acdee9"],["C:/Users/Administrator/Blog/public/2019/题解-P1063-【能量项链】/index.html","cfb132c2cf9e106addbb429a0c7dc40a"],["C:/Users/Administrator/Blog/public/2019/题解-P1195-【口袋的天空】/index.html","ff984c07d583b2abab9ab9107c7d6bb3"],["C:/Users/Administrator/Blog/public/2019/题解-P1462-【通往奥格瑞玛的道路】/index.html","d94ff342d8d988284001a249274fbf73"],["C:/Users/Administrator/Blog/public/2019/题解-P2146-【-NOI2015-软件包管理器】/index.html","c9e003cb5db5318d8a557aef9eb7ac2a"],["C:/Users/Administrator/Blog/public/2019/题解-P2782-【友好城市】/index.html","940c12d3a99792873394d7965756fca7"],["C:/Users/Administrator/Blog/public/2019/题解-P3353-【在你窗外闪耀的星星】/index.html","025050a0b1d5e8c27e9cadc9cb074802"],["C:/Users/Administrator/Blog/public/2019/题解-P4513-【小白逛公园】/index.html","c262234d50736fa7820c491170cc3c7a"],["C:/Users/Administrator/Blog/public/404.html","a44984f4ea1331b526089d9194762556"],["C:/Users/Administrator/Blog/public/archives/2019/10/index.html","7f2ff64319d8fd58241a0d616e339545"],["C:/Users/Administrator/Blog/public/archives/2019/10/page/2/index.html","2335c535bd2004075e6e9c7dab3e2ea2"],["C:/Users/Administrator/Blog/public/archives/2019/12/index.html","d320928ba92a33ffb82e618d8e34a8b1"],["C:/Users/Administrator/Blog/public/archives/2019/index.html","856b656b014bfc31a0311503226c4130"],["C:/Users/Administrator/Blog/public/archives/2019/page/2/index.html","7094b0ec7fe98de908a533d9acec71dc"],["C:/Users/Administrator/Blog/public/archives/2019/page/3/index.html","3eb545b26e62da732275d9c2c771ef29"],["C:/Users/Administrator/Blog/public/archives/index.html","2a4fefb22e7ef059941d0461bbb73ac3"],["C:/Users/Administrator/Blog/public/archives/page/2/index.html","00e8714e95ceb21e1a824f6a2ab88b1d"],["C:/Users/Administrator/Blog/public/archives/page/3/index.html","7c3914827514fa605a378b8d8fe9de2f"],["C:/Users/Administrator/Blog/public/categories/index.html","d495a069e55ba5b872c6f8a62a5b58b7"],["C:/Users/Administrator/Blog/public/categories/主站/index.html","54b31af29770e9068f521842e08ec042"],["C:/Users/Administrator/Blog/public/categories/主站/page/2/index.html","abc644dbb5c7e12bcdbd04f95352dca1"],["C:/Users/Administrator/Blog/public/categories/知乎收藏/index.html","8b07903da54535e278e968071d1f8f93"],["C:/Users/Administrator/Blog/public/css/index.css","fceab32a56aed7f64318a4e283ca5a4b"],["C:/Users/Administrator/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/Administrator/Blog/public/gallery/index.html","f7f142478dfc7696479efd2066154698"],["C:/Users/Administrator/Blog/public/google7b82fc823a037c09.html","fcf87e39e2ee38351c993d34c078e5b0"],["C:/Users/Administrator/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/Administrator/Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/Administrator/Blog/public/index.html","4cc5772fa6b560fa59fb1defcce3ff79"],["C:/Users/Administrator/Blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["C:/Users/Administrator/Blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["C:/Users/Administrator/Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["C:/Users/Administrator/Blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/Administrator/Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/Administrator/Blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["C:/Users/Administrator/Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/Administrator/Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["C:/Users/Administrator/Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/Administrator/Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/Administrator/Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/Administrator/Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/Administrator/Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/Administrator/Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/Administrator/Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/Administrator/Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/Administrator/Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/Administrator/Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/Administrator/Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/Administrator/Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/Administrator/Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/Administrator/Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/Administrator/Blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/Administrator/Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/Administrator/Blog/public/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["C:/Users/Administrator/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/Administrator/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/Administrator/Blog/public/page/2/index.html","3d94562fdec17d448b2b11fc0664344d"],["C:/Users/Administrator/Blog/public/page/3/index.html","ea60f50ce6f4388c0e6c4f23767f7fd1"],["C:/Users/Administrator/Blog/public/tags/LaTex/index.html","ee595a86fc9bd1881f6b6e24134e2357"],["C:/Users/Administrator/Blog/public/tags/index-1.html","d495a069e55ba5b872c6f8a62a5b58b7"],["C:/Users/Administrator/Blog/public/tags/index.html","30bf70634a9219392b653add062f12ab"],["C:/Users/Administrator/Blog/public/tags/三体/index.html","b10c3ed35409bc5ebb05bb573ba998d6"],["C:/Users/Administrator/Blog/public/tags/实用教程/index.html","e55b121cd0e033b8ffefc8292ad09dbd"],["C:/Users/Administrator/Blog/public/tags/小技巧/index.html","9ff007b98545eef28e5264ffbe539949"],["C:/Users/Administrator/Blog/public/tags/数据结构/index.html","71ad74d63cff517ee89a82a1683a8ca0"],["C:/Users/Administrator/Blog/public/tags/知乎/index.html","438af7d382e62b3f9b2893cddc91e9c7"],["C:/Users/Administrator/Blog/public/tags/算法笔记/index.html","1bc27882cadc064c23ee94b5996e3af9"],["C:/Users/Administrator/Blog/public/tags/题解/index.html","f4676a1463a2a8554931e533158b2411"]];
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







