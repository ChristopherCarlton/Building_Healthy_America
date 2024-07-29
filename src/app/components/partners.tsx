import React from 'react';

const Partners = () => {
  const logos = [
    { src: '/images/logo1.png', alt: 'Logo 1', link: 'https://www.ymcanorth.org/locations/hudson_ymca' },
    { src: '/images/logo2.png', alt: 'Logo 2', link: 'https://app.handzin.com/' },
    { src: '/images/logo3.png', alt: 'Logo 3', link: 'https://bridgecl.org/' },
    { src: '/images/logo4.png', alt: 'Logo 4', link: 'https://stcroixtherapy.org/' }
  ];

  return (
    <div className="w-full p-4 md:p-10 bg-white flex justify-center">
      <div className="flex flex-wrap justify-center space-x-4 md:space-x-8">
        {logos.map((logo, index) => (
          <a key={index} href={logo.link} className="flex justify-center items-center p-2">
            <img src={logo.src} alt={logo.alt} className="h-20 md:h-32" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Partners;
