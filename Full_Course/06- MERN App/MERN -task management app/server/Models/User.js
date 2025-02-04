const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  Password: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = User;
