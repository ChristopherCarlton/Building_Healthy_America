"use client"
import React, { useEffect } from 'react';
import Head from 'next/head';
import MissionFlip from './components/missionCardFlip';
import MissionSlide from './components/missionSlide';
import FlipCardLetsConnect from './components/FlipCardLetsConnect';
import CardSlide from './components/cardSlide';
import Partners from './components/partners';
import Enews from './components/enews';
import Collapse from './components/weBelieveCollapse';
import BeliefSlide from './components/beliefSlide';

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
      
      <main id="top" className="bg-white">
        <a href="#main" className="sr-only sr-only-focusable color--alternate" aria-label="Navigation Skip Link">
          <span className="screen-reader-text">Skip Navigation or Skip to Content</span>
        </a>

        <div className='py-16'></div>

        <div className="w-screen h-[45rem] sm:h-[30rem] md:h-[40rem] lg:h-[45rem] relative fade-in transition-opacity duration-1000 opacity-0 translate-y-4 pb-20">
          <div id="hero-slider" className="h-full">
            <div className="h-full bg-cover bg-center relative lg:bg-fixed" 
              style={{ backgroundImage: 'url(/images/BHAheroslider.jpg)' }}>
              <div className="absolute inset-0 bg-primary bg-opacity-70 z-10"></div>
              <div className="container mx-auto flex justify-center items-center text-center h-full relative z-20 px-4">
                <div className="block-lede text-white">
                  <div className="block-description">
                    <p className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold">WE'RE BUILDING A FIRST-OF-ITS-KIND SUPPORT NETWORK WITH AND FOR FAMILIES OF CHILDREN THAT HAVE CHRONIC ILLNESS OR DISABILITY.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="text-center w-full fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
          <h1 className="text-5xl font-semibold text-primary mb-10">OUR CORE BELIEFS</h1>
          <BeliefSlide/>
        </section>

        <div className="w-full py-16 bg-white text-center fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8">
              <h1 className="text-primary text-5xl font-semibold mt-2">OUR MISSION</h1>
            </div>
            <p className="text-gray-500 text-lg sm:text-2xl md:text-3xl max-w-4xl mx-auto mt-4 px-4 sm:px-8 md:px-10">
              Our mission is to serve as a central community resource for families as they navigate the medical, human service, educational and local agencies that serve children with chronic illness or disability.
            </p>
          </div>
        </div>

        <MissionFlip/>


        <div id="donate" className="w-full py-16 bg-white text-center fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8">
              <h1 className="text-primary text-5xl font-semibold mt-2">OUR PARTNERS</h1>
              <div className="mt-4 text-gray-500 text-lg sm:text-xl md:text-2xl lg:text-2xl max-w-4xl mx-auto">
                <p className='mb-4'>
                  The Building Healthier America community is people-powered. We consider our families to be our number one partners in the work; they help co-build the platform with each use and will continue to be at the center of and drive the work.
                </p>
                <p className='mb-4'>
                  Our success depends largely on working closely with partners who are aligned with our mission.            
                </p>
                <p>
                  Our 2024 partners include:
                </p>
              </div>
            </div>
            <Partners/>

            <div className="fade-in transition-opacity duration-1000 opacity-0 translate-y-4 mt-8 mx-auto max-w-2xl  text-gray-700 rounded-lg flex flex-col items-center justify-center mb-10">
              <a href="https://ttboev5xtyu.typeform.com/to/cPYeoeri" className="bg-secondary text-white px-6 py-3 rounded-md font-semibold duration-300 transform hover:scale-105 text-lg sm:text-xl md:text-2xl lg:text-2xl" target="_blank" rel="noopener noreferrer">
                LET'S WORK TOGETHER
              </a>

            </div>

            <div className="fade-in transition-opacity duration-1000 opacity-0 translate-y-4 mt-8 mx-auto max-w-2xl p-8 bg-blue-100 text-gray-700 rounded-lg flex flex-col items-center justify-center mb-20">
              <h2 className="text-4xl font-bold mt-2 mb-6">JOIN OUR PILOT SITE </h2>
              <p className="mb-8 text-lg sm:text-xl md:text-2xl lg:text-2xl">
                We are launching our first pilot site in Hudson, Wisconsin and are actively seeking families managing children of any age with chronic illness or disability in these communities to help us develop and build our network of services.
              </p>
              <a href="https://ttboev5xtyu.typeform.com/to/cPYeoeri" className="bg-white text-secondary px-6 py-3 rounded-md font-semibold shadow-lg transform hover:scale-105 transition duration-300 text-lg sm:text-xl md:text-2xl lg:text-2xl" target="_blank" rel="noopener noreferrer">
                GET INVOLVED
              </a>
            </div>
          </div>
        </div>

        <Enews/>
        
        <div className="w-full bg-primary text-white py-14">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center">
            <h2 className="text-2xl lg:text-4xl mb-4 lg:mb-2 text-center lg:text-left pr-20 font-semibold">
              {/* Your support keeps us going. */}
              YOUR SUPPORT KEEPS US GOING.
            </h2>
            <a href="https://buy.stripe.com/cN216geI46bI0M0eUU" className="bg-white text-primary px-10 py-4 rounded-md mt-4 lg:mt-0 text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold shadow-lg transform hover:scale-105 transition duration-300" target="_blank" rel="noopener noreferrer">
              DONATE NOW
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;