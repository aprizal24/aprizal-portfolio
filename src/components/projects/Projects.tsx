import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectsData";
import Container from "@/components/layout/Container";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="bg-white py-16 md:py-20 lg:py-28">
      <Container>
        <div className="w-full">
          {/* Section Header */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span className="text-sm font-medium text-blue-500 tracking-wide uppercase">
                Featured Projects
              </span>
            </div>
            <h2 id="projects-heading" className="mt-4 md:mt-5 lg:mt-10 text-xl md:text-4xl font-medium">
              Selected work that reflects my design thinking and problem-solving approach.
            </h2>
          </div>

          {/* Project Cards */}
          <div className="mt-8 md:mt-10 flex flex-col gap-8 md:gap-12">
            {projectsData.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
