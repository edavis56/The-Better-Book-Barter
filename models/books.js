const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class books extends Model {}

books.init(
  {
     id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true,
     },
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
      references: {
        model: 'genre',
        key: 'type',
      },
    },
    isbn: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'genre',
        key: 'type',
      },
    },
    ranking: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    donor_username: {
      type: DataTypes.STRING,
      references: {
        model: 'user',
        key: 'username',
      },
    rec_username: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'user',
        key: 'username',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'books',
  },
);

module.exports = books;
