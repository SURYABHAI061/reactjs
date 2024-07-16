import React, { useState } from "react";
import "../StyleMain/Stylewa.css";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky-top">
      <div className="header">
        <div className="contact">
          <div className="normal">
            <span>
              <i className="fa fa-location-arrow"></i>INDIA,PUNE
            </span>
            <span>
              <i className="fa fa-envelope"></i>TimeZone@gmail.com
            </span>
            <span>
              <i className="fa fa-phone"></i>+94 77 123 4567
            </span>
          </div>
          <div className="social-contact">
            <a href="https://www.facebook.com">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com">
              <i className="fa fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div id="navbar">
        <div className="top-nav">
          <div className="top-header">
            <Link to="/">
              Time <span>Zone</span>
            </Link>
          </div>
          <div className={`navmenu ${menuOpen ? "open" : ""}`}>
            <div className="top-navbar">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/product">Product</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="top-icons">
              <NavLink to="/search">
                <i className="fa fa-search"></i>
              </NavLink>
              <i className="fa fa-user"></i>
              <div className="cart">
                <NavLink to="/cart">
                  <i className="fa fa-cart-plus"></i>
                  <b>
                    <sup style={{ color: "red" }}>{props.count}</sup>
                  </b>
                </NavLink>
              </div>
            </div>
          </div>
          <i className="fa fa-bars" id="menuBar" onClick={toggleMenu}></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
