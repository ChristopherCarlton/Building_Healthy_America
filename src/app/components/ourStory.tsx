"use client";
import { useState, useEffect } from 'react';

const carouselData = [
  {
    content: (
      <p className="mt-4 px-2 sm:px-4 text-lg sm:text-xl md:text-2xl lg:text-2xl">
        <span className="font-bold">The seeds for Building Healthier America were planted in 1997</span>, when the Robert Wood Johnson Foundation teamed up with HealthPartners, The PACER Center, and what is now known as the Center for Children with Special Health Care Needs out of the University of Minnesota for [a study] that identified some of the hurdles that families face when managing a disability or chronic illness diagnosis.
      </p>
    )
  },
  {
    content: (
      <p className="mt-4 px-2 sm:px-4 text-lg sm:text-xl md:text-2xl lg:text-2xl">
        A key finding of the study found that, regardless of a child's diagnosis, <span className="font-bold">a major hurdle for families is having to navigate several complex and siloed systems</span> — namely medical, educational, and human services — which rarely collaborate for the benefit of the child.
      </p>
    )
  },
  {
    content: (
      <p className="mt-4 px-2 sm:px-4 text-lg sm:text-xl md:text-2xl lg:text-2xl">
        Unfortunately, several decades later, the data still supports this. According to a [more recent study] [cite a statistic that helps support this narrative.]
      </p>
    )
  },
  {
    content: (
      <p className="mt-4 px-2 sm:px-4 text-lg sm:text-xl md:text-2xl lg:text-2xl">
        Andrew Nelson and Thomas Brinsko, both involved in the 1997 study and both on the Building Healthier America founding board of directors, agreed upon retiring from their respective careers that there was still a long way to go to ensuring that families feel supported throughout their initial diagnoses and the long journey that follows. <span className="font-bold">Enter Building Healthier America.</span>
      </p>
    )
  },
  {
    content: (
      <p className="mt-4 px-2 sm:px-4 text-lg sm:text-xl md:text-2xl lg:text-2xl mb-6">
        <span className="font-bold">Our vision is to create a sustainable support community that is built upon connection — to local resources and to other families.</span>
      </p>
    )
  }
];

const OurStory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
        setIsFading(false);
      }, 500); // Duration of the fade animation
    }, 10000); // Interval for rotating slides (10 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 w-full fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
      <div className="w-full h-auto min-h-[25rem] relative bg-accent text-white px-4 py-6 sm:px-8 sm:py-12 lg:px-24 lg:py-20 flex flex-col justify-center text-center lg:col-span-2">
        <h1 className="text-5xl font-semibold text-white mb-10">OUR STORY</h1>
        <div className={`transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          {carouselData[currentIndex].content}
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex justify-center space-x-2">
            {carouselData.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-full min-h-[25rem]">
        <div 
          className="bg-fixed bg-center bg-cover w-full h-full" 
          style={{ backgroundImage: 'url(/images/books.png)' }}
        ></div>
        <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
      </div>
    </section>
  );
};

export default OurStory;
