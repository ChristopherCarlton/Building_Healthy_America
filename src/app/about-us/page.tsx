'use client'
import React, { useEffect } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Collapse from '../components/weBelieveCollapse';
import FamiliesWeServe from '../components/familiesWeServe';
import BoardFlip from '../components/boardFlip';
import OurStory from '../components/ourStory';

const AboutUs = () => {
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
    <div className="bg-white w-full">
      <main className="w-full">
        <div className='py-16'></div>
        <section className="text-center mb-20 w-full">
          <FamiliesWeServe/>
        </section>
        <section className="text-center mb-14 w-full fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
          <h2 className="text-5xl text-primary font-semibold">OUR LEADERSHIP AND BOARD</h2>
          <p className="text-gray-500 text-lg sm:text-xl md:text-2xl lg:text-2xl mt-4 sm:w-[50%] mx-auto px-4">
            Our team is made up of people with a breadth of experience in healthcare and human services, all of whom are passionate about improving the lives of those we serve.
          </p>
        </section>
        <BoardFlip/>
        <OurStory/>
        <div className="w-full bg-primary text-white py-14">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center">
            <h2 className="text-2xl lg:text-4xl mb-4 lg:mb-2 text-center lg:text-left pr-20 font-semibold">
               SUPPORT OUR WORK WITH A FINANCIAL CONTRIBUTION.
            </h2>
            <a href="https://buy.stripe.com/cN216geI46bI0M0eUU" className="bg-white text-primary px-10 py-4 rounded-md mt-4 lg:mt-0 text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold shadow-lg transform hover:scale-105 transition duration-300" target="_blank" rel="noopener noreferrer">
              DONATE NOW
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
