import React, { useState, useEffect } from 'react';
import '../styles/miniProduct.css';
import { useNavigate } from 'react-router-dom';
// import mini_dresses from '../assets/mini_dresses' 

const MiniProduct = () => {
  const navigate = useNavigate();
  const [mini_dresses, setMini_dresses] = useState([]);

   const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "UK 4", "UK 6", "UK 8", "UK 10", "UK 12", "UK 14"];

   const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  
  useEffect(()=>{
    fetch ('http://localhost:5000/minidresses')
    .then((response)=>response.json())
    .then((data)=>setMini_dresses(data))
    .catch((error) => console.error('Error fetching mini dresses:', error));
  },[])

  return (
    <div className="product-page">
      <div className="left-column">
        <div className="filter-section">
          <h4>CATEGORIES</h4> <hr />
          <ul className="categories-list">
            <li><a href="/mini-dresses">Mini Dresses</a></li>
            <li><a href="#Maxi Dresses">Maxi Dresses</a></li>
            <li><a href="#Midi Dresses">Midi Dresses</a></li>
            <li><a href="#T-shirts">T-shirts</a></li>
            <li><a href="#Crop Tops">Crop Tops</a></li>
            <li><a href="#Tank Tops">Tank Tops</a></li>
            <li><a href="#Blouses">Blouses</a></li>
            <li><a href="#Cargo Pants">Cargo Pants</a></li>
            <li><a href="#Denims">Denims</a></li>
            <li><a href="#Office Trousers">Office Trousers</a></li>
            <li><a href="#Party Wear">Party Wear</a></li>
            <li><a href="#Accessories">Accessories</a></li>
          </ul>
        </div>
        <div className="filter-section">
          <h4>SIZE</h4> <hr />
          <div className="sizes">
            {sizes.map((size, index) => (
              <span key={index} className="size">{size}</span>
            ))}
          </div>
        </div>
        <div className="filter-section">
          <h4>AVAILABILITY</h4> <hr />
          <label><input type="checkbox" /> In Stock(256)</label>
          <label><input type="checkbox" /> Out Of Stock(247)</label>
        </div>
        <div className="filter-section">
          <h4>PRICE</h4> <hr />
          <input type="range" min="0" max="12900" />
          <div className="price-range">
            <span>Rs 0</span>
            <span>Rs 12900</span>
          </div>
        </div>
        <div className="filter-section">
          <h4>COLOR</h4> <hr />
          <div className="colors">
          <span className="color" style={{ backgroundColor: '#000000' }}></span>
            <span className="color" style={{ backgroundColor: '#ff8ecc' }}></span>
            <span className="color" style={{ backgroundColor: '#f9dc5c' }}></span>
            <span className="color" style={{ backgroundColor: '#809bce' }}></span>
            <span className="color" style={{ backgroundColor: '#a7cec9' }}></span>
            <span className="color" style={{ backgroundColor: '#e7c6ff' }}></span>
            <span className="color" style={{ backgroundColor: '#ffffff' }}></span>
            <span className="color" style={{ backgroundColor: '#79b8f4' }}></span>
            <span className="color" style={{ backgroundColor: '#caffbf' }}></span>
          </div>
        </div>
      </div>
      <div className="right-column">
        <div className="top-controls">
          <div className="items-per-page">
            <label>Items per page</label>
            <select>
              <option value="20">20</option>
              <option value="40">40</option>
              <option value="60">60</option>
            </select>
          </div>
          <div className="sort-by">
            <label>Sort by</label>
            <select>
              <option value="date">Date, new to old</option>
              <option value="price-low">Price, low to high</option>
              <option value="price-high">Price, high to low</option>
            </select>
          </div>
        </div>
        <div className="products-grid-mini">
        {mini_dresses.length > 0 ? (
            mini_dresses.map((productmini, index) => (
              <div className="product-card-mini" key={index} onClick={() => handleProductClick(productmini)}>
                {productmini.available && <div className="new-badge-mini">New</div>}
                <img src={productmini.image} alt={productmini.name} />
                <div className="product-info-mini">
                  <h5>{productmini.name}</h5>
                  <p>Rs {productmini.price}</p>
                  <div className="product-colors-mini">
                    {productmini.colors.map((color, i) => (
                      <span key={i} className="color" style={{ backgroundColor: color }}></span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No mini dresses available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiniProduct;
