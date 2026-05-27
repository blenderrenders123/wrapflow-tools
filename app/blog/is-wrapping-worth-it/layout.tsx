import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is wrapping worth it vs paint? (interactive calculator)",
  description: "Use our interactive calculator to compare vehicle wrap vs paint based on your car's value, how long you'll keep it, and finish. See which actually saves money.",
  openGraph: {
    title: "Is wrapping worth it vs paint?",
    description: "Interactive wrap-vs-paint calculator factoring in cost and resale value.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}