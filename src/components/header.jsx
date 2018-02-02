import React from 'react';
import './header.css';

const logo = require('../images/FullSizeRender.jpg');
const menu = require('../images/menu-black.png');



const Header = () => 
  <header>
    <nav className="navbar navbar-expand-md fixed-top">
      <a className="navbar-brand" href="javascript"><img className="logo" src={logo} alt="logo" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"><img className="menu-icon" src={menu} alt="menu icon" /></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="home">Home<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="shop">Shop</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact">Contact</a>
          </li>
        </ul>       
      </div>
    </nav>
  </header>


export default Header;