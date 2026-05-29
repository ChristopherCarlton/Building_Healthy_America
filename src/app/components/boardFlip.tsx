'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const BoardFlip = () => {
  // Which member's bio is open in the modal (null = closed).
  const [selected, setSelected] = useState<number | null>(null);
  const activeMember = selected !== null ? boardMembers[selected] : null;

  // Close on Escape and lock background scroll while the modal is open.
  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selected]);

  return (
    <>
      <section className="flex flex-wrap justify-center gap-8 mb-24 max-w-6xl mx-auto px-4 fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
        {boardMembers.map((member, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelected(index)}
            aria-label={`Read bio for ${member.name}`}
            aria-haspopup="dialog"
            className="group w-full sm:w-[330px] bg-white rounded-lg shadow-md overflow-hidden text-left flex flex-col transition duration-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <div className="relative w-full h-72">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 100vw, 330px"
                className="object-cover object-top"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow text-center">
              <h3 className="text-xl font-bold text-primary">{member.name}</h3>
              <h4 className="text-gray-500">{member.title}</h4>
              <p className="text-secondary mt-1">{member.affiliation}</p>
              <span className="mt-auto pt-4 text-primary font-semibold inline-flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                Read bio <span aria-hidden="true">&rarr;</span>
              </span>
            </div>
          </button>
        ))}
      </section>

      {activeMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="member-modal-name"
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-3xl leading-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              &times;
            </button>
            <div className="p-6 sm:p-10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <Image
                  src={activeMember.image}
                  alt={activeMember.name}
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full object-cover object-top shrink-0 shadow"
                />
                <div className="text-center sm:text-left">
                  <h3 id="member-modal-name" className="text-2xl font-bold text-primary">
                    {activeMember.name}
                  </h3>
                  <h4 className="text-gray-500 text-lg">{activeMember.title}</h4>
                  <p className="text-secondary">{activeMember.affiliation}</p>
                </div>
              </div>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">{activeMember.bio}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const boardMembers = [
  {
    name: 'Andy Nelson',
    title: 'Retired Executive',
    image: '/images/AndyNelson.jpg',
    email: 'bha4families@gmail.com',
    affiliation: 'HealthPartners, Inc.',
    bio: 'Andy Nelson is a co-founder of BHA who brings a wealth of experience and knowledge, particularly in the area of healthcare research. From 1990 until 2017, Andy led the HealthPartners Institute, a nonprofit research organization based out of the Twin Cities. He continues to serve in the leadership, governance and steering committee roles on local, national and internationally based health and research networks, including as Senior Research Fellow at the HealthPartners Institute.',
  },
  // Tom Brinsko has been moved into the dedicated "In Memoriam" section at the top
  // of the About Us page (see components/memorial.tsx).
  {
    name: 'Amy Schneider',
    title: 'Executive Director',
    image: '/images/AmySchneider.jpg',
    email: 'aschneider@stcroixtherapy.org',
    affiliation: 'St. Croix Therapy',
    bio: 'Amy Schneider is the Executive Director at St Croix Therapy, a non-profit outpatient pediatric clinic dedicated to serving youth in the St. Croix Valley with varying abilities and needs. With a BA in Education from Seattle Pacific University, Amy has 20 years of extensive experience in non-profit, mission-driven work. Her expertise spans program development, facility management, volunteer board development, and the oversight of both capital and annual fundraising efforts. Amy has held significant roles in the community, including serving on the St. Croix Valley Foundation as president, past president of the Hudson Daybreak Rotary club, and currently serving as a member of the St. Croix County Council on Aging and Disabilities. Her leadership and dedication have been instrumental in advancing the missions of the organizations she has served. Amy, along with her husband, Nick, and their twin boys, has been a resident of the St Croix Valley since 2009, where they remain actively involved in the community.',
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
    name: 'Margi Miller',
    title: 'Board Member',
    image: '/images/MargiMiller.jpg',
    affiliation: 'Building Healthier Communities',
    bio: 'Margi Miller has lived in the St. Croix Valley for nearly 40 years. She is a parent advocate, with personal experience navigating services for her special needs child, and working toward inclusivity and positive changes. Margi is the retired Chief Operating Officer of the St. Croix Valley Foundation, where she worked with the staff team to provide high standards in integrity and customer service. Margi provided donor development and fund management services to many donors that had family funds with the foundation. She assisted 10 affiliate foundations throughout the valley in their development and best practices. Margi was a founding board member of Bridge for Community Life in Hudson, Wisconsin. Her duties included creating sustainable summer day camps, and recreational activities for Bridge participants. Margi is passionate about helping families connect with each other and the appropriate resources. Margi believes in the mission of Building Healthy Communities because she has lived a life of advocacy for those who have disabilities and knows that families are the key to support.',
  },
  {
    name: 'Kiki Dickinson',
    title: 'BHC Community Manager and Navigator',
    image: '/images/KikiDickinson.png',
    affiliation: 'St. Croix Therapy',
    bio: 'Kiki Dickinson is the Operations Manager and Physical Therapist at St Croix Therapy, a non-profit outpatient pediatric clinic dedicated to serving youth in the St. Croix Valley with varying abilities and needs where she has worked for 30+ years. Kiki has strong relationships within the St. Croix Valley community. Kiki founded North Star Aquatic Therapy to offer aquatic therapy courses for both the pediatric and adult populations and teaches primarily for Aquatic Therapy University (ATU). Kiki teaches custom aquatic therapy classes nationally and internationally for ATU with a focus on the neuro pediatric population. Kiki has helped develop course manuals for several pediatric courses for Aquatic Therapy University (ATU) and has developed several of her own individual classes that she has presented at national and state conferences. Kiki is also one of the instructors for the APTA Academy of Aquatic Physical Therapy Clinical Competency Certificate. Kiki has been an adjunct professor at St. Catherine\'s University for over 25 years teaching Pediatric Coursework for their Physical Therapy Assistant Program.',
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