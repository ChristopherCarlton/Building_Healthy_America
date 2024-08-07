"use client";
import { useState, useEffect, useRef } from 'react';

const carouselData = [
  {
    content: (
      <p className="mt-4 px-2 sm:px-4 text-lg sm:text-xl md:text-2xl lg:text-2xl">
        <span className="font-bold">The seeds for Building Healthier America were planted in 1997</span>, when the Robert Wood Johnson Foundation funded the HealthPartners Institute and what is now known as the Center for Children with Special Health Care Needs at the University of Minnesota for a study¹ that identified some of the hurdles that families face when navigating a disability or chronic illness diagnosis.
      </p>
    )
  },
  {
    content: (
      <p className="mt-4 px-2 sm:px-4 text-lg sm:text-xl md:text-2xl lg:text-2xl">
        A key finding of that 1997 study found that, regardless of a child's diagnosis, <span className="font-bold">a major hurdle for families is having to make sense of several complex and siloed systems</span> namely medical, educational, and human services.
        Unfortunately, several decades later, families continue to struggle to manage these limited community services.

      </p>
    )
  },
  {
    content: (
      <p className="mt-4 px-2 sm:px-4 text-lg sm:text-xl md:text-2xl lg:text-2xl">
        Andy Nelson and Tom Brinsko — both involved in the 1997 study and both on the Building Healthier America founding board of directors — agreed upon retiring from their respective careers that <span className='font-bold'> there was still a long way to go to ensuring that families feel supported</span> throughout their initial diagnoses and the long journey that follows. 
      </p>
    )
  },
  {
    content: (
      <p className="mt-4 px-2 sm:px-4 text-lg sm:text-xl md:text-2xl lg:text-2xl">
        So Andy and Tom rolled up their sleeves and got back to work, convening a Community Task Force of families, community members, service providers, and other stakeholders. <span className='font-bold'>The resulting work plans helped pave the path for the sustainable design of Building Healthier America as we know it today.</span> The ongoing engagement of these families has been used to help design, implement, govern, evaluate, and improve BHA, and are evidence of our  continued commitment to the families that make up our community.
      </p>
    )
  },
  {
    content: (
      <p className="mt-4 px-2 sm:px-4 text-lg sm:text-xl md:text-2xl lg:text-2xl mb-6">
        <span className="font-bold">Our vision is to provide a free, sustainable support community — built for and with our members — that connects families to both local resources and to other families that are on a similar journey.</span>
      </p>
    )
  }
];

const OurStory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleClick = (index: number) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsFading(false);
    }, 500); // Duration of the fade animation
  };

  const handlePrevClick = () => {
    handleClick((currentIndex - 1 + carouselData.length) % carouselData.length);
  };

  const handleNextClick = () => {
    handleClick((currentIndex + 1) % carouselData.length);
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 w-full fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
      <div className="relative bg-accent text-white px-4 py-6 sm:px-8 sm:py-12 lg:px-24 lg:py-20 flex flex-col text-center lg:col-span-2 story-container" style={{ minHeight: '32rem' }}>
        <h1 className="text-5xl font-semibold text-white mb-10">OUR STORY AND VISION</h1>
        <div className="flex flex-col justify-start flex-grow">
          <div className={`transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
            {carouselData[currentIndex].content}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-4">
          {/* <button
            className="h-8 w-8 bg-gray-800 text-white rounded-full flex items-center justify-center"
            onClick={handlePrevClick}
            aria-label={`Go to previous slide`}
          >
            &#9664;
          </button> */}
          <div className="flex justify-center space-x-2">
            {carouselData.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}
                onClick={() => handleClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          {/* <button
            className="h-8 w-8 bg-gray-800 text-white rounded-full flex items-center justify-center"
            onClick={handleNextClick}
            aria-label={`Go to next slide`}
          >
            &#9654;
          </button> */}
        </div>
      </div>
      <div className="relative w-full min-h-[25rem]">
        <div 
          className="bg-fixed bg-center bg-cover w-full h-full" 
          style={{ backgroundImage: 'url(/images/hands.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-accent bg-opacity-70"></div>
      </div>
    </section>
  );
};

export default OurStory;