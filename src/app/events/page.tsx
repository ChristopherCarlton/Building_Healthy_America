// pages/events.tsx
import React from 'react';

const Events = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-4">
        {/* <div className='py-32'></div> */}
      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-7xl h-[60vh]">
        <iframe
          src="https://lu.ma/embed/calendar/cal-GC0P73lCXNdWIjf/events?lt=light"
          className="w-full h-full"
          frameBorder="0"
          style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0} // Ensure tabIndex is a number
        ></iframe>
      </div>
    </div>
  );
};

export default Events;
