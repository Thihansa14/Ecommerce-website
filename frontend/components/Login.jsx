import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';
import loginImage from '../assets/images/login.webp';
import googleIcon from '../assets/images/google.webp';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('Response Data:', data); // Log response data
      if (response.ok) {
        navigate('/home');
      } else {
        setMessage(data.msg || 'Invalid email or password');
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      setMessage('An error occurred during login'); 
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={loginImage} alt="Mimosa" />
      </div>
      <div className="login-right">
        <h2>UrbanWeave LOGIN</h2>
        <form onSubmit={handleSignIn}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <a href="#" className="forgot-password">Forgot password?</a>
          <button type="submit">Sign in</button>
        </form>
        <div className="divider">
          <span></span>
          <p>or</p>
          <span></span>
        </div>
        <button className="google-sign-in">
          <img src={googleIcon} alt="Google icon" /> Sign up with Google
        </button>
        <p>Are you new? <a href="/Signup" className="create-account">Create an Account</a></p>
        {message && <div className="login-message">{message}</div>}
      </div>
    </div>
  );
};

export default Login;
