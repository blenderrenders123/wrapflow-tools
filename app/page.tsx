import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "WrapFlow.Tools — Precision Tools for Vehicle Wrap Professionals",
  description: "Free calculators and visualizers for vehicle wrap installers.",
};

export default function Page() {
  return <HomePageClient />;
}