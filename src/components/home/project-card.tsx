import { ProjectDefinition } from "@/content/projects";
import Image from "next/image";
import Link from "next/link";

const cardSize = 400;

export function ProjectCard({ project }: { project: ProjectDefinition }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <Image
        src={project.image}
        alt={project.title}
        width={cardSize}
        height={cardSize}
      >
        {project.title}
      </Image>

      <p>{project.title}</p>

      <p>{project.category}</p>
    </Link>
  );
}
