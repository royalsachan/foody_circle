import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-orange-100 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
       
        <div className="text-center md:text-left">
          <div className="relative inline-block px-6 py-2 bg-gray-200 rounded-full shadow-md">
            <span className="text-2xl font-bold text-orange-500">FoodyCircle</span>
          </div>
          <ul className="mt-6 space-y-2 text-black">
            <li className="text-lg font-medium hover:text-orange-400 transition-colors duration-300 cursor-pointer">
              Home
            </li>
            <li className="text-lg font-medium hover:text-orange-400 transition-colors duration-300 cursor-pointer">
              About Us
            </li>
          </ul>
        </div>

        {/* Available In and Contact Links */}
        <div className="text-center md:text-left">
          <div className="text-lg font-semibold text-black mb-4">Available in:<br/>
          <p className="text-lg hover:text-orange-400 transition-colors duration-300 cursor-pointer">Pukhrayan</p> </div>
          <ul className="space-y-2 text-gray-500">
            {/* <li className="text-lg hover:text-orange-400 transition-colors duration-300 cursor-pointer">
              Partner With Us
            </li>
            <li className="text-lg hover:text-orange-400 transition-colors duration-300 cursor-pointer">
              Ride With Us
            </li> */}
            <li className="text-lg hover:text-orange-400 transition-colors duration-300 cursor-pointer">
              Help and Support
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center md:text-left">
          <div className="text-lg font-semibold text-black mb-4">Social Links</div>
          <div className="flex justify-center md:justify-start space-x-4 text-black">
            <a
              href="#"
              aria-label="Instagram"
              className="hover:scale-110 hover:text-orange-400 transition-transform duration-300"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:scale-110 hover:text-orange-400 transition-transform duration-300"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:scale-110 hover:text-orange-400 transition-transform duration-300"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:scale-110 hover:text-orange-400 transition-transform duration-300"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

