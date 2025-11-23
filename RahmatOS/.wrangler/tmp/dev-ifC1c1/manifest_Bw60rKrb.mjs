globalThis.process ??= {}; globalThis.process.env ??= {};
import { h as decodeKey } from './chunks/astro/server_DpfhvXrb.mjs';
import './chunks/astro-designed-error-pages_CBEJ9rWT.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_CcQf8l6r.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/rahmatjunaid/Projects/RahmatOS/RahmatOS/","cacheDir":"file:///Users/rahmatjunaid/Projects/RahmatOS/RahmatOS/node_modules/.astro/","outDir":"file:///Users/rahmatjunaid/Projects/RahmatOS/RahmatOS/dist/","srcDir":"file:///Users/rahmatjunaid/Projects/RahmatOS/RahmatOS/src/","publicDir":"file:///Users/rahmatjunaid/Projects/RahmatOS/RahmatOS/public/","buildClientDir":"file:///Users/rahmatjunaid/Projects/RahmatOS/RahmatOS/dist/","buildServerDir":"file:///Users/rahmatjunaid/Projects/RahmatOS/RahmatOS/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"api/books","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/books","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/books\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"books","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/books.ts","pathname":"/api/books","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"api/cache-clear","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/cache-clear","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/cache-clear\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"cache-clear","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/cache-clear.ts","pathname":"/api/cache-clear","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"bookmarks/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/bookmarks","isIndex":false,"type":"page","pattern":"^\\/bookmarks\\/?$","segments":[[{"content":"bookmarks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/bookmarks.astro","pathname":"/bookmarks","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"books/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/books","isIndex":false,"type":"page","pattern":"^\\/books\\/?$","segments":[[{"content":"books","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/books.astro","pathname":"/books","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/rahmatjunaid/Projects/RahmatOS/RahmatOS/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["/Users/rahmatjunaid/Projects/RahmatOS/RahmatOS/src/pages/bookmarks.astro",{"propagation":"none","containsHead":true}],["/Users/rahmatjunaid/Projects/RahmatOS/RahmatOS/src/pages/books.astro",{"propagation":"none","containsHead":true}],["/Users/rahmatjunaid/Projects/RahmatOS/RahmatOS/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/rahmatjunaid/Projects/RahmatOS/RahmatOS/src/pages/projects.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/books@_@ts":"pages/api/books.astro.mjs","\u0000@astro-page:src/pages/api/cache-clear@_@ts":"pages/api/cache-clear.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/bookmarks@_@astro":"pages/bookmarks.astro.mjs","\u0000@astro-page:src/pages/books@_@astro":"pages/books.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Bw60rKrb.mjs","/Users/rahmatjunaid/Projects/RahmatOS/RahmatOS/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","@astrojs/react/client.js":"_astro/client.Bx7k8SOM.js","/Users/rahmatjunaid/Projects/RahmatOS/RahmatOS/src/pages/books.astro?astro&type=script&index=0&lang.ts":"_astro/books.astro_astro_type_script_index_0_lang.CD75yYsp.js","/Users/rahmatjunaid/Projects/RahmatOS/RahmatOS/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CGZP55Fb.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/rahmatjunaid/Projects/RahmatOS/RahmatOS/src/pages/index.astro?astro&type=script&index=0&lang.ts","const s=\"literal-currently-reading\";function n(t,o){t.length>0?o.innerHTML=`\n\t\t\t\t\t<div class=\"flex gap-4 overflow-x-auto pb-4\">\n\t\t\t\t\t\t${t.map(e=>`\n\t\t\t\t\t\t\t<div class=\"relative group flex-shrink-0\">\n\t\t\t\t\t\t\t\t<div class=\"w-24 h-32 bg-gray-100 rounded shadow-sm overflow-hidden\">\n\t\t\t\t\t\t\t\t\t${e.book.cover?`<img src=\"${e.book.cover}\" alt=\"${e.book.title}\" class=\"w-full h-full object-cover\" />`:'<div class=\"w-full h-full flex items-center justify-center text-gray-400\">📖</div>'}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded flex flex-col justify-center items-center p-2 text-center\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"text-white text-xs font-medium mb-1 line-clamp-2\">${e.book.title}</h3>\n\t\t\t\t\t\t\t\t\t<p class=\"text-gray-300 text-xs line-clamp-1\">by ${e.book.authors.map(a=>a.name).join(\", \")}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t`).join(\"\")}\n\t\t\t\t\t</div>\n\t\t\t\t`:o.innerHTML=`\n\t\t\t\t\t<div class=\"text-center py-8\">\n\t\t\t\t\t\t<p class=\"text-gray-500\">No books currently being read.</p>\n\t\t\t\t\t</div>\n\t\t\t\t`}async function c(){const t=document.getElementById(\"currently-reading-container\");if(t)try{const o=localStorage.getItem(s);if(o){const{data:l,timestamp:i}=JSON.parse(o);if(Date.now()-i<6e5){console.log(\"Using cached books data\"),n(l,t);return}}console.log(\"Fetching fresh books data...\");const e=await fetch(\"/api/books?type=currently-reading\");if(!e.ok)throw new Error(\"Failed to fetch books\");let a=await e.json();const r=Array.isArray(a)?a:a.currentlyReading||[];localStorage.setItem(s,JSON.stringify({data:r,timestamp:Date.now()})),n(r,t)}catch(o){console.error(\"Error loading books:\",o);const e=localStorage.getItem(s);if(e){const{data:a}=JSON.parse(e);console.log(\"Using stale cache as fallback\"),n(a,t)}else t.innerHTML=`\n\t\t\t\t\t\t<div class=\"text-center py-8\">\n\t\t\t\t\t\t\t<p class=\"text-gray-500\">Failed to load books. Please check your configuration.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t`}}document.readyState===\"loading\"?document.addEventListener(\"DOMContentLoaded\",c):c();"]],"assets":["/_astro/blog.phbeSk11.css","/favicon.svg","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/index.js","/_worker.js/noop-entrypoint.mjs","/_worker.js/renderers.mjs","/_astro/books.astro_astro_type_script_index_0_lang.CD75yYsp.js","/_astro/client.Bx7k8SOM.js","/data/books.json","/_worker.js/_astro/blog.phbeSk11.css","/_worker.js/pages/blog.astro.mjs","/_worker.js/pages/bookmarks.astro.mjs","/_worker.js/pages/books.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/projects.astro.mjs","/_worker.js/pages/api/books.astro.mjs","/_worker.js/pages/api/cache-clear.astro.mjs","/_worker.js/chunks/Navigation_DaidwvTp.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_CMVo30Ln.mjs","/_worker.js/chunks/astro-designed-error-pages_CBEJ9rWT.mjs","/_worker.js/chunks/astro_Qr0Ne11X.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/index_DZCVV4O5.mjs","/_worker.js/chunks/noop-middleware_CcQf8l6r.mjs","/_worker.js/chunks/astro/server_DpfhvXrb.mjs","/api/books","/api/cache-clear","/blog/index.html","/bookmarks/index.html","/books/index.html","/projects/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"YncNiZez+2/kAIKLXTKyiI4P1YmuXT2rjNmoVOCzMy8=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
