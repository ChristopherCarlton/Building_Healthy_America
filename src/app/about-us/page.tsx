'use client'
import React, { useEffect } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Collapse from '../components/weBelieveCollapse';
import FamiliesWeServe from '../components/familiesWeServe';
import BoardFlip from '../components/boardFlip';

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
        <div className='py-32'></div>
        {/* <section className="text-center mb-20 w-full fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
          <h1 className="text-5xl font-semibold text-primary mb-10">WE BELIEVE</h1>
          <Collapse/>
        </section> */}

        <section className="grid grid-cols-1 lg:grid-cols-3 w-full fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
          <div className="w-full h-auto min-h-[25rem] relative bg-accent text-white px-4 py-6 sm:px-8 sm:py-12 lg:px-24 lg:py-20 flex flex-col justify-center text-center lg:col-span-2">
            <h1 className="text-5xl font-semibold text-white mb-10">OUR STORY</h1>
            <p className="mt-4 px-2 sm:px-4 text-lg sm:text-xl md:text-2xl lg:text-2xl">
              <span className="font-bold">The seeds for Building Healthier America were planted in 1997</span>, when the Robert Wood Johnson Foundation teamed up with HealthPartners, The PACER Center, and what is now known as the Center for Children with Special Health Care Needs out of the University of Minnesota for [a study] that identified some of the hurdles that families face when managing a disability or chronic illness diagnosis.
            </p>
            <p className="mt-4 px-2 sm:px-4 text-lg sm:text-xl md:text-2xl lg:text-2xl">
                A key finding of the study found that, regardless of a child's diagnosis, <span className="font-bold">a major hurdle for families is having to navigate several complex and siloed systems</span> — namely medical, educational, and human services — which rarely collaborate for the benefit of the child.
            </p>
            <p className="mt-4 px-2 sm:px-4 text-lg sm:text-xl md:text-2xl lg:text-2xl">
                Unfortunately, several decades later, the data still supports this. According to a [more recent study] [cite a statistic that helps support this narrative.]
            </p>
            <p className="mt-4 px-2 sm:px-4 text-lg sm:text-xl md:text-2xl lg:text-2xl">
                Andrew Nelson and Thomas Brinsko, both involved in the 1997 study and both on the Building Healthier America founding board of directors, agreed upon retiring from their respective careers that there was still a long way to go to ensuring that families feel supported throughout their initial diagnoses and the long journey that follows. <span className="font-bold">Enter Building Healthier America.</span>
            </p>
            <p className="mt-4 px-2 sm:px-4 text-lg sm:text-xl md:text-2xl lg:text-2xl mb-6">
              <span className="font-bold">Our vision is to create a sustainable support community that is built upon connection — to local resources and to other families.</span>
            </p>
          </div>



          <div className="relative w-full min-h-[25rem]">
  <div 
    className="bg-fixed bg-center bg-cover w-full h-full" 
    style={{ backgroundImage: 'url(/images/books.png)' }}
  ></div>
  <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
</div>



          {/* <div 
            className="bg-cover bg-center w-full min-h-[25rem]"
            style={{ backgroundImage: 'url(/images/books.png)' }}
          ></div> */}
        </section>

        <section className="text-center mb-20 w-full">
          <FamiliesWeServe/>
        </section>

        <section className="text-center mb-14 w-full fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
          <h2 className="text-5xl text-primary font-semibold">OUR LEADERSHIP AND BOARD</h2>
          <p className="text-gray-500 text-lg sm:text-xl md:text-2xl lg:text-2xl mt-4 sm:w-[50%] mx-auto px-4">
            Our Executive Board is made up of people with a breadth of experience in healthcare and human services, all of whom are passionate about improving the lives of those we serve.
          </p>
        </section>

        <BoardFlip/>

        <div className="w-full bg-primary text-white py-14">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center">
            <h2 className="text-2xl lg:text-4xl mb-4 lg:mb-2 text-center lg:text-left pr-20 font-semibold">
               SUPPORT OUR WORK WITH A FINANCIAL CONTRIBUTION.
            </h2>
            <a href="https://buy.stripe.com/cN216geI46bI0M0eUU" className="bg-white text-primary px-10 py-4 rounded-md mt-4 lg:mt-0 text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold">
              DONATE NOW
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
