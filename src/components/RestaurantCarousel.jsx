import React, { useState, useEffect } from 'react';
import Restorant_1 from '../assets/Restorant_1.jpg'; 
import Restorant_2 from '../assets/Restorant_2.jpg'; 
import Restorant_3 from '../assets/Restorant_3.jpg'; 
import Restorant_4 from '../assets/Restorant_4.jpg'; 
import restaurantsData from '../assets/restaurants.json';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Image mapping object
const imageMap = {
  Restorant_1,
  Restorant_2,
  Restorant_3,
  Restorant_4
};

const RestaurantCard = ({ image, name, rating, cuisine, location, price, distance, offers }) => {

  return (
    <div className="flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] bg-white rounded-2xl overflow-hidden shadow-lg mx-2">
      <div className="relative h-52 sm:h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-md flex items-center gap-1">
          <Star className="w-4 h-4 fill-green-500 text-green-500" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
      
      <div className="p-4 sm:p-5">
        <h3 className="text-2xl sm:text-xl font-bold">{name}</h3>
        <div className="mt-3 text-gray-600 text-sm space-y-2">
        <p className="text-base">{cuisine}</p>
          <div className="flex justify-between items-center">
          <span className="text-base">{location}</span>
          <span className="text-base">{distance} km</span>
          </div>
          <div className="flex justify-between items-center">
          <span className="text-base">₹{price} for two</span>
          <span className="text-base">Table booking</span>
          </div>
        </div>
        
        <div className="mt-5 space-y-2">
          <div className="bg-green-600 text-white text-sm px-4 py-2 rounded-full flex items-center justify-between">
            <span>{offers.main}</span>
            {/* <span>+2 more</span> */}
          </div>

          {/* <div className="bg-green-50 text-green-800 text-sm px-4 py-2 rounded-full">
            {offers.bank}
          </div> */}
        </div>
      </div>
    </div>
  );
};

const RestaurantCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [restaurants, setRestaurants] = useState([]);
  const [startX, setStartX] = useState(0); // Track the starting X position for touch/mouse
  const [isDragging, setIsDragging] = useState(false); // Track if the user is dragging

  useEffect(() => {
    // Map the JSON data with actual images
    const restaurantsWithImages = restaurantsData.restaurants.map(restaurant => ({
      ...restaurant,
      image: imageMap[restaurant.imageName]
    }));
    setRestaurants(restaurantsWithImages);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Automatically move to the next slide
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [restaurants]);

    const handleMouseDown = (e) => {
        e.preventDefault(); // Prevent default behavior
        setStartX(e.clientX); // Get the starting X position
        setIsDragging(true); // Set dragging to true
      };
    
      const handleMouseUp = () => {
        setIsDragging(false); // Reset dragging
      };

      const handleMouseMove = (e) => {
        if (!isDragging) return; // If not dragging, do nothing
        e.preventDefault(); // Prevent default behavior
        const diffX = startX - e.clientX; // Calculate the difference
        if (diffX > 50) nextSlide(); // Move to next slide if dragged left
        if (diffX < -50) prevSlide(); // Move to previous slide if dragged right
        setStartX(e.clientX); // Update the starting position
      };
    
      const handleTouchStart = (e) => {
        e.preventDefault(); // Prevent default behavior
        setStartX(e.touches[0].clientX); // Get the starting X position for touch
        setIsDragging(true); // Set dragging to true
      };
    
      const handleTouchEnd = () => {
        setIsDragging(false); // Reset dragging
      };
    
      const handleTouchMove = (e) => {
        if (!isDragging) return; // If not dragging, do nothing
        e.preventDefault(); // Prevent default behavior
        const diffX = startX - e.touches[0].clientX; // Calculate the difference
        if (diffX > 50) nextSlide(); // Move to next slide if dragged left
        if (diffX < -50) prevSlide(); // Move to previous slide if dragged right
        setStartX(e.touches[0].clientX); // Update the starting position
      };
      
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= restaurants.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? restaurants.length - 1 : prevIndex - 1
    );
  };

  return (
    <div 
      className="w-full bg-gray-50 py-12"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Order From best Restaurants</h2>
          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex gap-6 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {restaurants.map((restaurant, index) => (
              <RestaurantCard key={index} {...restaurant} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCarousel;