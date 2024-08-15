// // src/components/ProductDetails.jsx
// import React, { useState } from 'react';
// import '../styles/productDetails.css';

// const ProductDetails = ({ product }) => {
//   const [selectedImage, setSelectedImage] = useState(product.images[0]);
//   const [quantity, setQuantity] = useState(1);

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//   };

//   const handleQuantityChange = (type) => {
//     setQuantity((prev) => (type === 'increase' ? prev + 1 : prev > 1 ? prev - 1 : 1));
//   };

//   return (
//     <div className="product-details-page">
//       <div className="left-column">
//         <img src={selectedImage} alt={product.name} className="main-image" />
//         <div className="thumbnail-images">
//           {product.images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`${product.name} ${index + 1}`}
//               onClick={() => handleImageClick(image)}
//               className={`thumbnail ${selectedImage === image ? 'active' : ''}`}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="right-column">
//         <h1>{product.name}</h1>
//         <div className="availability">
//           <span className="in-stock">IN STOCK</span>
//           <span className="sku">SKU: {product.sku}</span>
//         </div>
//         <h2>Rs {product.price.toFixed(2)} LKR</h2>
//         <div className="colors">
//           <p>Color: {product.colors[0]}</p>
//           <div className="color-options">
//             {product.colors.map((color, index) => (
//               <span key={index} className="color" style={{ backgroundColor: color }}></span>
//             ))}
//           </div>
//         </div>
//         <div className="sizes">
//           <p>Size:</p>
//           <div className="size-options">
//             {product.sizes.map((size, index) => (
//               <span key={index} className="size">{size}</span>
//             ))}
//           </div>
//         </div>
//         <div className="quantity">
//           <button onClick={() => handleQuantityChange('decrease')}>-</button>
//           <span>{quantity}</span>
//           <button onClick={() => handleQuantityChange('increase')}>+</button>
//         </div>
//         <button className="add-to-cart">ADD TO CART</button>
//         <button className="add-to-wishlist">Add to Wishlist</button>

//         <div className="additional-info">
//           <div className="section">
//             <h3>Product Details</h3>
//             <p>{product.details}</p>
//           </div>
//           <div className="section">
//             <h3>Exchanges</h3>
//             <p>{product.exchanges}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
