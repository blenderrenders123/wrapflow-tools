import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wrapflow.site"),
  title: {
    default: "WrapFlow.tools — Free calculators for vehicle wrap installers",
    template: "%s | WrapFlow.tools",
  },
  description:
    "Free precision tools for the vehicle wrap industry. Cost calculator, wheel fitment, job timeline, and material estimator. No signup. No API. Runs entirely in your browser.",
  keywords: [
    "vehicle wrap calculator",
    "car wrap cost calculator",
    "wrap cost estimator",
    "wheel fitment calculator",
    "vinyl material calculator",
    "ppf calculator",
    "wrap installer tools",
    "free wrap calculator",
    "car wrap pricing",
    "vinyl wrap estimator",
  ],
  authors: [{ name: "WrapFlow" }],
  creator: "WrapFlow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wrapflow.site",
    siteName: "WrapFlow.tools",
    title: "WrapFlow.tools — Free calculators for vehicle wrap installers",
    description:
      "Quote wraps in seconds. Visualize fitment. Plan timelines. Estimate vinyl. Free tools that run in your browser — no signup, no API.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WrapFlow.tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WrapFlow.tools — Free calculators for vehicle wrap installers",
    description:
      "Free precision tools for the vehicle wrap industry. No signup. No API.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://wrapflow.site",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "WrapFlow.tools",
              url: "https://wrapflow.site",
              description:
                "Free precision tools for the vehicle wrap industry.",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Any (web-based)",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              creator: {
                "@type": "Organization",
                name: "WrapFlow",
                url: "https://wrapflow.site",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}