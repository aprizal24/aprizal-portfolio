import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Project } from "./projectsData";
import ExternalLink from "@/components/ui/ExternalLink";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col-reverse md:flex-row gap-6 md:gap-10 p-6 md:p-8 lg:p-10 bg-[#F8FAFF] rounded-[28px] shadow-xl border border-neutral-100 min-h-[420px] transition-all duration-300 hover:-translate-y-2">
      {/* Left Content */}
      <div className="md:w-[42%] flex flex-col justify-between w-full">
        <div className="flex flex-col gap-3 md:gap-4">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">{project.title}</h3>
          <p className="text-neutral-600">
            {project.type} • {project.year}
          </p>
          <p className="text-base md:text-lg">{project.description}</p>
        </div>
        <ExternalLink
          href={project.link}
          className="flex items-start justify-start gap-2 mt-6 md:mt-8 font-medium group-hover:gap-3 transition-all w-full md:w-max min-h-[48px]"
        >
          View Project
          <ArrowRight />
        </ExternalLink>
      </div>

      {/* Right Image */}
      <div className="md:w-[58%] w-full aspect-[16/10] md:aspect-auto md:h-full">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={600}
          className="w-full h-full rounded-2xl object-cover"
        />
      </div>
    </div>
  );
}
