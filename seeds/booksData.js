const { books } = require('../models');

const booksdata = [
  {
    title: 'The Adventures of Huckleberry Finn',
    author: 'Mark Twain',
    genre: 'Adventure',
    isbn: '9780486280615',
    condition: 'fair',
    rating: '3',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: 'Nineteen Eighty Four',
    author: 'George Orwell',
    genre: 'Dystopia Fiction',
    isbn: '9780140817744',
    condition: 'good',
    rating: '4',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Fantasy',
    isbn: '',
    condition: 'fair',
    rating: '2',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'The Grapes of Wrath',
    author: 'John Steinbeck',
    genre: 'Romance',
    isbn: '',
    condition: 'very good',
    rating: '5',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Contemporary',
    isbn: '',
    condition: 'good',
    rating: '3',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Jane Eyre',
    author: 'Charlotte Bronte',
    genre: 'Dystopian',
    isbn: '',
    condition: 'fair',
    rating: '4',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Wuthering Heights',
    author: 'Emily Bronte',
    genre: 'Horror',
    isbn: '',
    condition: 'poor',
    rating: '5',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'A Passage to India',
    author: 'E.M. Forster',
    genre: 'Humor',
    isbn: '',
    condition: 'good',
    rating: '3',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Lord of the Flies',
    author: 'William Golding',
    genre: 'Children',
    isbn: '',
    condition: 'very good',
    rating: '4',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Hamlet',
    author: 'William Shakespeare',
    genre: 'Memoir',
    isbn: '',
    condition: 'poor',
    rating: '1',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'A Bend in the River',
    author: 'V.S. Naipaul',
    genre: 'Cooking',
    isbn: '',
    condition: 'good',
    rating: '3',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Art',
    isbn: '',
    condition: 'poor',
    rating: '4',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Self-help',
    isbn: '',
    condition: 'good',
    rating: '5',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'The Bell Jar',
    author: 'Sylvia Path',
    genre: 'Developmental',
    isbn: '',
    condition: 'fair',
    rating: '2',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Motivational',
    isbn: '',
    condition: 'fair',
    rating: '3',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'The Diary of a Young Girl',
    author: 'Anne Frank',
    genre: 'Health',
    isbn: '',
    condition: 'fair',
    rating: '5',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    genre: 'History',
    isbn: 'Dystopian',
    condition: 'very good',
    rating: '4',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'The Canterbury Tales',
    author: 'Geoffrey Chaucer',
    genre: 'Adventure',
    isbn: 'Fantasy',
    condition: 'poor',
    rating: '3',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Ulysses',
    author: 'James Joyce',
    genre: 'Historical fiction',
    isbn: '',
    condition: 'fair',
    rating: '4',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'The Quiet American',
    author: 'Graham Greene',
    genre: 'Children',
    isbn: '',
    condition: 'good',
    rating: '2',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Birdsong',
    author: 'Sebastian Faulks',
    genre: 'memoir',
    isbn: '',
    condition: 'very good',
    rating: '3',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Money',
    author: 'Martin Amis',
    genre: 'Cooking',
    isbn: '',
    condition: 'poor',
    rating: '1',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Harry Potter and the Deathly Hallows',
    author: 'J.K. Rowlings',
    genre: 'Art',
    isbn: '',
    condition: 'very good',
    rating: '4',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Moby Dick',
    author: 'Herman Melville',
    genre: 'Self-help',
    isbn: '',
    condition: 'fair',
    rating: '3',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'The Wind in the Willows',
    author: 'Kenneth Grahame',
    genre: 'Developmental',
    isbn: '',
    condition: 'good',
    rating: '2',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    genre: 'Health',
    isbn: '',
    condition: 'poor',
    rating: '1',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Rebecca',
    author: 'Daphne du Maurier',
    genre: 'History',
    isbn: '',
    condition: 'good',
    rating: '2',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'On the Road',
    author: 'Jack Kerouae',
    genre: 'Humor',
    isbn: '9780140185218',
    condition: 'very good',
    rating: '3',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Heart of Darkness',
    author: 'Joseph Conrad',
    genre: 'Adventure',
    isbn: '9780140180909',
    condition: 'fir',
    rating: '4',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'The Way We Live Now',
    author: 'Anthony Trollope',
    genre: 'Contemporary',
    isbn: '9780141884233',
    condition: 'fair',
    rating: '3',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'The Stranger',
    author: 'Albert Camus',
    genre: 'Mystrery',
    isbn: '9780394447483',
    condition: 'fair',
    rating: '5',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'The Color Purple',
    author: 'Alice Walker',
    genre: 'Historical fiction',
    isbn: '9780151191536',
    condition: 'poor',
    rating: '4',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },{
    title: 'Life of Pi',
    author: 'Yann Martel',
    genre: 'Adventure',
    isbn: '9780151013838',
    condition: 'good',
    rating: '5',
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
];

const seedPaintings = () => books.bulkCreate(booksdata);

module.exports = seedPaintings;
