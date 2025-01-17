import { AppLayout } from "@/components/layout/app-layout";
import { projects } from "@/content/projects";
import { formatDate } from "@/util/misc";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ProjectPage() {
  const router = useRouter();
  const projectId = router.query.project as string;

  const project = projects.find((project) => project.id === projectId) ?? null;

  if (!project) {
    return (
      <AppLayout className="flex flex-col gap-20 items-center">
        404 - Project not found
      </AppLayout>
    );
  }

  return (
    <AppLayout className="flex flex-col gap-20">
      <div className="grid xl:grid-cols-2 gap-10 items-center">
        <h1 className="text-6xl xs:text-7xl xl:text-8xl font-medium">
          {project.title}
        </h1>

        <div className="grid sm:grid-cols-2 gap-10">
          <div className="space-y-4 font-serif text-xl">
            <p className="font-sans text-sm opacity-45 uppercase font-medium">
              Client
            </p>
            <p className="font-serif text-xl">
              {project.client.name}
              <br />
              {project.client.location}
            </p>
          </div>
          <div className="space-y-4 font-serif text-xl">
            <p className="font-sans text-sm opacity-45 uppercase font-medium">
              Team
            </p>
            <p className="font-serif text-xl flex flex-col gap-1">
              {project.team.map((member, index) => (
                <span key={index}>{`${member.name} - ${member.role}`}</span>
              ))}
            </p>
          </div>
          <div className="space-y-4 font-serif text-xl">
            <p className="font-sans text-sm opacity-45 uppercase font-medium">
              Services
            </p>
            <p className="font-serif text-xl flex flex-col gap-1">
              {project.services.map((service, index) => (
                <span key={index}>{service}</span>
              ))}
            </p>
          </div>
          <div className="space-y-4 font-serif text-xl">
            <p className="font-sans text-sm opacity-45 uppercase font-medium">
              Date
            </p>
            <p className="font-serif text-xl flex flex-col gap-1">
              {formatDate(project.date)}
            </p>
          </div>
        </div>
      </div>

      <Image
        src={project.image}
        width={800}
        height={450}
        alt=""
        className="w-full"
      />

      <section className="flex flex-col gap-4 border-b border-black/30 pb-20">
        <p className="text-base sm:text-xl opacity-45 uppercase font-medium lg:sr-only">
          Project Goal
        </p>
        <p className="text-2xl lg:text-3xl !leading-relaxed">
          {project.client.description}
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <p className="text-base sm:text-xl opacity-45 uppercase font-medium">
          Solution
        </p>

        <p className="text-xl lg:text-2xl !leading-relaxed">
          {project.client.description}
        </p>
      </section>
    </AppLayout>
  );
}
