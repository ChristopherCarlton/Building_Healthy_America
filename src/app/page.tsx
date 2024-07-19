"use client"
import React, { useEffect } from 'react';
import Head from 'next/head';
import MissionFlip from './components/missionCardFlip';
import MissionSlide from './components/missionSlide';
import FlipCardLetsConnect from './components/FlipCardLetsConnect';
import CardSlide from './components/cardSlide';
import Partners from './components/partners';
import Enews from './components/enews';

const Home: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      const windowHeight = window.innerHeight;
      elements.forEach((element) => {
        const positionFromTop = element.getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('opacity-100', 'translate-y-0');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Building Healthier America</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
        <link rel="apple-touch-icon" href="https://buildinghealthieramerica.org/wp-content/themes/buildinghealthieramerica/apple-touch-icon.png" />
        <link rel="icon" href="https://buildinghealthieramerica.org/wp-content/themes/buildinghealthieramerica/apple-touch-icon.png" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="https://buildinghealthieramerica.org/xmlrpc.php" />
        <link rel="shortcut icon" type="image/x-icon" href="https://buildinghealthieramerica.org/wp-content/themes/buildinghealthieramerica/favicon.ico" />
      </Head>

      <main id="top" className="bg-gray-100">
        <a href="#main" className="sr-only sr-only-focusable color--alternate" aria-label="Navigation Skip Link">
          <span className="screen-reader-text">Skip Navigation or Skip to Content</span>
        </a>

        <div className='py-16'></div>

        <div className="w-screen h-[45rem] sm:h-[30rem] md:h-[40rem] lg:h-[45rem] relative fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
          <div id="hero-slider" className="h-full">
            <div className="h-full bg-cover bg-center relative lg:bg-fixed" style={{ backgroundImage: 'url(https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/bha-hero-slider1-1600x1067.jpg)' }}>
              <div className="absolute inset-0 bg-[#1D568B] bg-opacity-70 z-10"></div>
              <div className="container mx-auto flex justify-center items-center text-center h-full relative z-20 px-4">
                <div className="block-lede text-white">
                  <div className="block-description">
                    <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">WE'RE BUILDING A FIRST-OF-ITS-KIND NETWORK OF SUPPORT FOR FAMILIES OF CHILDREN WITH CHRONIC ILLNESS OR DISABILITY.</p>
                    {/* <p className="text-lg sm:text-4xl md:text-6xl">
                      WE'RE BUILDING A FIRST-OF-ITS-KIND NETWORK OF SUPPORT FOR FAMILIES OF CHILDREN WITH CHRONIC ILLNESS OR DISABILITY.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-16 bg-white text-center fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8">
              {/* <h3 className="text-[#BA4A68] text-2xl font-medium">Founding Principle</h3> */}
              <h1 className="text-[#1D568B] text-5xl font-semibold mt-2">OUR MISSION</h1>
            </div>
            <p className="text-gray-500 text-lg sm:text-2xl md:text-3xl max-w-4xl mx-auto mt-4 px-4 sm:px-8 md:px-10">
              Our mission is to serve as a centralized resource and point of connection for families of children with chronic illness or disability as they navigate medical, human services, educational, and local agencies.
            </p>
          </div>
        </div>

        <MissionFlip/>

        <div id="donate" className="w-full py-16 bg-white text-center fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8">
              <h1 className="text-[#1D568B] text-5xl font-semibold mt-2">OUR PARTNERS</h1>
              <div className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
                <p>Our success depends largely on working closely with partners who are aligned with our mission. Our 2024 partners include:</p>
              </div>
            </div>

            <Partners/>

            <div className="fade-in transition-opacity duration-1000 opacity-0 translate-y-4 mt-8 mx-auto max-w-2xl p-8 bg-[#2D7B86] text-white rounded-lg flex flex-col items-center justify-center mb-20">
              <h4 className="text-2xl font-bold mt-2 mb-4">LET'S WORK TOGETHER</h4>
              <p className="mb-6">
                We are launching a pilot site in Hudson, Wisconsin. We are actively seeking families managing children of any age with chronic illness or disability in the St. Croix River Valley to help us test and build our network of services.
              </p>
              <a href="/contact/" className="bg-white text-[#BA4A68] px-6 py-3 rounded-md font-semibold hover:bg-[#BA4A68] hover:text-white transition-colors duration-300">
                GET INVOLVED
              </a>
            </div>
          </div>
        </div>

        {/* <div className="w-full feature-grid-container fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
          <div className="flex flex-wrap relative">
            <div className="w-full lg:w-2/5 bg-white p-16 flex items-center justify-center text-center relative z-10">
              <div className="card">
                <div className="card-body">
                  <h3 className="text-2xl text-[#BA4A68] pb-2">Designed by Our Users</h3>
                  <h2 className="text-5xl text-[#1D568B] mb-4">Get Involved</h2>
                  <p className="mb-8 text-black">
                    We are launching our first pilot site in Hudson, Wisconsin and are actively seeking families managing children of any age with chronic illness or disability in these communities to help us develop and build our network of services.
                  </p>
                  <a href="/contact/" className="bg-[#BA4A68] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1D568B] hover:text-white transition-colors duration-300">
                    Join Our Pilot Community
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-3/5 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/programs-1600x1067.jpg)' }}>
              <div className="absolute inset-0 bg-black bg-opacity-25"></div>
            </div>
          </div>
        </div> */}


        <Enews/>
        
        <div className="w-full bg-[#1D568B] text-white py-14">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-2xl lg:text-4xl mb-4 lg:mb-2 text-center lg:text-left">
              Your support keeps us going.
            </h2>
            <a href="https://buy.stripe.com/cN216geI46bI0M0eUU" className="bg-white text-[#1D568B] px-6 py-2 rounded-md font-semibold mt-4 lg:mt-0">
              DONATE NOW
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;



