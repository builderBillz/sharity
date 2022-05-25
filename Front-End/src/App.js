import "./App.css";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Test from "./Pages/Test";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Products from "./Components/Products/Products";
import LogIn from "./Components/LogIn";

// Components

function App() {
  return (
    <div className="App">
      {/* <p>Hello Fantastics</p> */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<Test />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
