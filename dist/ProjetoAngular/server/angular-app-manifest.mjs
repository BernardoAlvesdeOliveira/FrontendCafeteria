
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
    "route": "/login"
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
    'index.csr.html': {size: 2469, hash: '19d5416fd826f974628fe8df32987da8f73602c4cb4385ea15f556f9edd5f3e8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 952, hash: '86dee0c25be12fc07f706c798cc16737812b8efeef73cbb753121e5df633da9b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4696, hash: '331366a9789fd6db879a0f4e0238948ee7621ce9ccf1a480e3e52755dfd4b619', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'default/index.html': {size: 2770, hash: '6a0ce6278033664241411491ddf63842643de116d255770de5b356a765c1db91', text: () => import('./assets-chunks/default_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 5140, hash: '12a969578ea2e286f30bc3ca01d7039cfd4399886bfa74754f17d307e3fff779', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 3544, hash: '8190f95ccb47b9df73a5f8a5553c9a2f920a3b6b3a4f5afd4ab45989dfa32a33', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-ZWTXBUWC.css': {size: 80208, hash: 'ocV08bNksGw', text: () => import('./assets-chunks/styles-ZWTXBUWC_css.mjs').then(m => m.default)}
  },
};
