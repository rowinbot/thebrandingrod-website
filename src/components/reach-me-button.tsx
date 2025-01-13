import { Icon } from "@iconify-icon/react";

export function ReachMeButton({ link }: { link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-2 aspect-square rounded-full bg-gray-50 items-center justify-center p-10 relative before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-[5px] before:border-gray-400 before:border-dotted before:rotate-90 hover:before:rotate-[110deg] before:ease-in-out before:transition-all before:duration-500 text-center group"
    >
      <div className="flex-1 flex items-end">
        <span className="text-xs sm:text-sm max-w-[10rem] uppercase font-medium text-gray-500">
          Describe your project
        </span>
      </div>

      <span className="text-5xl sm:text-7xl font-medium group-hover:text-gray-700">
        Reach Me
      </span>

      <Icon
        icon="memory:arrow-top-right"
        height="none"
        className="size-20 sm:size-28 flex-1 text-black group-hover:text-gray-700"
      />
    </a>
  );
}
