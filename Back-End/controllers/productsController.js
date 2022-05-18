const express = require("express");

const products = express.Router();

const {} = require("../queries/products.js");



products.get("/", async (req, res) => {
    try {

    }
});




products.get("/id", async (req, res) => {

});



products.post("/", async (req, res) => {
    try{

    } catch (error) {
        res.status(500).json({error: error});
    }
});




products.put("/id", async (req, res) => {
    const { id } = req.params;
});




products.delete("/id", async (req, res) => {
    const { id } = req.params;
})



















module.exports = products;