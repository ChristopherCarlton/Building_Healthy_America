'use client';
import React, { useState } from 'react';
import { FaPlay, FaYoutube } from 'react-icons/fa';
import { YOUTUBE_CHANNEL_URL } from '../constants/links';

// embedDisabled: the owner has turned off "Allow embedding" for this video in
// YouTube Studio, so the card opens it on YouTube instead of playing in place.
// Remove the flag once embedding is turned back on.
type EventVideo = { id: string; title: string; embedDisabled?: boolean };

// Recorded events from the BHC YouTube channel, newest first.
// To add one, copy the id from the video URL (youtube.com/watch?v=<id>).
const EVENT_VIDEOS: EventVideo[] = [
  { id: 'JAIRPR6jrzQ', title: "Navigating Heartbeat: BHC's Online Community Platform" },
  { id: 'zAYLkmwktws', title: 'When the Diagnosis Touches Everyone in the Family: Diagnosis of Autism' },
  { id: 'Unb5Gj6QtNc', title: 'Speaking on Resilience as an Adult with Cerebral Palsy' },
  { id: 'wkjgOPtUj4k', title: "A Family's Journey Raising Two Young Children with Disabilities" },
  { id: 'aDWUMFFC6nk', title: 'Bridge for Community Life' },
  { id: '8z96CF0V0Co', title: 'Helping Picky Eaters Become Food Explorers' },
  { id: 'kYDeyj4hS5U', title: 'Educational Accommodations Beyond the K-12 Years' },
  { id: '0JAoaZ6cLDs', title: 'Why Become a CNA?' },
  { id: 'sC4OAVMdEC8', title: 'Informative Discussion: WI Birth to Three' },
  { id: '-Hf9Vk7Mpfg', title: 'Advocacy and Minnesota Disability Support Alternatives' },
  { id: 'CHDBMOlkRMU', title: 'Interview with Jeremy Gundlach, WI Board for People with Developmental Disabilities' },
  { id: '6Nca5wXub6M', title: 'Foundations of Movement, Core and Postural Control' },
  { id: 'i02W-69SmMs', title: "Elsie's Barnyard" },
  { id: 'LrdMYImkxUA', title: 'Spectrum Strong' },
];

// Shows the thumbnail until clicked, so the page doesn't load 14 YouTube players up front.
const VideoCard = ({ id, title, embedDisabled }: EventVideo) => {
  const [playing, setPlaying] = useState(false);

  const thumbnail = (
    <>
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="bg-secondary text-white rounded-full p-5 shadow-lg transition-transform group-hover:scale-110">
          <FaPlay className="ml-1" />
        </span>
      </span>
    </>
  );
  const coverClass =
    'group absolute inset-0 w-full h-full focus:outline-none focus-visible:ring-4 focus-visible:ring-primary';

  const player = () => {
    if (playing) {
      return (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }
    if (embedDisabled) {
      return (
        <a
          href={`https://www.youtube.com/watch?v=${id}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Watch ${title} on YouTube`}
          className={coverClass}
        >
          {thumbnail}
        </a>
      );
    }
    return (
      <button type="button" onClick={() => setPlaying(true)} aria-label={`Play ${title}`} className={coverClass}>
        {thumbnail}
      </button>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
      <div className="relative aspect-video bg-black">{player()}</div>
      <h3 className="p-4 text-lg font-semibold text-primary text-left">{title}</h3>
    </div>
  );
};

const EventVideos = () => (
  <section id="videos" className="w-full bg-blue-100 py-16 px-4">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl sm:text-5xl font-semibold text-primary">WATCH OUR PAST EVENTS</h2>
      <p className="text-gray-600 text-lg sm:text-2xl max-w-4xl mx-auto mt-6">
        Missed an event? Every session is recorded so families, caregivers and supporters can watch any time.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {EVENT_VIDEOS.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
      <a
        href={YOUTUBE_CHANNEL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-md mt-12 text-lg sm:text-xl font-semibold shadow-lg transform hover:scale-105 transition duration-300"
      >
        <FaYoutube className="text-2xl" /> SEE ALL ON YOUTUBE
      </a>
    </div>
  </section>
);

export default EventVideos;
