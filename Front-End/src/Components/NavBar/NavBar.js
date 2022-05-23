import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
   <>
   <nav className='NavBar'>
      <ul>
        <Link to='/'>Home</Link>
      </ul>
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
        <Link to="/cart">Cart</Link>
        </ul>
    </nav>
    </>
  );
};


export default NavBar;