import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wrap Lifespan Predictor — How long will your wrap last?",
  description: "Predict how many years your vehicle wrap will last based on finish, climate, garage status, and care level. Free tool for owners and shops.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}