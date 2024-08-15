import React from 'react';
import '../styles/miniProduct.css';

import mini1 from '../assets/images/product_mini19.webp';
import mini2 from '../assets/images/product_mini3.jpg';
import mini3 from '../assets/images/product_mini4.jpg'; 
import mini4 from '../assets/images/product_mini5.jpg'; 
import mini5 from '../assets/images/product_mini2.webp'; 
import mini6 from '../assets/images/product_mini1.webp';
import mini7 from '../assets/images/product_mini3.webp';
import mini8 from '../assets/images/product_mini7.webp'; 
import mini9 from '../assets/images/product_mini8.webp'; 
import mini10 from '../assets/images/product_mini9.jpg'; 
import mini11 from '../assets/images/product_mini10.jpg';
import mini12 from '../assets/images/product_mini10.webp';
import mini13 from '../assets/images/product_mini11.jpg';
import mini14 from '../assets/images/product_mini12.jpg';
import mini15 from '../assets/images/product_mini13.jpg'; 
import mini16 from '../assets/images/product_mini14.jpg'; 
import mini17 from '../assets/images/product_mini15.webp'; 
import mini18 from '../assets/images/product_mini16.jpg';
import mini19 from '../assets/images/product_mini17.webp';
import mini20 from '../assets/images/product_mini18.webp'; 

const MiniProduct = () => {
  const productsmini = [
    {id:1, name: "Camila Puff Sleeve Dress", price: 7590, sku: "159291-2024-133-6", image: mini5 , colors: ["#809bce", "#a7cec9", "#e7c6ff"], sizes: ["S", "M", "L"], details: "Product details here...", exchanges: "Exchange policy here...", isNew: true },
    { name: "Ella Frill Short Dress", price: 7490, image: mini6 , colors: ["#e06c71", "#f6f7b0", "#bc85a3"], isNew: true },
    { name: "Clara Layer Short Dress", price: 6790, image: mini7 , colors: ["#bc85a3", "#000000", "#faf9f6"], isNew: true },
    { name: "Molly Button Down Midi Dress", price: 6990, image: mini8, colors: ["#faf9f6", "#e7c6ff", "#000000"], isNew: true },
    { name: "Flare and Flair Dress", price: 7590, image: mini1 , colors: ["#000000", "#FFFFFF", "#a7cec9"], isNew: true },
    { name: "Ella Frill Short Dress", price: 7490, image: mini2 , colors: ["#000000", "#acb5af", "#d2a3a9"], isNew: true },
    { name: "Clara Layer Short Dress", price: 6790, image: mini3 , colors: ["#809bce", "#b8e0d2", "#f6f7b0"], isNew: true },
    { name: "Molly Button Down Midi Dress", price: 6990, image: mini4, colors: ["#bc85a3", "#000000", "#b1cfeb"], isNew: true },
    { name: "Flare and Flair Dress", price: 7590, image: mini9 , colors: ["#faf9f6", "#e7c6ff", "#000000"], isNew: true },
    { name: "Ella Frill Short Dress", price: 7490, image: mini10 , colors: ["#000000", "#FFFFFF", "#a7cec9"], isNew: true },
    { name: "Clara Layer Short Dress", price: 6790, image: mini11 , colors: ["#faf9f6", "#e7c6ff", "#000000"], isNew: true },
    { name: "Molly Button Down Midi Dress", price: 6990, image: mini12, colors: ["#809bce", "#b8e0d2", "#f6f7b0"], isNew: true },
    { name: "Clara Layer Short Dress", price: 6790, image: mini13 , colors: ["#000000", "#FFFFFF", "#e06c71"], isNew: true },
    { name: "Molly Button Down Midi Dress", price: 6990, image: mini14, colors: ["#bc85a3", "#000000", "#b1cfeb"], isNew: true },
    { name: "Clara Layer Short Dress", price: 6790, image: mini15 , colors: ["#faf9f6", "#e7c6ff", "#000000"], isNew: true },
    { name: "Molly Button Down Midi Dress", price: 6990, image: mini16, colors: ["#000000", "#acb5af", "#d2a3a9"], isNew: true },
    { name: "Clara Layer Short Dress", price: 6790, image: mini17 , colors: ["#000000", "#FFFFFF", "#a7cec9"], isNew: true },
    { name: "Molly Button Down Midi Dress", price: 6990, image: mini18, colors: ["#809bce", "#b8e0d2", "#f6f7b0"], isNew: true },
    { name: "Clara Layer Short Dress", price: 6790, image: mini19 , colors: ["#bc85a3", "#000000", "#b1cfeb"], isNew: true },
    { name: "Molly Button Down Midi Dress", price: 6990, image: mini20, colors: ["#faf9f6", "#e7c6ff", "#000000"], isNew: true }
  ];

   const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "UK 4", "UK 6", "UK 8", "UK 10", "UK 12", "UK 14"];

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
          {productsmini.map((productmini, index) => (
            <div className="product-card-mini" key={index}>
              {productmini.isNew && <div className="new-badge-mini">New</div>}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniProduct;