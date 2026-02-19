import React from 'react';
import { TbLetterX } from "react-icons/tb";

const Menu: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-primary bg-opacity-90 z-40 flex flex-col items-center justify-center space-y-4 text-white p-8 md:p-16 overflow-hidden" tabIndex={-1}>
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-white hover:text-gray-400"
      >
        <TbLetterX size={30} />
      </button>
      <a href="/" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-secondary text-left">
        <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-secondary"></span>
        Home
      </a>
      <a href="/about-us/" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-secondary text-left">
        <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-secondary"></span>
        About Us
      </a>
      <a href="https://app.heartbeat.chat/login/bha?redirectTo=%2Fbha" target="_blank" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-secondary text-left border border-white">
        <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-secondary"></span>
        Log In
      </a>
      <a href="https://app.heartbeat.chat/bha/invitation?code=98B88C#landing-page" target="_blank" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-secondary text-left border border-white">
        <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-secondary"></span>
        Sign Up
      </a>
      <a href="https://givebutter.com/dMaREx" target="_blank" className="relative text-xl w-64 px-14 py-4 rounded-md hover:bg-secondary text-left border border-white">
        <span className="absolute left-1 top-0 bottom-0 w-1 rounded-md bg-secondary"></span>
        Donate
      </a>
    </div>
  );
};

export default Menu;
