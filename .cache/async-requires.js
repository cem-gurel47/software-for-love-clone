// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-styles-ts": () => import("./../../../src/pages/contact.styles.ts" /* webpackChunkName: "component---src-pages-contact-styles-ts" */),
  "component---src-pages-contact-tsx": () => import("./../../../src/pages/contact.tsx" /* webpackChunkName: "component---src-pages-contact-tsx" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-index-styles-ts": () => import("./../../../src/pages/index.styles.ts" /* webpackChunkName: "component---src-pages-index-styles-ts" */),
  "component---src-pages-volunteers-styles-ts": () => import("./../../../src/pages/volunteers.styles.ts" /* webpackChunkName: "component---src-pages-volunteers-styles-ts" */),
  "component---src-pages-volunteers-tsx": () => import("./../../../src/pages/volunteers.tsx" /* webpackChunkName: "component---src-pages-volunteers-tsx" */)
}

