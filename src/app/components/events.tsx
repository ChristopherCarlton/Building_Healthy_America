"use client"
import React, { useEffect } from 'react';

const Events = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      const windowHeight = window.innerHeight;
      elements.forEach((element) => {
        const positionFromTop = element.getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('opacity-100', 'translate-y-0');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-primary pt-8">
      <div className="w-full text-center fade-in transition-opacity duration-1000 opacity-0 translate-y-4 mb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-white text-5xl font-semibold mt-2">ATTEND AN EVENT</h1>
          </div>
          <p className="text-white text-lg sm:text-2xl md:text-3xl max-w-4xl mx-auto mt-8 px-4 sm:px-8 md:px-10">
            The majority of our events are free and open to the public, and are a great way to get involved in the BHA community!
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-7xl h-[60vh] mt-10">
        <iframe
          src="https://lu.ma/embed/calendar/cal-GC0P73lCXNdWIjf/events?lt=light"
          className="w-full h-full"
          frameBorder="0"
          style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0} // Ensure tabIndex is a number
          aria-label={`Events for BHA community`}
        ></iframe>
      </div>
    </div>
  );
};

export default Events;