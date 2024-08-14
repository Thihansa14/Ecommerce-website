import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="be-in-touch">
          <h3>BE IN TOUCH</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-columns"> 
        <div className="footer-column">
          <h3>Customer Service</h3>
          <a href="#">Contact Us</a>
          <a href="#">Size Guide</a>
          <a href="#">Exchange Policy</a>
          <a href="#">Delivery Policy</a>
        </div>
        <div className="footer-column">
          <h3>About Us</h3>
          <a href="#">Our Story</a>
          <a href="#">Careers</a>
          <a href="#">Visit Our Store</a>
        </div>
        <div className="footer-column">
          <h3>Terms & Conditions</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
        <div className="footer-column">
          <h3>Flagship Store</h3>
          <a href="#">No.20 Bagatale Road,<br />
                      Colombo 03,<br />
                      Sri Lanka.</a>
          <h4>Hours : Daily from 10AM to 8PM</h4>
        </div>
      </div><hr />
      <div className="footer-bottom">
        <p>© 2024 UrbanWeave | All Rights Reserved | Designed by Thihansa Akmeemana</p>
      </div>
    </footer>
  );
};

export default Footer;
