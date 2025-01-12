import Link from "next/link";
import { Icon } from "@iconify-icon/react";

export interface BarButtonDefinition {
  icon: string;
  link: string;
}

export function BarButton({ button }: { button: BarButtonDefinition }) {
  return (
    <Link
      key={button.link}
      href={button.link}
      target={button.link.startsWith("/") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="p-2 bg-white rounded-full items-center justify-center transition-all duration-300 hover:scale-125"
    >
      <Icon icon={button.icon} width={24} />
    </Link>
  );
}
