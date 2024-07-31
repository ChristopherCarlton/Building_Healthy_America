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
              src="/images/BHAlogo.png"
              alt="Building Healthier America"
              className="h-48 w-48 mb-4 mx-auto"
            />
          </a>
          {/* <p>Hudson, WI, 54016</p> */}
        </div>
        <div className="text-center">
          <ul className="space-y-2">
            <li>
              <a href="https://buy.stripe.com/cN216geI46bI0M0eUU" className="text-primary hover:underline">
                Donate
              </a>
            </li>
            <li>
              <a href="/contact/" className="text-primary hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2022/01/BHA-Privacy-Policy.pdf" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2022/01/BHA-Terms-and-Conditions.pdf" className="text-primary hover:underline">
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
