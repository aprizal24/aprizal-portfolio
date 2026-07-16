import { ReactNode } from "react";
import ExternalLink from "@/components/ui/ExternalLink";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  subtitle: ReactNode;
  href?: string;
}

export default function ContactCard({
  icon,
  title,
  subtitle,
  href,
}: ContactCardProps) {
  const Content = (
    <div className="flex items-start gap-6 p-6 md:p-8 bg-white rounded-[28px] shadow-xl border border-neutral-100 transition-all duration-300 hover:-translate-y-1.5">
      <div className="mt-1" aria-hidden="true">{icon}</div>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-medium tracking-wider uppercase text-neutral-500">
          {title}
        </h3>
        <div className="text-lg md:text-xl font-medium">{subtitle}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <ExternalLink href={href} className="block">
        {Content}
      </ExternalLink>
    );
  }

  return Content;
}
