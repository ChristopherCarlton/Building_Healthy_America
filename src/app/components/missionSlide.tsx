import React from 'react';
import CardSlide from './cardSlide';

const MissionSlide = () => {
  return (
    <section className="w-full feature-grid-container fade-in transition-opacity duration-1000 opacity-0 translate-y-4 relative bg-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative">
        <div className="lg:w-1/2 w-full lg:order-2 relative z-0">
          <div className="bg-cover bg-center h-[32rem] w-full rounded-lg shadow-lg overflow-hidden" style={{ backgroundImage: 'url(https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/home-child-wheelchair-1600x1120.jpg)' }}>
            <div className="absolute inset-0 bg-black bg-opacity-25"></div>
          </div>
        </div>
        <CardSlide />
      </div>
    </section>
  );
};

export default MissionSlide;
