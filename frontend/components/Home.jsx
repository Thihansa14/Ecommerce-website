import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import '../styles/home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import mini_dresses from '../assets/mini_dresses'
import new_collections from '../assets/new_arrivals'

import BestSellers1 from '../assets/images/product1.webp';
import BestSellers2 from '../assets/images/product18.webp';
import BestSellers3 from '../assets/images/product20.webp';
import BestSellers4 from '../assets/images/product17.webp';
import BestSellers5 from '../assets/images/product8.webp';
import BestSellers6 from '../assets/images/product11.webp';
import BestSellers7 from '../assets/images/product19.webp';
import BestSellers8 from '../assets/images/product21.webp';
import BestSellers9 from '../assets/images/product22.webp';

import Top1 from '../assets/images/product_top2.webp';
import Top2 from '../assets/images/product_top3.jpg';
import Top3 from '../assets/images/product_top4.webp'; 
import Top4 from '../assets/images/product_top5.webp'; 

import maxi1 from '../assets/images/product_maxi4.jpg';
import maxi2 from '../assets/images/product_maxi3.jpg';
import maxi3 from '../assets/images/product_maxi5.jpg'; 
import maxi4 from '../assets/images/product_maxi2.webp'; 

import swim1 from '../assets/images/product_swim1.jpg';
import swim2 from '../assets/images/product_swim2.webp';
import swim3 from '../assets/images/product_swim4.jpg'; 
import swim4 from '../assets/images/product_swim3.jpg'; 

import Hero1 from '../assets/images/hero1.jpg';
import Hero2 from '../assets/images/hero2.jpg';
import Hero3 from '../assets/images/hero3.jpg';
import Hero4 from '../assets/images/hero4.jpg';
import Hero5 from '../assets/images/hero5.jpg';

import Banner from '../assets/images/store.jpg';
import Egift from '../assets/images/e-gift.webp';

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

  const Tops = [
    {
      image: Top1,
      name: 'Bustier Detail Front Tie-up Top',
      price: 'Rs 3,450.00 LKR',
      colors: ['#809bce', '#b8e0d2', '#f6f7b0'],
    },
    {
      image: Top2,
      name: 'Halter Neck Crop Top',
      price: 'Rs 4,450.00 LKR',
      colors: ['#000000', '#FFFFFF', '#e06c71'],
    },
    {
      image: Top3,
      name: 'Corset Detail Back Tie-up Top',
      price: 'Rs 3,500.00 LKR',
      colors: ['#bc85a3', '#000000', '#b1cfeb'],
    },
    {
      image: Top4,
      name: 'Short Sleeve Oversize Shirt',
      price: 'Rs 3,450.00 LKR',
      colors: ['#faf9f6', '#e7c6ff', '#000000'],
    }
  ];

  const maxidress = [
    {
      image: maxi1,
      name: 'Bustier Detail Front Tie-up Top',
      price: 'Rs 3,450.00 LKR',
      colors: ['#809bce', '#b8e0d2', '#f6f7b0'],
    },
    {
      image: maxi2,
      name: 'Halter Neck Crop Top',
      price: 'Rs 4,450.00 LKR',
      colors: ['#000000', '#FFFFFF', '#e06c71'],
    },
    {
      image: maxi3,
      name: 'Corset Detail Back Tie-up Top',
      price: 'Rs 3,500.00 LKR',
      colors: ['#bc85a3', '#000000', '#b1cfeb'],
    },
    {
      image: maxi4,
      name: 'Short Sleeve Oversize Shirt',
      price: 'Rs 3,450.00 LKR',
      colors: ['#faf9f6', '#e7c6ff', '#000000'],
    }
  ];

  const swimWear = [
    {
      image: swim1,
      name: 'Bustier Detail Front Tie-up Top',
      price: 'Rs 3,450.00 LKR',
      colors: ['#809bce', '#b8e0d2', '#f6f7b0'],
    },
    {
      image: swim2,
      name: 'Halter Neck Crop Top',
      price: 'Rs 4,450.00 LKR',
      colors: ['#000000', '#FFFFFF', '#e06c71'],
    },
    {
      image: swim3,
      name: 'Corset Detail Back Tie-up Top',
      price: 'Rs 3,500.00 LKR',
      colors: ['#bc85a3', '#000000', '#b1cfeb'],
    },
    {
      image: swim4,
      name: 'Short Sleeve Oversize Shirt',
      price: 'Rs 3,450.00 LKR',
      colors: ['#faf9f6', '#e7c6ff', '#000000'],
    }
  ];

const Home = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

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

    const handleScroll = () => {
        if (window.scrollY > 300) { // Adjust this value as needed
            setShowBackToTop(true);
        } else {
            setShowBackToTop(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
  
    const sliderImages = [Hero1, Hero2, Hero3, Hero4, Hero5];


  return (
    <main className="home">
      <section className="hero">
      <Slider {...settings}>
          {sliderImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="slider-image"/>
            </div>
          ))}
        </Slider>
      </section>
      
      <section className="new-arrivals">
    <h2>NEW ARRIVALS</h2>
    <div className="carousel-container">
        <button className="prev" onClick={scrollLeft}>&lt;</button>
        <div className="product-row" id="product-row">
            {new_collections.map((product, index) => (
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
      <div className="banner-image">
        <img src={Banner} alt="Banner" />
      </div>
      <div className="banner-content">
        <h1 className="banner-title">Latest Arrivals Going Fast</h1>
        <p className="banner-subtitle">Hurry up and order now, only few left.</p>
        <button className="banner-button">SHOP NOW</button>
      </div>
      </section>
      
      <section className="tops">
        <h2><a href="#">TOPS</a></h2>
        <div className="product-grid">
          {Tops.map((product3, index) => (
            <div className="product-box" key={index} style={{ backgroundImage: `url(${product3.image})` }}>
              <div className="product-description">
                <h3>{product3.name}</h3>
                <p>{product3.price}</p>
                <div className="product-colors">
                  {product3.colors.map((color, colorIndex) => (
                    <span key={colorIndex} style={{ backgroundColor: color }}></span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="maxi-dresses">
        <h2><a href="#">Maxi Dresses</a></h2>
        <div className="product-grid">
          {maxidress.map((product4, index) => (
            <div className="product-box" key={index} style={{ backgroundImage: `url(${product4.image})` }}>
              <div className="product-description">
                <h3>{product4.name}</h3>
                <p>{product4.price}</p>
                <div className="product-colors">
                  {product4.colors.map((color, colorIndex) => (
                    <span key={colorIndex} style={{ backgroundColor: color }}></span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="banner">
      <div className="banner-image">
        <img src={Egift} alt="Banner" />
      </div>
      <div className="e-gift-content">
        <h1 className="banner-title">Gift your loved ones with a e-gift card.</h1>
        {/* <p className="banner-subtitle">Hurry up and order now, only few left.</p> */}
        <button className="banner-button">SHOP NOW</button>
      </div>
      </section>
      
      <section className="mini-dresses">
        <h2><a href="#">Mini Dresses</a></h2>
        <div className="product-grid">
          {mini_dresses.slice(0,4).map((product4, index) => (
            <div className="product-box" key={index} style={{ backgroundImage: `url(${product4.image})` }}>
              <div className="product-description">
                <h3>{product4.name}</h3>
                <p>{product4.price}</p>
                <div className="product-colors">
                  {product4.colors.map((color, colorIndex) => (
                    <span key={colorIndex} style={{ backgroundColor: color }}></span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="swim-wears">
        <h2><a href="#">Swim Wears</a></h2>
        <div className="product-grid">
          {swimWear.map((product4, index) => (
            <div className="product-box" key={index} style={{ backgroundImage: `url(${product4.image})` }}>
              <div className="product-description">
                <h3>{product4.name}</h3>
                <p>{product4.price}</p>
                <div className="product-colors">
                  {product4.colors.map((color, colorIndex) => (
                    <span key={colorIndex} style={{ backgroundColor: color }}></span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {showBackToTop && (
        <button className="back-to-top" onClick={() => window.scrollTo(0, 0)}>
          ↑ 
        </button>
      )}
    </main>
  );
};

export default Home;

