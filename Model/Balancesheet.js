const mongoose = require("mongoose");

const BalancesheetDataSchema = mongoose.Schema(
  {
    clientId: {
      type: String,
      required: true,
    },
    current_liabilities: {
      type: Object,
      required: true,
    },
    medium_long_term_libilities: {
      type: Object,
      required: true,
    },
    capital_reserve: {
      type: Object,
      required: true,
    },
    total_libilities: {
      type: Object,
      required: true,
    },
    current_assets: {
      type: Object,
      required: true,
    },
    fixed_assets_and_non_current_assets: {
      type: Object,
      required: true,
    },
    intangible_assets: {
      type: Object,
      required: true,
    },
    total_assets: {
      type: Object,
      required: true,
    },
    balancing: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

const BalancesheetSchema = mongoose.model(
  "Balancesheet",
  BalancesheetDataSchema
);

module.exports = BalancesheetSchema;
