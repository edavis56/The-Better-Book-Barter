const router = require("express").Router();
const {Genre} = require("../../models");
const {withAuth} = require("../../utils");


// Create genre
router.post("/genre", withAuth, (req, res) => {
  Genre.create({
    name: req.body.genre_input,
    }).then((response) => {
      if (response){
        res.status(200).send("Added successful")
      } else {
        res.status(500).send("Error adding record")
      }
      });
  });

router.delete("/genre", withAuth, (req, res) => {
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