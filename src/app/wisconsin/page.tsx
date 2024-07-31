import Partners from "../components/partners";

export default function Wisconsin() {
  return (
    <div className="w-screen mx-auto font-sans bg-white px-8">
      <div className="py-32"></div>

      <main className="mt-8">
        <h2 className="text-4xl font-bold text-center text-primary">WISCONSIN</h2>

        <div className="flex flex-col md:flex-row mt-16 items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <div className="bg-white h-64 flex items-center justify-center text-2xl font-bold">
              <img src="/images/WIShape.png" alt="Shape of Wisconsin" className="h-full" />
            </div>
          </div>
          <div className="w-full md:w-2/3 md:pl-8">
            <div className="h-64 flex items-center justify-center relative rounded-md shadow-lg bg-secondary text-white px-4 py-6 sm:px-8 sm:py-12 lg:px-24 lg:py-20 text-center story-container">
              <p className="text-lg text-white">
                Our pilot location is in Wisconsin, and we are proud to partner with local service providers and organizations in the St. Croix River Valley to be able to provide resources and connection to our families, including access to 1:1 help from a navigator.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-16 space-x-4">
          <a href="https://ttboev5xtyu.typeform.com/to/cPYeoeri" className="bg-primary text-white px-10 py-4 rounded-md mt-4 lg:mt-0 text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold shadow-lg transform hover:scale-105 transition duration-300">
            JOIN OUR PILOT SITE
          </a>
          <a href="https://ttboev5xtyu.typeform.com/to/cPYeoeri" className="bg-primary text-white px-10 py-4 rounded-md mt-4 lg:mt-0 text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold shadow-lg transform hover:scale-105 transition duration-300">
            SIGN UP
          </a>
        </div>

        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center text-primary">LOCAL PARTNERS</h2>
          <Partners />
        </div>
      </main>
    </div>
  );
}





// import Partners from "../components/partners";

// export default function Wisconsin() {
//   return (
//     <div className="w-screen mx-auto font-sans bg-white">
//       <div className="py-32"></div>

//       <main className="mt-8">
//         <h2 className="text-4xl font-bold text-center text-primary">WISCONSIN</h2>

//         <div className="flex flex-col md:flex-row mt-16 items-center">
//           <div className="w-full md:w-1/3 mb-4 md:mb-0">
//             <div className="bg-white h-64 flex items-center justify-center text-2xl font-bold">
//               <img src="/images/WIShape.png" alt="Shape of Wisconsin" className="h-full" />
//             </div>
//           </div>
//           <div className="w-full md:w-2/3 md:pl-8">
//             <div className="h-64 flex items-center justify-center relative bg-secondary text-white px-4 py-6 sm:px-8 sm:py-12 lg:px-24 lg:py-20 text-center story-container">
//               <p className="text-lg text-white">
//                 Our pilot location is in Wisconsin, and we are proud to partner with local service providers and organizations in the St. Croix River Valley to be able to provide resources and connection to our families, including access to 1:1 help from a navigator.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-center items-center mt-16 space-x-4">
//           <a href="https://ttboev5xtyu.typeform.com/to/cPYeoeri" className="bg-primary text-white px-10 py-4 rounded-md mt-4 lg:mt-0 text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold shadow-lg transform hover:scale-105 transition duration-300">
//             JOIN OUR PILOT SITE
//           </a>
//           <a href="https://ttboev5xtyu.typeform.com/to/cPYeoeri" className="bg-primary text-white px-10 py-4 rounded-md mt-4 lg:mt-0 text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold shadow-lg transform hover:scale-105 transition duration-300">
//             SIGN UP
//           </a>
//         </div>

//         <div className="mt-20">
//           <h2 className="text-4xl font-bold text-center text-primary">LOCAL PARTNERS</h2>
//           <Partners />
//         </div>
//       </main>
//     </div>
//   );
// }
