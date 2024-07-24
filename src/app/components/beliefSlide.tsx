"use client";
import { useState, useEffect } from 'react';

const carouselData = [
  {
    title: "More Than a Diagnosis",
    content: (
      <>
        <p className="text-lg md:text-xl">
          You are more than a diagnosis; a child's diagnosis is merely part of a family's journey.
        </p>
      </>
    )
  },
  {
    title: "Local and National Connection",
    content: (
      <>
        <p className="text-lg md:text-xl">
          Families deserve to be served on a local level, and to connect on a national level.
        </p>
      </>
    )
  },
  {
    title: "Family Expertise",
    content: (
      <>
        <p className="text-lg md:text-xl">
          Our families are the experts and will continue to drive and shape the work that we do.
        </p>
      </>
    )
  },
  {
    title: "Strength in Numbers",
    content: (
      <>
        <p className="text-lg md:text-xl">
          There is strength in numbers. The more families and partners that get involved, the better served our communities will be.
        </p>
      </>
    )
  }
];

const BeliefSlide = () => {
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
    <div className="p-4 md:p-12">
      <div className="relative flex flex-col md:flex-row items-center justify-center bg-white">
        <div className="relative flex flex-col md:flex-row items-center justify-end w-full md:w-auto pr-4 md:pr-12">
          <img
            src="/images/fam.png"
            alt="Background"
            className="object-cover rounded-md w-full md:w-[60%] h-64 md:h-[75vh] max-w-[1200px]"
          />
          <div className="bg-[#98ccd6] text-white p-4 md:p-20 rounded-md shadow-lg z-10 w-full md:w-[900px] h-auto md:h-[350px] mt-4 md:mt-0 md:-ml-24 flex flex-col justify-center items-center relative">
            <div className="card w-full">
              <div className="card-body">
                <h2 className="text-2xl md:text-5xl font-bold mb-4 text-center md:text-left">{carouselData[currentIndex].title}</h2>
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
//     title: "More Than a Diagnosis",
//     content: (
//       <>
//         <p className="text-lg md:text-xl">
//           You are more than a diagnosis; a child's diagnosis is merely part of a family's journey.
//         </p>
//       </>
//     )
//   },
//   {
//     title: "Local and National Connection",
//     content: (
//       <>
//         <p className="text-lg md:text-xl">
//           Families deserve to be served on a local level, and to connect on a national level.
//         </p>
//       </>
//     )
//   },
//   {
//     title: "Family Expertise",
//     content: (
//       <>
//         <p className="text-lg md:text-xl">
//           Our families are the experts and will continue to drive and shape the work that we do.
//         </p>
//       </>
//     )
//   },
//   {
//     title: "Strength in Numbers",
//     content: (
//       <>
//         <p className="text-lg md:text-xl">
//           There is strength in numbers. The more families and partners that get involved, the better served our communities will be.
//         </p>
//       </>
//     )
//   }
// ];

// const BeliefSlide = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isFading, setIsFading] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsFading(true);
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
//         setIsFading(false);
//       }, 500); // Duration of the fade animation
//     }, 10000); // Interval for rotating slides (10 seconds)

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative flex items-center justify-center bg-white">
//       <div className="relative flex items-center justify-end" style={{ width: '100%', paddingRight: '50px' }}>
//         <img
//           src="/images/fam.png"
//           alt="Background"
//           className="object-cover rounded-md"
//           style={{ width: '60%', height: '75vh', maxWidth: '1200px' }}
//         />
//         <div className="absolute left-0 bg-[#98ccd6] text-white p-8 md:p-20 rounded-md shadow-lg z-10" style={{ width: '900px', height: '350px', marginLeft: '100px' }}>
//           <div className="card">
//             <div className="card-body">
//               <h2 className="text-3xl md:text-5xl font-bold mb-4">{carouselData[currentIndex].title}</h2>
//               <div className={`transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
//                 {carouselData[currentIndex].content}
//               </div>
//             </div>
//           </div>
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
//             <div className="flex justify-center mt-8 space-x-2">
//               {carouselData.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}
//                   onClick={() => setCurrentIndex(index)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BeliefSlide;
