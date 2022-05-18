// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();
app.use(cors());

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.get("/", (request, res) => {
  res.send("Hello World");
});

const userController = require("./controllers/userController");
app.use("/users", userController);

const productsController = require("./controllers/productsController.js");
app.use("/products", productsController);

module.exports = app;
