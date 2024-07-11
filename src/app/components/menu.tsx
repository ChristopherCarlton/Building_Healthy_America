import React from 'react';

const Menu: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center space-y-4 text-white p-8 md:p-16 overflow-hidden" tabIndex={-1}>
      <a href="/" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left">
        <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-[#c5a46d]"></span>
        Home
      </a>
      <a href="/about-us/" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left">
        <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-[#c5a46d]"></span>
        About Us
      </a>
      <a href="/contact/" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left">
        <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-[#c5a46d]"></span>
        Contact
      </a>
      <a href="https://app.handzin.com/login" target="_blank" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left border border-white">
        <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-[#c5a46d]"></span>
        BHA4families Member Entry
      </a>
      <a href="https://forms.gle/sYvuKeTbYKPv4URc6" target="_blank" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left border border-white">
        <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-[#c5a46d]"></span>
        BHA Survey
      </a>
      <a href="mailto:dhofstedt@bha4families.org" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-[#c5a46d] text-left border border-white">
        <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-[#c5a46d]"></span>
        Email the Navigator
      </a>
    </div>
  );
};

export default Menu;
