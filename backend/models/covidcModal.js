const mongoose = require("mongoose");

const covidcSchema = mongoose.Schema(
  {
    Country: {
      type: String,
    },
    CountryCode: {
      type: String,
    },
    Slug: {
      type: String,
    },
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

const Covidc = mongoose.model("Covidc", covidcSchema);

module.exports = Covidc;
