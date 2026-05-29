import React from 'react';
import Image from 'next/image';

const Partners = () => {
  const logos = [
    { src: '/images/logo1.png', alt: 'Logo 1', link: 'https://www.ymcanorth.org/locations/hudson_ymca' },
    { src: '/images/logo3.png', alt: 'Logo 3', link: 'https://bridgecl.org/' },
    { src: '/images/logo4.png', alt: 'Logo 4', link: 'https://stcroixtherapy.org/' },
    { src: '/images/logo5.png', alt: 'Logo 5', link: 'https://hudsonraiders.org/' }
  ];

  return (
    <div className="w-full p-4 md:p-10 bg-white flex justify-center">
      <div className="flex flex-wrap justify-center space-x-4 md:space-x-8">
        {logos.map((logo, index) => (
          <a key={index} href={logo.link} className="flex justify-center items-center p-2">
            <div className="relative h-20 md:h-32 w-32 md:w-44">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="(max-width: 768px) 8rem, 11rem"
                className="object-contain"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Partners;
