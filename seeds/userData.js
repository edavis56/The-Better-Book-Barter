const { User } = require("../models");

const userData = [
  {
    username: "Austin",
    email: "Austin@class.ga",
    password: "password1",
  },
  {
    username: "Eric",
    email: "eric@class.ga",
    password: "password1",
  },
  {
    username: "Jude",
    email: "Jude@class.ga",
    password: "password1",
  },
  {
    username: "Rich",
    email: "rich@class.ga",
    password: "password1",
  },
];

const seedUser = () => User.bulkCreate(userData,{individualHooks: true,
  returning: true,
});

module.exports = seedUser;