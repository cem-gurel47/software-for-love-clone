
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/cemgurel/Desktop/React/software-for-love-clone/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/cemgurel/Desktop/React/software-for-love-clone/src/pages/404.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/cemgurel/Desktop/React/software-for-love-clone/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/cemgurel/Desktop/React/software-for-love-clone/src/pages/index.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/cemgurel/Desktop/React/software-for-love-clone/src/pages/using-typescript.tsx"))
}

