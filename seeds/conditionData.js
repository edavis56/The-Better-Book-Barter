const { Condition } = require("../models");

const conditionData = [
  {
    state: "Very Good",
    order: 1,
  },
  {
    state: "Good",
    order: 2,
  },
  {
    state: "Fair",
    order: 3,
  },
  {
    state: "Poor",
    order: 4,
  },
];

const seedCondition = () => Condition.bulkCreate(conditionData);

module.exports = seedCondition;
