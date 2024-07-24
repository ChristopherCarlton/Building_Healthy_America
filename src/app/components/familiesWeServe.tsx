import React from 'react';

const FamiliesWeServe = () => {
  return (
    <div
      className="w-full h-auto sm:h-auto md:h-[40rem] lg:h-[45rem] relative bg-cover bg-center bg-fixed"
      // style={{ backgroundImage: 'url(https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/programs-1600x1067.jpg)' }}
      style={{ backgroundImage: 'url(/images/BHAfamiliesWeServe.jpg)' }}
    >
      <div className="absolute inset-0 bg-[#1D568B] bg-opacity-70"></div>
      <div className="container mx-auto flex flex-col justify-center items-center text-center h-full relative z-20 px-4 py-8 sm:py-16">
        <div className="w-full max-w-[95rem]">
          <div className="text-white text-left">
            <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">THE FAMILIES WE SERVE</p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mt-4 sm:mt-8">
              Our Executive Board is made up of people with experience in healthcare and service to families and children with chronic illness and disability. But experience only goes so far. Most importantly, all are passionate about improving the lives of those we serve through their individual and family strengths, and community assets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamiliesWeServe;
