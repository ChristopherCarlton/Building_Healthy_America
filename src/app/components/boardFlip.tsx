import React from 'react';
import { MdEmail } from 'react-icons/md';

const BoardFlip = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 w-3/4 mx-auto fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
      {boardMembers.map((member, index) => {
        // Extract the name and the rest of the bio
        const bioWithoutName = member.bio.replace(member.name, '').trim();

        return (
          <div key={index} className="group w-full max-w-full mx-auto my-8 [perspective:1000px]">
            <div className="relative w-full h-[500px] text-center transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front Side */}
              <div className="absolute w-full h-full flex flex-col items-center justify-center [backface-visibility:hidden] overflow-hidden bg-cover bg-center">
                <div className="card bg-white p-6 rounded-lg shadow-md h-full">
                  <div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-80 w-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="pt-4 text-center">
                    <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                    <h4 className="text-gray-500">{member.title}</h4>
                    <ul className="mt-0 flex flex-col items-center px-4">
                      <li className="text-secondary">{member.affiliation}</li>
                      {(member.name === 'Tom Brinsko' || member.name === 'Andy Nelson') && (
                        <li className="text-gray-700 flex items-center">
                          <MdEmail className="mr-2" />
                          <a href={`mailto:${member.email}`} className="text-gray-700 underline">
                            {member.email}
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Back Side */}
              <div className="absolute w-full h-full bg-primary text-white p-8 flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="w-full h-full overflow-y-auto">
                  <p className="mb-4">
                    <span className="font-bold">{member.name}</span> {bioWithoutName}
                  </p>
                </div>
                <a href={`mailto:${member.email}`} className="bg-secondary hover:bg-white hover:text-secondary text-white font-bold py-2 px-4 rounded inline-flex items-center transition-colors duration-300 mt-8">
                  <MdEmail />  <p className='ml-2'>Email</p>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

const boardMembers = [
  {
    name: 'Amy Schneider',
    title: 'Executive Director',
    image: '/images/AmySchneider.jpg',
    email: 'aschneider@stcroixtherapy.org',
    affiliation: 'St. Croix Therapy',
    bio: 'Amy Schneider is the Executive Director at St Croix Therapy, a non-profit outpatient pediatric clinic dedicated to serving youth in the St. Croix Valley with varying abilities and needs. With a BA in Education from Seattle Pacific University, Amy has 20 years of extensive experience in non-profit, mission-driven work. Her expertise spans program development, facility management, volunteer board development, and the oversight of both capital and annual fundraising efforts. Amy has held significant roles in the community, including serving on the St. Croix Valley Foundation as president, past president of the Hudson Daybreak Rotary club, and currently serving as a member of the St. Croix County Council on Aging and Disabilities. Her leadership and dedication have been instrumental in advancing the missions of the organizations she has served. Amy, along with her husband, Nick, and their twin boys, has been a resident of the St Croix Valley since 2009, where they remain actively involved in the community.',
  },
  {
    name: 'Andy Nelson',
    title: 'Retired Executive',
    image: '/images/AndyNelson.jpg',
    email: 'bha4families@gmail.com',
    affiliation: 'HealthPartners, Inc.',
    bio: 'Andy Nelson is a co-founder of BHA who brings a wealth of experience and knowledge, particularly in the area of healthcare research. From 1990 until 2017, Andy led the HealthPartners Institute, a nonprofit research organization based out of the Twin Cities. He continues to serve in the leadership, governance and steering committee roles on local, national and internationally based health and research networks, including as Senior Research Fellow at the HealthPartners Institute.',
  },
  {
    name: 'Chris Kost',
    title: 'Executive Director',
    image: '/images/ChrisKost.jpg',
    email: 'Chris.Kost@ymcamn.org',
    affiliation: 'Hudson YMCA',
    bio: 'Chris Kost is a graduate of the University of Minnesota with a double major in Exercise Physiology and Public Health Education. He began his YMCA tenure in 2008, overseeing everything from Aquatics to Member Services, and has been Executive Director of the Hudson YMCA since 2015. Chris is deeply passionate about the communities he serves and is active in the Hudson Chamber of Commerce Board and the Hudson Daybreak Rotary Club. He also teaches a variety of courses for the community, including mental health first aid. Chris and his family reside in Hudson, WI, and he spends his free time golfing and cheering on his favorite Minnesota sports teams.',
  },
  {
    name: 'Tom Brinsko',
    title: 'Retired Executive',
    image: '/images/TomBrinsko.jpg',
    email: 'bha4families@gmail.com',
    affiliation: 'YMCA of the Greater Twin Cities',
    bio: 'Tom Brinsko is a co-founder of BHA and a retired non-profit executive, most recently as the President and CEO of the YMCA of Greater Twin Cities. At the YMCA, he oversaw a broad range of work including strategic planning, finance, operations, marketing, governance, and program development. Tom has dedicated himself to serving families and the community and has served on various nonprofit boards. Tom and his family live in Hudson, WI, and, as a lifelong marathoner and triathlete, he enjoys all manner of outdoor activities.',
  },
];

export default BoardFlip;



  // {
  //   name: 'Amy Schneider',
  //   title: 'Community Navigator',
  //   image: '/images/AmySchneider.jpg',
  //   email: 'aschneider@stcroixtherapy.org',
  //   affiliation: 'Building Healthier America',
  //   bio: 'Amy Schneider is an accomplished professional with nearly two decades of experience in the non-profit sector. She holds degrees in Education and Non-Profit Management from Seattle Pacific University. As Executive Director at St. Croix Therapy, Amy oversees pediatric outpatient therapy programs for children of all abilities. Her expertise lies in leadership development, project management, program development, fundraising management, and the successful execution of capital and annual fundraising initiatives. She lives in Hudson, WI with her family and loves to spend time outdoors in every season.',
  // },