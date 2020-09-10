var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentSchema = Schema({
  comment: {
    type: String,
    require: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  update_at: {
    type: Date,
    default: Date.now,
  },
  user_name: {
    type: String,
    ref: "User",
  },
});

module.exports = mongoose.model("Comment", CommentSchema);
