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
                  <h3 className="text-xl font-bold text-[#1D568B]">{member.name}</h3>
                  <h4 className="text-gray-500">{member.title}</h4>
                  <ul className="mt-2 flex justify-center px-4">
                    {member.email && (
                      <li>
                        <a href={`mailto:${member.email}`} className="text-[#BA4A68] flex items-center">
                          <MdEmail className="mr-2" /> Send Email
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            {/* Back Side */}
            <div className="absolute w-full h-full bg-[#1D568B] text-white p-8 flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
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
    title: 'Board Member',
    image: 'https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2023/11/Amy-Schneider-Headshot-600x600.jpg',
    profileLink: 'https://buildinghealthieramerica.org/board-member/amy-schneider/',
    email: 'aschneider@stcroixtherapy.org',
  },
  {
    name: 'Chris Kost',
    title: 'Board Member',
    image: 'https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2023/11/pic-board-600x600.jpg',
    profileLink: 'https://buildinghealthieramerica.org/board-member/chris-kost/',
    email: 'Chris.Kost@ymcamn.org',
  },
  {
    name: 'Andy Nelson',
    title: 'Board Member',
    image: 'https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/andy-nelson-bha-600x600.jpg',
    profileLink: 'https://buildinghealthieramerica.org/board-member/andy-nelson/',
    email: 'bha4families@gmail.com',
  },
  {
    name: 'Thomas Brinsko',
    title: 'Board Member',
    image: 'https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/tom-brinsko-bha-600x600.jpg',
    profileLink: 'https://buildinghealthieramerica.org/board-member/thomas-brinsko/',
    email: 'bha4families@gmail.com',
  },
];

export default BoardFlip;
