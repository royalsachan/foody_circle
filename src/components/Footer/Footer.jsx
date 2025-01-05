import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="complex-footer">
      <div className="footer-container">
        {/* Logo & About Section */}
        <div className="footer-section about">
          <h4>About Us</h4>
          <p>
          FoodyCircle is Pukhrayan's local food delivery platform, bringing your favorite meals straight to your doorstep. We connect food lovers with local eateries, delivering deliciousness quickly and reliably.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h4>Contact</h4>
          <p>Phone: 999-999-9999</p>
          <p>Email: contact@supplier.com</p>
          <p>Location: Kanpur Dehat, UP, India</p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 FoodyCircle. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;



























// import React from "react";
// import ContactForm from '../../pages/ContactForm'
// import { Link } from 'react-router-dom';
// // import ContactForm from './ContactForm';
// import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

// const Footer = () => {
  
//   return (
//     <footer className="bg-gradient-to-b from-white to-orange-100 py-8 px-4 mb-10">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
       
//         <div className="text-center md:text-left">
//           <div className="relative inline-block px-6 py-2 bg-gray-200 rounded-full shadow-md">
//             <span className="text-2xl font-bold text-orange-500">FoodyCircle</span>
//           </div>
//           <ul className="mt-6 space-y-2 text-black">
//             <li className="text-lg font-medium hover:text-orange-400 transition-colors duration-300 cursor-pointer">
//             <Link to="/">Home</Link>
//             </li>
//             <li className="text-lg font-medium hover:text-orange-400 transition-colors duration-300 cursor-pointer">
//             <Link to="/about">About Us</Link>
//             </li>
//             <li className="text-lg font-medium hover:text-orange-400 transition-colors duration-300 cursor-pointer">
//             <Link to="/contact">Contact Us</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Available In and Contact Links */}
//         <div className="text-center md:text-left">
//           <div className="text-lg font-semibold text-black mb-4">Available in:<br/>
//           <p className="text-lg hover:text-orange-400 transition-colors duration-300 cursor-pointer">Pukhrayan</p> </div>
//           <ul className="space-y-2 text-gray-500">
//             {/* <li className="text-lg hover:text-orange-400 transition-colors duration-300 cursor-pointer">
//               Partner With Us
//             </li>
//             <li className="text-lg hover:text-orange-400 transition-colors duration-300 cursor-pointer">
//               Ride With Us
//             </li> */}
//             <li className="text-lg hover:text-orange-400 transition-colors duration-300 cursor-pointer">
//               Help and Support
//             </li>
//           </ul>
//         </div>

//         {/* Social Links */}
        
//         <div className="text-center md:text-left">
//           <div className="text-lg font-semibold text-black mb-4">Social Links</div>
//           <div className="flex justify-center md:justify-start space-x-4 text-black">
//             <a
//               href="https://www.instagram.com/foodycircle2025/profilecard/?igsh=NmJmNjI3c29wMjYz" // Link to Instagram
//               aria-label="Instagram"
//               className="hover:scale-110 hover:text-orange-400 transition-transform duration-300"
//             >
//               <FaInstagram className="text-xl" />
//             </a>
//             <a
//               href="https://www.facebook.com/yourprofile" // Link to Facebook
//               aria-label="Facebook"
//               className="hover:scale-110 hover:text-orange-400 transition-transform duration-300"
//             >
//               <FaFacebookF className="text-xl" />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/foodycircle" // Link to LinkedIn
//               aria-label="LinkedIn"
//               className="hover:scale-110 hover:text-orange-400 transition-transform duration-300"
//             >
//               <FaLinkedinIn className="text-xl" />
//             </a>
//             <a
//               href="https://twitter.com/yourprofile" // Link to Twitter
//               aria-label="Twitter"
//               className="hover:scale-110 hover:text-orange-400 transition-transform duration-300"
//             >
//               <FaTwitter className="text-xl" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

