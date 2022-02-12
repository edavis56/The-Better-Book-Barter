const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class books extends Model {}

books.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isbn: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ranking:
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'books',
  },
);

module.exports = books;
