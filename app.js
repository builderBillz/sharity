// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();
app.use(cors());

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.get("/", (_, res) => {
  res.send("Hello World");
});

const userController = require("./controllers/usersController.js");
app.use("/users", userController);

module.exports = app;
