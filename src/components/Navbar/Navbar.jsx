import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, } from 'react-bootstrap';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import './Navbar.css';

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { cart } = useCart();
    const { wishlist } = useWishlist();

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  return (
    <div>
      <Navbar className='Navb' expand="lg">
        <Navbar.Brand href="/" className='brand col-2'>Fashion</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline className="mx-auto" bg='success'>
            <FormControl type="text" placeholder="Search for products" className="mr-sm-2" required />
            <Button variant="success">Search</Button>
          </Form>
          <Nav className="ml-auto col-3">
            {/* <NavDropdown title={<FaUser />} id="account-dropdown" align="end">
              <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/signup">Sign Up</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link as={Link} to="/Signup"><FaUser/></Nav.Link>
            <Nav.Link as={Link} to="/wishlist">
                            <FaHeart />
                            {wishlist.length > 0 && <span>({wishlist.length})</span>}
                        </Nav.Link>
                        <Nav.Link as={Link} to="/cart">
                            <FaShoppingCart />
                            {cart.length > 0 && <span>({cart.length})</span>}
                        </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <nav className="nav-bottom-container">
        <div className="bottom-container">
          <button className="dropdown-toggle" onClick={toggleDropdown}>Menu</button>
          <ul className={`nav ${isDropdownOpen ? 'open' : ''}`}>
            <li className="nav-link"><a href="/">Home</a></li>
            <li className="nav-link"><a href="/category/men">Men</a></li>
            <li className="nav-link"><a href="/category/women">Women</a></li>
            <li className="nav-link"><a href="/category/kids">Kids</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
