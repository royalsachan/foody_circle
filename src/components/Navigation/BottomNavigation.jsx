import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLocation, Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const BottomNavigation = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: HomeIcon, label: 'Home', path: '/', glowColor: 'rgba(59, 130, 246, 0.5)' },
    { icon: RestaurantIcon, label: 'Restaurants', path: '/restaurants', glowColor: 'rgba(239, 68, 68, 0.5)' },
    { icon: ShoppingCartIcon, label: 'Orders', path: '/cart', glowColor: 'rgba(16, 185, 129, 0.5)' },
    { icon: FaWhatsapp, label: 'Contact Us', path: 'https://wa.me/message/OVJWR2Y4YFVHF1', glowColor: 'rgba(37, 211, 102, 0.5)' }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-10 p-4 bg-gradient-to-r from-orange-500 via-red-500 to-rose-500 shadow-lg">
        <div className="flex justify-end w-full gap-24">
          {navItems.map(({ icon: Icon, label, path, glowColor }) => (
            <Link
              key={path}
              to={path}
              className={`relative flex items-center gap-2 text-white px-4 py-2 rounded-full transition-all duration-300
                ${location.pathname === path ? 
                  'bg-white/10 backdrop-blur-sm ring-2 ring-white/50 shadow-[0_0_10px_rgba(255,255,255,0.3)]' : 
                  'hover:bg-white/10 hover:backdrop-blur-sm hover:ring-2 hover:ring-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                }
                group
              `}
            >
              <Icon className={`transition-all duration-300 
                ${label === 'Contact Us' ? 'text-[#25D366]' : 'text-white'}
                group-hover:scale-110 group-hover:shadow-[0_0_10px_${glowColor}]`}
                style={{ 
                  fontSize: label === 'Contact Us' ? '30px' : '24px'
                }}
              />
              <span className="font-medium group-hover:text-white/90">{label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-10 bg-gradient-to-r from-orange-500 via-red-500 to-rose-500 shadow-lg">
        <div className="flex justify-around items-center h-16">
          {navItems.map(({ icon: Icon, label, path, glowColor }) => (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center justify-center w-full h-full transition-all duration-300
                ${location.pathname === path ? 
                  'bg-white/10 backdrop-blur-sm' : 
                  'hover:bg-white/10 hover:backdrop-blur-sm'
                }
                group
              `}
            >
              <Icon className={`transition-all duration-300 
                ${label === 'Contact Us' ? 'text-[#25D366]' : 'text-white'}
                group-hover:scale-110 group-hover:shadow-[0_0_10px_${glowColor}]`}
                style={{ fontSize: '25px' }}
              />
              <span className="text-xs mt-1 font-medium text-white group-hover:text-white/90">{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default BottomNavigation;