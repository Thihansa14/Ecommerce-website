import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/cartPopup.css';

const CartPopup = ({ product, quantity, onClose }) => {
  const navigate = useNavigate();
  const subtotal = product.price * quantity;

  const [quantity1, setQuantity] = useState(1);

  const handleQuantityChange = (amount) => {
    if (quantity1 + amount > 0) {
      setQuantity(quantity1 + amount);
    }
  };

  const handleViewCart = () => {
    navigate('/cart'); 
  };

  return (
    <div className="cart-popup">
      <div className="cart-popup-content">
        <div className="cart-header">
          <h2>Product added successfully to the cart!</h2>
          <button className="close-btn" onClick={onClose}>X</button>
        </div>
        <div className="cart-body">
          <div className="cart-product-details">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>Color: {product.colors[0]}</p>
              <p>Size: {product.sizes[0]}</p>
              <p>Price: Rs {product.price}</p>
              <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(-1)}>-</button>
                <span>{quantity1}</span>
              <button onClick={() => handleQuantityChange(1)}>+</button>
              </div>
            </div>
          </div>
          <div className="cart-summary">
            <h3>Subtotal: Rs {subtotal.toFixed(2)}</h3>
            <p>Shipping & taxes calculated at checkout.</p>
            <button className="checkout-btn">PROCEED TO CHECKOUT</button>
            <button className="view-cart-btn" onClick={handleViewCart}>VIEW CART</button>
        <button className="continue-shopping-btn" onClick={onClose}>CONTINUE SHOPPING</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
