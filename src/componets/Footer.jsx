import React from 'react';
import '../Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="footer-content">

        <div className="footer-nav">
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="#">Contact</Link></li>
          </ul>
        </div>

        <div className="email-signup">
          <h3>Join our Newsletter</h3>
          <div className="signup-form">
            <input type="email" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
        </div>

        <div className="social-links">
          <a href="https://facebook.com/yourbakery" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com/yourbakery" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <p className="copyright">&copy; {currentYear} Pastry Patele</p>

      </div>
    </footer>
  );
};

export default Footer;
