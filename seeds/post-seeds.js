const { Post } = require('../models');

const postData = [
  {
    title: 'Post 1',
    content: 'This is the first post',
    user_id: 1,
  },
  {
    title: 'Post 2',
    content: 'This is the second post',
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
