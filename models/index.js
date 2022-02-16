const User = require("./User");
const Book = require("./Book");
const Condition = require("./Condition");
const Genre = require("./Genre");

Book.belongsTo(User, {
  foreignKey: "donor_id",
});

User.hasMany(Book, {
  foreignKey: "donor_id",
  onDelete: "SET NULL",
});

Book.belongsTo(User, {
  foreignKey: "rec_id",
});

User.hasMany(Book, {
  foreignKey: "rec_id",
  onDelete: "SET NULL",
});

module.exports = { User, Book, Condition, Genre };
