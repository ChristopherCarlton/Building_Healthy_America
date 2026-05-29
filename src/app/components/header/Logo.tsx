import React from 'react';
import Image from 'next/image';

// Reusable logo used by both the desktop and mobile bars.
// next/image with priority since the logo is the LCP. The intrinsic size
// (1200x627) sets the aspect ratio; `w-auto` + height classes drive the
// rendered size within the constant-height bar.
const Logo = ({ isScrolled }: { isScrolled: boolean }) => (
  <a
    href="/"
    aria-label="Building Healthier Community — home"
    className="block rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
  >
    <Image
      src="/images/BHC-logo-full.png"
      alt="Building Healthier Community"
      width={1200}
      height={627}
      priority
      className={`w-auto transition-all duration-500 ${
        isScrolled ? 'h-16 lg:h-24' : 'h-20 lg:h-28'
      }`}
    />
  </a>
);

export default Logo;
