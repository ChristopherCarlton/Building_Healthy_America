"use client";
import { useState, useEffect } from 'react';

const carouselData = [
  {
    title: "What We Do",
    content: (
      <>
        <p className="mb-4">
          Families whose children have a chronic illness or disability must interact with at least three huge bureaucracies: the <strong>medical</strong> system, the <strong>educational</strong> system, and the <strong>local human services</strong> system. Unfortunately, it's rare the three-share basic information or collaborate on behalf of the child.
        </p>
        <p>
          Building Healthier America is creating a solution by developing a community network at the local level for families to tap into, so they can share information and resources to help streamline the process.
        </p>
      </>
    )
  },
  {
    title: "Who We Serve",
    content: (
      <>
        <p className="mb-4">
          Our community-centric framework allows us to serve as many families as possible; our vision is that no family is ever turned away.
        </p>
        <p>
          While we provide localized resources based on funding, our digital-first approach provides families a way to connect regardless of their geographic location.
        </p>
      </>
    )
  },
  {
    title: "How We Do It",
    content: (
      <>
        <p className="mb-4">
          We partner with Handzin, a secure community platform, to create a hub of connection for our families.
        </p>
        <p>
          In the cases of our local chapters, we have a community navigator who aggregates resources and serves as a bridge between the various social service organizations.
        </p>
      </>
    )
  }
];

const CardSlide = () => {
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
    <div className="relative w-full lg:w-1/3 bg-[#98ccd6] text-white p-20">
      <div className="card">
        <div className="card-body">
          <h2 className="text-4xl font-bold mb-4">{carouselData[currentIndex].title}</h2>
          <div className={`transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
            {carouselData[currentIndex].content}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex justify-center mt-8 space-x-2">
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
  );
};

export default CardSlide;
