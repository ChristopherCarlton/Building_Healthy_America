import React from 'react';
import { MdEmail } from 'react-icons/md';

const BoardFlip = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 w-3/4 mx-auto fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
      {boardMembers.map((member, index) => (
        <div key={index} className="group w-full max-w-full mx-auto my-8 [perspective:1000px]">
          <div className="relative w-full h-[450px] text-center transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute w-full h-full flex flex-col items-center justify-center [backface-visibility:hidden] overflow-hidden bg-cover bg-center">
              <div className="card bg-white p-6 rounded-lg shadow-md h-full">
                <a href={member.profileLink}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-80 w-full object-cover rounded-t-lg"
                  />
                </a>
                <div className="pt-4 text-center">
                  <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                  <h4 className="text-gray-500">{member.title}</h4>
                  <ul className="mt-2 flex flex-col items-center px-4">
                    <li className="text-secondary">{member.affiliation}</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Back Side */}
            <div className="absolute w-full h-full bg-primary text-white p-8 flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href={`mailto:${member.email}`} className="bg-secondary hover:bg-white hover:text-secondary text-white font-bold py-2 px-4 rounded inline-flex items-center transition-colors duration-300 mt-8">
                <MdEmail />  <p className='ml-2'>Email</p>
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const boardMembers = [
  {
    name: 'Amy Schneider',
    title: 'Executive Director',
    image: '/images/AmySchneider.jpg',
    profileLink: 'https://buildinghealthieramerica.org/board-member/amy-schneider/',
    email: 'aschneider@stcroixtherapy.org',
    affiliation: 'St. Croix Therapy',
  },
  {
    name: 'Andy Nelson',
    title: 'Retired Executive',
    image: '/images/AndyNelson.jpg',
    profileLink: 'https://buildinghealthieramerica.org/board-member/andy-nelson/',
    email: 'bha4families@gmail.com',
    affiliation: 'HealthPartners, Inc.',
  },
  {
    name: 'Chris Kost',
    title: 'Executive Director',
    image: '/images/ChrisKost.jpg',
    profileLink: 'https://buildinghealthieramerica.org/board-member/chris-kost/',
    email: 'Chris.Kost@ymcamn.org',
    affiliation: 'Hudson YMCA',
  },
  {
    name: 'Thomas Brinsko',
    title: 'Retired Executive',
    image: '/images/TomBrinsko.jpg',
    profileLink: 'https://buildinghealthieramerica.org/board-member/thomas-brinsko/',
    email: 'bha4families@gmail.com',
    affiliation: 'YMCA of the Greater Twin Cities',
  },
];

export default BoardFlip;
