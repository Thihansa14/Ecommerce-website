// src/components/ProductDetails.jsx
import React, { useState } from 'react';
import '../styles/productDetails.css';
import { useLocation } from 'react-router-dom';
import CartPopup from './CartPopup'; // Import the CartPopup component

const ProductDetails = () => {
  const { state } = useLocation();
  const { product } = state || {};
  
  const [selectedImage, setSelectedImage] = useState(product?.image);
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false); // State to control the popup

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleQuantityChange = (amount) => {
    if (quantity + amount > 0) {
      setQuantity(quantity + amount);
    }
  };

  const handleAddToCart = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-details">
      <div className="left-column-product">
        <div className="main-image">
          <img src={selectedImage} alt={product.name} />
        </div>
        <div className="image-gallery">
          <img src={product.image} alt="Product" onClick={() => handleImageClick(product.image)} />
          {product.relatedImages && product.relatedImages.map((image, index) => (
            <img key={index} src={image} alt={`Related ${index}`} onClick={() => handleImageClick(image)} />
          ))}
        </div>
      </div>
      <div className="right-column-product">
        <h1>{product.name}</h1>
        <p>Availability: In Stock</p>
        <p>Product ID: {product.sku}</p>
        <p className="price">Rs {product.price}.00</p>
        <div className="colors">
          <p>Available Colors:</p>
          {product.colors.map((color, index) => (
            <span key={index} className="color" style={{ backgroundColor: color }}></span>
          ))}
        </div>
        <div className="sizes">
          <p>Available Sizes:</p>
          {product.sizes.map((size, index) => (
            <span key={index} className="size">{size}</span>
          ))}
        </div> <hr />
        <div className="quantity">
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
          
        </div>
        <button className="cart-btn" onClick={handleAddToCart}>ADD TO CART</button>
        <button className="wishlist-btn">Add to Wishlist</button> <hr />
        <div className="details">
          <h3>Product Details</h3>
          <p>{product.details}</p>
        </div>
        <div className="exchange">
          <h3>Exchange Policy</h3>
          <p>{'If you are not 100% satisfied with your product, you have Fourteen Days (14) from the day you receive the products (the “Product(s)”) to return it back to us for an exchange.'}</p>
          <p>{'For orders within Sri Lanka you can request a one to one exchange or store credit. We do not facilitate refunds.'}</p>
          <p>{'We have a one - time exchange policy. I.e. an item received in exchange cannot be further exchanged.'}</p>
          <p>{'All exchange items should be in the original condition; Unwashed, Unworn & the internal tags intact.'}</p>
          <p>{'Customer owns the title of exchange goods until it reaches Arienti, therefore it is the customers responsibility to take reasonable care in packaging to avoid damages.'}</p>
          <p>{'Items purchased via our Website can be exchanged at the Flagship Store or Online Store. But, purchases made at the Flagship Store cannot be exchanged online. These exchanges can only be done by visiting the Flagship Store.'}</p>
          <p>{'Sale/discounted items purchased online cannot be exchanged.'}</p>
        </div>
      </div>
      {showPopup && <CartPopup product={product} quantity={quantity} onClose={handleClosePopup} />}
    </div>
  );
};

export default ProductDetails;
