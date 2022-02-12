const { condition } = require('../models');

const conditionData = [
  {
    state: 'Very Good',
  },
  {
    state: 'Good',
  },
  {
    state: 'Fair',
  },
  {
    state: 'Poor',
  },
];

const seedCondition = () => condition.bulkCreate(conditionData);

module.exports = seedCondition;
