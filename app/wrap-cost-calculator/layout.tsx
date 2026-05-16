import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wrap Cost Calculator — Quote any wrap in 60 seconds",
  description:
    "Free vehicle wrap cost calculator. Factor in material, labor rate, complexity, and margin. Export client-ready PDF quotes instantly. No signup required.",
  openGraph: {
    title: "Wrap Cost Calculator — WrapFlow.tools",
    description: "Quote any wrap in 60 seconds. Free PDF export included.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}