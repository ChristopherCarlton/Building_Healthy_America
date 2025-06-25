import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-white text-black py-32">
      <div className="absolute inset-0 bg-white opacity-60"></div>
      <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 justify-between items-center">
        <div className="text-center">
          <a href="/">
            <img
              src="/images/BHC-icon.png"
              alt="Building Healthier Community"
              className="h-48 w-48 mb-4 mx-auto"
            />
          </a>
        </div>
        <div className="text-center">
          <ul className="space-y-2">
            <li>
              <a href="https://givebutter.com/dMaREx" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                Donate
              </a>
            </li>
            <li>
              <a href="/contact/" className="text-primary hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/pdfs/BHA-Privacy-Policy.pdf" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/pdfs/BHA-Terms-and-Conditions.pdf" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <ul className="space-y-2">
            <li className="flex justify-center space-x-4 mt-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary" aria-label="Visit our Facebook page">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary" aria-label="Visit our Twitter profile">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary" aria-label="Visit our LinkedIn profile">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary" aria-label="Visit our Instagram profile">
                <FaInstagram size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
