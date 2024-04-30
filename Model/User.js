const mongoose = require("mongoose");

const UserDataSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    userType: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const UserSchema = mongoose.model("User", UserDataSchema);

module.exports = UserSchema;
