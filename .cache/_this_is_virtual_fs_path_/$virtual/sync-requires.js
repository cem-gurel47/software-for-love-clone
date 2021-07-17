
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/cemgurel/Desktop/React/software-for-love-clone/src/pages/404.js")),
  "component---src-pages-contact-styles-ts": preferDefault(require("/Users/cemgurel/Desktop/React/software-for-love-clone/src/pages/contact.styles.ts")),
  "component---src-pages-contact-tsx": preferDefault(require("/Users/cemgurel/Desktop/React/software-for-love-clone/src/pages/contact.tsx")),
  "component---src-pages-index-js": preferDefault(require("/Users/cemgurel/Desktop/React/software-for-love-clone/src/pages/index.js")),
  "component---src-pages-index-styles-ts": preferDefault(require("/Users/cemgurel/Desktop/React/software-for-love-clone/src/pages/index.styles.ts")),
  "component---src-pages-volunteers-styles-ts": preferDefault(require("/Users/cemgurel/Desktop/React/software-for-love-clone/src/pages/volunteers.styles.ts")),
  "component---src-pages-volunteers-tsx": preferDefault(require("/Users/cemgurel/Desktop/React/software-for-love-clone/src/pages/volunteers.tsx"))
}

