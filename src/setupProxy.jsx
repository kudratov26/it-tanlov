const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/http://grscan.uz/swagger/index.html#/partner/post_partner/partner', // Change to your API path
        createProxyMiddleware({
            target: 'http://grscan.uz/swagger', // Target back-end server
            changeOrigin: true,
        })
    );
};
