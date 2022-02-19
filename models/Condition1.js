const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Condition extends Model {}

Condition.init(
  {
    state: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    sequence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "book_condition",
  }
);

module.exports = Condition;
