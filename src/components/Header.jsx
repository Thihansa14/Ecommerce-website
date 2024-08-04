import React, { useState } from 'react';
import '../styles/header.css';

const Header = () => {
  const [showAccountOptions, setShowAccountOptions] = useState(false);

  const toggleAccountOptions = () => {
    setShowAccountOptions(!showAccountOptions);
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="shop-name">MIMOSA</h1>
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
        <i className="icon cart-icon">🛒</i>
        <i className="icon search-icon">🔍</i>
        <i className="icon account-icon" onClick={toggleAccountOptions}>👤</i>
        {showAccountOptions && (
          <div className="account-options">
            <button>Login</button>
            <button>Create an Account</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
