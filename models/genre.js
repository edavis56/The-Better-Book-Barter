const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Genre extends Model {}

Genre.init(
  {
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "genre",
  }
);

module.exports = Genre;
