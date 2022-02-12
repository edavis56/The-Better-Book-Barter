const { genre } = require('../models');

const genreData = [
  {
    type: 'Fantasy',
  },
  {
    type: 'Adventure',
  },
  {
    type: 'Romace',
  },
  {
    type: 'Contemporary',
  },
  {
    type: 'Dystopian',
  },
  {
    type: 'Mystrery',
  },
  {
    type: 'Horror',
  },
  {
    type: 'Historical fiction',
  },
  {
    type: 'Children',
  },
  {
    type: 'Memoir',
  },
  {
    type: 'Cooking',
  },
  {
    type: 'Art',
  },
  {
    type: 'Self-help',
  },
  {
    type: 'Developmental',
  },
  {
    type: 'Motivational',
  },
  {
    type: 'Health',
  },
  {
    type: 'History',
  },
  {
    type: 'Humor',
  },
];

const seedGenre = () => genre.bulkCreate(genreData);

module.exports = seedGenre;
