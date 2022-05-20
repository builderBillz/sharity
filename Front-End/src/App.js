import "./App.css";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Test from "./Pages/Test";
import ProductDetails from "./Components/ProductDetails.js";

// Components

// const URL = process.env.REACT_APP_API_URL;
// console.log(URL);

function App() {
  return (
    <div className="App">
      {/* <p>Hello Fantastics</p> */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<Test />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
