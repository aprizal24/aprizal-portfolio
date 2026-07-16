import SkillCard from "./SkillCard";
import { skillsData } from "./skillsData";
import Container from "@/components/layout/Container";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="bg-[#F8FAFF] py-16 md:py-20 lg:py-28">
      <Container>
        <div className="w-full">
          {/* Section Header */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span className="text-sm font-medium text-blue-500 tracking-wide uppercase">
                Design Expertise
              </span>
            </div>
            <h2 id="skills-heading" className="mt-4 md:mt-5 lg:mt-10 text-xl md:text-4xl font-medium">
              The expertise and tools behind every digital experience I create.
            </h2>
          </div>

          {/* Skill Cards */}
          <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {skillsData.map((skill) => (
              <SkillCard key={skill.title} skill={skill} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
