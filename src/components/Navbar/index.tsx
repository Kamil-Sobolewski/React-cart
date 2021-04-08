import React, { useContext } from 'react';
import { Nav, NavLink } from './Navbar.styles';
import { CartContext } from '../../contexts/CartContext';

const Navbar = () => {
  // const [products, setProducts] = useContext(CartContext);

  return (
    <Nav>
      <div className="site-logo">
        <NavLink to="/">React Cart</NavLink>
      </div>
      <div className="links">
        <NavLink to="/cart">
          <img src="cart-outline.png" alt="cart-icon" />
        </NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;
