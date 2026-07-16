import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteConfig.metadataBase,
  title: {
    template: `%s | ${siteConfig.name}`,
    default: `${siteConfig.name} - ${siteConfig.role}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  alternates: {
    canonical: siteConfig.metadataBase.toString(),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.role}`,
    description: siteConfig.description,
    url: siteConfig.metadataBase.toString(),
    siteName: siteConfig.applicationName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aprizal Triansyah Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.role}`,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    url: siteConfig.metadataBase.toString(),
    image: `${siteConfig.metadataBase.toString()}${siteConfig.profileImage}`,
    email: `mailto:${siteConfig.email}`,
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.instagram,
      ...(siteConfig.social.github ? [siteConfig.social.github] : []),
      ...(siteConfig.social.behance ? [siteConfig.social.behance] : []),
    ].filter(Boolean) as string[],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.applicationName,
    url: siteConfig.metadataBase.toString(),
    description: siteConfig.description,
    author: personSchema,
  };

  const jsonLd = [personSchema, websiteSchema];

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
