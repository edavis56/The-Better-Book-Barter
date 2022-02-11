const sequelize = require('../config/connection');
const seedPaintings = require('./booksData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPaintings();

  process.exit(0);
};

seedAll();
