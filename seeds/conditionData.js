const { Condition } = require("../models");

const conditionData = [
  {
    state: "Very Good",
    sequence: 1,
  },
  {
    state: "Good",
    sequence: 2,
  },
  {
    state: "Fair",
    sequence: 3,
  },
  {
    state: "Poor",
    sequence: 4,
  },
];

const seedCondition = () => Condition.bulkCreate(conditionData);

module.exports = seedCondition;
