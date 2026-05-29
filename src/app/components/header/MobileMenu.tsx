'use client';
import React, { useEffect, useRef } from 'react';
import type { IconType } from 'react-icons';
import { MdHome, MdInfoOutline, MdLogin, MdPersonAddAlt, MdFavorite, MdClose } from 'react-icons/md';
import { FiExternalLink } from 'react-icons/fi';
import { navLinks, externalProps, NavLink } from './navLinks';

const ICONS: Record<string, IconType> = {
  Home: MdHome,
  'About Us': MdInfoOutline,
  'Log In': MdLogin,
  'Sign Up': MdPersonAddAlt,
};

const label = (link: NavLink) => link.mobileLabel ?? link.label;

const mobileLinks = navLinks.filter((l) => l.mobile !== false);
const donate = mobileLinks.find((l) => l.label === 'Donate');
const primary = mobileLinks.filter((l) => !l.external);
const account = mobileLinks.filter((l) => l.external && l.label !== 'Donate');

const rowClass =
  'group flex items-center gap-4 rounded-xl px-5 py-4 min-h-[56px] text-lg font-medium ' +
  'text-white bg-white/5 transition-colors hover:bg-white/15 focus:outline-none ' +
  'focus-visible:ring-2 focus-visible:ring-white';

// Full-screen menu. The white header bar (logo + close X) stays visible on top
// (it's z-50, above this z-40 panel), so content starts below it via pt-28.
const MobileMenu = ({ closeModal }: { closeModal: () => void }) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = panelRef.current;
    const focusables = node?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    focusables?.[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
        return;
      }
      if (e.key !== 'Tab' || !focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [closeModal]);

  const renderRow = (link: NavLink) => {
    const Icon = ICONS[label(link)];
    return (
      <a
        key={link.href}
        href={link.href}
        onClick={closeModal}
        {...externalProps(link.external)}
        className={rowClass}
      >
        {Icon && <Icon className="h-6 w-6 text-white/70 group-hover:text-white transition-colors" />}
        <span>{label(link)}</span>
        {link.external && (
          <>
            <FiExternalLink className="h-4 w-4 ml-auto text-white/50" />
            <span className="sr-only">(opens in a new tab)</span>
          </>
        )}
      </a>
    );
  };

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      ref={panelRef}
      className="fixed inset-0 z-40 bg-primary text-white menu-animate"
    >
      <div className="h-full overflow-y-auto flex flex-col pb-10 px-6">
        <div className="flex items-center justify-end h-20 shrink-0">
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close menu"
            className="p-2 -mr-2 rounded-full text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <MdClose size={30} />
          </button>
        </div>
        <nav aria-label="Mobile" className="flex-1 flex flex-col justify-center gap-3">
          {primary.map(renderRow)}
          {account.map(renderRow)}
        </nav>

        {donate && (
          <div className="mt-auto pt-8">
            <a
              href={donate.href}
              onClick={closeModal}
              {...externalProps(donate.external)}
              className="flex items-center justify-center gap-2.5 w-full rounded-xl bg-secondary px-6 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-[#a83f5c] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              <MdFavorite className="h-5 w-5" />
              {label(donate)}
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
