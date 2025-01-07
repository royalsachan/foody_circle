import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BottomNavigation from './components/Navigation/BottomNavigation';
import Home from './pages/Home'; // Ensure the path is correct
import  Restaurants from './components/ExploreRestaurant/RestaurantCard';
import RestaurantMenuPage from './pages/RestaurantMenu';



function App() {

  // const location = useLocation();

  return (
    <Router>
      <div className="min-h-screen bg-white-800">
        <main className="pb-16"> {/* Add padding to prevent content from being hidden behind nav */}
          <Routes>
            <Route path="/" element={
              <>
                <Home /> 
                <BottomNavigation />
              </>
            } />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/restaurant/:id" element={<RestaurantMenuPage />} /> {/* Add this route */}
          </Routes>
        </main>
        
       
        <BottomNavigation />
      </div>
    </Router>
  );
}

export default App; 