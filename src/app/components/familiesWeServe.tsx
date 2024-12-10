import React from 'react';
import Link from 'next/link';

const FamiliesWeServe = () => {
  return (
    <div
      className="w-full h-auto sm:h-auto md:h-[40rem] lg:h-[45rem] relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url(/images/BHAfamiliesWeServe.jpg)' }}
    >
      <div className="absolute inset-0 bg-primary bg-opacity-80"></div>
      <div className="container mx-auto flex flex-col justify-center items-center text-center h-full relative z-20 px-4 py-8 sm:py-16">
        <div className="w-full max-w-[95rem]">
          <div className="text-white text-left">
            <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">THE FAMILIES WE SERVE</p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mt-4 sm:mt-8">
              Our platform and services are not limited to a single diagnosis, but some of the most common diagnoses our families navigate are ADHD, autism, bipolar disorder, cerebral palsy, congenital heart defects, Down syndrome, dyslexia, emotional disturbance, epilepsy, fetal alcohol syndrome, hearing impairment including deafness, intellectual disabilities, orthopedic impairment, Prader-Willi syndrome, spina bifida, traumatic brain injury, vision impairment including blindness, and Williams syndrome.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mt-4 sm:mt-8">
              Families benefit from being part of the Building Healthier America community regardless of geographic location. Our funding does determine the amount of localized resources we are able to provide, but much of the value simply comes from families that are willing to help other families.
            </p>
            <div className="mt-12 flex justify-center">
              <Link 
                href="/learn-more" 
                className="bg-secondary text-white px-10 py-4 rounded-md text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold shadow-lg transform hover:scale-105 transition duration-300"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamiliesWeServe;