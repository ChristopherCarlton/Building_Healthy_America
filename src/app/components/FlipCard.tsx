import React from 'react';

interface FlipCardProps {
  frontImage: string;
  frontAlt: string;
  name: string;
  title: string;
  description: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontImage, frontAlt, name, title, description }) => {
  return (
    <div className="group w-72 h-80 [perspective:1000px]">
      <div className="relative w-full h-full text-center transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute w-full h-full bg-gray-300 flex items-center justify-center [backface-visibility:hidden]">
          <img src={frontImage} alt={frontAlt} className="w-72 h-72 object-cover" />
        </div>
        <div className="absolute w-full h-full bg-blue-500 text-white flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h1 className="text-xl font-bold">{name}</h1>
          <p className="mt-2">{title}</p>
          <p className="mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
