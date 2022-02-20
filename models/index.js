const Comment = require("./Comment");
const Post = require("./Post");
const User = require("./User");

Post.belongsTo(User, {
  foreignKey: "id",
});

Comment.belongsTo(User, {
  foreignKey: "id",
});

Comment.belongsTo(Post, {
  foreignKey: "id",
});

User.hasMany(Comment, {
  foreignKey: "id",
});

User.hasMany(Post, {
  foreignKey: "id",
});

Post.hasMany(Comment, {
  foreignKey: "id",
});

module.exports = { User, Post, Comment };
