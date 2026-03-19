import { g as getDefaultExportFromCjs } from "../_chunks/_libs/react.mjs";
import { r as require$$0 } from "./node-fetch.mjs";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: function() {
                return e[k];
              }
            });
          }
        }
      }
    }
  }
  return Object.freeze(n);
}
var nodePonyfill$2 = { exports: {} };
var hasRequiredNodePonyfill;
function requireNodePonyfill() {
  if (hasRequiredNodePonyfill) return nodePonyfill$2.exports;
  hasRequiredNodePonyfill = 1;
  (function(module, exports$1) {
    const nodeFetch = require$$0;
    const realFetch = nodeFetch.default || nodeFetch;
    const fetch = function(url, options) {
      if (/^\/\//.test(url)) {
        url = "https:" + url;
      }
      return realFetch.call(this, url, options);
    };
    fetch.ponyfill = true;
    module.exports = exports$1 = fetch;
    exports$1.fetch = fetch;
    exports$1.Headers = nodeFetch.Headers;
    exports$1.Request = nodeFetch.Request;
    exports$1.Response = nodeFetch.Response;
    exports$1.default = fetch;
  })(nodePonyfill$2, nodePonyfill$2.exports);
  return nodePonyfill$2.exports;
}
var nodePonyfillExports = /* @__PURE__ */ requireNodePonyfill();
const nodePonyfill = /* @__PURE__ */ getDefaultExportFromCjs(nodePonyfillExports);
const nodePonyfill$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: nodePonyfill
}, [nodePonyfillExports]);
export {
  nodePonyfill$1 as n
};
