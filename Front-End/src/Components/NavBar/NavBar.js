import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = (props) => {
  return (
   <>
   <nav className='NavBar'>
      <ul>
      
        <Link to='/'>Sharity</Link>
       
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
        </ul>
        </div>
    </nav>
    </>
  );
};


export default NavBar;