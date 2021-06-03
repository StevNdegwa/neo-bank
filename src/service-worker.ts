/// <reference lib="webworker" />

/* eslint-disable no-restricted-globals */

import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { clientsClaim, setCacheNameDetails } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkOnly, StaleWhileRevalidate } from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;

clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

setCacheNameDetails({
  prefix: "neo-bank",
  suffix: "beta.0.2",
  precache: "nb-def"
})

const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');

registerRoute(
  ({ request, url }: { request: Request; url: URL }) => {
    if (request.mode !== 'navigate') {
      return false;
    }
    if (url.pathname.startsWith('/_')) {
      return false;
    }
    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    }
    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

registerRoute(
  ({ url }:{ url:URL }) => url.origin === self.location.origin && url.pathname.endsWith('.png'),
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Cache google fonts
registerRoute(
  ({ url }: { url:URL })=>url.origin === "https://fonts.googleapis.com",
  new StaleWhileRevalidate({
    cacheName: "google-fonts",
    plugins: [
      new ExpirationPlugin({ maxEntries: 20 })
    ]
  })
)

//cache html
registerRoute(
  ({ request }: { request:Request; })=> request.destination === "style",
  new StaleWhileRevalidate({
    cacheName:"styles",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200]
      }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30
      })
    ]
  })
)

//Fetch API requests from network
registerRoute(
  new RegExp("graphql"),
  new NetworkOnly()
)

/**setCatchHandler(
  async ({ event }: { event?: ExtendableEvent; })=>{
    
    if(event){
      if(event.request.destination === "document"){
        return matchPrecache("/offline.html")
      }
    }

    return Response.error();
  }
)**/