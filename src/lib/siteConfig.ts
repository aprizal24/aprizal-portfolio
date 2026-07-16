const EMAIL = "aprizaltriansyah24@gmail.com";
const SUBJECT = "Let's Work Together";
const BODY =
  "Hi Aprizal,\n\nI found your portfolio and would like to discuss a project or opportunity with you.\n\nLooking forward to hearing from you.";

export const siteConfig = {
  // SEO Configuration
  name: "Aprizal Triansyah",
  role: "UI/UX Designer",
  description: "Portfolio of Aprizal Triansyah, a UI/UX Designer specializing in crafting simple, intuitive, and accessible digital experiences.",
  keywords: [
    "Aprizal Triansyah",
    "UI/UX Designer",
    "Portfolio",
    "User Experience",
    "User Interface",
    "Designer",
    "Figma",
    "Product Design",
    "Sustainable Fashion",
    "Photography Booking"
  ],
  authors: [{ name: "Aprizal Triansyah", url: "https://www.linkedin.com/in/aprizal-triansyah-61214830a" }],
  creator: "Aprizal Triansyah",
  publisher: "Aprizal Triansyah",
  category: "Design",
  applicationName: "Aprizal Triansyah Portfolio",

  // TODO: Replace with your actual custom domain
  metadataBase: new URL("https://personal-portfolio-psi-ten-55.vercel.app"),

  // Social Preview Images
  // TODO: Add your social preview images to public/ directory
  // Recommended sizes:
  // - Open Graph: 1200x630px
  // - Twitter: 1200x630px (same as OG)
  ogImage: "/og-image.png",
  twitterImage: "/og-image.png",

  // Social & Contact
  email: EMAIL,

  social: {
    linkedin: "https://www.linkedin.com/in/aprizal-triansyah-61214830a/?skipRedirect=true",
    instagram: "https://www.instagram.com/byaprizal?igsh=MXNmMWoyaHlxMGp5bQ%3D%3D&utm_source=qr",
    behance: "",
    github: "",
  },

  projects: {
    snapHire: "https://snaphire-case-study.vercel.app/",
    klyra: "https://klyra-case-study.vercel.app/",
  },

  contact: {
    gmailCompose:
      "https://mail.google.com/mail/?view=cm&fs=1&to=" +
      encodeURIComponent(EMAIL) +
      "&su=" +
      encodeURIComponent(SUBJECT) +
      "&body=" +
      encodeURIComponent(BODY),
  },
};
