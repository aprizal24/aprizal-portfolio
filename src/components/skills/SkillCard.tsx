import { Skill } from "./skillsData";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="flex flex-col justify-between p-6 md:p-8 bg-white rounded-[28px] shadow-xl border border-neutral-100 min-h-[360px] transition-all duration-300 hover:-translate-y-1.5">
      <div className="flex flex-col">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">{skill.title}</h3>
        <p className="mt-6 md:mt-8 text-lg md:text-xl lg:text-2xl leading-relaxed text-neutral-800">
          {skill.description}
        </p>
      </div>
      <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
        {skill.tags.map((tag, index) => (
          <span
            key={index}
            className="px-4 py-2 rounded-full bg-[#E8ECFF] text-sm font-medium text-neutral-900"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
