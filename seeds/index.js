const sequelize = require('../config/connection');
const seedBooks = require('./booksData');
const seedCondition = require('./conditionData');
const seedGenre = require('./genreData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser(); // User must be loaded before Books due to foreign key constraints.
  await seedBooks();
  await seedCondition();
  await seedGenre();

  process.exit(0);
};

seedAll();