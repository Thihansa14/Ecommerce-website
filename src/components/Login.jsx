import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';
import loginImage from '../assets/images/login.webp';
import googleIcon from '../assets/images/google.webp';

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Navigate to the Home page
    navigate('/Home');
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={loginImage} alt="Mimosa" />
      </div>
      <div className="login-right">
        <h2>MIMOSA LOGIN</h2>
        <form>
          <label htmlFor="username">Username or email</label>
          <input type="text" id="username" name="username" defaultValue="johnsmith007" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" defaultValue="*********" />
          <a href="#" className="forgot-password">Forgot password?</a>
          <button type="button" onClick={handleSignIn}>Sign in</button>
        </form>
        <div className="divider">
          <span></span>
          <p>or</p>
          <span></span>
        </div>
        <button className="google-sign-in">
        <img src={googleIcon} alt="Google icon" /> Sign up with Google
        </button>
        <p>Are you new? <a href="/Signup.jsx" className="create-account">Create an Account</a></p>
      </div>
    </div>
  );
};

export default Login;
