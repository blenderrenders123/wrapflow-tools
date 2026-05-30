import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vinyl Waste & ROI Calculator | Free Tool | WrapFlow",
  description:
    "See exactly how much money your wrap shop loses to vinyl scrap each year, and calculate the payback period on new equipment like plotters and laminators. Free, no signup.",
  keywords: [
    "vinyl waste calculator",
    "wrap shop ROI",
    "plotter ROI calculator",
    "vinyl scrap cost",
    "wrap equipment payback",
    "vinyl material waste",
    "wrap shop profitability",
    "vinyl cost per square yard",
  ],
  openGraph: {
    title: "Vinyl Waste & ROI Calculator | Free Tool",
    description:
      "Calculate how much you lose to vinyl scrap and how fast new equipment pays for itself. Free for wrap shops.",
    url: "https://wrapflow.site/vinyl-waste-roi-calculator",
    siteName: "WrapFlow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinyl Waste & ROI Calculator",
    description:
      "How much is vinyl scrap costing your wrap shop? And when does new equipment pay for itself? Find out free.",
  },
  alternates: {
    canonical: "https://wrapflow.site/vinyl-waste-roi-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
