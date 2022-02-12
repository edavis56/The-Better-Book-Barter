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
    title: 'Nineteen Eighty Four',
    author: 'George Orwell',
    genre: 'Dystopia Fiction',
    isbn: '9780140817744',
    condition: 'good',
    ranking: '4',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: '',
    isbn: '',
    condition: 'fair',
    ranking: '2',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'The Grapes of Wrath',
    author: 'John Steinbeck',
    genre: '',
    isbn: '',
    condition: 'very good',
    ranking: '5',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'To Kill a Mockingbird',
    author: 'harper Lee',
    genre: '',
    isbn: '',
    condition: 'good',
    ranking: '3',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Jane Eyre',
    author: 'Charlotte Bronte',
    genre: '',
    isbn: '',
    condition: 'fair',
    ranking: '4',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Wuthering Heights',
    author: 'Emily Bronte',
    genre: '',
    isbn: '',
    condition: 'poor',
    ranking: '5',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'A Passage to India',
    author: 'E.M. Forster',
    genre: '',
    isbn: '',
    condition: 'good',
    ranking: '3',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Lord of the Flies',
    author: 'William Golding',
    genre: '',
    isbn: '',
    condition: 'very good',
    ranking: '4',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Hamlet',
    author: 'William Shakespeare',
    genre: '',
    isbn: '',
    condition: 'poor',
    ranking: '1',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'A Bend in the River',
    author: 'V.S. Naipaul',
    genre: '',
    isbn: '',
    condition: 'good',
    ranking: '3',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: '',
    isbn: '',
    condition: 'poor',
    ranking: '4',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: '',
    isbn: '',
    condition: 'good',
    ranking: '5',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'The Bell Jar',
    author: 'Sylvia Path',
    genre: '',
    isbn: '',
    condition: 'fair',
    ranking: '2',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: '',
    isbn: '',
    condition: 'fair',
    ranking: '3',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'The Diary of a Young Girl',
    author: 'Anne Frank',
    genre: '',
    isbn: '',
    condition: 'fair',
    ranking: '5',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    genre: '',
    isbn: '',
    condition: 'very good',
    ranking: '4',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'The Canterbury Tales',
    author: 'Geoffrey Chaucer',
    genre: '',
    isbn: '',
    condition: 'poor',
    ranking: '3',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Ulysses',
    author: 'James Joyce',
    genre: '',
    isbn: '',
    condition: 'fair',
    ranking: '4',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'The Quiet American',
    author: 'Graham Greene',
    genre: '',
    isbn: '',
    condition: 'good',
    ranking: '2',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Birdsong',
    author: 'Sebastian Faulks',
    genre: '',
    isbn: '',
    condition: 'very good',
    ranking: '3',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Money',
    author: 'Martin Amis',
    genre: '',
    isbn: '',
    condition: 'poor',
    ranking: '1',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Harry Potter and the Deathly Hallows',
    author: 'J.K. Rowlings',
    genre: '',
    isbn: '',
    condition: 'very good',
    ranking: '4',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Moby Dick',
    author: 'Herman Melville',
    genre: '',
    isbn: '',
    condition: 'fair',
    ranking: '3',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'The Wind in the Willows',
    author: 'Kenneth Grahame',
    genre: '',
    isbn: '',
    condition: 'good',
    ranking: '2',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    genre: '',
    isbn: '',
    condition: 'poor',
    ranking: '1',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Rebecca',
    author: 'Daphne du Maurier',
    genre: '',
    isbn: '',
    condition: 'good',
    ranking: '2',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'On the Road',
    author: 'Jack Kerouae',
    genre: '',
    isbn: '',
    condition: 'very good',
    ranking: '3',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Heart of Darkness',
    author: 'Joseph Conrad',
    genre: '',
    isbn: '',
    condition: 'fir',
    ranking: '4',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'The Way We Live Now',
    author: 'Anthony Trollope',
    genre: '',
    isbn: '',
    condition: 'fair',
    ranking: '3',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'The Stranger',
    author: 'Albert Camus',
    genre: '',
    isbn: '',
    condition: 'fair',
    ranking: '5',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'The Color Purple',
    author: 'Alice Walker',
    genre: '',
    isbn: '',
    condition: 'poor',
    ranking: '4',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Life of Pi',
    author: 'Yann Martel',
    genre: '',
    isbn: '',
    condition: 'good',
    ranking: '5',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: '',
    author: '',
    genre: '',
    isbn: '',
    condition: '',
    ranking: '',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: '',
    author: '',
    genre: '',
    isbn: '',
    condition: '',
    ranking: '',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: '',
    author: '',
    genre: '',
    isbn: '',
    condition: '',
    ranking: '',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: '',
    author: '',
    genre: '',
    isbn: '',
    condition: '',
    ranking: '',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: '',
    author: '',
    genre: '',
    isbn: '',
    condition: '',
    ranking: '',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: '',
    author: '',
    genre: '',
    isbn: '',
    condition: '',
    ranking: '',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: '',
    author: '',
    genre: '',
    isbn: '',
    condition: '',
    ranking: '',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: '',
    author: '',
    genre: '',
    isbn: '',
    condition: '',
    ranking: '',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: '',
    author: '',
    genre: '',
    isbn: '',
    condition: '',
    ranking: '',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: '',
    author: '',
    genre: '',
    isbn: '',
    condition: '',
    ranking: '',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: '',
    author: '',
    genre: '',
    isbn: '',
    condition: '',
    ranking: '',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: '',
    author: '',
    genre: '',
    isbn: '',
    condition: '',
    ranking: '',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: '',
    author: '',
    genre: '',
    isbn: '',
    condition: '',
    ranking: '',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: '',
    author: '',
    genre: '',
    isbn: '',
    condition: '',
    ranking: '',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: '',
    author: '',
    genre: '',
    isbn: '',
    condition: '',
    ranking: '',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: '',
    author: '',
    genre: '',
    isbn: '',
    condition: '',
    ranking: '',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: '',
    author: '',
    genre: '',
    isbn: '',
    condition: '',
    ranking: '',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  
];

const seedPaintings = () => books.bulkCreate(booksdata);

module.exports = seedPaintings;
