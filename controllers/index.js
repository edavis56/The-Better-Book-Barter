const router = require("express").Router();

// const apiRoutes = require('./api');
// const homeRoutes = require('./home-routes.js');

router.get("*", (req, res) =>
  res.status(200).send("Routes are currently under development")
);

module.exports = router;
