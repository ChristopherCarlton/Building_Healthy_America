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
        <section className="text-center mb-20 w-full fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
          <h1 className="text-5xl font-semibold text-[#1D568B] mb-10">WE BELIEVE</h1>
          <Collapse/>
        </section>

        <section className="text-center mb-20 w-full fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
          <h1 className="text-5xl font-semibold text-[#1D568B] mb-10">OUR STORY</h1>
        </section>


        <section className="grid grid-cols-1 lg:grid-cols-3 w-full fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
          <div 
            className="bg-cover bg-center w-full min-h-[25rem]"
            style={{ backgroundImage: 'url(https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/tenets-image-1600x1120.jpg)' }}
          ></div>
          <div className="w-full h-auto min-h-[25rem] relative bg-[#1D568B] text-white px-4 py-6 sm:px-8 sm:py-12 lg:px-24 lg:py-12 flex flex-col justify-center text-center lg:col-span-2">
            <p className="mt-4 px-2 sm:px-4">
              The seeds for Building Healthier America were planted in 1997, when the Robert Wood Johnson Foundation teamed up with HealthPartners, The PACER Center, and what is now known as the Center for Children with Special Health Care Needs out of the University of Minnesota for [a study] that identified some of the hurdles that families face when managing a disability or chronic illness diagnosis.
            </p>
            <p className="mt-4 px-2 sm:px-4">
              A key finding of the study found that, regardless of a child's diagnosis, <span className="font-bold">a major hurdle for families is having to navigate several complex and siloed systems</span> — namely medical, educational, and human services — which rarely collaborate for the benefit of the child.
            </p>
            <p className="mt-4 px-2 sm:px-4">
              Unfortunately, several decades later, the data still supports this.
            </p>
            <p className="mt-4 px-2 sm:px-4 font-bold">
              Enter Building Healthier America. <span className="font-normal">[Insert another sentence about how key folks who were involved in the study regrouped to address the issue that remained addressed.]</span>
            </p>
            <p className="mt-4 px-2 sm:px-4">
              Our aim is to create <span className="font-bold">a sustainable support community that is built upon connection</span> — to local resources and to other families.
            </p>
          </div>
        </section>

        <section className="text-center mb-20 w-full">
          <FamiliesWeServe/>
        </section>

        <section className="text-center mb-14 w-full fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
          {/* <h3 className="text-[#BA4A68] text-xl font-semibold">Knowledgeable Leadership</h3> */}
          <h2 className="text-4xl text-[#1D568B] font-semibold">OUR LEADERSHIP AND BOARD</h2>
          <p className="text-gray-500 text-lg mt-4 sm:w-[50%] mx-auto px-4">
            Our Executive Board is made up of people with experience in healthcare and service to
            families and children with chronic illness and disability. But experience only goes so
            far. Most importantly, all are passionate about improving the lives of those we serve
            through their individual and family strengths, and community assets.
          </p>
        </section>

        <BoardFlip/>

        <section className="grid grid-cols-1 lg:grid-cols-5 w-full fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
            <div className="lg:col-span-3 bg-cover bg-center h-128 lg:h-auto w-full" style={{ backgroundImage: 'url(https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/11/bha-history-1600x1120.jpg)', height: '42rem' }}>
            </div>
            <div className="lg:col-span-2 bg-[#1D568B] text-white p-8 lg:p-12 flex items-center justify-center w-full" style={{ height: '42rem' }}>
                <div className="text-center">
                <h3 className="text-2xl ">From Past to the Present</h3>
                <h2 className="text-4xl font-bold mt-2">OUR HISTORY</h2>
                <p className="mt-4">
                    Building Healthier America has a history of work to understand the challenges families
                    face when their child has a chronic disease or disability including work funded by the
                    Robert Wood Johnson Foundation. We also have worked with cities to reverse the obesity
                    trends faced by children, families and communities – many of whom wrestled with the
                    impact diabetes was having on their lives. Our guiding philosophy is building a
                    sustainable culture of healthy behavior requires engagement in not only the individual
                    behavior, but within our communities. Successful strides for community wide diabetes
                    efforts were made in Chicago, Washington DC, Los Angeles and the Pacific Northwest.
                    The models developed in these communities are transferable to today's expanded mission
                    of serving families with children managing chronic illness or disability.
                </p>
                </div>
            </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-5 gap-8 w-full fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
            <div className="lg:col-span-2 bg-white text-gray-800 p-12 flex items-center justify-center w-full">
                <div className="text-center">
                {/* <h3 className="text-2xl font-bold text-[#BA4A68]">Want to Get Involved?</h3> */}
                <h2 className="text-5xl font-bold mt-2 text-[#1D568B]">JOIN OUR ADVISORY GROUPS</h2>
                <p className="mt-8 text-lg leading-relaxed">
                    Building Healthier America is actively seeking advisors to help guide us in
                    implementing our mission. We are looking for passionate people willing to contribute
                    their ideas, experience, intellect, and specific talents as we grow. Advisors can be
                    members of a family or someone managing chronic illness or disability, professionals
                    working in healthcare and/or social services, attorneys, teachers, accountants…anyone
                    that has a passion for improving the lives of our families. Your support through
                    funding, time and talent is needed as we build a healthier America.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                    We hope you consider getting involved. The commitment is not overly time consuming,
                    but we promise you it will be rewarding. To learn more click on the button below.
                </p>
                <div className="mt-8">
                    <a
                    href="/contact/"
                    className="btn bg-[#BA4A68] text-white py-2 px-8 rounded-full hover:bg-pink-600"
                    >
                    Tell Me More
                    </a>
                </div>
                </div>
            </div>
            <div className="lg:col-span-3 h-full w-full">
                <div className="bg-cover bg-center h-full w-full" style={{ backgroundImage: 'url(https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/adisory-1600x1120.jpg)' }}>
                </div>
            </div>
        </section>
        <div className="w-full bg-[#1D568B] text-white py-20 fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-3xl lg:text-5xl mb-4 lg:mb-2 text-center lg:text-left">
              Support our work with a financial contribution.
            </h2>
            <a href="https://buy.stripe.com/cN216geI46bI0M0eUU" className="bg-white text-[#1D568B] px-6 py-2 rounded font-semibold mt-4 lg:mt-0">
              DONATE NOW
            </a>
        </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;