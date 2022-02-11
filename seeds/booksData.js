const { books } = require('../models');

const booksdata = [
  {
    title: 'The Adventures of Huckleberry Finn',
    author: 'Mark Twain',
    genre: 'Adventure',
    isbn: '9780486280615',
    condition: 'fair',
    ranking: '3',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: 'Cosmos Flowers',
    artist: 'WStudio',
    exhibition_date: 'May 05, 2017',
    gallery_id: 1,
    filename: '02-cosmos-flowers.jpg',
    description: 'Pink cosmos flowers against a blue sky.',
  },
  
];

const seedPaintings = () => books.bulkCreate(booksdata);

module.exports = seedPaintings;
