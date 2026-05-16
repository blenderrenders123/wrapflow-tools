import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wheel Fitment Calculator — Check offset & poke before you buy",
  description:
    "Visualize wheel offset, backspacing, and poke with a live diagram. Confirm fender clearance before ordering. Free tool from WrapFlow.tools.",
  openGraph: {
    title: "Wheel Fitment Calculator — WrapFlow.tools",
    description: "Check offset and poke with a live visual diagram.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}