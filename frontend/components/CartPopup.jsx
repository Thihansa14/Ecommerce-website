import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/cartPopup.css';

const CartPopup = ({ product, quantity, onClose, onRemoveFromCart }) => {
  const navigate = useNavigate();
  const [quantity1, setQuantity] = useState(quantity); // Initialize with the passed quantity
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to control the success message

  const handleQuantityChange = (amount) => {
    if (quantity1 + amount > 0) {
      setQuantity(quantity1 + amount);
    }
  };

  const handleViewCart = () => {
    navigate('/cart'); 
  };

  const handleRemove = () => {
    onRemoveFromCart(product.sku); // Call the remove function passed as a prop
    setShowSuccessMessage(true); // Show success message
    setTimeout(() => {
      setShowSuccessMessage(false); // Hide the message after a short delay
    }, 3000); // Adjust the timeout duration as needed
  };

  const subtotal = product.price * quantity1;

  return (
    <div>
      {showSuccessMessage && (
        <div className="success-message">
          Product successfully deleted from the cart!
        </div>
      )}
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
              <button className="popup-checkout-btn">PROCEED TO CHECKOUT</button>
              <button className="view-cart-btn" onClick={handleViewCart}>VIEW CART</button>
              <button className="continue-shopping-btn" onClick={onClose}>CONTINUE SHOPPING</button>
              <button className="remove-btn" onClick={handleRemove}>REMOVE FROM CART</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
