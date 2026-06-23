import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
export const metadata: Metadata = {
  title: {
    default: "APIS Healthcare | Pharma & Healthcare Training Institute",
    template: "%s | APIS Healthcare",
  },

  description:
    "APIS Healthcare offers industry-focused training in Pharmacovigilance, Clinical Research, Regulatory Affairs, Medical Coding, Clinical Data Management, SAS Programming and Pharma IT Services.",

  keywords: [
    "Pharmacovigilance Training",
    "Clinical Research Course",
    "Regulatory Affairs Training",
    "Medical Coding Training",
    "Clinical Data Management",
    "SAS Programming",
    "Pharma Training Institute",
    "Healthcare Courses",
    "APIS Healthcare",
    "Pharma IT Services",
  ],

  metadataBase: new URL("https://www.apishealthcare.co.in"),

  openGraph: {
    title: "APIS Healthcare",
    description:
      "Industry-focused Pharma & Healthcare training programs.",
    url: "https://www.apishealthcare.co.in",
    siteName: "APIS Healthcare",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "APIS Healthcare",
    description:
      "Professional Pharma & Healthcare Training Programs",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "APIS Healthcare",
    url: "https://www.apishealthcare.co.in",
    logo: "https://www.apishealthcare.co.in/logo.png",
  };

  return (
  <html lang="en">
    <body>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <Navbar />

      {children}

      <Footer />
      <WhatsAppButton />
     
    </body>
  </html>
);
}