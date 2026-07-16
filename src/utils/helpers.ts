import { siteConfig } from "@/lib/siteConfig";

export const getGmailHref = () => {
  return siteConfig.contact.gmailCompose;
};
