import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import Image from "next/image";

export function InstagramPostButton({
  post,
}: {
  post: { label: string; image: string; link: string };
}) {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative max-w-64 aspect-square"
    >
      <Image
        src={post.image}
        alt={post.label}
        width={400}
        height={400}
        className="w-full h-full object-cover group-hover:object-contain transition-all duration-700 ease-in-out"
      />

      <div
        aria-hidden
        className="absolute flex inset-x-10 inset-y-10 items-center justify-center gap-2 bg-black/30 backdrop-blur-sm invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-100 ease-in-out"
      >
        <Icon
          aria-hidden
          icon="akar-icons:instagram"
          className="text-white text-7xl"
        />
      </div>
    </a>
  );
}
