// Importing mongoose library
const mongoose = require("mongoose");

// Defining the schema
const ClientDataSchema = mongoose.Schema(
  {
    // Defining the fields
    branchId: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    creditAnalist: {
      type: String,
      required: true,
    },
    constitution: {
      type: String,
      required: true,
    },
    regDate: {
      type: String,
      required: true,
    },
    regNo: {
      type: String,
      required: true,
    },
    businessType: {
      type: String,
      required: true,
    },
    activeSince: {
      type: String,
      required: true,
    },
    facilityType: {
      type: String,
      required: true,
    },
    facilityDetails: {
      type: String,
      required: true,
    },
    facilityAmount: {
      type: String,
      required: true,
    },
    noOfYears: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Adding timestamps
);

// Creating the model
const ClientSchema = mongoose.model("Client", ClientDataSchema);

// Exporting the model
module.exports = ClientSchema;
