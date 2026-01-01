
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/default"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1403, hash: '5b74127f3c2795b7fa146a0efccfca60f847a688a341cb2d653f52f56a133ac3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 952, hash: '7f1863441390ee93bf0a19158fb37bc05adab2bb50bb91a23c9c04a7b2f1b05a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 3447, hash: '750464987fd650371df679f82d4984c083f68f1284c12cbbf93abd4b709c9b5e', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3447, hash: '750464987fd650371df679f82d4984c083f68f1284c12cbbf93abd4b709c9b5e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'default/index.html': {size: 1703, hash: '95ee6635bebe2d5c79a537a05e1ca5341371f6158e394a06dff69ef956c40731', text: () => import('./assets-chunks/default_index_html.mjs').then(m => m.default)},
    'styles-G3JHXV5P.css': {size: 19342, hash: 'beKNb8FvFyw', text: () => import('./assets-chunks/styles-G3JHXV5P_css.mjs').then(m => m.default)}
  },
};
