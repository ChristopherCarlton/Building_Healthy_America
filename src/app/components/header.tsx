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
      {/* Main Menu */}
      <nav
        className={`hidden lg:flex relative bg-cover bg-center text-white transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-8'
        }`}
        style={{
          // backgroundImage: 'url(https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/brick-header-mix-1600x1071.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-100"></div>
        <div className="container mx-auto flex flex-col items-center relative z-10">
          <a href="/" className="mb-10">
            <img
              src="/images/BHAlogo.png"
              // src="/images/BHAAltIcon.png"
              alt="Building Healthier America"
              className={`transition-all duration-300 ${isScrolled ? 'h-20 md:h-24' : 'h-32 md:h-40 lg:h-40'}`}
            />
          </a>
          <ul className={`flex space-x-6 font-semibold text-primary transition-all duration-300 ${isScrolled ? 'text-base' : 'text-lg'}`}>
            <li></li>
            <li>
              <a href="/about-us/" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/get-involved/" className="hover:underline">
                Get Involved
              </a>
            </li>
            <li>
              <a href="/events/" className="hover:underline">
                Events
              </a>
            </li>
            <li>
              <a
                href="https://app.handzin.com/login"
                target="_blank"
                className="hover:underline border border-primary px-3 py-2 rounded"
              >
                Member Entry
              </a>
            </li>
            <li>
              <a
                href="https://ttboev5xtyu.typeform.com/to/cPYeoeri"
                target="_blank"
                className="hover:underline border border-primary px-3 py-2 rounded"
              >
                Join Community
              </a>
            </li>
            <li>
              <a
                href="https://buy.stripe.com/cN216geI46bI0M0eUU"
                target="_blank"
                className="hover:underline border border-primary px-3 py-2 rounded"
              >
                Donate
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav
        className={`lg:hidden relative bg-cover bg-center text-white transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-8'
        } px-4`}
      >
        <div className="absolute inset-0 bg-white bg-opacity-100"></div>
        <div className="container mx-auto flex justify-between items-center relative z-10">
          <a href="/" className="mb-0">
            <img
              src="/images/BHAlogo.png"
              alt="Building Healthier America"
              className={`transition-all duration-300 ${isScrolled ? 'h-20 md:h-24' : 'h-32 md:h-40 lg:h-40'}`}
            />
          </a>
          <button onClick={handleMenuToggle} className="text-black z-50" aria-label="Toggle Menu">
            {isMenuOpen ? <TbLetterX className="text-5xl" /> : <IoIosMenu className="text-5xl" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && <Menu closeModal={handleMenuToggle} />}
    </header>
  );
};

export default Header;
