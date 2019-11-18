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

var precacheConfig = [["C:/Users/Administrator/Blog/public/2019/Crash-Report/index.html","b5b4d1f9ef04c6e3d9cdc15353396e09"],["C:/Users/Administrator/Blog/public/2019/GDB简单实用教程/index.html","296d018bc816b2ee74f72510178b089f"],["C:/Users/Administrator/Blog/public/2019/LaTeX数学符号大全/index.html","52190ae69a305cde243b43bd9cc1a500"],["C:/Users/Administrator/Blog/public/2019/hello-world/index.html","e8cf12c27b2fd053467cca72e6a7bc38"],["C:/Users/Administrator/Blog/public/2019/【数据结构】并査集/index.html","6470f1747d6c403179a7f8ffbcbd9400"],["C:/Users/Administrator/Blog/public/2019/【数据结构】线段树/index.html","2dfb9f7ffa568870f7be66f033965cec"],["C:/Users/Administrator/Blog/public/2019/【算法笔记】快速幂/index.html","b0a90495d038fb15d416805dd7b838be"],["C:/Users/Administrator/Blog/public/2019/【算法笔记】树链剖分/index.html","5b4bc03ac80054d914ba5010fae5baf9"],["C:/Users/Administrator/Blog/public/2019/三体精选/index.html","7d1093abe1fe5117ea71d89b7d6c173b"],["C:/Users/Administrator/Blog/public/2019/使用EagleGet快速下载bilibili上的港澳台专属番剧/index.html","ee2c81b20c1e43df378bb5894fb6de74"],["C:/Users/Administrator/Blog/public/2019/分享一个快读/index.html","cda5713001dfbb9132bc88707f1c7b25"],["C:/Users/Administrator/Blog/public/2019/图床推荐/index.html","eabe4a005adf5e739a3c6ade515671a4"],["C:/Users/Administrator/Blog/public/2019/题解-P1063-【能量项链】/index.html","609b95d2e85b0bab7989cabbf652b562"],["C:/Users/Administrator/Blog/public/2019/题解-P1195-【口袋的天空】/index.html","c27f56b1991b90816f66a2cca85250dc"],["C:/Users/Administrator/Blog/public/2019/题解-P1462-【通往奥格瑞玛的道路】/index.html","cb088e7c9527bd891aae1b48824d694f"],["C:/Users/Administrator/Blog/public/2019/题解-P2146-【-NOI2015-软件包管理器】/index.html","84d5dd97f0024aabb5400dcff72df651"],["C:/Users/Administrator/Blog/public/2019/题解-P2782-【友好城市】/index.html","c42ffc7104426f03fd500a82a851f4a1"],["C:/Users/Administrator/Blog/public/2019/题解-P3353-【在你窗外闪耀的星星】/index.html","e1fc70d23a6ed1b55cd99e44030e0721"],["C:/Users/Administrator/Blog/public/2019/题解-P4513-【小白逛公园】/index.html","8d0cc538e9698905acf821e8277145ac"],["C:/Users/Administrator/Blog/public/404.html","2365b280530127c89d9d7ad68981d42d"],["C:/Users/Administrator/Blog/public/archives/2019/10/index.html","6882cda0683343cfff7c79fb0299e803"],["C:/Users/Administrator/Blog/public/archives/2019/10/page/2/index.html","1621a4cdb78a9ccd6faca4bc2c2ed48a"],["C:/Users/Administrator/Blog/public/archives/2019/index.html","460ece2bd19a741b216deb4ca8a305cd"],["C:/Users/Administrator/Blog/public/archives/2019/page/2/index.html","41e6a8f01911e069a42278ed9d6e21d8"],["C:/Users/Administrator/Blog/public/archives/index.html","be76aa86ab6bb3f4556db1e182cfa7ce"],["C:/Users/Administrator/Blog/public/archives/page/2/index.html","34eadda2ce66315671e5aa3ffddced6c"],["C:/Users/Administrator/Blog/public/categories/index.html","02684220abce2cbc04be69717af9ec07"],["C:/Users/Administrator/Blog/public/categories/主站/index.html","b45d7c5a15ea7ab06478642f031116ab"],["C:/Users/Administrator/Blog/public/categories/主站/page/2/index.html","8679afa1cb6b3440d3095ca61ee6bb5e"],["C:/Users/Administrator/Blog/public/css/index.css","fceab32a56aed7f64318a4e283ca5a4b"],["C:/Users/Administrator/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/Administrator/Blog/public/gallery/index.html","ebfb5d0c1b41376de6270773a893c222"],["C:/Users/Administrator/Blog/public/google7b82fc823a037c09.html","fcf87e39e2ee38351c993d34c078e5b0"],["C:/Users/Administrator/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/Administrator/Blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/Administrator/Blog/public/index.html","fa0bc44cde9bb7e46c466d20d1389280"],["C:/Users/Administrator/Blog/public/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["C:/Users/Administrator/Blog/public/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["C:/Users/Administrator/Blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["C:/Users/Administrator/Blog/public/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["C:/Users/Administrator/Blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/Administrator/Blog/public/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["C:/Users/Administrator/Blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/Administrator/Blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["C:/Users/Administrator/Blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/Administrator/Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/Administrator/Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/Administrator/Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/Administrator/Blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/Administrator/Blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["C:/Users/Administrator/Blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["C:/Users/Administrator/Blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["C:/Users/Administrator/Blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["C:/Users/Administrator/Blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["C:/Users/Administrator/Blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["C:/Users/Administrator/Blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["C:/Users/Administrator/Blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/Administrator/Blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/Administrator/Blog/public/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["C:/Users/Administrator/Blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/Administrator/Blog/public/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["C:/Users/Administrator/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/Administrator/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/Administrator/Blog/public/page/2/index.html","75ab67aadfe0203aa4214c7a846d40cc"],["C:/Users/Administrator/Blog/public/tags/LaTex/index.html","d9a774084165e59e49bb70d7d6fb29ed"],["C:/Users/Administrator/Blog/public/tags/index-1.html","02684220abce2cbc04be69717af9ec07"],["C:/Users/Administrator/Blog/public/tags/index.html","d827951db14381f5598bff5b1dc0d690"],["C:/Users/Administrator/Blog/public/tags/三体/index.html","c5a77ac1704684ca4f714b8d9eea5e54"],["C:/Users/Administrator/Blog/public/tags/实用教程/index.html","0626d76b7bbde5334cea4eef1e8160e8"],["C:/Users/Administrator/Blog/public/tags/小技巧/index.html","942100ae1fa7848bef1139c9da08a9e3"],["C:/Users/Administrator/Blog/public/tags/数据结构/index.html","9c36c186bb92e653360c2c67ad3a93d9"],["C:/Users/Administrator/Blog/public/tags/算法笔记/index.html","ec5d799078cb0e8b3a7e84dc9f3459b8"],["C:/Users/Administrator/Blog/public/tags/题解/index.html","3522d2679264bc06a5478aca0d1ea3ed"]];
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







