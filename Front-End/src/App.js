import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { CartProvider } from "react-use-cart";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Pages
import Home from "./Pages/Home";
import Test from "./Pages/Test";
import ProductDetails from "./Components/ProductDetails/ProductDetails.js";
import Products from "./Components/Products/Products";
import LogIn from "./Components/LogIn";
import NavBar from "./Components/NavBar/NavBar";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import New from "./Pages/New";

// Components

function App() {
  const [cart, setCart] = useState([]);


  const addToCart = (products) => {
    console.log("we are in addToCart");
    setCart([...cart, products]);
  };
  console.log(cart);


  const removeFromCart = (id) => {
    console.log(id);
    setCart(cart.filter((product) => product.id != id));
  };

  return (
    <div className="App">
      {/* <p>Hello Fantastics</p> */}
      <NavBar cart={cart} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<Test />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products func={addToCart} cart={cart} />}/>
        <Route path="/newproduct" element={<New />}/>
        <Route path="/shoppingCart" element={<ShoppingCart func={removeFromCart} setCart={setCart}  cart={cart} />}/>
        <Route path="/account" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
