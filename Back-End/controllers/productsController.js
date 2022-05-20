const express = require("express");

const {
    getAllProducts, getProduct, newProduct, deleteProduct, updateProduct
} = require("../queries/products");

const products = express.Router();

// All products
products.get("/", async (request, response) => {
  console.log("GET request to /products");
  const allProducts = await getAllProducts();
  if (allProducts.length === 0) {
    response.status(500).json({ error: "server error" });
    return;
  }
  response.status(200).json(allProducts);
});

// Show one product by id
products.get("/:id", async (request, response) => {
  console.log("GET request to /products/:id");
  const product = await getProduct(request.params.id);
  if (product.id) {
    response.status(200).json(product);
  } else {
    response.status(500).json({ error: "this item doesn't exist" });
  }
});


products.post("/", async (request, response) => {
    const product = await newProduct(request.body);
    response.status(200).json(product);
  }); //create new user


// Delete product
products.delete("/:id", async (request, response) => {
  console.log("DELETE request to /products/:id");
  const deletedProduct = await deleteProduct(request.params.body);
  if (deleteProduct.id) {
    response.status(200).json(deletedProduct);
  } else {
    response.status(404).json("not found");
  }
});

// Update product
products.put("/:id", async (req, res) => {
    // const { id } = req.params;
    const updatedProduct = await updateProduct(req.params.id, req.body);
    if (updatedProduct.id) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json("Product not found");
    }
  });

module.exports = products;
