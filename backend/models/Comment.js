const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = Schema({
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
