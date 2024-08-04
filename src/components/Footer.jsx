import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
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
        <a href="#">Press</a>
      </div>
      <div className="footer-column">
        <h3>Terms & Conditions</h3>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
      </div>
      <div className="footer-column">
        <h3>Flagship Store</h3>
        <a href="#">Locations</a>
        <a href="#">Store Hours</a>
      </div>
    </footer>
  );
};

export default Footer;
