"use client";
import { useState, useEffect } from 'react';

const carouselData = [
  {
    title: "We are more than a diagnosis.",
    content: (
      <>
        <p className="mt-8">
          A child's diagnosis is merely part of a family's journey. The path will look different for each family — and even each family member — but it's important to remember that you are not alone.
        </p>
      </>
    )
  },
  {
    title: "Families must be better served.",
    content: (
      <>
        <p className="mt-8">
          Families deserve to be connected to the services they need and to others who understand what they are going through, regardless of condition, insurance status, age, geography, income, race, or religion.
        </p>
      </>
    )
  },
  {
    title: "Families need respect and privacy.",
    content: (
      <>
        <p className="mt-8">
          Building Healthier Community is hosted on Heartbeat — a trusted, secure, and private platform. Our engaged group moderators are committed to upholding our community guidelines and keeping the space safe and valuable.
        </p>
      </>
    )
  },
  {
    title: "Our families are the experts.",
    content: (
      <>
        <p className="mt-8">
          We will continue to be driven and shaped by the families that make up our community; our nimble framework will allow us to meet them where they are and get them where they want to be.
        </p>
      </>
    )
  },
  {
    title: "We are partners, not competitors.",
    content: (
      <>
        <p className="mt-8">
          The more mission-aligned families and organizations that we can join forces with, the better served our communities will be.
        </p>
      </>
    )
  }
];

const BeliefSlide = () => {
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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleNextClick();
  //   }, 10000); // Interval for rotating slides (10 seconds)

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="p-4 md:p-16">
      <div className="relative flex flex-col md:flex-row items-center justify-center bg-white">
        <div className="relative flex flex-col md:flex-row items-center justify-end w-full md:w-auto pr-4 md:pr-12">
          <img
            src='/images/BHAbeliefs2.jpg'
            alt="Background"
            className="object-cover rounded-md w-full md:w-[60%] h-64 md:h-[75vh] max-w-[1200px]"
          />

          <div className="bg-primary text-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-md shadow-lg z-10 w-full md:w-[70%] h-auto mt-4 md:mt-0 md:-ml-24 flex flex-col justify-center items-center relative overflow-hidden">
            <div className={`transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-center md:text-left">
                {carouselData[currentIndex].title}
              </h2>
              <div className="text-lg sm:text-2xl md:text-3xl mb-8 text-left">
                {carouselData[currentIndex].content}
              </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="flex justify-center space-x-4">
                {carouselData.map((_, index) => (
                  <button
                    key={index}
                    className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}
                    onClick={() => handleClick(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BeliefSlide;










// "use client";
// import { useState, useEffect } from 'react';

// const carouselData = [
//   {
//     title: "We are more than a diagnosis.",
//     content: (
//       <>
//         <p className="mt-8">
//           A child's diagnosis is merely part of a family's journey. The path will look different for each family — and even each family member — but it's important to remember that you are not alone.
//         </p>
//       </>
//     )
//   },
//   {
//     title: "Our families are the experts.",
//     content: (
//       <>
//         <p className="mt-8">
//           We will continue to be driven and shaped by the families who make up our community; our nimble framework will allow us to meet them where they are and get them where they need to be.
//         </p>
//       </>
//     )
//   },
//   {
//     title: "Families must be better served.",
//     content: (
//       <>
//         <p className="mt-8">
//           Navigating the various social services as a family with disability is hard. Families deserve to be connected to services they need and to people who understand what they are going through.
//         </p>
//       </>
//     )
//   },
//   {
//     title: "There is strength in numbers.",
//     content: (
//       <>
//         <p className="mt-8">
//           The more mission-aligned families and partners that are able to get involved, the better served our communities will be served.
//         </p>
//       </>
//     )
//   }
// ];

// const BeliefSlide = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isFading, setIsFading] = useState(false);

//   const handleClick = (index: number) => {
//     setIsFading(true);
//     setTimeout(() => {
//       setCurrentIndex(index);
//       setIsFading(false);
//     }, 500); // Duration of the fade animation
//   };

//   const handlePrevClick = () => {
//     handleClick((currentIndex - 1 + carouselData.length) % carouselData.length);
//   };

//   const handleNextClick = () => {
//     handleClick((currentIndex + 1) % carouselData.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNextClick();
//     }, 10000); // Interval for rotating slides (10 seconds)

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="p-4 md:p-16">
//       <div className="relative flex flex-col md:flex-row items-center justify-center bg-white">
//         <div className="relative flex flex-col md:flex-row items-center justify-end w-full md:w-auto pr-4 md:pr-12">
//           <img
//             src='/images/BHAbeliefs2.jpg'
//             alt="Background"
//             className="object-cover rounded-md w-full md:w-[60%] h-64 md:h-[75vh] max-w-[1200px]"
//           />

//           <div className="bg-primary text-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-md shadow-lg z-10 w-full md:w-[70%] h-auto mt-4 md:mt-0 md:-ml-24 flex flex-col justify-center items-center relative overflow-hidden">
//             <div className={`transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
//               <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-center md:text-left">
//                 {carouselData[currentIndex].title}
//               </h2>
//               <div className="text-lg sm:text-2xl md:text-3xl mb-8 text-left">
//                 {carouselData[currentIndex].content}
//               </div>
//             </div>
//             <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//               <div className="flex justify-center space-x-4">
//                 {carouselData.map((_, index) => (
//                   <button
//                     key={index}
//                     className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}
//                     onClick={() => handleClick(index)}
//                     aria-label={`Go to slide ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default BeliefSlide;