import React from 'react';

const Partners = () => {
  const logos = [
    { src: '/images/logo1.png', alt: 'Logo 1', link: 'https://www.ymca.org/' },
    { src: '/images/logo2.png', alt: 'Logo 2', link: 'https://app.handzin.com/' },
    { src: '/images/logo3.png', alt: 'Logo 3', link: 'https://bridgecl.org/' }
  ];

  return (
    <div className="w-full p-10 bg-white flex justify-center">
      <div className="flex space-x-8">
        {logos.map((logo, index) => (
          <a key={index} href={logo.link} className="flex justify-center items-center">
            <img src={logo.src} alt={logo.alt} className="h-32" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Partners;
