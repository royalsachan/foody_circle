import React from 'react';
import Video from '../assets/Food_Vedio.mp4'; 
import RestaurantCarousel from '../components/RestaurantCarousel';
// import FoodyCircle from "../assets/Foody.png"; 
import FoodyMan from "../assets/food-delivery-man.jpg"; 
import Footer from '../components/Footer/Footer';
const Home = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#FF6B35]">
            {/* <header className="bg-white shadow p-6 text-center">
                <img src={FoodyCircle} alt="Delicious Food" className="mt-4 mx-auto w-60 h-50 rounded-lg object-cover" />
                <h1 className="text-3xl font-bold">Welcome to Foody Circle</h1>
            </header> */}

            <video width="100%" autoPlay muted loop>
               <source src={Video} type="video/mp4" />
            </video>
            <main className="flex-grow p-3 sm:p-4 lg:p-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
  {/* Left side content */}
  <div className="w-full md:w-1/2 px-4 sm:px-6 lg:pl-10 text-center md:text-left space-y-3 md:space-y-4">
    {/* Main heading group */}
    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
      <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-black-200 leading-tight">
        Delicious Food
      </p>
      <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-black-200 leading-tight">
        Delivered to
      </p>
      <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-black-200 leading-tight">
        Your Doorstep
      </p>
    </div>

    {/* Subtext group */}
    <div className="space-y-1 sm:space-y-2">
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed mt-4">
        Discover local restaurants and get
      </p>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed">
        your favorite meals delivered
      </p>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed">
        quickly and safely.
      </p>
    </div>
  </div>

  {/* Right side image */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src={FoodyMan}
      alt="Delivery Man"
      className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] 
                 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 
                 object-cover rounded-lg shadow-lg transition-transform hover:scale-105"
    />
  </div>
</main>


            <RestaurantCarousel />

            <div className="text-center bg-amber-100 py-6 mt-0 ">
                <h1 className="text-2xl md:text-3xl font-bold text-black">
                    Fastest <span className="text-orange-500">Food Delivery</span> Services <br />
                    At Your <span className="text-orange-500">DoorStep</span>
                </h1>
                <p className="text-base md:text-lg text-gray-700 mt-4  text-center leading-relaxed">
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
