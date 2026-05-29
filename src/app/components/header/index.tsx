'use client';
import React, { useEffect, useState } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import MobileMenu from './MobileMenu';

// Sticky, in-flow header (a constant-height compact bar). Because it occupies
// layout space, no page needs a top-offset spacer. It sticks on scroll and
// gains a shadow once scrolled; the bar height never changes, so content below
// never reflows.
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((open) => !open);

  return (
    <header className="w-full sticky top-0 z-50">
      <DesktopNav isScrolled={isScrolled} />
      <MobileNav isScrolled={isScrolled} isMenuOpen={isMenuOpen} onToggle={toggleMenu} />
      {isMenuOpen && <MobileMenu closeModal={toggleMenu} />}
    </header>
  );
};

export default Header;
