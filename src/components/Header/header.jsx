import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Utensils, Clock, BikeIcon } from "lucide-react";
import foodVedio from "../../assets/Food_Vedio.mp4";

const FoodyCircleHeader = () => {
  const navigate = useNavigate();

  const handleOrderNowClick = () => {
    navigate('/restaurants');  // Navigate to the restaurants page
  };

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
            {/* Title with Video Background */}
            <div className="relative inline-block overflow-hidden rounded-full group">
              
              <div className="relative inline-block px-6 py-2 bg-gray-200 rounded-full shadow-md ml-auto transition-transform duration-300 hover:scale-110 hover:shadow-lg ">
                <span className="text-3xl font-bold text-orange-500 ">FoodyCircle</span>
             </div>
            </div>

            {/* Description with Video Background */}
            <div className="relative overflow-hidden rounded-lg group">
              <video 
                className="absolute inset-0 w-full h-full object-cover scale-110 brightness-75"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src={foodVedio} type="video/mp4" />
              </video>
              <div className="relative z-10 p-4 bg-black/40 backdrop-blur-none ring-2 ring-transparent transition-all duration-300 group-hover:ring-yellow-300 group-hover:ring-opacity-50 group-hover:shadow-[0_0_15px_rgba(253,224,71,0.5)]">
                <p className="text-lg md:text-xl font-light">
                  Discover the best dishes from local restaurants, delivered to you
                  in no time.
                </p>
              </div>
            </div>

            {/* Button with Video Background */}
            <div className="relative inline-block overflow-hidden rounded-full group">
            <button 
                className="relative z-10 bg-white/70 backdrop-blur-sm text-orange-600 px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300 ring-2 ring-transparent hover:scale-105 hover:ring-yellow-300 hover:ring-opacity-50 hover:shadow-[0_0_15px_rgba(253,224,71,0.5)] active:scale-95 active:ring-yellow-500 active:ring-opacity-100 active:shadow-[0_0_25px rgba(253,224,71,0.9)]"
                onClick={handleOrderNowClick} // Add onClick handler
              >
                Order Now
              </button>
            </div>
          </div>

          {/* Animated Icons */}
          <div className="relative md:w-1/2 h-60 flex items-center justify-center">
            <div className={`absolute transition-transform duration-1000 ease-in-out transform ${
              animationStep === 0 ? "opacity-100 scale-110" : "opacity-0 scale-50"
            }`}>
              <Utensils size={120} className="text-yellow-200 drop-shadow-xl" />
            </div>
            <div className={`absolute transition-transform duration-1000 ease-in-out transform ${
              animationStep === 1 ? "opacity-100 scale-110" : "opacity-0 scale-50"
            }`}>
              <BikeIcon size={120} className="text-yellow-200 drop-shadow-xl" />
            </div>
            <div className={`absolute transition-transform duration-1000 ease-in-out transform ${
              animationStep === 2 ? "opacity-100 scale-110" : "opacity-0 scale-50"
            }`}>
              <Clock size={120} className="text-yellow-200 drop-shadow-xl" />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-white">
          <div className="text-center p-6 bg-white/10 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ring-2 ring-transparent hover:ring-yellow-300 hover:ring-opacity-50 hover:shadow-[0_0_15px_rgba(253,224,71,0.5)]">
            <Utensils className="mx-auto text-yellow-300" size={40} />
            <h3 className="font-semibold text-xl mt-4">Quality Restaurants</h3>
            <p className="text-sm mt-2">Top-rated partners for every cuisine.</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ring-2 ring-transparent hover:ring-yellow-300 hover:ring-opacity-50 hover:shadow-[0_0_15px_rgba(253,224,71,0.5)]">
            <BikeIcon className="mx-auto text-yellow-300" size={40} />
            <h3 className="font-semibold text-xl mt-4">Fast Delivery</h3>
            <p className="text-sm mt-2">Quick and reliable delivery to your door.</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ring-2 ring-transparent hover:ring-yellow-300 hover:ring-opacity-50 hover:shadow-[0_0_15px_rgba(253,224,71,0.5)]">
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



