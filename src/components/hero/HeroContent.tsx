import { ArrowRight, Mail } from "lucide-react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { getGmailHref } from "@/utils/helpers";
import ExternalLink from "@/components/ui/ExternalLink";
import { siteConfig } from "@/lib/siteConfig";

export default function HeroContent() {
  return (
    <div className="flex flex-col items-center md:items-start w-full">
      {/* Availability Badge */}
      <div className="flex items-center gap-2 px-0 md:px-10 mb-2 md:mb-4">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
        <span className="text-sm font-medium text-gray-800">
          Available for Opportunities
        </span>
      </div>

      {/* Main Heading */}
      <div className="flex flex-col gap-4 items-center md:items-start w-full text-center md:text-left mb-4 md:mb-12">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-black leading-tight tracking-tight">
          Aprizal Triansyah
        </h1>
        <h2 className="text-lg md:text-3xl lg:text-5xl font-semibold text-gray-500">
          UI/UX Designer
        </h2>
      </div>

      {/* Description */}
      <p className="max-w-sm md:max-w-md text-sm md:text-lg leading-7 md:leading-relaxed text-neutral-600 md:text-gray-800 text-center md:text-left w-full mb-6 md:mb-12">
        I believe good design should be simple, intuitive, and accessible to everyone.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto items-center mb-6">
        <a
          href="#projects"
          className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 min-h-[48px] rounded-xl font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all w-full md:w-auto"
        >
          View Project
          <ArrowRight size={20} />
        </a>
        <ExternalLink
          href={getGmailHref()}
          className="flex items-center justify-center gap-2 bg-white text-black border border-black px-6 py-3 min-h-[48px] rounded-xl font-medium hover:bg-gray-100 transition-colors w-full md:w-auto"
        >
          Contact Me
          <Mail size={20} />
        </ExternalLink>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3">
        <ExternalLink
          href={siteConfig.social.linkedin}
          className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg text-gray-800 hover:bg-black hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn size={20} />
        </ExternalLink>
        <ExternalLink
          href={siteConfig.social.instagram}
          className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg text-gray-800 hover:bg-black hover:text-white transition-colors"
          aria-label="Instagram"
        >
          <FaInstagram size={20} />
        </ExternalLink>
      </div>
    </div>
  );
}
