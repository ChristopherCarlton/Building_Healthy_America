import React from 'react';
import { TbLetterX } from "react-icons/tb";

const Menu: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center space-y-4 text-white p-8 md:p-16 overflow-hidden" tabIndex={-1}>
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-white hover:text-gray-400"
      >
        <TbLetterX size={30} />
      </button>
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
