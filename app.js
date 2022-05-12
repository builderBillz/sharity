// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.get("/", (_, res) => {
  res.send("Hello World");
});

module.exports = app;
