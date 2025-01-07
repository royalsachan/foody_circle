import React from 'react';
import Video from '../assets/Food_Vedio.mp4'; 
import RestaurantCarousel from '../components/ExploreRestaurant/RestaurantFeatureCarousel';
import FoodyCircle from "../assets/Foody.png"; 
import FoodyMan from "../assets/Foody_Man.jpg";
import FoodyCircleHeader from '../components/Header/header'; 
import Footer from '../components/Footer/Footer';
// import { motion } from 'framer-motion';



const Home = () => {
    return (
      
    <div className="min-h-screen flex flex-col">
           {/* <header className="bg-[#FF6B35] flex flex-row gap-10  p-3 text-center  border-4 border-green-600">
                <img src={FoodyCircle} alt="Delicious Food" className="mt-1   left-0 w-20 h-15  rounded-lg object-cover z-10" />
                <h1 className="text-2xl font-bold text-right">Foody Circle</h1>
            </header>

            <video width="100%" autoPlay muted loop className='border-4 border-yellow-600'>
               <source src={Video} type="video/mp4" />
            </video> */}

            <FoodyCircleHeader />
            <RestaurantCarousel />

{/* <div className="min-h-[60vh] md:min-h-[50vh] lg:min-h-[40vh] w-full flex flex-col md:flex-row items-center justify-between p-2 sm:p-4 lg:p-8 border-4 border-black bg-[#FF6B35]"> */}
  {/* Left side content */}
  {/* <div className="w-full md:w-1/2 flex flex-col justify-center min-h-[40vh] md:min-h-[50vh] px-2 sm:px-4 lg:px-8"> */}
    {/* Main heading group */}
    {/* <div className="space-y-2 sm:space-y-4 mb-4 sm:mb-4 text-center md:text-left">
      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black-200 leading-tight">
        Delicious Food
      </p>
      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black-200 leading-tight">
        Delivered to
      </p>
      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black-200 leading-tight">
        Your Doorstep
      </p>
    </div> */}

    {/* Subtext group */}
    {/* <div className="space-y-1 sm:space-y-2 justify-center items-center md:items-start text-center md:text-left mb-1">
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed">
        Discover local restaurants and get
      </p>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed">
        your favorite meals delivered
      </p>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed">
        quickly and safely.
      </p>
    </div> */}
  {/* </div> */}

  {/* Right side image */}
  {/* <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center min-h-[40vh] md:min-h-[50vh] py-0 md:py-8">
    <img
      src={FoodyMan}
      alt="Delivery Man"
      className="w-[80%] sm:w-[70%] md:w-[70%] lg:w-[70%] h-auto object-cover rounded-lg shadow-lg transition-transform hover:scale-105"
    />
  </div> */}
{/* </div> */}




     

            <div className="text-center bg-amber-100 py-6 mt-0 ">
                <h1 className="text-2xl md:text-3xl font-bold text-black">
                    Now <span className="text-orange-500">Food Delivery</span> Services <br />
                    At Your <span className="text-orange-500">DoorStep</span>
                </h1>
                <p className="text-base md:text-lg text-gray-700 mt-8 mb-4  text-center leading-relaxed">
                    Crafted with passion and precision, <br />
                    FoodyCircle emerges as Pukhrayan's <br/> Premier Food Delivery Services, <br />
                    Revolutionizing the city's <br/>food delivery landscape.
                </p>
            </div>


            <Footer />
        </div>
    );
};

export default Home;
