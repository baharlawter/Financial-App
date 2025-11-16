
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
    "route": "/calculator"
  },
  {
    "renderMode": 2,
    "route": "/blog/welcome"
  },
  {
    "renderMode": 2,
    "route": "/blog/news"
  },
  {
    "renderMode": 2,
    "route": "/blog/tips"
  },
  {
    "renderMode": 0,
    "route": "/blog/*"
  },
  {
    "renderMode": 2,
    "route": "/shop"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 592, hash: '05ab6bb6fc29cc468a912ddd31793dbac0b817017a9c0e80a6497023bcfdf74f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1110, hash: '824adce5c0b78df3e0fe8197b12a2bc9fda60941dc26b8bfc17c1fad54da9264', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'calculator/index.html': {size: 37994, hash: 'd51e904b223f3f512c558a2b0f10617894e380360e4864977fc4f157873b5adc', text: () => import('./assets-chunks/calculator_index_html.mjs').then(m => m.default)},
    'index.html': {size: 76887, hash: '29eef51a3d967e85905d7910faf13ef67833970eac8cc6d0c35d4d20c1fc7966', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog/welcome/index.html': {size: 35686, hash: '7bde92762394a8579998f25fb87dcecc870cd6283f957df06e941045bcd1fb7e', text: () => import('./assets-chunks/blog_welcome_index_html.mjs').then(m => m.default)},
    'blog/tips/index.html': {size: 35975, hash: '004383e955d15060c3f8cb0c570dc3202fc4102947de5ffb9db7f45cf36b9e21', text: () => import('./assets-chunks/blog_tips_index_html.mjs').then(m => m.default)},
    'blog/news/index.html': {size: 35976, hash: 'cb267aaac99476ec55b0650180fa55436ac77bae9f86865977afee133851a665', text: () => import('./assets-chunks/blog_news_index_html.mjs').then(m => m.default)},
    'shop/index.html': {size: 38204, hash: '2f5a7fe7ee61a02263bd9f69e7dbe5dfbc21db240ada648b8821a0c6f5986a6d', text: () => import('./assets-chunks/shop_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
