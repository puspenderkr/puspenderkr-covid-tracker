const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const userRoutes = require("./routes/userRoutes");
const covidRoutes = require("./routes/covidRoutes");
const path = require("path");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch((err) => {
    console.error("Error connecting to Mongo", err);
  });

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("API RUNNING");
// });

// app.get("/api/data", (req, res) => {
//   res.json(data);
// });

app.use("/api/users", userRoutes);
app.use("/api/covid", covidRoutes);

app.use(notFound);
app.use(errorHandler);

// --------------------------deployment------------------------------
// __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// --------------------------deployment------------------------------

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`
  )
);
