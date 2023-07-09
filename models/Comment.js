const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    comment_post: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize
  }
);

module.exports = Comment;