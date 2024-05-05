const mongoose = require("mongoose");

const BranchDataSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const BranchSchema = mongoose.model("Branch", BranchDataSchema);

module.exports = BranchSchema;
