// Single source of truth for header navigation.
// Desktop and mobile both consume this list; `desktop`/`mobile` flags control
// where a link appears, and `mobileLabel` allows the wording to differ on mobile.
export type NavLink = {
  label: string;
  mobileLabel?: string;
  href: string;
  external?: boolean; // true => target=_blank + rel=noopener noreferrer
  desktop?: boolean; // default true; set false to hide on desktop
  mobile?: boolean; // default true; set false to hide on mobile
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/', desktop: false }, // mobile-only
  { label: 'About Us', href: '/about-us/' },
  {
    label: 'Member Area',
    mobileLabel: 'Log In',
    href: 'https://app.heartbeat.chat/login/bha?redirectTo=%2Fbha',
    external: true,
  },
  {
    label: 'Join Our Free Community',
    mobileLabel: 'Sign Up',
    href: 'https://app.heartbeat.chat/bha/invitation?code=98B88C#landing-page',
    external: true,
  },
  {
    label: 'Donate',
    href: 'https://givebutter.com/dMaREx',
    external: true,
  },
];

// Spread onto an <a> to safely open external links in a new tab.
export const externalProps = (external?: boolean) =>
  external ? { target: '_blank' as const, rel: 'noopener noreferrer' } : {};
