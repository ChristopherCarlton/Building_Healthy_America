import React from 'react';
import { IoIosMenu } from 'react-icons/io';
import { TbLetterX } from 'react-icons/tb';
import Logo from './Logo';

// Mobile bar: constant height, logo left, hamburger right.
const MobileNav = ({
  isScrolled,
  isMenuOpen,
  onToggle,
}: {
  isScrolled: boolean;
  isMenuOpen: boolean;
  onToggle: () => void;
}) => (
  <nav
    aria-label="Primary"
    className={`lg:hidden bg-white transition-shadow duration-500 ${
      isScrolled ? 'shadow-md' : ''
    }`}
  >
    <div className="container mx-auto px-4 h-28 flex items-center justify-between">
      <Logo isScrolled={isScrolled} />
      <button
        type="button"
        onClick={onToggle}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        className="text-primary rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {isMenuOpen ? <TbLetterX className="text-5xl" /> : <IoIosMenu className="text-5xl" />}
      </button>
    </div>
  </nav>
);

export default MobileNav;
