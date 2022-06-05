import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


// Pages
import Home from "./Pages/Home";
import Test from "./Pages/Test";
import ProductDetails from "./Components/ProductDetails/ProductDetails.js";
import Products from "./Components/Products/Products";
import NavBar from "./Components/NavBar/NavBar";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import New from "./Pages/New";
import EditProduct from "./Components/EditProductDetails.js/EditProductDetails";

// Components
import About from './Components/Profiles/About';
import LogIn from "./Components/myAccount/LogIn";

function App() {

  const [cart, setCart] = useState([]);
  const [login, setLogin] = useState({
    status: false
  })

  const addToCart = (products) => {
    console.log("we are in addToCart");
    setCart([...cart, products]);
  };
  // console.log(cart);


  const removeFromCart = (id) => {
    console.log(id);
    setCart(cart.filter((product) => product.id != id));
  };

  const signIn = () =>{
    setLogin({...login, status: !login.status})
  };

  console.log(login)
  return (
    <div className="App">
    
      <NavBar cart={cart} login={login} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<Test />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products func={addToCart} cart={cart} />}/>
        <Route path="/newproduct" element={<New />}/>
        <Route path="/products/:id/edit" element={<EditProduct />}/>
        <Route path="/shoppingCart" element={<ShoppingCart func={removeFromCart} setCart={setCart}  cart={cart} />}/>
        <Route path="/account" element={<LogIn func={signIn} login={login}/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
