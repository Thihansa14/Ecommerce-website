import React from 'react'
import './Navbar.css'
import navProfile from '../../assets/profile_icon.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className="nav-logo">UrbanWeave</h1>
      <img src={navProfile} className='nav-profile' alt="Profile-icon" />
    </div>
  )
}

export default Navbar
