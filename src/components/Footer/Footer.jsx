import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import FoodyLogo from "../../assets/Foody.png";

const Footer = () => {
  return (
    <footer className="complex-footer">
      <div className="footer-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {/* Logo & About Section */}
        <div className="footer-section about transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-300">
          <div className="logo-container flex items-center justify-between mb-2 w-full">
            <img 
              src={FoodyLogo} 
              alt="FoodyCircle Logo" 
              className="logo-image w-16 h-auto transition-transform duration-300 hover:scale-110 hover:shadow-lg " 
            />
            <div className="relative inline-block px-2 py-2 bg-gray-200 rounded-full shadow-md ml-auto transition-transform duration-300 hover:scale-110 hover:shadow-lg ">
              <span className="text-2xl font-bold text-orange-500 ">FoodyCircle</span>
            </div>
          </div>
          <h4 className="text-2xl font-bold text-yellow-300 mb-4 relative">
            About Us
          </h4>
          <p className="text-gray-100 leading-relaxed">
            FoodyCircle is Pukhrayan's local food delivery platform, bringing your favorite meals straight to your doorstep. We connect food lovers with local eateries, delivering deliciousness quickly and reliably.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section quick-links transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-300">
          <h4 className="text-2xl font-bold text-yellow-300 mb-4 relative">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/restaurant">Restaurants</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h4 className="text-2xl font-bold text-yellow-300 mb-4 relative">Contact</h4>
          <p>Phone: 999-999-9999</p>
          <p>Email: contact@foodycircle.com</p>
          <p>Pukhrayan, Kanpur Dehat-209111, UP, India</p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-300">
          <h4 className="text-2xl font-bold text-yellow-300 mb-4 relative">Follow Us</h4>
          <div className="social-icons flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom text-center p-4 mb-8">
        <p>© 2025 FoodyCircle. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

