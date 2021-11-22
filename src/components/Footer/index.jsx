import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer-container">
      <h4 className="footer-heading">News Letter</h4>
      <hr />
      <div className="flex-space-between nav-container">
        <div className="flex-center nav-menu-list">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/" className="nav-item">
            Blog
          </Link>
          <Link to="/" className="nav-item">
            Shop
          </Link>
          <Link to="/" className="nav-item">
            Uber
          </Link>
          <Link to="/" className="nav-item">
            Impresum
          </Link>
        </div>
      </div>
    </div>
  );
}
