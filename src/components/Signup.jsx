import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css'; // Ensure you create and adjust this CSS file as needed

const Signup = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <h1>Create Your Account</h1>
      <p>Welcome to MIMOSA! Please enter your details</p>
      <button className="google-signup">
        <img src="src\assets\images\google.webp" alt="Google icon" /> Sign up with Google
      </button>
      <div className="divider">
        <span></span>
        <p>or</p>
        <span></span>
      </div>
      <form>
        <label htmlFor="name">First Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your first name" />
        <label htmlFor="name">Last Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your last name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />
        <label htmlFor="password">Password</label>
        <div className="password-input">
          <input type="password" id="password" name="password" placeholder="Enter your password" />
          <i className="fas fa-eye"></i>
        </div>
        
        <div className="terms">
          <input type="checkbox" id="terms" name="terms" />
          <label htmlFor="terms">Subscribe to stay updated with new products and offers!</label>
        </div>
        <button type="submit" className="signup-button">Sign in</button>
      </form>
      <p className="signin-link">
        Already have an account? <span onClick={handleSignInClick}>Sign in</span>
      </p>
    </div>
  );
};

export default Signup;
