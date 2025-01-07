import React from 'react';
import { Link } from 'react-router-dom';
import restaurantData from '../../assets/restaurants.json';
import Restorant_1 from '../../assets/Restorant_1.jpg'; 
import Restorant_2 from '../../assets/Restorant_2.jpg'; 
import Restorant_3 from '../../assets/Restorant_3.jpg'; 
import Restorant_4 from '../../assets/Restorant_4.jpg'; 
import Restorant_5 from '../../assets/Restorant_5.jpg'; 
import Restorant_6 from '../../assets/Restorant_6.jpg'; 
import Footer from '../Footer/Footer';

// Image mapping object
const imageMap = {
  Restorant_1,
  Restorant_2,
  Restorant_3,
  Restorant_4,
  Restorant_5,
  Restorant_6,
};

const RestaurantCard = ({ restaurant }) => {
  const imagePath = imageMap[restaurant.imageName] || require('../../assets/default.jpg').default; 

  return (
    <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`}>
      <div className="relative overflow-hidden rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group bg-white mt-10">
        <img 
          src={imagePath}
          alt={restaurant.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4 bg-white group-hover:bg-gray-50">
          <h3 className="font-bold text-lg group-hover:text-blue-600">
            {restaurant.name}
          </h3>
          <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded">
            <span className="text-green-700">★ {restaurant.rating}</span>
          </div>
          <div className="text-gray-600 text-sm mb-2">
            ₹{restaurant.price} for two • {restaurant.distance} km
          </div>
          <div className="text-gray-500 text-sm mb-1">
            {restaurant.cuisine}
          </div>
          <div className="text-gray-500 text-sm">
            {restaurant.location}
          </div>
        </div>
      </div>
    </Link>
  );
};

const Restaurants = () => {
  return (
    <div>
    <div className="container mx-auto p-6 mt-20">
      <h1 className="text-2xl font-bold mb-6">
        {restaurantData.restaurants.length} Restaurants to explore
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {restaurantData.restaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default Restaurants;