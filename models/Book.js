const { Model, DataTypes, literal } = require("sequelize");
const sequelize = require("../config/connection");

class Book extends Model {
  static async getDonorPlace(donations) {
    const queryString = `SELECT count(*) AS place FROM (SELECT donor_id, count(1) AS count FROM book GROUP BY donor_id HAVING count > ${donations}) AS temp`;
    let [results, metadata] = await sequelize.query(queryString);
    return results[0].place + 1;
  }

  static async getDonorTotal() {
    const queryString = `SELECT count(*) AS total FROM (SELECT DISTINCT donor_id FROM book) AS temp`;
    let [results, metadata] = await sequelize.query(queryString);
    return results[0].total;
  }

  static async getRecPlace(receiveCount) {
    const queryString = `SELECT count(*) AS place FROM (SELECT rec_id, count(1) AS count FROM book GROUP BY rec_id HAVING count > ${receiveCount}) AS temp`;
    let [results, metadata] = await sequelize.query(queryString);
    return results[0].place; // NULL is always included, so don't add one...kind of a hack, but time is short!
  }

  static async getRecTotal() {
    const queryString = `SELECT count(*) AS total FROM (SELECT DISTINCT rec_id FROM book where rec_id is not null) AS temp`;
    let [results, metadata] = await sequelize.query(queryString);
    return results[0].total;
  }

  static async getAvgDonatedRatings(id) {
    const queryString = `SELECT avg(rating) AS rating FROM book WHERE donor_id = ${id}`;
    let [results, metadata] = await sequelize.query(queryString);
    return results[0].rating;
  }

  static async getAvgDonatedPlace(ratingAvg) {
    const queryString = `SELECT count(*) AS place FROM (SELECT donor_id, avg(rating) AS rating FROM book GROUP BY donor_id HAVING rating > ${ratingAvg}) AS temp`;
    let [results, metadata] = await sequelize.query(queryString);
    return results[0].place + 1;
  }

  static async getStockCount(isbn) {
    const queryString = `SELECT count(*) AS stockCount FROM book WHERE isbn = ${isbn} and rec_id is NULL`;
    let [results, metadata] = await sequelize.query(queryString);
    return results[0].stockCount;
  }
}

Book.init(
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
      allowNull: true,
    },
    isbn: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    book_condition: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    donor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "user",
        key: "id",
      },
    },
    donor_dt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    rec_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "user",
        key: "id",
      },
    },
    rec_dt: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },

    // availableQuantity: {  / I couldn't get this to work...
    //   type: Sequelize.VIRTUAL(Sequelize.DECIMAL,
    //     [Sequelize.literal(`(COALESCE((select article."stockQuantity"
    //     - sum("orderRows"."orderedQuantity") from "orderRows"
    //     left join orders on orders.id = "orderRows"."orderId"
    //     where "orderRows"."articleId" = article.id
    //     and orders."state" <> 'fullfilled'), 0)) as "availableQuantity"`), "availableQuantity"]),
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "book",
  }
);

module.exports = Book;
