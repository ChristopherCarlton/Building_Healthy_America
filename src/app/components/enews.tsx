import React from 'react';

const Enews = () => {
  return (
    <div
      className="w-full h-auto sm:h-auto md:h-[40rem] lg:h-[45rem] relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url(https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/newsletter-1600x1076.jpg)' }}
    >
      <div className="absolute inset-0 bg-[#1D568B] bg-opacity-70"></div>
      <div className="container mx-auto flex flex-col justify-center items-center text-center h-full relative z-20 px-4 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-[95rem]">
          <div className="text-white text-left">
            <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">SUBSCRIBE TO NEWSLETTER</p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mt-4 sm:mt-8">
              Our bi-monthly newsletter is a collection of BHA news, localized resources, and a digest of what has happened inside the Handzin platform.
            </p>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <form className="flex flex-col space-y-4 w-full bg-[#BA4A68] p-4 sm:p-8 rounded-md">
              <input 
                type="text" 
                placeholder="Name"
                className="mt-1 p-2 sm:p-3 w-full text-base sm:text-lg bg-transparent text-white placeholder-gray-300 border-b-2 border-white focus:outline-none" 
              />
              <input 
                type="text" 
                placeholder="Zip Code"
                className="mt-1 p-2 sm:p-3 w-full text-base sm:text-lg bg-transparent text-white placeholder-gray-300 border-b-2 border-white focus:outline-none" 
              />
              <input 
                type="email" 
                placeholder="Email"
                className="mt-1 p-2 sm:p-3 w-full text-base sm:text-lg bg-transparent text-white placeholder-gray-300 border-b-2 border-white focus:outline-none" 
              />
              <p className="text-white text-sm sm:text-base">By entering your email address, you are confirming that you are 13+.</p>
              <button 
                type="submit" 
                className="w-full bg-white text-[#BA4A68] py-3 sm:py-4 px-8 sm:px-14 rounded-md mt-4 hover:bg-[#1D568B] hover:text-white transition-colors duration-300"
              >
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enews;
