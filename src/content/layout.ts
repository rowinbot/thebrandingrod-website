import { me } from "./app";

export const topBarNavButtons = [
  { label: "Home", link: "/" },
  { label: "Book me", link: me.calendly },
  { label: "Email", link: `email:${me.email}` },
];

export const socialButtons = [
  { icon: "hugeicons:dribbble", link: me.dribbble },
  { icon: "uil:behance", link: me.behance },
  {
    icon: "hugeicons:instagram",
    link: me.instagram,
  },
];
