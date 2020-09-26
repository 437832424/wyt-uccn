const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/manage', {
      "target": "https://www.tdconnect.cn",
      // "pathRewrite": {
      //   "^/manage": "/"
      // },
      changeOrigin: true,
    })
  );
};