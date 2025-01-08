import { LogoAsset } from "@/assets/logo";
import { Icon } from "@iconify-icon/react";
import { Poppins, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import img from "../../public/img/header-me.jpeg";

const sans = Poppins({
  variable: "--font-poppins-sans",
  weight: ["400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const topBarNavButtons = [
  { label: "Home", link: "/" },
  { label: "Book me", link: "https://calendly.com/thebrandingrod/30min" },
  { label: "Email", link: "email:me@thebrandingrod.com" },
];

const socialButtons = [
  { icon: "hugeicons:dribbble", link: "https://dribbble.com/brandingrod" },
  { icon: "uil:behance", link: "email:me@thebrandingrod.com" },
  {
    icon: "hugeicons:instagram",
    link: "https://www.instagram.com/branding.rod",
  },
];

export default function Home() {
  return (
    <div
      className={`${sans.variable} ${geistMono.variable} grid grid-rows-[auto_1fr_auto] min-h-screen gap-16 font-sans`}
    >
      <nav className="grid grid-cols-1 max-sm:place-items-center lg:grid-cols-[1fr_auto_1fr] max-md:sm:grid-cols-2 md:grid-cols-[180px_1fr_180px] items-center py-8 px-16 sm:py-16 max-sm:gap-6">
        <Link href="/" className="lg:col-[2] lg:row-[1] max-md:sm:row-span-2">
          <LogoAsset className="size-28 lg:size-36 transition-all duration-75" />
        </Link>

        <div className="flex flex-row justify-between lg:gap-10 lg:justify-start lg:col-[1] lg:row-[1] whitespace-nowrap">
          {topBarNavButtons.map((button) => (
            <Link
              key={button.link}
              href={button.link}
              target={button.link.startsWith("/") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-base font-bold px-2 uppercase"
            >
              {button.label}
            </Link>
          ))}
        </div>
        <div className="justify-center sm:justify-end items-center flex flex-row gap-4 lg:col-[3] lg:row-[1] max-md:sm:col-[2]">
          {socialButtons.map((button) => (
            <Link
              key={button.link}
              href={button.link}
              target={button.link.startsWith("/") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full items-center justify-center transition-all duration-300 hover:scale-125"
            >
              <Icon icon={button.icon} width={24} />
            </Link>
          ))}
        </div>
      </nav>

      <main className="flex flex-col gap-8 row-start-2 items-center px-8">
        <header className="flex flex-col items-center gap-20 text-center">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-medium">Rodrigo Flores</h1>
            <p className="whitespace-pre-line font-serif text-4xl md:text-5xl leading-snug">
              {"Graphic Designer\nBased in Spain"}
            </p>
          </div>

          <Image
            src={img}
            placeholder="blur"
            alt="Me"
            width={485}
            height={600}
            className="rounded-full object-cover aspect-[485/600] transition-all duration-75 max-w-full sm:max-md:max-w-[400px]"
          />
        </header>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-between px-16 py-8">
        <p className="text-center">
          {"© 2024 Rodrigo Flores. All rights reserved."}
        </p>

        <div className="flex flex-row gap-4">
          {socialButtons.map((button) => (
            <Link
              key={button.link}
              href={button.link}
              target={button.link.startsWith("/") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full items-center justify-center transition-all duration-300 hover:scale-125"
            >
              <Icon icon={button.icon} width={24} />
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
}
