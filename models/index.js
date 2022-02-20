const Comment = require("./Comment");
const Post = require("./Post");
const User = require("./User");

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(Comment, {
  foreignKey: "comment_id",
});

User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "comment_id",
});

module.exports = { User, Post, Comment };
