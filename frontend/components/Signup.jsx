import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css';
import loginImage from '../assets/images/product_mini1.webp';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

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

      const data = await response.text(); // Change from response.json() to response.text()

      if (response.ok) {
        setMessage('User registered successfully!');
        setIsError(false);
        setTimeout(() => navigate('/login'), 2000); // Redirect after 2 seconds
      } else {
        setMessage(data || 'An error occurred'); // Use the raw text response
        setIsError(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred');
      setIsError(true);
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
        <p>Welcome to UrbanWeave!</p>
        <button className="google-signup">
          <img src="src/assets/images/google.webp" alt="Google icon" /> Sign up with Google
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
          <button type="submit" className="signup-button">Continue</button>
        </form>
        <p className="signin-link">
          Already have an account? <span onClick={handleSignInClick}>Sign in</span>
        </p>
        {message && <div className={`signup-message ${isError ? 'error' : ''}`}>{message}</div>}
      </div>
    </div>
  );
};

export default Signup;
