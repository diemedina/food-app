if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>a(e,t),f={module:{uri:t},exports:i,require:r};s[t]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(n(...e),i)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/-cAvV4GTyfZS5MXN_baP0/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/-cAvV4GTyfZS5MXN_baP0/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/190-100ff3202c3940cd.js",revision:"-cAvV4GTyfZS5MXN_baP0"},{url:"/_next/static/chunks/231-306702256c5436ea.js",revision:"-cAvV4GTyfZS5MXN_baP0"},{url:"/_next/static/chunks/app/_not-found/page-cf08b108cae451e3.js",revision:"-cAvV4GTyfZS5MXN_baP0"},{url:"/_next/static/chunks/app/calendar/page-c18f1864256e4b3b.js",revision:"-cAvV4GTyfZS5MXN_baP0"},{url:"/_next/static/chunks/app/cart/page-82d2dfe7eb72b520.js",revision:"-cAvV4GTyfZS5MXN_baP0"},{url:"/_next/static/chunks/app/kitchen/create/page-71620c8b9237b762.js",revision:"-cAvV4GTyfZS5MXN_baP0"},{url:"/_next/static/chunks/app/kitchen/page-2c0ee566690eebd8.js",revision:"-cAvV4GTyfZS5MXN_baP0"},{url:"/_next/static/chunks/app/layout-963e4c08f318fbc2.js",revision:"-cAvV4GTyfZS5MXN_baP0"},{url:"/_next/static/chunks/app/page-c31fc81b714c9979.js",revision:"-cAvV4GTyfZS5MXN_baP0"},{url:"/_next/static/chunks/app/recipe/create/page-72de33fa1f0b5bf5.js",revision:"-cAvV4GTyfZS5MXN_baP0"},{url:"/_next/static/chunks/app/recipe/page-1c03bb051c5e90fa.js",revision:"-cAvV4GTyfZS5MXN_baP0"},{url:"/_next/static/chunks/fd9d1056-2821b0f0cabcd8bd.js",revision:"-cAvV4GTyfZS5MXN_baP0"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"-cAvV4GTyfZS5MXN_baP0"},{url:"/_next/static/chunks/main-5790dd4a0fd60476.js",revision:"-cAvV4GTyfZS5MXN_baP0"},{url:"/_next/static/chunks/main-app-6d7523a3cc01f69f.js",revision:"-cAvV4GTyfZS5MXN_baP0"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"-cAvV4GTyfZS5MXN_baP0"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"-cAvV4GTyfZS5MXN_baP0"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-0a1ed8f6a7e407db.js",revision:"-cAvV4GTyfZS5MXN_baP0"},{url:"/_next/static/css/0253c82b748db783.css",revision:"0253c82b748db783"},{url:"/_next/static/css/0f12332b69a2cf87.css",revision:"0f12332b69a2cf87"},{url:"/_next/static/css/1ace527bef5552b8.css",revision:"1ace527bef5552b8"},{url:"/_next/static/css/3c7aaba19a7363f6.css",revision:"3c7aaba19a7363f6"},{url:"/_next/static/css/652ae12bf4c310ef.css",revision:"652ae12bf4c310ef"},{url:"/_next/static/css/d6f8e15bf6b89e77.css",revision:"d6f8e15bf6b89e77"},{url:"/_next/static/css/e9ef3bb36bd61411.css",revision:"e9ef3bb36bd61411"},{url:"/_next/static/css/ee03f7e006957a60.css",revision:"ee03f7e006957a60"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));