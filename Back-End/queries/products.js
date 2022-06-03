const db = require("../db/dbConfig");


//SHOW ALL
const getAllProducts = async () => {
    try {
        const products = await db.any("SELECT * from products");
        return products;
    } catch (error) {
        return error;
    }
};

//GET ONE
const getProduct = async (id) => {
    try {
        const product = await db.one("SELECT * FROM products WHERE id=$1", id);//.one returns one item. .any returns an array of one object **sql interpolation**
        //const product = await db.one(`select * from products where ${id} = id)
        return product;
    } catch (error) { 
        return error;
    }
};

//CREATE
const newProduct = async (product) => {
    try {
      const newProducts = await db.one(
        "INSERT INTO products (name, description, price, image, category) VALUES($1, $2, $3, $4, $5) RETURNING *",
        [
          product.name,
          product.description,
          product.price,
          product.image,
          product.category,
        ]
      );
      return newProducts;
    } catch (error) {
      return error;
    }
  };

//DELETE
const deleteProduct = async (id) => {
    //query method .one
    //DELETE FROM products WHERE id=id, RETURNING*
    try {
        const product = await db.one("DELETE FROM products WHERE id=$1 RETURNING *", id);
        return product;
    }
    catch (err) {
        return err;
    }
}

//UPDATE
const updateProduct = async (id, product) => {
    try {
    const { name, description, price, image, category } = product

    const updatedProduct = await db.one("UPDATE products SET name =$1, description=$2, price=$3, image=$4, category=$5 WHERE id=$6 RETURNING *", [name, description, price, image, category, id]);
        return updatedProduct;
    } catch (err) {
        return err;
    }
}


module.exports = {
    getAllProducts,
    getProduct,
    newProduct,
    deleteProduct,
    updateProduct,};
