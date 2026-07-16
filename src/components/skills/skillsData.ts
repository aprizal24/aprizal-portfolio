export interface Skill {
  title: string;
  description: string;
  tags: string[];
}

export const skillsData: Skill[] = [
  {
    title: "Design",
    description: "Creating intuitive and user-centered interfaces.",
    tags: ["UI Design", "UX Design", "Wireframing", "Prototype", "Interaction"],
  },
  {
    title: "UX Process",
    description: "Solving problems through research and structured thinking.",
    tags: ["Research", "User Persona", "User Flow", "Information Architecture"],
  },
  {
    title: "Tools",
    description: "Industry-standard tools that support my workflow.",
    tags: ["Figma", "FigJam", "Notion", "Trae"],
  },
];
