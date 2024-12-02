"use client"
import React, { useEffect } from 'react';

const LearnMore = () => {
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white w-full">
      <div className="py-24"></div>
      
      <div className="w-screen h-[45rem] relative fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
        <div className="h-full bg-cover bg-center relative lg:bg-fixed" 
          style={{ backgroundImage: 'url(/images/BHAfamiliesWeServe.jpg)' }}>
          <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
          <div className="container mx-auto flex justify-center items-center h-full relative z-20 px-4">
            <h1 className="text-white text-5xl font-bold text-center">
              Learn More About Building Healthier America
            </h1>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-16 fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
          <h2 className="text-4xl font-bold text-primary mb-8">What We Are</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                A confidential and trusted communication and collaboration site for families to address the challenges they face every day.
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                A personalized approach for information and services for, and with families.
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                A network of like-kind families to learn, engage, and support one another.
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                A collaborative noncompetitive partner with community agencies for the common good of their community's families.
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                A Family / Community Navigator available to initiate and assist families, providing unique technologies to support family's and their children's specific needs.
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                A service and an organization that is evolving in partnership with, and for families.
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                Available to families regardless of their child's age, location, illness, disability, insurance status, time of year, income or any other category or status.
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                Accessible on a family's schedule, 24 hours a day.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16 fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
          <h2 className="text-4xl font-bold text-primary mb-8">What We Are Not</h2>
          <div className="bg-accent bg-opacity-10 rounded-lg shadow-lg p-8">
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                An advocacy group.
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                A replacement for a community's natural supporting resources.
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                A source of medical information or care.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16 fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
          <h2 className="text-4xl font-bold text-primary mb-8">Why We Are Doing This</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-6">
              Children with a chronic illness and/or disability are cared for by their families with the help of medical organizations, human services, educational and local community systems. Families are thrown into these bureaucratic, complex, intimidating and highly variable systems without navigation or tools to coordinate among the resources necessary to manage a child's care and the family's hope for their child.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Services for families are often time limited, location specific, narrowly funded and requiring scarce family resources to discover, and then access, needed help. Often the family is left hanging with needs that arise from the activities of daily family life and the intermittent crisis inherent to their child's condition.
            </p>
            <p className="text-lg text-gray-700">
              We can and must do better!
            </p>
          </div>
        </section>

        <section className="mb-16 fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
          <h2 className="text-4xl font-bold text-primary mb-8">How We Are Approaching the Challenge</h2>
          <div className="bg-secondary bg-opacity-10 rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-6">
              Building Healthier America is partnering with families in the St. Croix Valley of Wisconsin and Minnesota and organizations such as the YMCA, St. Croix Therapy, and Bridge for Community Life, to launch our pilot community -- an online hub for families to connect with others who are walking a similiar path.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The BHA community is hosted on Handzin, a trusted and secure online platform. The dedicated Family / Community Navigator is located and employed by a local community agency, St. Croix Therapy. The Navigator will partner with community agencies, use collaborative communication technology and our website assets to assist families with their needs.
            </p>
            <p className="text-lg text-gray-700">
              Focus is on building family strengths to navigate this journey. Evaluating these initial community sites and establishing a culture of learning will generate a locally adaptive program model, attractive and flexible to other communities through our partnership with the national YMCA and other national multisite community critical hub organizations.
            </p>
          </div>
        </section>

        <div className="w-full bg-primary text-white py-14 rounded-lg">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center">
            <h2 className="text-2xl lg:text-4xl mb-4 lg:mb-2 text-center lg:text-left pr-20 font-semibold">
              Support Our Mission Today
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

export default LearnMore;