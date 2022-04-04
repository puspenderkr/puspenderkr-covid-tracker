const mongoose = require("mongoose");

const covidSchema = mongoose.Schema(
  {
    NewConfirmed: {
      type: Number,
    },
    TotalConfirmed: {
      type: Number,
    },
    NewDeaths: {
      type: Number,
    },
    TotalDeaths: {
      type: Number,
    },
    NewRecovered: {
      type: Number,
    },
    TotalRecovered: {
      type: Number,
    },
  },
  {
    timestamp: true,
  }
);

const Covid = mongoose.model("Covidg", covidSchema);

module.exports = Covid;
