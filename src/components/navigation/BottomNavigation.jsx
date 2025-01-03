import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon
import { useLocation, Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DescriptionIcon from '@mui/icons-material/Description';

const BottomNavigation = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: HomeIcon, label: 'Home', path: '/' },
    { icon: RestaurantIcon, label: 'Menu', path: '/Menu' },
    { icon: DescriptionIcon, label: 'About Us', path: '/about' },
    { icon: FaWhatsapp, label: 'Contact Us', path: '/ContactUs' }
  ];

  return (
    <>
      {/* Regular navbar for Desktop */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-10 p-4  text-white" style={{ backgroundColor: 'rgb(255, 107, 53)' }}>
        <div className="flex justify-end  w-full gap-24">
          {navItems.map(({ icon: Icon, label, path }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-2 hover:text-blue-400 ${
                location.pathname === path ? 'text-blue-500' : ''
              }`}
            >
              <Icon style={{
                 color: label === 'Contact Us' ? '#25D366' : 'inherit',
                 fontSize: label === 'Contact Us' ? '30px' : '24px' 

               }} />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Bottom navbar for mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-10" style={{ backgroundColor: 'rgb(255, 107, 53)' }}>
        <div className="flex justify-around items-center h-14">
          {navItems.map(({ icon: Icon, label, path }) => (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center justify-center w-full h-full ${
                location.pathname === path ? 'text-blue-500' : 'hover:text-gray-200'
              }`}
            >
              <Icon style={{ color: label === 'Contact Us' ? '#25D366' : 'inherit',
                fontSize: '25px' }} /> {/* Set WhatsApp color */}
              <span className="text-xs mt-0.4 font-bold">{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default BottomNavigation;