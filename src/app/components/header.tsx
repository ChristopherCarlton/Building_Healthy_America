"use client";
import React, { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { TbLetterX } from "react-icons/tb";
import Menu from "./menu";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Top Menu for Mobile */}
      <nav className="bg-secondary text-white p-2 lg:hidden">
        <div className="container mx-auto">
          <ul className="flex space-x-4">
            <li>Hudson:</li>
            <li>
              <a href="mailto:dhofstedt@bha4families.org" className="flex items-center">
                <i className="fa fa-envelope mr-1"></i> Email Us
              </a>
            </li>
            <li>
              <a href="https://goo.gl/maps/HkWvyi32DcnMDnPD9" target="_blank" rel="noreferrer" className="flex items-center">
                <i className="fa fa-map-marker-alt mr-1"></i> Find Us
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Menu */}
      <nav
        className={`relative bg-cover bg-center text-white transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-8'
        }`}
        style={{
          backgroundImage: 'url(https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/brick-header-mix-1600x1071.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-90"></div>
        <div className="container mx-auto flex flex-col items-center relative z-10">
          <a href="/" className="mb-10">
            <img
              src="https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/Building-Healthier-America-Logo-300x300.png"
              alt="Building Healthier America"
              className={`transition-all duration-300 ${isScrolled ? 'h-20 md:h-24' : 'h-32 md:h-40'}`}
            />
          </a>
          <ul className={`hidden lg:flex space-x-6 font-semibold text-[#286fb4] transition-all duration-300 ${isScrolled ? 'text-base' : 'text-lg'}`}>
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about-us/" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact/" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://app.handzin.com/login"
                target="_blank"
                className="hover:underline border border-[#286fb4] px-3 py-2 rounded"
              >
                BHA4families Member Entry
              </a>
            </li>
            <li>
              <a
                href="https://forms.gle/sYvuKeTbYKPv4URc6"
                target="_blank"
                className="hover:underline border border-[#286fb4] px-3 py-2 rounded"
              >
                BHA Survey
              </a>
            </li>
            <li>
              <a
                href="mailto:dhofstedt@bha4families.org"
                className="hover:underline border border-[#286fb4] px-3 py-2 rounded"
              >
                Email the Navigator
              </a>
            </li>
          </ul>
          <button onClick={handleMenuToggle} className="text-white lg:hidden z-50">
            {isMenuOpen ? <TbLetterX className="text-5xl" /> : <IoIosMenu className="text-5xl" />}
          </button>
        </div>
      </nav>
      {isMenuOpen && <Menu />}
    </header>
  );
};

export default Header;