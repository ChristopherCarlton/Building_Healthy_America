import React from 'react';
import Logo from './Logo';
import { navLinks, externalProps } from './navLinks';

// Desktop bar: constant height (no reflow on scroll), logo left, links right.
const DesktopNav = ({ isScrolled }: { isScrolled: boolean }) => (
  <nav
    aria-label="Primary"
    className={`hidden lg:block bg-white transition-shadow duration-500 ${
      isScrolled ? 'shadow-md' : ''
    }`}
  >
    <div className="container mx-auto px-4 h-36 flex items-center justify-between">
      <Logo isScrolled={isScrolled} />
      <ul className="flex items-center space-x-6 font-semibold text-primary text-lg">
        {navLinks
          .filter((link) => link.desktop !== false)
          .map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                {...externalProps(link.external)}
                className={`hover:underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  link.external ? 'border border-primary px-3 py-2' : ''
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
      </ul>
    </div>
  </nav>
);

export default DesktopNav;
