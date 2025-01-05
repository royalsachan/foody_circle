import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BottomNavigation from './components/navigation/BottomNavigation';
import Home from './pages/Home'; // Ensure the path is correct
import About from './pages/About'; // Fixed casing
import Contact from './pages/Contact'; // Fixed casing
import Footer from './components/Footer/Footer'; // Import the Footer component

function App() {

  // const location = useLocation();

  return (
    <Router>
      <div className="min-h-screen bg-white-800">
        <main className="pb-16"> {/* Add padding to prevent content from being hidden behind nav */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" component={About } />
            <Route path="/contact" element={<Contact />} /> 
            {/* Add other routes as needed */}
          </Routes>
        </main>
        
        <Footer /> {/* Include the Footer component */}
        <BottomNavigation />
      </div>
    </Router>
  );
}

export default App;