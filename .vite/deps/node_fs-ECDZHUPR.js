import {
  __commonJS
} from "./chunk-LK32TJAX.js";

// browser-external:node:fs
var require_node_fs = __commonJS({
  "browser-external:node:fs"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "node:fs" has been externalized for browser compatibility. Cannot access "node:fs.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});
export default require_node_fs();
//# sourceMappingURL=node_fs-ECDZHUPR.js.map
