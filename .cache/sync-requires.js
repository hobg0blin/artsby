const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-about-js": hot(preferDefault(require("/Users/brentbailey/Documents/personal/artsby/website/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/brentbailey/Documents/personal/artsby/website/src/pages/index.js"))),
  "component---src-templates-work-js": hot(preferDefault(require("/Users/brentbailey/Documents/personal/artsby/website/src/templates/work.js")))
}

