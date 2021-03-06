const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserModel = new Schema({
  fullName: String,
  phoneNumber: { type: Number, unique: true },
  EVCSupID: { type: Number, unique: true },
  accountNo: { type: Number, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserModel);
