import { LogoAsset } from "@/assets/logo";
import Link from "next/link";
import { BarButton } from "./bar-button";
import { socialButtons, topBarNavButtons } from "@/content/layout";

export function TopBar() {
  return (
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
          <BarButton key={button.link} button={button} />
        ))}
      </div>
    </nav>
  );
}
