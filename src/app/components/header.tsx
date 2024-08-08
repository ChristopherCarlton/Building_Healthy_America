"use client";
import React, { useEffect, useState, useRef } from "react";
import { IoIosMenu } from "react-icons/io";
import { TbLetterX } from "react-icons/tb";
import Menu from "./menu";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGetInvolvedHovered, setIsGetInvolvedHovered] = useState(false);
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsGetInvolvedHovered(true);
    timeoutRef.current = setTimeout(() => {
      setIsSubmenuVisible(true);
    }, 200); // Delay for the submenu to appear after the header extends
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsGetInvolvedHovered(false);
    timeoutRef.current = setTimeout(() => {
      setIsSubmenuVisible(false);
    }, 200); // Adjust delay as needed
  };

  return (
    <header className="w-full fixed top-0 z-50 transition-all duration-500">
      {/* Main Menu */}
      <nav
        className={`hidden lg:flex flex-col relative bg-cover bg-center text-white transition-all duration-500 ${
          isScrolled ? 'py-4' : 'py-8'
        } ${isGetInvolvedHovered || isSubmenuVisible ? ' pb-40': ''}`}  // Adjust height when hovered
        style={{
          // backgroundImage: 'url(https://buildinghealthieramerica.org/wp-content/uploads/sites/4/2020/09/brick-header-mix-1600x1071.jpg)',
        }}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-0 bg-white bg-opacity-100"></div>
        <div className="container mx-auto flex flex-col items-center relative z-10">
          <a href="/" className="mb-10">
            <img
              src="/images/BHAlogo.png"
              alt="Building Healthier America"
              className={`transition-all duration-500 ${isScrolled ? 'h-20 md:h-24' : 'h-32 md:h-40 lg:h-40'}`}
            />
          </a>
          <ul className={`flex space-x-6 font-semibold text-primary transition-all duration-500 ${isScrolled ? 'text-base' : 'text-lg'}`}>
            <li></li>
            <li>
              <a href="/about-us/" className="hover:underline">
                About Us
              </a>
            </li>
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="/get-involved/" className="hover:underline">
                Get Involved
              </a>
              {(isGetInvolvedHovered || isSubmenuVisible) && (
                <div
                  className={`absolute left-0 top-full mt-2 w-44 bg-white text-primary z-50 transition-opacity duration-500 ${
                    isSubmenuVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  onMouseEnter={() => {
                    if (timeoutRef.current) {
                      clearTimeout(timeoutRef.current);
                    }
                    setIsSubmenuVisible(true);
                  }}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="container mx-auto py-2 flex flex-col items-start">
                    <ul className={`flex flex-col space-y-2 transition-opacity duration-500 ${isSubmenuVisible ? 'opacity-100' : 'opacity-0'}`}>
                      <li>
                        <a href="/get-involved" className="hover:underline block">
                          Attend an Event
                        </a>
                      </li>
                      <li>
                        <a href="https://ttboev5xtyu.typeform.com/to/cPYeoeri" className="hover:underline block" target="_blank" rel="noopener noreferrer">
                          Join the Community
                        </a>
                      </li>
                      {/* <li>
                        <a href="https://ttboev5xtyu.typeform.com/to/cPYeoeri" className="hover:underline block" target="_blank" rel="noopener noreferrer">
                          Find a Chapter
                        </a>
                      </li> */}
                      <li>
                        <a href="https://ttboev5xtyu.typeform.com/to/cPYeoeri" className="hover:underline block" target="_blank" rel="noopener noreferrer">
                          Become a Partner
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
            <li>
              <a
                href="https://app.handzin.com/login"
                target="_blank"
                className="hover:underline border border-primary px-3 py-2 rounded"
              >
                Member Area
              </a>
            </li>
            <li>
              <a
                href="https://ttboev5xtyu.typeform.com/to/cPYeoeri"
                target="_blank"
                className="hover:underline border border-primary px-3 py-2 rounded"
                rel="noopener noreferrer"
              >
                Join the Community
              </a>
            </li>
            <li>
              <a
                href="https://buy.stripe.com/cN216geI46bI0M0eUU"
                target="_blank"
                className="hover:underline border border-primary px-3 py-2 rounded"
                rel="noopener noreferrer"
              >
                Donate
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav
        className={`lg:hidden relative bg-cover bg-center text-white transition-all duration-500 ${
          isScrolled ? 'py-4' : 'py-8'
        } px-4`}
      >
        <div className="absolute inset-0 bg-white bg-opacity-100"></div>
        <div className="container mx-auto flex justify-between items-center relative z-10">
          <a href="/" className="mb-0">
            <img
              src="/images/BHAlogo.png"
              alt="Building Healthier America"
              className={`transition-all duration-500 ${isScrolled ? 'h-20 md:h-24' : 'h-32 md:h-40 lg:h-40'}`}
            />
          </a>
          <button onClick={handleMenuToggle} className="text-black z-50" aria-label="Toggle Menu">
            {isMenuOpen ? <TbLetterX className="text-5xl text-primary" /> : <IoIosMenu className="text-5xl text-primary" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && <Menu closeModal={handleMenuToggle} />}
    </header>
  );
};

export default Header;
