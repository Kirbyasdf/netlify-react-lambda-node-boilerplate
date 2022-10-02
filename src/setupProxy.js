const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		createProxyMiddleware("/.netlify/functions/", {
			target: "http://localhost:8888/",
			headers: {
				Connection: "keep-alive",
			},
		})
	);
	
};
