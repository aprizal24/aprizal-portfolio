import { siteConfig } from "@/lib/siteConfig";

export interface Project {
  title: string;
  description: string;
  type: string;
  year: string;
  image: string;
  link: string;
}

export const projectsData: Project[] = [
  {
    title: "SnapHire",
    description: "Booking Platform for Professional Photographers",
    type: "Mobile App",
    year: "2026",
    image: "/images/projects/snaphire.png",
    link: siteConfig.projects.snapHire,
  },
  {
    title: "Klyra",
    description: "E-commerce Platform for Sustainable Fashion",
    type: "Web App",
    year: "2025",
    image: "/images/projects/Klyra.png",
    link: siteConfig.projects.klyra,
  },
];
