const express = require("express");
const { getCovid, getCovidc } = require("../controller/covidController");

const router = express.Router();

router.route("/").get(getCovid);
router.route("/countries").get(getCovidc);

module.exports = router;
