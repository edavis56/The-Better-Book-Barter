const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class condition extends Model {}

condition.init(
  {
     id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true,
     },
     state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'condition',
  },
);

module.exports = condition;
