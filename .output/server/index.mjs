globalThis.__nitro_main__ = import.meta.url;
import { a as NodeResponse, s as serve } from "./_libs/srvx.mjs";
import { d as defineHandler, H as HTTPError, t as toEventHandler, a as defineLazyEventHandler, b as H3Core, c as toRequest } from "./_libs/h3.mjs";
import { d as decodePath, w as withLeadingSlash, a as withoutTrailingSlash, j as joinURL } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import "node:http";
import "node:stream";
import "node:https";
import "node:http2";
import "./_libs/rou3.mjs";
function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled;
  const status = error.status || 500;
  const url = event.url || new URL(event.req.url);
  if (status === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.req.method}] ${url}
`, error);
  }
  const headers2 = {
    "content-type": "application/json",
    "x-content-type-options": "nosniff",
    "x-frame-options": "DENY",
    "referrer-policy": "no-referrer",
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  if (status === 404 || !event.res.headers.has("cache-control")) {
    headers2["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    status,
    statusText: error.statusText,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status,
    statusText: error.statusText,
    headers: headers2,
    body
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
const headers = ((m) => function headersRouteRule(event) {
  for (const [key2, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key2, value);
  }
});
const assets = {
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": '"396-hIS2jyx9wmwlbTNol5gEVvs8Zoc"',
    "mtime": "2026-03-19T18:27:26.608Z",
    "size": 918,
    "path": "../public/sitemap.xml"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"10b-YWNToz8OiL/KA+0BmusszjaITsY"',
    "mtime": "2026-03-19T18:27:26.600Z",
    "size": 267,
    "path": "../public/robots.txt"
  },
  "/vite.svg": {
    "type": "image/svg+xml",
    "etag": '"5d9-9/Odcje3kalF1Spc16j7Nl8xM2Y"',
    "mtime": "2026-03-19T18:27:26.612Z",
    "size": 1497,
    "path": "../public/vite.svg"
  },
  "/assets/abstract_topographical_map_pattern_dark_maroon_high_contrast-BGZ3z2na.webp": {
    "type": "image/webp",
    "etag": '"39266-girz2tNIfWMq1Liq+eeA57WY10M"',
    "mtime": "2026-03-19T21:09:14.360Z",
    "size": 234086,
    "path": "../public/assets/abstract_topographical_map_pattern_dark_maroon_high_contrast-BGZ3z2na.webp"
  },
  "/assets/about-DtZ7M9NH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4154-FxS/rOMyS3/TOUvzpFNfYpq8crk"',
    "mtime": "2026-03-19T21:09:14.363Z",
    "size": 16724,
    "path": "../public/assets/about-DtZ7M9NH.js"
  },
  "/assets/browser-ponyfill-CHo5bPCh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2837-8SvTZORUkxcMTPJPLTNfcoXBDOI"',
    "mtime": "2026-03-19T21:09:14.369Z",
    "size": 10295,
    "path": "../public/assets/browser-ponyfill-CHo5bPCh.js"
  },
  "/assets/carousel-BcHcVme_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"80d9-9loreTyPfS0amk4ModrYPO6qEAw"',
    "mtime": "2026-03-19T21:09:14.369Z",
    "size": 32985,
    "path": "../public/assets/carousel-BcHcVme_.js"
  },
  "/assets/contact-us-Bttl6LVa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2042-FVfkJkeRb683OKv0LA/U4F80FoI"',
    "mtime": "2026-03-19T21:09:14.363Z",
    "size": 8258,
    "path": "../public/assets/contact-us-Bttl6LVa.js"
  },
  "/assets/ca-04-p42hzUar.jpg": {
    "type": "image/jpeg",
    "etag": '"6375e-4Z9yRAqenj79eIfCltQk4o88/40"',
    "mtime": "2026-03-19T21:09:14.325Z",
    "size": 407390,
    "path": "../public/assets/ca-04-p42hzUar.jpg"
  },
  "/assets/drill-DLbXwzfG.avif": {
    "type": "image/avif",
    "etag": '"382d3-/6V0CqD2LpWXPlJbPSsKZLRSq2g"',
    "mtime": "2026-03-19T21:09:14.321Z",
    "size": 230099,
    "path": "../public/assets/drill-DLbXwzfG.avif"
  },
  "/assets/crew-C-lpl__d.webp": {
    "type": "image/webp",
    "etag": '"72ee6-VuUW2GWd4WRfIVGtTaxoqe/9lLk"',
    "mtime": "2026-03-19T21:09:14.321Z",
    "size": 470758,
    "path": "../public/assets/crew-C-lpl__d.webp"
  },
  "/assets/drilling-DifqaHUL.webp": {
    "type": "image/webp",
    "etag": '"49a1c-0AbfJ3v62NKqmy4VkFV8XkftG2Y"',
    "mtime": "2026-03-19T21:09:14.321Z",
    "size": 301596,
    "path": "../public/assets/drilling-DifqaHUL.webp"
  },
  "/assets/el-1-B2FFSErX.jpg": {
    "type": "image/jpeg",
    "etag": '"19e1b-HdOjhXZ3Lbub5zPfhHTWID68hek"',
    "mtime": "2026-03-19T21:09:14.305Z",
    "size": 106011,
    "path": "../public/assets/el-1-B2FFSErX.jpg"
  },
  "/assets/el-3-B-28Mf7B.jpg": {
    "type": "image/jpeg",
    "etag": '"1f538-6aoOesV47o/9f9Ae0ufhkcgIrMs"',
    "mtime": "2026-03-19T21:09:14.306Z",
    "size": 128312,
    "path": "../public/assets/el-3-B-28Mf7B.jpg"
  },
  "/assets/el-4-BQVivoVv.webp": {
    "type": "image/webp",
    "etag": '"a058-uEVT43YihnmQFn8c0ydqxTFGsMk"',
    "mtime": "2026-03-19T21:09:14.319Z",
    "size": 41048,
    "path": "../public/assets/el-4-BQVivoVv.webp"
  },
  "/assets/el-2-CvHMQsEF.avif": {
    "type": "image/avif",
    "etag": '"1c2a6-le8gjM7S37maXNkrUZrl6Nuo/ds"',
    "mtime": "2026-03-19T21:09:14.303Z",
    "size": 115366,
    "path": "../public/assets/el-2-CvHMQsEF.avif"
  },
  "/assets/el-5-CqPePhfn.jpg": {
    "type": "image/jpeg",
    "etag": '"28016-VjfA8GjYysuS774g7POFK3G06IU"',
    "mtime": "2026-03-19T21:09:14.319Z",
    "size": 163862,
    "path": "../public/assets/el-5-CqPePhfn.jpg"
  },
  "/assets/bulldozer-ozfsGf6s.webp": {
    "type": "image/webp",
    "etag": '"94bb8-m6IbTpitqA911Xhtjl0s375Y9DM"',
    "mtime": "2026-03-19T21:09:14.406Z",
    "size": 609208,
    "path": "../public/assets/bulldozer-ozfsGf6s.webp"
  },
  "/assets/develon-C2MAq8JO.jpg": {
    "type": "image/jpeg",
    "etag": '"b4f1f-8wagDc9eiHb5yJ3M86kmoy8HrVg"',
    "mtime": "2026-03-19T21:09:14.408Z",
    "size": 741151,
    "path": "../public/assets/develon-C2MAq8JO.jpg"
  },
  "/assets/ef-01-DWiH4kdM.jpeg": {
    "type": "image/jpeg",
    "etag": '"c41cb-q+AiL3sGElENG0vPPim9Fgq6W18"',
    "mtime": "2026-03-19T21:09:14.408Z",
    "size": 803275,
    "path": "../public/assets/ef-01-DWiH4kdM.jpeg"
  },
  "/assets/bg_o-CWnqzSzd.jpg": {
    "type": "image/jpeg",
    "etag": '"14e09f-CA7HoFcOaYOpLgL2pCDOONItSRA"',
    "mtime": "2026-03-19T21:09:14.421Z",
    "size": 1368223,
    "path": "../public/assets/bg_o-CWnqzSzd.jpg"
  },
  "/assets/ca-01-DILw52ZT.jpeg": {
    "type": "image/jpeg",
    "etag": '"16b408-XR4/4C0+FeVhIQ+c2pu0TerCcNY"',
    "mtime": "2026-03-19T21:09:14.421Z",
    "size": 1487880,
    "path": "../public/assets/ca-01-DILw52ZT.jpeg"
  },
  "/assets/ca-03-ByJ-zvWX.jpg": {
    "type": "image/jpeg",
    "etag": '"17d5aa-9funrtr1A7IKsorlEze+o3eDHe8"',
    "mtime": "2026-03-19T21:09:14.421Z",
    "size": 1562026,
    "path": "../public/assets/ca-03-ByJ-zvWX.jpg"
  },
  "/assets/ef-02-CwePIN6F.jpg": {
    "type": "image/jpeg",
    "etag": '"191ed6-3jxWPpGeEV9NHc42jSbd9L6vJJE"',
    "mtime": "2026-03-19T21:09:14.425Z",
    "size": 1646294,
    "path": "../public/assets/ef-02-CwePIN6F.jpg"
  },
  "/assets/ef-03-BlnyDWEk.png": {
    "type": "image/png",
    "etag": '"1f435b-Fml+tjDh6Q+TYVJl+rvWUdsWIdU"',
    "mtime": "2026-03-19T21:09:14.425Z",
    "size": 2048859,
    "path": "../public/assets/ef-03-BlnyDWEk.png"
  },
  "/assets/eo-3-BEdE9mIV.jpg": {
    "type": "image/jpeg",
    "etag": '"4b070-6RjY16fiP+M3i5YdODLrWlTx9uU"',
    "mtime": "2026-03-19T21:09:14.321Z",
    "size": 307312,
    "path": "../public/assets/eo-3-BEdE9mIV.jpg"
  },
  "/assets/eo-1-QLTVphYD.webp": {
    "type": "image/webp",
    "etag": '"13c2c-5U7Kv94qkbstHrBqoktgfH8+WWU"',
    "mtime": "2026-03-19T21:09:14.319Z",
    "size": 80940,
    "path": "../public/assets/eo-1-QLTVphYD.webp"
  },
  "/assets/eo-4-D8DsUjom.jpg": {
    "type": "image/jpeg",
    "etag": '"7d22a-ZrYu3y2SsEVbZhpT1NF4vQmLyg0"',
    "mtime": "2026-03-19T21:09:14.322Z",
    "size": 512554,
    "path": "../public/assets/eo-4-D8DsUjom.jpg"
  },
  "/assets/eo-6-CcHM5h0C.jpg": {
    "type": "image/jpeg",
    "etag": '"374a5-6abzbx3UDRSRBbIyb21IQQ+UQHg"',
    "mtime": "2026-03-19T21:09:14.321Z",
    "size": 226469,
    "path": "../public/assets/eo-6-CcHM5h0C.jpg"
  },
  "/assets/et-01-CwZSJp_a.png": {
    "type": "image/png",
    "etag": '"46570-QlB8s/8YZDyKCLS/WtxbY0BtY9Q"',
    "mtime": "2026-03-19T21:09:14.319Z",
    "size": 288112,
    "path": "../public/assets/et-01-CwZSJp_a.png"
  },
  "/assets/et-05-IjMqVLor.avif": {
    "type": "image/avif",
    "etag": '"1de7d-4OIrFP2UwJoptnj9AmW2yF1Zdy8"',
    "mtime": "2026-03-19T21:09:14.319Z",
    "size": 122493,
    "path": "../public/assets/et-05-IjMqVLor.avif"
  },
  "/assets/et-03-DjCwfxZl.jpg": {
    "type": "image/jpeg",
    "etag": '"3038e-ic9zhxeAWfvctsDWoTuXlN9oA+c"',
    "mtime": "2026-03-19T21:09:14.319Z",
    "size": 197518,
    "path": "../public/assets/et-03-DjCwfxZl.jpg"
  },
  "/assets/et-02-CsQEioER.jpg": {
    "type": "image/jpeg",
    "etag": '"50696-oQg370qUWaoIlRLOxxr8kMj59FE"',
    "mtime": "2026-03-19T21:09:14.319Z",
    "size": 329366,
    "path": "../public/assets/et-02-CsQEioER.jpg"
  },
  "/assets/excavators-BNQu-APY.avif": {
    "type": "image/avif",
    "etag": '"2c683-uZzuNeLbKYP7MMAUESRWX6b4q1M"',
    "mtime": "2026-03-19T21:09:14.327Z",
    "size": 181891,
    "path": "../public/assets/excavators-BNQu-APY.avif"
  },
  "/assets/hcf-01-DAM9NNNs.png": {
    "type": "image/png",
    "etag": '"79fd0-UNyk/dwp0jGStc8Oz8Plom+3u4A"',
    "mtime": "2026-03-19T21:09:14.322Z",
    "size": 499664,
    "path": "../public/assets/hcf-01-DAM9NNNs.png"
  },
  "/assets/frt-02-DBuZKSeZ.jpg": {
    "type": "image/jpeg",
    "etag": '"2a762-rPnYXWtFzU53sEBAN3ROkOjqIL0"',
    "mtime": "2026-03-19T21:09:14.306Z",
    "size": 173922,
    "path": "../public/assets/frt-02-DBuZKSeZ.jpg"
  },
  "/assets/eo-2-DBrCyK70.jpg": {
    "type": "image/jpeg",
    "etag": '"8130b-NZRLAMUh1gQXrd8XSX50+sQJRpI"',
    "mtime": "2026-03-19T21:09:14.406Z",
    "size": 529163,
    "path": "../public/assets/eo-2-DBrCyK70.jpg"
  },
  "/assets/index-b2F0dxxh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"437c-x7XJ0jfwoXGzahNaMNXzbc5PZT8"',
    "mtime": "2026-03-19T21:09:14.369Z",
    "size": 17276,
    "path": "../public/assets/index-b2F0dxxh.js"
  },
  "/assets/eo-5-5P7yX2PW.jpg": {
    "type": "image/jpeg",
    "etag": '"cb290-nuj3P66l0FyB3isFCPdLy2Gml44"',
    "mtime": "2026-03-19T21:09:14.408Z",
    "size": 832144,
    "path": "../public/assets/eo-5-5P7yX2PW.jpg"
  },
  "/assets/inter-cyrillic-400-normal-HOLc17fK.woff": {
    "type": "font/woff",
    "etag": '"2634-ivoNz55T3CYjsRGYVvI78V6Hg84"',
    "mtime": "2026-03-19T21:09:14.351Z",
    "size": 9780,
    "path": "../public/assets/inter-cyrillic-400-normal-HOLc17fK.woff"
  },
  "/assets/inter-cyrillic-400-normal-obahsSVq.woff2": {
    "type": "font/woff2",
    "etag": '"1e20-2UATdNvSyhAwBTFW7JWXRnJeZyk"',
    "mtime": "2026-03-19T21:09:14.303Z",
    "size": 7712,
    "path": "../public/assets/inter-cyrillic-400-normal-obahsSVq.woff2"
  },
  "/assets/et-04-CyBy-Byn.jpg": {
    "type": "image/jpeg",
    "etag": '"100000-43g53pQ0ywXacwg657byBJW1DG0"',
    "mtime": "2026-03-19T21:09:14.406Z",
    "size": 1048576,
    "path": "../public/assets/et-04-CyBy-Byn.jpg"
  },
  "/assets/hcf-02-BhB0QuuY.png": {
    "type": "image/png",
    "etag": '"f3942-DCz9NlRZOE5qajfFgJPhyuuIYqk"',
    "mtime": "2026-03-19T21:09:14.406Z",
    "size": 997698,
    "path": "../public/assets/hcf-02-BhB0QuuY.png"
  },
  "/assets/heavy_dump_trucks-CrQQUY-N.webp": {
    "type": "image/webp",
    "etag": '"9092c-5/AeOpgTV/17qk3EbLnn3BPfD0I"',
    "mtime": "2026-03-19T21:09:14.408Z",
    "size": 592172,
    "path": "../public/assets/heavy_dump_trucks-CrQQUY-N.webp"
  },
  "/assets/hcf-03-DeXt5Ssz.png": {
    "type": "image/png",
    "etag": '"c5422-jQKNLEJ7ATGLc8cGTo3Wqqv2KKc"',
    "mtime": "2026-03-19T21:09:14.406Z",
    "size": 807970,
    "path": "../public/assets/hcf-03-DeXt5Ssz.png"
  },
  "/assets/inter-cyrillic-ext-400-normal-DQukG94-.woff": {
    "type": "font/woff",
    "etag": '"3418-0efK3fiFhInlHHjq0SFm+GVey2Y"',
    "mtime": "2026-03-19T21:09:14.343Z",
    "size": 13336,
    "path": "../public/assets/inter-cyrillic-ext-400-normal-DQukG94-.woff"
  },
  "/assets/inter-cyrillic-ext-400-normal-BQZuk6qB.woff2": {
    "type": "font/woff2",
    "etag": '"27f8-vx2gCiZcZIS7BSyHWqEe1Lm5p8Y"',
    "mtime": "2026-03-19T21:09:14.303Z",
    "size": 10232,
    "path": "../public/assets/inter-cyrillic-ext-400-normal-BQZuk6qB.woff2"
  },
  "/assets/inter-greek-400-normal-B4URO6DV.woff2": {
    "type": "font/woff2",
    "etag": '"1e60-ha06h5lB7nxuWvNKf61Dcnc1d1I"',
    "mtime": "2026-03-19T21:09:14.306Z",
    "size": 7776,
    "path": "../public/assets/inter-greek-400-normal-B4URO6DV.woff2"
  },
  "/assets/inter-greek-400-normal-q2sYcFCs.woff": {
    "type": "font/woff",
    "etag": '"26c4-bdX1N3nNMZxQdZJFiVUIvfgvPUk"',
    "mtime": "2026-03-19T21:09:14.351Z",
    "size": 9924,
    "path": "../public/assets/inter-greek-400-normal-q2sYcFCs.woff"
  },
  "/assets/inter-greek-ext-400-normal-DGGRlc-M.woff2": {
    "type": "font/woff2",
    "etag": '"1490-FueWPOzdNQpScjKjfRcVv5Yv1HM"',
    "mtime": "2026-03-19T21:09:14.303Z",
    "size": 5264,
    "path": "../public/assets/inter-greek-ext-400-normal-DGGRlc-M.woff2"
  },
  "/assets/inter-greek-ext-400-normal-KugGGMne.woff": {
    "type": "font/woff",
    "etag": '"1b98-M0BooO/fFnrQlgRJzUMnDMWQ/Qo"',
    "mtime": "2026-03-19T21:09:14.360Z",
    "size": 7064,
    "path": "../public/assets/inter-greek-ext-400-normal-KugGGMne.woff"
  },
  "/assets/inter-latin-400-normal-C38fXH4l.woff2": {
    "type": "font/woff2",
    "etag": '"5c70-aPZFxrb/EuJcVLE9TtEZ5jHcuyY"',
    "mtime": "2026-03-19T21:09:14.305Z",
    "size": 23664,
    "path": "../public/assets/inter-latin-400-normal-C38fXH4l.woff2"
  },
  "/assets/inter-latin-400-normal-CyCys3Eg.woff": {
    "type": "font/woff",
    "etag": '"77e8-SbvLwKxssThdk7eEO6Aafq1EDIA"',
    "mtime": "2026-03-19T21:09:14.360Z",
    "size": 30696,
    "path": "../public/assets/inter-latin-400-normal-CyCys3Eg.woff"
  },
  "/assets/inter-latin-ext-400-normal-C1nco2VV.woff2": {
    "type": "font/woff2",
    "etag": '"88b8-G/H4NxekwCldh2+r75P8W7SzF98"',
    "mtime": "2026-03-19T21:09:14.303Z",
    "size": 35e3,
    "path": "../public/assets/inter-latin-ext-400-normal-C1nco2VV.woff2"
  },
  "/assets/inter-latin-ext-400-normal-77YHD8bZ.woff": {
    "type": "font/woff",
    "etag": '"b9c8-Bhja6T6VCwLwb1wadgBSy3MfJBM"',
    "mtime": "2026-03-19T21:09:14.351Z",
    "size": 47560,
    "path": "../public/assets/inter-latin-ext-400-normal-77YHD8bZ.woff"
  },
  "/assets/inter-vietnamese-400-normal-Bbgyi5SW.woff": {
    "type": "font/woff",
    "etag": '"1964-Uz2qf+4P37GRYrj2tnfiNdz3cwc"',
    "mtime": "2026-03-19T21:09:14.360Z",
    "size": 6500,
    "path": "../public/assets/inter-vietnamese-400-normal-Bbgyi5SW.woff"
  },
  "/assets/inter-vietnamese-400-normal-DMkecbls.woff2": {
    "type": "font/woff2",
    "etag": '"136c-x5LSIOvtcMpNpAaXtHsgRr9Y068"',
    "mtime": "2026-03-19T21:09:14.303Z",
    "size": 4972,
    "path": "../public/assets/inter-vietnamese-400-normal-DMkecbls.woff2"
  },
  "/assets/logo-CLP8R1nX.png": {
    "type": "image/png",
    "etag": '"2af8-a6xTVvn/lvAw2gX3tqBiv6wer5M"',
    "mtime": "2026-03-19T21:09:14.325Z",
    "size": 11e3,
    "path": "../public/assets/logo-CLP8R1nX.png"
  },
  "/assets/layout-DAjFRNnU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"334f5-BYmFzVtFX8pRTatMEglbPH2GOeo"',
    "mtime": "2026-03-19T21:09:14.369Z",
    "size": 210165,
    "path": "../public/assets/layout-DAjFRNnU.js"
  },
  "/assets/main-BFiR1kDh.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"1406a-ooyw/v0/U1obYgSesmoTdI6Wv+w"',
    "mtime": "2026-03-19T21:09:14.360Z",
    "size": 82026,
    "path": "../public/assets/main-BFiR1kDh.css"
  },
  "/assets/main-BkwqfL-o.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6efc5-SPkjExuqfFaPd/y/Nj4W5jJSBvc"',
    "mtime": "2026-03-19T21:09:14.363Z",
    "size": 454597,
    "path": "../public/assets/main-BkwqfL-o.js"
  },
  "/assets/montserrat-cyrillic-400-normal-jEs4Tk-Z.woff": {
    "type": "font/woff",
    "etag": '"2aa0-Z5Dd4CcdfweMa4/BshRRz7wl3kg"',
    "mtime": "2026-03-19T21:09:14.342Z",
    "size": 10912,
    "path": "../public/assets/montserrat-cyrillic-400-normal-jEs4Tk-Z.woff"
  },
  "/assets/montserrat-cyrillic-400-normal-BPq32Q8K.woff2": {
    "type": "font/woff2",
    "etag": '"2ae4-BAOUDCqvFuM47p0Uw8GWesFDo5g"',
    "mtime": "2026-03-19T21:09:14.303Z",
    "size": 10980,
    "path": "../public/assets/montserrat-cyrillic-400-normal-BPq32Q8K.woff2"
  },
  "/assets/montserrat-cyrillic-ext-400-normal-DRPPeomZ.woff": {
    "type": "font/woff",
    "etag": '"2f38-O6SkN8RSgqnwHWUPMg8Y7T+khto"',
    "mtime": "2026-03-19T21:09:14.342Z",
    "size": 12088,
    "path": "../public/assets/montserrat-cyrillic-ext-400-normal-DRPPeomZ.woff"
  },
  "/assets/me-02-CUJqsiNJ.jpg": {
    "type": "image/jpeg",
    "etag": '"5601e-Nopggr+8f/pu55+Niyciori3tAc"',
    "mtime": "2026-03-19T21:09:14.319Z",
    "size": 352286,
    "path": "../public/assets/me-02-CUJqsiNJ.jpg"
  },
  "/assets/montserrat-latin-400-normal-xItZbAXg.woff": {
    "type": "font/woff",
    "etag": '"50a8-4bK85GhNQnM5K12kKDNIgaj5/L8"',
    "mtime": "2026-03-19T21:09:14.351Z",
    "size": 20648,
    "path": "../public/assets/montserrat-latin-400-normal-xItZbAXg.woff"
  },
  "/assets/montserrat-cyrillic-ext-400-normal-Xqov12YL.woff2": {
    "type": "font/woff2",
    "etag": '"2ea4-WlWiYHEMXHyDDquS78xsBx7D7WQ"',
    "mtime": "2026-03-19T21:09:14.303Z",
    "size": 11940,
    "path": "../public/assets/montserrat-cyrillic-ext-400-normal-Xqov12YL.woff2"
  },
  "/assets/montserrat-latin-400-normal-BLhwKU8k.woff2": {
    "type": "font/woff2",
    "etag": '"495c-biZYrXPdoYPU+il5gJpzoMKdIck"',
    "mtime": "2026-03-19T21:09:14.303Z",
    "size": 18780,
    "path": "../public/assets/montserrat-latin-400-normal-BLhwKU8k.woff2"
  },
  "/assets/montserrat-latin-ext-400-normal-BffdBkAA.woff": {
    "type": "font/woff",
    "etag": '"9db0-YYQZiWs0IVmpOZtRXUQyAJz5qHw"',
    "mtime": "2026-03-19T21:09:14.342Z",
    "size": 40368,
    "path": "../public/assets/montserrat-latin-ext-400-normal-BffdBkAA.woff"
  },
  "/assets/montserrat-latin-ext-400-normal-B8bwfy6Y.woff2": {
    "type": "font/woff2",
    "etag": '"7e10-eO4GIuWdJO3Qzx83tdrueZyrsw0"',
    "mtime": "2026-03-19T21:09:14.303Z",
    "size": 32272,
    "path": "../public/assets/montserrat-latin-ext-400-normal-B8bwfy6Y.woff2"
  },
  "/assets/montserrat-vietnamese-400-normal-D4oHqQTd.woff2": {
    "type": "font/woff2",
    "etag": '"1ed8-/6k5KsO2vKu/Gi3n605RziFEg/c"',
    "mtime": "2026-03-19T21:09:14.303Z",
    "size": 7896,
    "path": "../public/assets/montserrat-vietnamese-400-normal-D4oHqQTd.woff2"
  },
  "/assets/montserrat-vietnamese-400-normal-BeEscFYY.woff": {
    "type": "font/woff",
    "etag": '"1c64-+sedllZNX0cqVuahrDnrdA+h4yU"',
    "mtime": "2026-03-19T21:09:14.342Z",
    "size": 7268,
    "path": "../public/assets/montserrat-vietnamese-400-normal-BeEscFYY.woff"
  },
  "/assets/operating-hXByIABn.jpeg": {
    "type": "image/jpeg",
    "etag": '"1ece1-CJ0pC+kyJ3uIWmGd1u5oVoYU048"',
    "mtime": "2026-03-19T21:09:14.322Z",
    "size": 126177,
    "path": "../public/assets/operating-hXByIABn.jpeg"
  },
  "/assets/oswald-cyrillic-400-normal-BUD0W5Zj.woff": {
    "type": "font/woff",
    "etag": '"2114-MsvA+ChFnVGvxirTCrBdWH2Y3Vs"',
    "mtime": "2026-03-19T21:09:14.342Z",
    "size": 8468,
    "path": "../public/assets/oswald-cyrillic-400-normal-BUD0W5Zj.woff"
  },
  "/assets/oswald-cyrillic-400-normal-Dakd8U79.woff2": {
    "type": "font/woff2",
    "etag": '"1a2c-3eo1nCXEpS4nj8lNJgGQ+JwkueI"',
    "mtime": "2026-03-19T21:09:14.303Z",
    "size": 6700,
    "path": "../public/assets/oswald-cyrillic-400-normal-Dakd8U79.woff2"
  },
  "/assets/oswald-cyrillic-ext-400-normal-BkkDEomt.woff": {
    "type": "font/woff",
    "etag": '"2814-IEDBZbBSeUkdNlEtiDLSw9I7U/8"',
    "mtime": "2026-03-19T21:09:14.340Z",
    "size": 10260,
    "path": "../public/assets/oswald-cyrillic-ext-400-normal-BkkDEomt.woff"
  },
  "/assets/oswald-cyrillic-ext-400-normal-DaQSmjrl.woff2": {
    "type": "font/woff2",
    "etag": '"1e08-hjYxYQqofdg3qGroSTGE34DAaq4"',
    "mtime": "2026-03-19T21:09:14.240Z",
    "size": 7688,
    "path": "../public/assets/oswald-cyrillic-ext-400-normal-DaQSmjrl.woff2"
  },
  "/assets/oswald-latin-400-normal-BAFo8sP8.woff2": {
    "type": "font/woff2",
    "etag": '"2fd8-ZhQ4msGlh2SwWdlOL2nE4YJWndg"',
    "mtime": "2026-03-19T21:09:14.303Z",
    "size": 12248,
    "path": "../public/assets/oswald-latin-400-normal-BAFo8sP8.woff2"
  },
  "/assets/oswald-latin-ext-400-normal-KcyBFdGH.woff": {
    "type": "font/woff",
    "etag": '"3dec-SG0rAxkyQzvUqVbQZ8R6MeP6izc"',
    "mtime": "2026-03-19T21:09:14.340Z",
    "size": 15852,
    "path": "../public/assets/oswald-latin-ext-400-normal-KcyBFdGH.woff"
  },
  "/assets/oswald-latin-400-normal-D1wpMXgf.woff": {
    "type": "font/woff",
    "etag": '"3d4c-pWYTeTiFi4M4VJCPrkUooMk9Db0"',
    "mtime": "2026-03-19T21:09:14.340Z",
    "size": 15692,
    "path": "../public/assets/oswald-latin-400-normal-D1wpMXgf.woff"
  },
  "/assets/oswald-latin-ext-400-normal-DbVOzfr-.woff2": {
    "type": "font/woff2",
    "etag": '"2d68-+/dQZCScQkS/CkNuuV8QVhCDC3g"',
    "mtime": "2026-03-19T21:09:14.303Z",
    "size": 11624,
    "path": "../public/assets/oswald-latin-ext-400-normal-DbVOzfr-.woff2"
  },
  "/assets/oswald-vietnamese-400-normal-BupuUjkp.woff": {
    "type": "font/woff",
    "etag": '"16b8-6UfVll0EHm+JwdBbBNVNXjBzGkg"',
    "mtime": "2026-03-19T21:09:14.340Z",
    "size": 5816,
    "path": "../public/assets/oswald-vietnamese-400-normal-BupuUjkp.woff"
  },
  "/assets/re-01-BzAzssAp.jpg": {
    "type": "image/jpeg",
    "etag": '"1e53d-vnILrWDhiyKW3b0g8qH8DdFBLLs"',
    "mtime": "2026-03-19T21:09:14.325Z",
    "size": 124221,
    "path": "../public/assets/re-01-BzAzssAp.jpg"
  },
  "/assets/re-01-Codbkata.jpg": {
    "type": "image/jpeg",
    "etag": '"425c1-d2L/Jzcg3/78pJnat3waQ2fyr1s"',
    "mtime": "2026-03-19T21:09:14.324Z",
    "size": 271809,
    "path": "../public/assets/re-01-Codbkata.jpg"
  },
  "/assets/re-02-oxOWgx7-.webp": {
    "type": "image/webp",
    "etag": '"1337e-G4BaFgNXZTeM0oC5w9GvfrnwCXg"',
    "mtime": "2026-03-19T21:09:14.322Z",
    "size": 78718,
    "path": "../public/assets/re-02-oxOWgx7-.webp"
  },
  "/assets/services-5xF-tHd3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2aee-E+7WaWoLZoyRhKMGRBpEicyXxSI"',
    "mtime": "2026-03-19T21:09:14.363Z",
    "size": 10990,
    "path": "../public/assets/services-5xF-tHd3.js"
  },
  "/assets/sa-01-Bjq6PyHX.jpg": {
    "type": "image/jpeg",
    "etag": '"4071c-E+WxUA+f9wa5S7nnQh157S3wqHI"',
    "mtime": "2026-03-19T21:09:14.325Z",
    "size": 263964,
    "path": "../public/assets/sa-01-Bjq6PyHX.jpg"
  },
  "/assets/so-02-zpV4UEbw.jpg": {
    "type": "image/jpeg",
    "etag": '"175b9-rTCEQKpPNMoMDX9/jqktCaoahs4"',
    "mtime": "2026-03-19T21:09:14.319Z",
    "size": 95673,
    "path": "../public/assets/so-02-zpV4UEbw.jpg"
  },
  "/assets/sa-02-D3ldvD4m.jpg": {
    "type": "image/jpeg",
    "etag": '"7b9d9-65Tead3fIF2RTn9NsR13AU7a5bw"',
    "mtime": "2026-03-19T21:09:14.327Z",
    "size": 506329,
    "path": "../public/assets/sa-02-D3ldvD4m.jpg"
  },
  "/assets/re-02-BVmiSVyo.webp": {
    "type": "image/webp",
    "etag": '"9a14e-3swevWyhztqg1zST8M1IlJooAvI"',
    "mtime": "2026-03-19T21:09:14.408Z",
    "size": 631118,
    "path": "../public/assets/re-02-BVmiSVyo.webp"
  },
  "/assets/so-01-BZQXD1Qv.jpeg": {
    "type": "image/jpeg",
    "etag": '"53e7c-jUkQ+QRIbER8vsuODtIgZBK42ls"',
    "mtime": "2026-03-19T21:09:14.321Z",
    "size": 343676,
    "path": "../public/assets/so-01-BZQXD1Qv.jpeg"
  },
  "/assets/st-1-B8cmPIL4.webp": {
    "type": "image/webp",
    "etag": '"29e1c-fy7Mrus0CMAc4vJ9wPb5NRFGIn0"',
    "mtime": "2026-03-19T21:09:14.321Z",
    "size": 171548,
    "path": "../public/assets/st-1-B8cmPIL4.webp"
  },
  "/assets/st-2-7s-zQB5x.webp": {
    "type": "image/webp",
    "etag": '"37164-lK2INIkwLz+TOjCrm4I1uW7nTqs"',
    "mtime": "2026-03-19T21:09:14.322Z",
    "size": 225636,
    "path": "../public/assets/st-2-7s-zQB5x.webp"
  },
  "/assets/st-3-D34hOgpe.jpg": {
    "type": "image/jpeg",
    "etag": '"292e9-22BRpQunccf0B59hQqYgbKO2KjE"',
    "mtime": "2026-03-19T21:09:14.321Z",
    "size": 168681,
    "path": "../public/assets/st-3-D34hOgpe.jpg"
  },
  "/assets/td-2-hh1pFHy3.webp": {
    "type": "image/webp",
    "etag": '"6523e-ZbD19BsNgpelyrmmCZRWDKPFsOU"',
    "mtime": "2026-03-19T21:09:14.308Z",
    "size": 414270,
    "path": "../public/assets/td-2-hh1pFHy3.webp"
  },
  "/assets/tech-02-BfABqbMq.jpg": {
    "type": "image/jpeg",
    "etag": '"2124f-EmqANImyDSOFcorZzGy6CqB+Ras"',
    "mtime": "2026-03-19T21:09:14.325Z",
    "size": 135759,
    "path": "../public/assets/tech-02-BfABqbMq.jpg"
  },
  "/assets/ve-01-Coa70dGC.webp": {
    "type": "image/webp",
    "etag": '"f130-k0oo2ms5nJyXnzt5xSRQxb2RGnU"',
    "mtime": "2026-03-19T21:09:14.325Z",
    "size": 61744,
    "path": "../public/assets/ve-01-Coa70dGC.webp"
  },
  "/assets/vs-02-DVfeR4iF.webp": {
    "type": "image/webp",
    "etag": '"23608-NmKX+OuMzrS4E5ied8xXD/sRUFM"',
    "mtime": "2026-03-19T21:09:14.321Z",
    "size": 144904,
    "path": "../public/assets/vs-02-DVfeR4iF.webp"
  },
  "/assets/td-1-D-bkj8Ii.webp": {
    "type": "image/webp",
    "etag": '"1b2c74-Q+T2wt59AoxLkPyfMdDXcEHcAK0"',
    "mtime": "2026-03-19T21:09:14.425Z",
    "size": 1780852,
    "path": "../public/assets/td-1-D-bkj8Ii.webp"
  },
  "/assets/who-we-are-WEhr1ccY.jpeg": {
    "type": "image/jpeg",
    "etag": '"657be-s0yNNE1r4O/gGhfcobx8JCXwgLY"',
    "mtime": "2026-03-19T21:09:14.325Z",
    "size": 415678,
    "path": "../public/assets/who-we-are-WEhr1ccY.jpeg"
  },
  "/assets/tech-01-DRwuAo-m.jpg": {
    "type": "image/jpeg",
    "etag": '"119863-Et0l3szL7q0oJWcOmQ48n8pFvj8"',
    "mtime": "2026-03-19T21:09:14.421Z",
    "size": 1153123,
    "path": "../public/assets/tech-01-DRwuAo-m.jpg"
  }
};
function readAsset(id) {
  const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
  return promises.readFile(resolve(serverDir, assets[id].path));
}
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
function getAsset(id) {
  return assets[id];
}
const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = {
  gzip: ".gz",
  br: ".br"
};
const _Kbb6pU = defineHandler((event) => {
  if (event.req.method && !METHODS.has(event.req.method)) {
    return;
  }
  let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
  let asset;
  const encodingHeader = event.req.headers.get("accept-encoding") || "";
  const encodings = [...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
  if (encodings.length > 1) {
    event.res.headers.append("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.res.headers.delete("Cache-Control");
      throw new HTTPError({ status: 404 });
    }
    return;
  }
  const ifNotMatch = event.req.headers.get("if-none-match") === asset.etag;
  if (ifNotMatch) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  const ifModifiedSinceH = event.req.headers.get("if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  if (asset.type) {
    event.res.headers.set("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.headers.has("ETag")) {
    event.res.headers.set("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.headers.has("Last-Modified")) {
    event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.res.headers.has("Content-Encoding")) {
    event.res.headers.set("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.res.headers.has("Content-Length")) {
    event.res.headers.set("Content-Length", asset.size.toString());
  }
  return readAsset(id);
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/");
    s.length - 1;
    if (s[1] === "assets") {
      r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
    }
    return r;
  };
})();
const _lazy_X8PXJB = defineLazyEventHandler(() => Promise.resolve().then(function() {
  return ssrRenderer$1;
}));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_X8PXJB };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const globalMiddleware = [
  toEventHandler(_Kbb6pU)
].filter(Boolean);
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function createNitroApp() {
  const hooks = void 0;
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({
          error,
          context: errorCtx
        });
      }
    }
  };
  const h3App = createH3App({ onError(error, event) {
    return errorHandler(error, event);
  } });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  const app = {
    fetch: appHandler,
    h3: h3App,
    hooks,
    captureError
  };
  return app;
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~middleware"].push(...globalMiddleware);
  {
    h3App["~getMiddleware"] = (event, route) => {
      const pathname = event.url.pathname;
      const method = event.req.method;
      const middleware = [];
      {
        const routeRules = getRouteRules(method, pathname);
        event.context.routeRules = routeRules?.routeRules;
        if (routeRules?.routeRuleMiddleware.length) {
          middleware.push(...routeRules.routeRuleMiddleware);
        }
      }
      middleware.push(...h3App["~middleware"]);
      if (route?.data?.middleware?.length) {
        middleware.push(...route.data.middleware);
      }
      return middleware;
    };
  }
  return h3App;
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  for (const rule of Object.values(routeRules)) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
  process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
  process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
const port = Number.parseInt(process.env.NITRO_PORT || process.env.PORT || "") || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
serve({
  port,
  hostname: host,
  tls: cert && key ? {
    cert,
    key
  } : void 0,
  fetch: nitroApp.fetch
});
trapUnhandledErrors();
const nodeServer = {};
function fetchViteEnv(viteEnvName, input, init) {
  const envs = globalThis.__nitro_vite_envs__ || {};
  const viteEnv = envs[viteEnvName];
  if (!viteEnv) {
    throw HTTPError.status(404);
  }
  return Promise.resolve(viteEnv.fetch(toRequest(input, init)));
}
function ssrRenderer({ req }) {
  return fetchViteEnv("ssr", req);
}
const ssrRenderer$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: ssrRenderer
});
export {
  nodeServer as default
};
