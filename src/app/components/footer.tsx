import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer
      className="relative bg-white text-black py-32"
      // style={{ backgroundImage: 'url(https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/footer-rev4-1600x800.jpg)', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-white opacity-60"></div>
      <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 justify-between items-center">
        <div className="text-center">
          <a href="/">
            <img
              src="https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/Building-Healthier-America-Logo-300x300.png"
              alt="Building Healthier America"
              className="h-48 w-48 mb-4 mx-auto"
            />
          </a>
          {/* <p>Hudson, WI, 54016</p> */}
        </div>
        <div className="text-center">
          {/* <h2 className="text-xl mb-4">Links</h2> */}
          <ul className="space-y-2">
            <li>
              <a href="/#donate" className="text-[#286fb4] hover:underline">
                Donate
              </a>
            </li>
            <li>
              <a href="/contact/" className="text-[#286fb4] hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2022/01/BHA-Privacy-Policy.pdf" className="text-[#286fb4] hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2022/01/BHA-Terms-and-Conditions.pdf" className="text-[#286fb4] hover:underline">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          {/* <h2 className="text-xl mb-4">Connect</h2> */}
          <ul className="space-y-2">
            {/* <li>
              <a href="mailto:dhofstedt@bha4families.org" className="text-[#286fb4] hover:underline">
                <MdEmail className="inline mr-2" /> dhofstedt@bha4families.org
              </a>
            </li> */}
            <li className="flex justify-center space-x-4 mt-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#286fb4]">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#286fb4]">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#286fb4]">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#286fb4]">
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
