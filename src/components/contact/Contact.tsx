import { Mail, MapPin, ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import ContactCard from "./ContactCard";
import { getGmailHref } from "@/utils/helpers";
import ExternalLink from "@/components/ui/ExternalLink";
import { siteConfig } from "@/lib/siteConfig";
import Container from "@/components/layout/Container";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-16 md:py-20 lg:py-28">
      <Container>
        <div className="w-full">
          {/* Contact Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Left Column */}
            <div className="text-center md:text-left">
              <div className="flex justify-start gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span className="text-sm font-medium text-blue-500 tracking-wide uppercase">
                  Contact
                </span>
              </div>
              <h2 className="mt-4 md:mt-15 text-2xl md:text-3xl font-bold">
                Let&apos;s build something meaningful together.
              </h2>
              <p className="mt-4 md:mt-5 text-xl md:text-2xl lg:text-4xl leading-8 md:leading-15 lg:leading-20 text-neutral-800">
                Whether you&apos;re hiring a UI/UX Designer, building a new product, or looking for a creative collaborator, I&apos;d love to hear from you.
              </p>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 pt-0 md:pt-18">
              <ExternalLink
                href={getGmailHref()}
                className="block"
              >
                <div className="flex items-start gap-6 p-6 md:p-8 bg-white rounded-[28px] shadow-xl border border-neutral-100 transition-all duration-300 hover:-translate-y-1.5">
                  <div className="mt-1">
                    <Mail size={24} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-medium tracking-wider uppercase text-neutral-500">
                      Email
                    </h3>
                    <div className="text-lg md:text-xl font-medium flex items-center gap-1">
                      Send Email <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </ExternalLink>
              <ContactCard
                icon={<FaLinkedinIn size={24} />}
                title="LinkedIn"
                subtitle={
                  <div className="flex items-center gap-1">
                    Connect <ArrowRight size={18} />
                  </div>
                }
                href={siteConfig.social.linkedin}
              />
              <ContactCard
                icon={<MapPin size={24} />}
                title="Location"
                subtitle={
                  <div>
                    Based in <br /> Lombok, Indonesia
                  </div>
                }
              />
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 md:mt-30">
            <div className="grid grid-cols-1 gap-12 md:gap-16 mb-12 md:mb-16">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold">APRIZAL TRIANSYAH</h3>
                <p className="mt-6 text-neutral-500">
                  Designing intuitive digital experiences that solve real user problems.
                </p>
                <p className="mt-6 text-base md:text-lg leading-relaxed text-neutral-800">
                  I design clean, intuitive, and user-centered digital experiences that help ideas become meaningful products.
                </p>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-neutral-800">
                  Currently open to UI/UX Designer roles, freelance projects, and creative collaborations. Available for on-site, hybrid, or remote work.
                </p>
                <div className="mt-5 flex gap-4 justify-center md:justify-start">
                  <ExternalLink
                    href={siteConfig.social.linkedin}
                    className="w-12 h-12 flex items-center justify-center border border-neutral-200 rounded-full text-neutral-800 hover:bg-black hover:text-white transition-all"
                  >
                    <FaLinkedinIn size={20} />
                  </ExternalLink>
                  <ExternalLink
                    href={getGmailHref()}
                    className="w-12 h-12 flex items-center justify-center border border-neutral-200 rounded-full text-neutral-800 hover:bg-black hover:text-white transition-all"
                  >
                    <Mail size={20} />
                  </ExternalLink>
                  <ExternalLink
                    href={siteConfig.social.instagram}
                    className="w-12 h-12 flex items-center justify-center border border-neutral-200 rounded-full text-neutral-800 hover:bg-black hover:text-white transition-all"
                  >
                    <FaInstagram size={20} />
                  </ExternalLink>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-5 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              <p className="text-neutral-600">© 2026 Aprizal Triansyah.</p>
              <p className="text-neutral-600">
                Designed with Figma • Developed with Next.js
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
