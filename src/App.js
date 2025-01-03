import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BottomNavigation from './components/navigation/BottomNavigation';
import Home from './pages/Home'; // Ensure the path is correct

// Import your page components

const Menu = () => <div className="p-4">Menu</div>;
const AboutUs = () => <div className="p-4">About Us</div>;
const ContactUs= () => <div className="p-4">Contact Us</div>;

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white-800">
        <main className="pb-16"> {/* Add padding to prevent content from being hidden behind nav */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu/>} /> 
            <Route path="/aboutus" element={<AboutUs/>} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </main>
        
        <BottomNavigation />
      </div>
    </BrowserRouter>
  );
}

export default App;