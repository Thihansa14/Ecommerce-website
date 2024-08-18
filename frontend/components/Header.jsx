import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  const [showAccountOptions, setShowAccountOptions] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState({});
  const [cartCount, setCartCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartCount(cartItems.length);
  }, []);

  const toggleAccountOptions = () => {
    setShowAccountOptions(!showAccountOptions);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleHomeClick = () => {
    navigate('/home');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleMouseEnter = (category) => {
    setShowDropdown({ ...showDropdown, [category]: true });
  };

  const handleMouseLeave = (category) => {
    setShowDropdown({ ...showDropdown, [category]: false });
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="shop-name" onClick={handleHomeClick}>UrbanWeave</h1>
      </div>
      <nav className="header-middle">
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('newArrivals')}
          onMouseLeave={() => handleMouseLeave('newArrivals')}
        >
          <a href="#">New Arrivals</a>
          {showDropdown.newArrivals && (
            <div className="dropdown-menu">
              <a href="#">Dresses</a>
              <a href="#">Tops</a>
              <a href="#">Pants</a>
              <a href="#">Party wear</a>
            </div>
          )}
        </div>
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('dresses')}
          onMouseLeave={() => handleMouseLeave('dresses')}
        >
          <a href="#">Dresses</a>
          {showDropdown.dresses && (
            <div className="dropdown-menu">
              <a href="/mini-dresses">Mini Dresses</a>
              <a href="#">Midi Dresses</a>
              <a href="#">Maxi Dresses</a>
            </div>
          )}
        </div>
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('tops')}
          onMouseLeave={() => handleMouseLeave('tops')}
        >
          <a href="#">Tops</a>
          {showDropdown.tops && (
            <div className="dropdown-menu">
              <a href="#">Crop Tops</a>
              <a href="#">Tank Tops</a>
              <a href="#">T-Shirts</a>
              <a href="#">Blouses</a>
            </div>
          )}
        </div>
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('pants')}
          onMouseLeave={() => handleMouseLeave('pants')}
        >
          <a href="#">Pants</a>
          {showDropdown.pants && (
            <div className="dropdown-menu">
              <a href="#">Denims</a>
              <a href="#">Cargo Pants</a>
              <a href="#">Office Pants</a>
            </div>
          )}
        </div>
        <a href="#">Swim Wear</a>
        <a href="#">Party Wear</a>
        <a href="#">Accessories</a>
      </nav>
      <div className="header-right">
        <i className="fas fa-search search-icon"></i>
        <i className="fas fa-user account-icon" onClick={toggleAccountOptions}></i>
        <div className="cart-container" onClick={handleCartClick}>
          <i className="fas fa-shopping-cart cart-icon"></i>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
        <i className="fas fa-bars menu-icon" onClick={toggleMenu}></i>
        {showAccountOptions && (
          <div className="account-options">
            <form>
              <button type="button" onClick={handleLoginClick}>Login</button>
              <button type="button" onClick={handleSignupClick}>Create an Account</button>
              <button>Wishlist</button>
            </form>
          </div>
        )}
      </div>
      {showMenu && (
        <nav className="mobile-menu">
          <a href="#">New Arrivals</a>
          <a href="#">Dresses</a>
          <a href="#">Tops</a>
          <a href="#">Shorts</a>
          <a href="#">Swim Wear</a>
          <a href="#">Gift Cards</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
