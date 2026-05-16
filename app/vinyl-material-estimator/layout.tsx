import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vinyl Material Estimator — Calculate vinyl rolls per panel",
  description:
    "Estimate vinyl needed for any wrap job. Per-panel calculations with waste-factor presets for gloss, satin, matte, chrome, and PPF. Free tool.",
  openGraph: {
    title: "Vinyl Material Estimator — WrapFlow.tools",
    description: "Calculate linear meters by panel. Pick your finish.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}