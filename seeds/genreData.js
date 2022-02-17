const { Genre } = require("../models");

const genreNames = [
  "Fantasy",
  "Adventure",
  "Romance",
  "Contemporary",
  "Dystopian",
  "Mystery",
  "Horror",
  "Historical fiction",
  "Children",
  "Memoir",
  "Cooking",
  "Art",
  "Self-help",
  "Developmental",
  "Motivational",
  "Health",
  "History",
  "Humor",
];

const genreData = genreNames.map((name) => {
  let output = { name };
  return output;
});

console.log(genreData);

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;
