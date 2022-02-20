const Comment = require("./Comment");
const Post = require("./Post");
const User = require("./User");

Post.belongsTo(User, {
  foreignKey: "id",
});

Comment.belongsTo(User, {
  foreignKey: "id",
});

Post.hasMany(Comment, {
  foreignKey: "id",
});
