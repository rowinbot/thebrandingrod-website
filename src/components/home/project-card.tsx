import { ProjectDefinition } from "@/content/projects";
import { clsx } from "@/util/clsx";
import Image from "next/image";
import Link from "next/link";

export function ProjectCard({
  slide,
  className,
}: {
  slide: ProjectDefinition;
  className?: string;
}) {
  return (
    <Link
      href={`/projects/${slide.id}`}
      className={clsx(
        "flex select-none relative h-[30rem] bg-white",
        className
      )}
    >
      <Image
        src={slide.image}
        alt={slide.title}
        width={700}
        height={500}
        className="absolute w-full h-full inset-0 object-cover"
      />

      <div className="flex flex-col justify-between w-full text-center z-10 relative pt-8">
        <p className="text-sm self-center lg:text-lg bg-white border border-black text-black px-3 py-1 rounded-full">
          {slide.category}
        </p>
      </div>
    </Link>
  );
}
