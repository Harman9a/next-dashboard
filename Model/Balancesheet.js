const mongoose = require("mongoose");

const BalancesheetDataSchema = mongoose.Schema(
  {
    clientId: {
      type: String,
      required: false,
    },
    current_liabilities: {
      type: Object,
      require: false,
    },
    medium_long_term_libilities: {
      type: Object,
      require: false,
    },
    capital_reserve: {
      type: Object,
      require: false,
    },
    total_libilities: {
      type: Object,
      require: false,
    },
    current_assets: {
      type: Object,
      require: false,
    },
    fixed_assets_and_non_current_assets: {
      type: Object,
      require: false,
    },
    intangible_assets: {
      type: Object,
      require: false,
    },
    total_assets: {
      type: Object,
      require: false,
    },
    balancing: {
      type: Object,
      require: false,
    },
  },
  { timestamps: true }
);

const BalancesheetSchema = mongoose.model(
  "Balancesheet",
  BalancesheetDataSchema
);

module.exports = BalancesheetSchema;
