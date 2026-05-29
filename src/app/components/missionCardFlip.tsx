import React from 'react';
import Image from 'next/image';

const cards = [
  {
    image: '/images/b1.png',
    bg: 'bg-accent',
    title: 'Build Local Networks',
    body: [
      'Building Healthier Community connects families that are navigating chronic illness or disability of a child — to resources and to others like them.',
      'We are a connection point for a growing network of families who are walking a similar path, all at no cost to our members.',
    ],
  },
  {
    image: '/images/b2.png',
    bg: 'bg-secondary',
    title: 'Inclusive, Not Exclusive',
    body: [
      'Our community-centric framework allows us to serve as many families as possible; our vision is that no family is ever turned away.',
      'While we provide localized resources based on funding, our digital-first approach ensures that families all over the country are able to find connection.',
    ],
  },
  {
    image: '/images/b3.png',
    bg: 'bg-primary',
    title: 'Secure Connection',
    body: [
      'We partner with Heartbeat, a trusted and secure community platform, to create our hub of connection for our families.',
      'In the cases of our local chapters, we have a community navigator who aggregates resources and serves as a bridge between the various social service, education, and health organizations.',
    ],
  },
];

const MissionFlip = () => {
  return (
    <section className="w-full bg-white fade-in transition-opacity duration-1000 opacity-0 translate-y-4">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 py-8 items-stretch">
        {cards.map((card) => (
          <div key={card.title} className="flex flex-col rounded-lg overflow-hidden shadow-md">
            <div className="relative w-full h-48">
              <Image
                src={card.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className={`${card.bg} text-white p-8 flex flex-col flex-grow text-center`}>
              <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
              {card.body.map((para, i) => (
                <p key={i} className={i < card.body.length - 1 ? 'mb-4' : ''}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionFlip;
