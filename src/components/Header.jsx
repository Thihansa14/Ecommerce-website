
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  const [showAccountOptions, setShowAccountOptions] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

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

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="shop-name" onClick={handleHomeClick}>UrbanWeave</h1>
      </div>
      <nav className="header-middle">
        <a href="#">New Arrivals</a>
        <a href="#">Dresses</a>
        <a href="#">Tops</a>
        <a href="#">Shorts</a>
        <a href="#">Swim Wear</a>
        <a href="#">Gift Cards</a>
      </nav>
      <div className="header-right">
        <i className="fas fa-search search-icon"></i>
        <i className="fas fa-user account-icon" onClick={toggleAccountOptions}></i>
        <i className="fas fa-shopping-cart cart-icon"></i>
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
