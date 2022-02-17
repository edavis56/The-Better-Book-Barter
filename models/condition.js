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
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "condition",
  }
);

module.exports = Condition;
