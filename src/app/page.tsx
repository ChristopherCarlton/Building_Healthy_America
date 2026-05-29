"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import MissionFlip from './components/missionCardFlip';
import Partners from './components/partners';
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
    <main id="top" className="bg-white">
      <a href="#main" className="sr-only sr-only-focusable color--alternate" aria-label="Navigation Skip Link">
        <span className="screen-reader-text">Skip Navigation or Skip to Content</span>
      </a>

      {/* Hero */}
      <div className="relative w-full min-h-[32rem] md:h-[40rem] lg:h-[45rem] fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
        <Image
          src="/images/BHAheroslider.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-70 z-10"></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4 py-16">
          <div className="container mx-auto">
            <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold">
              COME JOIN A FIRST-OF-ITS-KIND SUPPORT NETWORK WITH AND FOR FAMILIES OF CHILDREN THAT HAVE CHRONIC ILLNESS OR DISABILITY.
            </h1>
          </div>
        </div>
      </div>

      <section className="text-center w-full fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary mt-16 mb-10">OUR CORE BELIEFS</h2>
        <BeliefSlide/>
      </section>

      <div className="w-full py-16 bg-white text-center fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-primary text-3xl sm:text-4xl md:text-5xl font-semibold mt-2">OUR MISSION</h2>
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
            <h2 className="text-primary text-3xl sm:text-4xl md:text-5xl font-semibold mt-2">OUR PARTNERS</h2>
            <div className="mt-4 text-gray-500 text-lg sm:text-xl md:text-2xl lg:text-2xl max-w-4xl mx-auto">
              <p className='mb-4'>
                Building Healthier Community is people-powered. We consider our families to be our number one partners in the work; they help co-build the platform with each use and will continue to be at the center of and drive the work.
              </p>
              <p className='mb-4'>
                Our success depends largely on working closely with partners who are aligned with our mission.
              </p>
              <p>
                Our 2025 partners include:
              </p>
            </div>
          </div>
          <Partners/>
        </div>
      </div>

      <div className="w-full bg-primary text-white py-14">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center">
          <h2 className="text-2xl lg:text-4xl mb-4 lg:mb-2 text-center lg:text-left pr-20 font-semibold">
            YOUR SUPPORT KEEPS US GOING.
          </h2>
          <a href="https://givebutter.com/dMaREx" className="bg-white text-primary px-10 py-4 rounded-md mt-4 lg:mt-0 text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold shadow-lg transform hover:scale-105 transition duration-300" target="_blank" rel="noopener noreferrer">
            DONATE NOW
          </a>
        </div>
      </div>

      <div className="w-full bg-blue-100 py-16">
        <div className="container mx-auto px-4">
          {/* Mobile fallback: open subscribe form on its own page for best UX */}
          <div className="block md:hidden text-center">
            <h3 className="text-2xl font-semibold text-primary mb-4">Subscribe to the Building Healthier Community Digest</h3>
            <a
              href="https://subscribe-forms.beehiiv.com/2a8d4111-132c-4945-b513-66f6451ae83d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-3 rounded-md font-semibold shadow-md"
            >
              Subscribe
            </a>
          </div>

          {/* Desktop/tablet: embedded form */}
          <div className="hidden md:block w-full max-w-full overflow-x-hidden">
            <script async src="https://subscribe-forms.beehiiv.com/embed.js"></script>
            <iframe
              src="https://subscribe-forms.beehiiv.com/2a8d4111-132c-4945-b513-66f6451ae83d"
              className="beehiiv-embed w-full"
              data-test-id="beehiiv-embed"
              frameBorder="0"
              scrolling="no"
              style={{
                width: '100%',
                maxWidth: '100%',
                height: 'auto',
                minHeight: '480px',
                margin: 0,
                borderRadius: '0px 0px 0px 0px',
                backgroundColor: 'transparent',
                boxShadow: '0 0 #0000'
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
