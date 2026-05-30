import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wrap Care Schedule Generator | Free Tool | WrapFlow",
  description:
    "Generate a personalized maintenance schedule for your vehicle wrap or PPF. Get wash, inspection, and decontamination dates based on your climate and usage. Export to PDF or calendar.",
  keywords: [
    "wrap care schedule",
    "vinyl wrap maintenance",
    "PPF care schedule",
    "wrap wash schedule",
    "car wrap maintenance calendar",
    "vehicle wrap care",
    "PPF maintenance",
    "wrap care calculator",
  ],
  openGraph: {
    title: "Wrap Care Schedule Generator | Free Tool",
    description:
      "Personalized wash, inspection, and decon schedule for your vehicle wrap or PPF. Free, no signup.",
    url: "https://wrapflow.site/wrap-care-schedule-generator",
    siteName: "WrapFlow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wrap Care Schedule Generator",
    description:
      "Personalized wrap & PPF maintenance schedule. PDF + calendar export. Free.",
  },
  alternates: {
    canonical: "https://wrapflow.site/wrap-care-schedule-generator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
