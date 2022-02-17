const { Condition } = require("../models");

const conditionData = [
  {
    state: "Very Good",
  },
  {
    state: "Good",
  },
  {
    state: "Fair",
  },
  {
    state: "Poor",
  },
];

const seedCondition = () => Condition.bulkCreate(conditionData);

module.exports = seedCondition;
