const Covid = require("../models/covidModal");
const Covidc = require("../models/covidcModal");
const asyncHandler = require("express-async-handler");

const getCovid = asyncHandler(async (req, res) => {
  const covid = await Covid.find();
  res.json(covid);
});

const getCovidc = asyncHandler(async (req, res) => {
  const covidc = await Covidc.find();
  res.json(covidc);
});

module.exports = { getCovid, getCovidc };
