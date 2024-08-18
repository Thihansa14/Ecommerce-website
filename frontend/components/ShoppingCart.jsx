import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/shoppingCart.css';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch cart items from local storage or a backend API
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleQuantityChange = (index, amount) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += amount;
    if (newCartItems[index].quantity === 0) {
      newCartItems.splice(index, 1); // Remove item if quantity reaches 0
    }
    setCartItems(newCartItems);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  const handleRemoveItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleProceedToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Continue shopping!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src={item.image} alt={item.name} className="product-image" />
                  <div className="product-info">
                    <h3>{item.name}</h3>
                    <p>Color: {item.color}</p>
                    <p>Size: {item.size}</p>
                  </div>
                </td>
                <td>Rs {item.price.toFixed(2)}</td>
                <td>
                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                  </div>
                </td>
                <td>Rs {(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button className="remove-btn" onClick={() => handleRemoveItem(index)}>
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="cart-summary">
        <h3>Subtotal: Rs {calculateSubtotal()}</h3>
        <p>Shipping & taxes calculated at checkout.</p>
        <button className="checkout-btn" onClick={handleProceedToCheckout}>
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
