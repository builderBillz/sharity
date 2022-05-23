import "./App.css";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Test from "./Pages/Test";
import ProductDetails from "./Components/ProductDetails/ProductDetails.js";
import Products from "./Components/Products/Products";
import NavBar from "./Components/NavBar/NavBar";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";

// Components

// const URL = process.env.REACT_APP_API_URL;
// console.log(URL);

function App() {
  return (
    <div className="App">
      {/* <p>Hello Fantastics</p> */}
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<Test />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />}/>
        <Route path="/shoppingCart" element={<ShoppingCart />}/>
      </Routes>
    </div>
  );
}

export default App;
