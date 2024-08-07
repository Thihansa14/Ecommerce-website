import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css'; // Ensure you create and adjust this CSS file as needed
import loginImage from '../assets/images/login.webp';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleSignIn = () => {
    navigate('/login');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        navigate('/login');
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSignInClick = () => {
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src={loginImage} alt="Mimosa" />
      </div>
      <div className="signup-right">
        <h1>Create Your Account</h1>
        <p>Welcome to MIMOSA!</p>
        <button className="google-signup">
          <img src="src\assets\images\google.webp" alt="Google icon" /> Sign up with Google
        </button>
        <div className="divider">
          <span></span>
          <p>or</p>
          <span></span>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" onChange={handleChange} />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" onChange={handleChange} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input type="password" id="password" name="password" placeholder="Enter your password" onChange={handleChange} />
            <i className="fas fa-eye"></i>
          </div>
          <div className="terms">
            <input type="checkbox" id="terms" name="terms" />
            <label htmlFor="terms">Subscribe to stay updated with new products and offers!</label>
          </div>
          <button type="submit" className="signup-button" onClick={handleSignIn}>Continue</button>
        </form>
        <p className="signin-link">
          Already have an account? <span onClick={handleSignInClick}>Sign in</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
