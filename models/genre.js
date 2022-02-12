const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class genre extends Model {}

genre.init(
  {
     id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true,
     },
     type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'books',
  },
);

module.exports = genre;
