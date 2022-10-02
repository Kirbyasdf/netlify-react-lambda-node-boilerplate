const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

app.get("/.netlify/functions/api", (req, res) => {
  res.json({
    msg: "server is good 2 go!",
  });
});
router.get("/server-test", (req, res) => {
  res.json({
    msg: "router is good 2 go",
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
