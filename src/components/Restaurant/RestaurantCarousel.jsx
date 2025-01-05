import React, { useState, useEffect } from 'react';
import Restorant_1 from '../../assets/Restorant_1.jpg'; 
import Restorant_2 from '../../assets/Restorant_2.jpg'; 
import Restorant_3 from '../../assets/Restorant_3.jpg'; 
import Restorant_4 from '../../assets/Restorant_4.jpg'; 
import restaurantsData from '../../assets/restaurants.json';
import { Star } from 'lucide-react';
import { Carousel } from 'nuka-carousel'; // Import Nuka Carousel

// Image mapping object
const imageMap = {
  Restorant_1,
  Restorant_2,
  Restorant_3,
  Restorant_4
};

const RestaurantCard = ({ image, name, rating, cuisine, location, price, distance, offers }) => {
  return (
    <div className="flex-shrink-0 w-[85vw] sm:w-[400px] bg-orange-200 md:w-[450px] bg-orange-200 rounded-2xl overflow-hidden shadow-lg mx-2 ">
      <div className="relative h-52 sm:h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-md flex items-center gap-1">
          <Star className="w-4 h-4 fill-green-500 text-green-500" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
      
      <div className="p-4 sm:p-5">
        <h3 className="text-2xl sm:text-xl font-bold text-center text-orange-600" >{name}</h3>
        <div className="mt-3 text-gray-600 font-semibold text-sm space-y-2">
          <p className="text-base">{cuisine}</p>
          <div className="flex justify-between items-center">
            <span className="text-base">{location}</span>
            <span className="text-base">{distance} km</span>
          </div>
          
        <div className="mt-5 space-y-2">
          <div className="bg-green-600 text-white text-sm px-12 py-2 rounded-full flex items-center justify-between font-semibold">
            <span>{offers.main}</span>
            {/* <span>+2 more</span> */}
          </div>

          <div className="mt-4">
          <button className="w-full bg-green-600 text-white font-semibold py-2 rounded-full hover:bg-green-700 transition duration-200">
            Order Now
          </button>
        </div>


          {/* <div className="flex justify-between items-center">
            <span className="text-base">₹{price} for two</span>
            <span className="text-base">Table booking</span>
          </div> */}

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
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Map the JSON data with actual images
    const restaurantsWithImages = restaurantsData.restaurants.map(restaurant => ({
      ...restaurant,
      image: imageMap[restaurant.imageName]
    }));
    setRestaurants(restaurantsWithImages);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 py-12 border-4 border-orange-400">
      <div className="container mx-auto px-4 ">
        <h2 className="text-2xl font-bold mb-5 -mt-5 text-center">Order From Our Best Restaurants</h2>
        
        <Carousel 
          wrapAround={true} 
          autoplay={true} 
          autoplayInterval={3000} 
          slidesToShow={3} // Show 3 slides at once
          slidesToScroll={1} // Scroll 1 slide at a time
          transitionMode="scroll" // Use scroll transition
          speed={500} // Transition speed in milliseconds
          renderCenterLeftControls={({ previousSlide }) => (
            <button onClick={previousSlide} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              &lt;
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button onClick={nextSlide} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              &gt;
            </button>
          )}
          defaultControlsConfig={{
            nextButtonText: 'Next',
            prevButtonText: 'Prev',
            pagingDotsStyle: {
              fill: 'blue',
            },
          }}
        >
          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default RestaurantCarousel;