
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 602, hash: '05e2a5eea77dd3fd5028a05d2a7742dad98f88de519270b1660b785004fb3172', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 945, hash: 'd301ebb62dd8da38da167af8bbab4909d6a70eb6c5f98803988646e6353d2b8f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7079, hash: '46eecb444dc8ba1afdc4c9f04cb614c1aff6e862d50f319440a72a8d7deafeda', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-B4KKAQEI.css': {size: 647, hash: 'cZ+Nfqgg2yg', text: () => import('./assets-chunks/styles-B4KKAQEI_css.mjs').then(m => m.default)}
  },
};
