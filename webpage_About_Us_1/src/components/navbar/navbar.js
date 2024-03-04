import React from 'react'
import logo from './logo.png';
import './navbar.css';
function navbar() {
  return (
    <nav id="navbar">
    <div id="logo">
      <img src={logo} alt="error" />
    </div>
    <div className="search-panel">
      <input type="text" className="search-input" placeholder="Search..." />
    </div>
    <ul>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Idea and Strategy</a></li>
      <li><a href="#">Get Involved</a></li>
      <li><a href="#">Donation</a></li>
      <li><a href="#">NGO Directory</a></li>
      <li> <a href="#">Volunteer Pool</a></li>
      <li> <a href="#">Apply Grants</a> </li>
      <li><a href="#">Advisory</a></li>
    </ul>
  </nav>
  
  )
}

export default navbar