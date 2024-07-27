const { User } = require('../models');

const userData = [
  {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    password: 'password123',
  },
  {
    username: 'JaneDoe',
    email: 'janedoe@example.com',
    password: 'password123',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
