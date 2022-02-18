const router = require("express").Router();
const { Genre} = require("../../models");

// Create genre
router.post("/genre", (req, res) => {
  Genre.create({
    name: req.body.genre,
  }).then((genreData) => {
    req.session.save(() => {
      req.session.name = genreData.name;

      res.json(genreData);
    });
  });
});

router.delete("/genre", (req, res) => {
  //guard clause
  if (!req.body.genre_list){
    res.status(400).send("No genre exist")
    return 
  }
  Genre.destroy({
    where:{name: req.body.genre_list,}
  }).then((response) => {
    if (response){
      res.status(200).send("Delete successful")
    } else {
      res.status(500).send("Error deleting record")
    }
    });
  });

module.exports = router;