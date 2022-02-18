const router = require("express").Router();
const { Genre, Condition } = require("../../models");

// Create genre
router.post("/admin", (req, res) => {
  Genre.create({
    name: req.body.name,
  }).then((genreData) => {
    req.session.save(() => {
      req.session.name = genreData.name;

      res.json(genreData);
    });
  });
});

// Create condition
router.post("/admin", (req, res) => {
  Condition.create({
    state: req.body.name,
  }).then((conditionData) => {
    req.session.save(() => {
      req.session.state = conditionData.name;

      res.json(conditionData);
    });
  });
});

module.exports = router;