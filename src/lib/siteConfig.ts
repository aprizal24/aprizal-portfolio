const EMAIL = "aprizaltriansyah24@gmail.com";
const SUBJECT = "Let's Work Together";
const BODY =
  "Hi Aprizal,\n\nI found your portfolio and would like to discuss a project or opportunity with you.\n\nLooking forward to hearing from you.";

export const siteConfig = {
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
