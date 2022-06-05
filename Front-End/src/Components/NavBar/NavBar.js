import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = (props) => {
  return (
   <>
   <nav className='NavBar'>
      <ul>
      
      <div className="logo">
        <Link to='/'>
        <img src='https://i.imgur.com/cVKQV9J.jpg'></img>
        </Link>
        </div>
        
      </ul>

      <div className="links">
      <ul>
        <Link to="/about">About Us</Link>
        </ul>
        
        <ul>
        <Link to="/products">Products</Link>
        </ul>

        <ul>
        <Link to="/account">My Account</Link>
        </ul>
        
        <ul>
        <Link to="/shoppingCart">Cart ({props.cart.length})</Link>
        {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping-fast" /> */}
        </ul>
        </div>
    </nav>
    </>
  );
};


export default NavBar;