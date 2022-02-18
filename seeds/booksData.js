const { Book } = require("../models");
const sequelize = require("../config/connection");

const userCount = 4; // number of users created

const booksdata = [
  {
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    genre: "Adventure",
    isbn: "9780486280615",
    book_condition: "Fair",
    rating: "3",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "Nineteen Eighty Four",
    author: "George Orwell",
    genre: "Dystopia Fiction",
    isbn: "9780140817744",
    book_condition: "Good",
    rating: "4",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Fantasy",
    isbn: "9780140817786",
    book_condition: "Fair",
    rating: "2",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    genre: "Romance",
    isbn: "9780140817798",
    book_condition: "Very Good",
    rating: "5",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Contemporary",
    isbn: "9780140817156",
    book_condition: "Good",
    rating: "3",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Bronte",
    genre: "Dystopian",
    isbn: "9780140817888",
    book_condition: "Fair",
    rating: "4",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "Wuthering Heights",
    author: "Emily Bronte",
    genre: "Horror",
    isbn: "9780140817873",
    book_condition: "Poor",
    rating: "5",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "A Passage to India",
    author: "E.M. Forster",
    genre: "Humor",
    isbn: "9780140817135",
    book_condition: "Good",
    rating: "3",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    genre: "Children",
    isbn: "9780140817456",
    book_condition: "Very Good",
    rating: "4",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "Hamlet",
    author: "William Shakespeare",
    genre: "Memoir",
    isbn: "9780140817789",
    book_condition: "Poor",
    rating: "1",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "A Bend in the River",
    author: "V.S. Naipaul",
    genre: "Cooking",
    isbn: "9780140815555",
    book_condition: "Good",
    rating: "3",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Art",
    isbn: "9780140816666",
    book_condition: "Poor",
    rating: "4",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Self-help",
    isbn: "9780140817777",
    book_condition: "Good",
    rating: "5",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "The Bell Jar",
    author: "Sylvia Path",
    genre: "Developmental",
    isbn: "9780140818888",
    book_condition: "Fair",
    rating: "2",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Motivational",
    isbn: "9780140811111",
    book_condition: "Fair",
    rating: "3",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    genre: "Health",
    isbn: "9780140812222",
    book_condition: "Fair",
    rating: "5",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    genre: "History",
    isbn: "9780140813333",
    book_condition: "Very Good",
    rating: "4",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "The Canterbury Tales",
    author: "Geoffrey Chaucer",
    genre: "Adventure",
    isbn: "9780140814444",
    book_condition: "Poor",
    rating: "3",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "Ulysses",
    author: "James Joyce",
    genre: "Historical fiction",
    isbn: "9780140855555",
    book_condition: "Fair",
    rating: "4",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "The Quiet American",
    author: "Graham Greene",
    genre: "Children",
    isbn: "9780140866666",
    book_condition: "Good",
    rating: "2",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "Birdsong",
    author: "Sebastian Faulks",
    genre: "memoir",
    isbn: "9780140877777",
    book_condition: "Very Good",
    rating: "3",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "Money",
    author: "Martin Amis",
    genre: "Cooking",
    isbn: "9780140888888",
    book_condition: "Poor",
    rating: "1",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "Harry Potter and the Deathly Hallows",
    author: "J.K. Rowlings",
    genre: "Art",
    isbn: "9780140899999",
    book_condition: "Very Good",
    rating: "4",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Self-help",
    isbn: "9780140811111",
    book_condition: "Fair",
    rating: "3",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "The Wind in the Willows",
    author: "Kenneth Grahame",
    genre: "Developmental",
    isbn: "9780140822222",
    book_condition: "Good",
    rating: "2",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    genre: "Health",
    isbn: "9780140833333",
    book_condition: "Poor",
    rating: "1",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "Rebecca",
    author: "Daphne du Maurier",
    genre: "History",
    isbn: "9780140844444",
    book_condition: "Good",
    rating: "2",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "On the Road",
    author: "Jack Kerouae",
    genre: "Humor",
    isbn: "9780140185218",
    book_condition: "Very Good",
    rating: "3",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "Heart of Darkness",
    author: "Joseph Conrad",
    genre: "Adventure",
    isbn: "9780140180909",
    book_condition: "Fair",
    rating: "4",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "The Way We Live Now",
    author: "Anthony Trollope",
    genre: "Contemporary",
    isbn: "9780141884233",
    book_condition: "Fair",
    rating: "3",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "The Stranger",
    author: "Albert Camus",
    genre: "Mystrery",
    isbn: "9780394447483",
    book_condition: "Fair",
    rating: "5",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "The Color Purple",
    author: "Alice Walker",
    genre: "Historical fiction",
    isbn: "9780151191536",
    book_condition: "Poor",
    rating: "4",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: "Life of Pi",
    author: "Yann Martel",
    genre: "Adventure",
    isbn: "9780151013838",
    book_condition: "Good",
    rating: "5",
    // description:
    //   'Branches with pink apricot blossoms against a blue background.',
  },
];

const seedBooks = async () => {
  await Book.bulkCreate(booksdata);

  // assign a variety of donor_ids
  let queryString = `UPDATE book SET donor_id = 1 + (id % ${userCount})`;
  console.log(queryString);
  let [results, metadata] = await sequelize.query(queryString);
  console.log(metadata);
  console.log(results);

  // assign a variety of rec_ids
  queryString = `UPDATE book SET rec_id = FLOOR(RAND() * ${userCount} + 1), rec_dt = CURRENT_DATE() WHERE id < 20`;
  console.log(queryString);
  [results, metadata] = await sequelize.query(queryString);
  console.log(metadata);
  console.log(results);
};

module.exports = seedBooks;
