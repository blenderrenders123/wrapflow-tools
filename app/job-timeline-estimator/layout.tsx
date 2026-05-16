import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Timeline Estimator — Plan wrap installs hour by hour",
  description:
    "Plan every step of a vehicle wrap or PPF install. Customize tasks, add technicians, get accurate hour and work-day estimates. Free planner.",
  openGraph: {
    title: "Job Timeline Estimator — WrapFlow.tools",
    description: "Know exactly how long a wrap takes before the car arrives.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}