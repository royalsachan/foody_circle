import React, { useState, useEffect } from "react";
import {  Utensils, Clock, BikeIcon } from "lucide-react";

const FoodyCircleHeader = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-br from-orange-500 via-red-600 to-yellow-500 p-8 overflow-hidden lg:mt-10 sm:mt-0 md:mt-0">
      <div className="max-w-7xl mx-auto relative">
     
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="text-center md:text-left text-white md:w-1/2 space-y-6">
          
          <div className="relative inline-block">
  <div className="px-6 py-3 bg-gray-300 rounded-full">
    <h1 className="text-3xl md:text-4xl font-semibold text-orange-500 tracking-wide">
      FoodyCircle
    </h1>
  </div>
</div>


            <p className="text-lg md:text-xl font-light mt-4">
              Discover the best dishes from local restaurants, delivered to you
              in no time.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mt-6">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:scale-105 hover:bg-orange-100 transition-transform">
                Order Now
              </button>

              {/* <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-white/20 hover:scale-105 transition-transform">
                View Menu
              </button> */}
            </div>
          </div>

      
          <div className="relative md:w-1/2 h-60 flex items-center justify-center">
            {/* Icon Animation */}
            <div
              className={`absolute transition-transform duration-1000 ease-in-out transform ${
                animationStep === 0
                  ? "opacity-100 scale-110"
                  : "opacity-0 scale-50"
              }`}
            >
              <Utensils size={120} className="text-yellow-200 drop-shadow-xl" />
            </div>
            <div
              className={`absolute transition-transform duration-1000 ease-in-out transform ${
                animationStep === 1
                  ? "opacity-100 scale-110"
                  : "opacity-0 scale-50"
              }`}
            >
              <BikeIcon size={120} className="text-yellow-200 drop-shadow-xl" />
            </div>
            <div
              className={`absolute transition-transform duration-1000 ease-in-out transform ${
                animationStep === 2
                  ? "opacity-100 scale-110"
                  : "opacity-0 scale-50"
              }`}
            >
              <Clock size={120} className="text-yellow-200 drop-shadow-xl" />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-white">
          <div className="text-center p-6 bg-white/10 rounded-lg shadow-lg transform hover:scale-105 hover:bg-white/20 transition-transform">
            <Utensils className="mx-auto text-yellow-300" size={40} />
            <h3 className="font-semibold text-xl mt-4">Quality Restaurants</h3>
            <p className="text-sm mt-2">Top-rated partners for every cuisine.</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-lg shadow-lg transform hover:scale-105 hover:bg-white/20 transition-transform">
            <BikeIcon className="mx-auto text-yellow-300" size={40} />
            <h3 className="font-semibold text-xl mt-4">Fast Delivery</h3>
            <p className="text-sm mt-2">Quick and reliable delivery to your door.</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-lg shadow-lg transform hover:scale-105 hover:bg-white/20 transition-transform">
            <Clock className="mx-auto text-yellow-300" size={40} />
            <h3 className="font-semibold text-xl mt-4">Real-time Tracking</h3>
            <p className="text-sm mt-2">Track your order from restaurant to delivery.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodyCircleHeader;



