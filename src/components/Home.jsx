// import React from 'react';
// import '../styles/home.css';
// import NewArrivals1 from '../assets/images/product3.webp';
// import NewArrivals2 from '../assets/images/product6.webp';
// import NewArrivals3 from '../assets/images/product15.webp'; 
// import NewArrivals4 from '../assets/images/product2.webp'; 
// import NewArrivals5 from '../assets/images/product12.webp'; 
// import NewArrivals6 from '../assets/images/product9.webp';

// import BestSellers1 from '../assets/images/product1.webp';
// import BestSellers2 from '../assets/images/product18.webp';
// import BestSellers3 from '../assets/images/product20.webp';
// import BestSellers4 from '../assets/images/product17.webp';
// import BestSellers5 from '../assets/images/product8.webp';
// import BestSellers6 from '../assets/images/product11.webp';
// import BestSellers7 from '../assets/images/product19.webp';
// import BestSellers8 from '../assets/images/product21.webp';
// import BestSellers9 from '../assets/images/product22.webp';

// const Home = () => {

//     const scrollLeft = () => {
//         document.getElementById('product-row').scrollLeft -= 300;
//     };

//     const scrollRight = () => {
//         document.getElementById('product-row').scrollLeft += 300;
//     };

//     const scrollLeft2 = () => {
//         document.getElementById('product-row2').scrollLeft -= 300;
//     };

//     const scrollRight2 = () => {
//         document.getElementById('product-row2').scrollLeft += 300;
//     };

//   return (
//     <main className="home">
//       <section className="hero">
//         <div className="slider">
//           {/* Add sliding images here */}
//         </div>
//       </section>
      
//       <section className="new-arrivals">
//         <h2>NEW ARRIVALS</h2>
//         <div className="carousel-container">
//             <button className="prev" onClick={scrollLeft}>&lt;</button>
//             <div className="product-row" id="product-row">
//                 <div className="product-box" style={{ backgroundImage: `url(${NewArrivals1})` }}></div>
//                 <div className="product-box" style={{ backgroundImage: `url(${NewArrivals2})` }}></div>
//                 <div className="product-box" style={{ backgroundImage: `url(${NewArrivals3})` }}></div>
//                 <div className="product-box" style={{ backgroundImage: `url(${NewArrivals4})` }}></div>
//                 <div className="product-box" style={{ backgroundImage: `url(${NewArrivals5})` }}></div>
//                 <div className="product-box" style={{ backgroundImage: `url(${NewArrivals6})` }}></div>
//             </div>
//             <button className="next" onClick={scrollRight}>&gt;</button>
//         </div>
//       </section>
      
//       <section className="best-sellers">
//         <h2>BEST SELLERS</h2>
//         <div className="carousel-container2">
//             <button className="prev2" onClick={scrollLeft2}>&lt;</button>
//             <div className="product-row2" id="product-row2">
//                 <div className="product-box" style={{ backgroundImage: `url(${BestSellers1})` }}></div>
//                 <div className="product-box" style={{ backgroundImage: `url(${BestSellers2})` }}></div>
//                 <div className="product-box" style={{ backgroundImage: `url(${BestSellers3})` }}></div>
//                 <div className="product-box" style={{ backgroundImage: `url(${BestSellers4})` }}></div>
//                 <div className="product-box" style={{ backgroundImage: `url(${BestSellers5})` }}></div>
//                 <div className="product-box" style={{ backgroundImage: `url(${BestSellers6})` }}></div>
//                 <div className="product-box" style={{ backgroundImage: `url(${BestSellers7})` }}></div>
//                 <div className="product-box" style={{ backgroundImage: `url(${BestSellers8})` }}></div>
//                 <div className="product-box" style={{ backgroundImage: `url(${BestSellers9})` }}></div>
//             </div>
//             <button className="next2" onClick={scrollRight2}>&gt;</button>
//         </div>
//       </section>
      
//       <section className="banner">
//         {/* Add banner content */}
//       </section>
      
//       <section className="tops">
//         <h2><a href="#">TOPS</a></h2>
//         {/* Add tops content */}
//       </section>
      
//       <section className="maxi-dresses">
//         <h2><a href="#">Maxi Dresses</a></h2>
//         {/* Add maxi dresses content */}
//       </section>
      
//       <section className="e-gift-cards">
//         <h2>E-Gift Cards</h2>
//         <button>Shop E-Gift Cards</button>
//       </section>
      
//       <section className="mini-dresses">
//         <h2><a href="#">Mini Dresses</a></h2>
//         {/* Add mini dresses content */}
//       </section>
      
//       <section className="swim-wears">
//         <h2><a href="#">Swim Wears</a></h2>
//         {/* Add swim wears content */}
//       </section>
//     </main>
//   );
// };

// export default Home;


import React from 'react';
import '../styles/home.css';
import NewArrivals1 from '../assets/images/product3.webp';
import NewArrivals2 from '../assets/images/product6.webp';
import NewArrivals3 from '../assets/images/product15.webp'; 
import NewArrivals4 from '../assets/images/product2.webp'; 
import NewArrivals5 from '../assets/images/product12.webp'; 
import NewArrivals6 from '../assets/images/product9.webp';

import BestSellers1 from '../assets/images/product1.webp';
import BestSellers2 from '../assets/images/product18.webp';
import BestSellers3 from '../assets/images/product20.webp';
import BestSellers4 from '../assets/images/product17.webp';
import BestSellers5 from '../assets/images/product8.webp';
import BestSellers6 from '../assets/images/product11.webp';
import BestSellers7 from '../assets/images/product19.webp';
import BestSellers8 from '../assets/images/product21.webp';
import BestSellers9 from '../assets/images/product22.webp';

const products = [
  {
    image: NewArrivals1,
    name: 'Ring Detailed Satin Corset Top',
    price: 'Rs 3,450.00 LKR',
    colors: ['#809bce', '#b8e0d2', '#f6f7b0'],
  },
  {
    image: NewArrivals2,
    name: 'Button Down Oversized Top',
    price: 'Rs 4,450.00 LKR',
    colors: ['#000000', '#FFFFFF', '#b9c0ff1'],
  },
  {
    image: NewArrivals3,
    name: 'Button Down Short Sleeved Crop Top',
    price: 'Rs 3,500.00 LKR',
    colors: ['#bc85a3', '#000000', '#b1cfeb'],
  },
  {
    image: NewArrivals4,
    name: 'Halter Neck Back Tie up Satin Top',
    price: 'Rs 3,450.00 LKR',
    colors: ['#faf9f6', '#e7c6ff', '#000000'],
  },
  {
    image: NewArrivals5,
    name: 'Corset Detailed Back Tieup Top',
    price: 'Rs 2,590.00 LKR',
    colors: ['#000000', '#FFFFFF', '#FF0000'],
  },
  {
    image: NewArrivals6,
    name: 'Cowl Neck Satin Top',
    price: 'Rs 3,250.00 LKR',
    colors: ['#000000', '#acb5af', '#d2a3a9'],
  },
];

const bestSellers = [
    {
      image: BestSellers1,
      name: 'Back Smock Tube Top',
      price: 'Rs 2,590.00 LKR',
      colors: ['#000000', '#FFFFFF', '#FF0000'],
    },
    {
      image: BestSellers2,
      name: 'Back Smock Tube Top',
      price: 'Rs 2,590.00 LKR',
      colors: ['#000000', '#FFFFFF', '#FF0000'],
    },
    {
      image: BestSellers3,
      name: 'Back Smock Tube Top',
      price: 'Rs 2,590.00 LKR',
      colors: ['#000000', '#FFFFFF', '#FF0000'],
    },
    {
      image: BestSellers4,
      name: 'Back Smock Tube Top',
      price: 'Rs 2,590.00 LKR',
      colors: ['#000000', '#FFFFFF', '#FF0000'],
    },
    {
      image: BestSellers5,
      name: 'Back Smock Tube Top',
      price: 'Rs 2,590.00 LKR',
      colors: ['#000000', '#FFFFFF', '#FF0000'],
    },
    {
      image: BestSellers6,
      name: 'Back Smock Tube Top',
      price: 'Rs 2,590.00 LKR',
      colors: ['#000000', '#FFFFFF', '#FF0000'],
    },
    {
      image: BestSellers7,
      name: 'Back Smock Tube Top',
      price: 'Rs 2,590.00 LKR',
      colors: ['#000000', '#FFFFFF', '#FF0000'],
    },
    {
      image: BestSellers8,
      name: 'Back Smock Tube Top',
      price: 'Rs 2,590.00 LKR',
      colors: ['#000000', '#FFFFFF', '#FF0000'],
    },
    {
      image: BestSellers9,
      name: 'Back Smock Tube Top',
      price: 'Rs 2,590.00 LKR',
      colors: ['#000000', '#FFFFFF', '#FF0000'],
    },
  ];

const Home = () => {

    const scrollLeft = () => {
        document.getElementById('product-row').scrollLeft -= 300;
    };

    const scrollRight = () => {
        document.getElementById('product-row').scrollLeft += 300;
    };

    const scrollLeft2 = () => {
        document.getElementById('product-row2').scrollLeft -= 300;
    };

    const scrollRight2 = () => {
        document.getElementById('product-row2').scrollLeft += 300;
    };

  return (
    <main className="home">
      <section className="hero">
        <div className="slider">
          {/* Add sliding images here */}
        </div>
      </section>
      
      <section className="new-arrivals">
        <h2>NEW ARRIVALS</h2>
        <div className="carousel-container">
            <button className="prev" onClick={scrollLeft}>&lt;</button>
            <div className="product-row" id="product-row">
                {products.map((product, index) => (
                  <div className="product-box" key={index} style={{ backgroundImage: `url(${product.image})` }}>
                    <div className="product-description">
                      <h3>{product.name}</h3>
                      <p>{product.price}</p>
                      <div className="product-colors">
                        {product.colors.map((color, colorIndex) => (
                          <span key={colorIndex} style={{ backgroundColor: color }}></span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <button className="next" onClick={scrollRight}>&gt;</button>
        </div>
      </section>
      
      <section className="best-sellers">
        <h2>BEST SELLERS</h2>
        <div className="carousel-container2">
            <button className="prev2" onClick={scrollLeft2}>&lt;</button>
            <div className="product-row2" id="product-row2">
                {bestSellers.map((product2, index) => (
                  <div className="product-box" key={index} style={{ backgroundImage: `url(${product2.image})` }}>
                    <div className="product-description">
                      <h3>{product2.name}</h3>
                      <p>{product2.price}</p>
                      <div className="product-colors">
                        {product2.colors.map((color, colorIndex) => (
                          <span key={colorIndex} style={{ backgroundColor: color }}></span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <button className="next2" onClick={scrollRight2}>&gt;</button>
        </div>
      </section>
      
      <section className="banner">
        {/* Add banner content */}
      </section>
      
      <section className="tops">
        <h2><a href="#">TOPS</a></h2>
        {/* Add tops content */}
      </section>
      
      <section className="maxi-dresses">
        <h2><a href="#">Maxi Dresses</a></h2>
        {/* Add maxi dresses content */}
      </section>
      
      <section className="e-gift-cards">
        <h2>E-Gift Cards</h2>
        <button>Shop E-Gift Cards</button>
      </section>
      
      <section className="mini-dresses">
        <h2><a href="#">Mini Dresses</a></h2>
        {/* Add mini dresses content */}
      </section>
      
      <section className="swim-wears">
        <h2><a href="#">Swim Wears</a></h2>
        {/* Add swim wears content */}
      </section>
    </main>
  );
};

export default Home;

