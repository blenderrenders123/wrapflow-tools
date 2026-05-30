import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPF Coverage Visualizer — See which areas to protect",
  description: "Visualize which areas of your vehicle to protect with paint protection film. Toggle zones, see package tiers, and decide what's worth protecting.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}