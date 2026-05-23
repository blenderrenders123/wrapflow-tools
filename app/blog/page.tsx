import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Insights for wrap installers",
  description: "Articles, guides, and industry insights for vehicle wrap professionals.",
};

const posts = [
  {
    slug: "diy-vs-professional-wrap",
    title: "Can you wrap a car yourself? DIY vs professional",
    excerpt: "Real cost comparison, common DIY mistakes, what's actually doable at home, and when to hire a shop. Honest breakdown with video.",
    date: "May 23, 2026",
    readTime: "9 min read",
    category: "Guide",
    categoryColor: "text-violet-300 border-violet-400/30 bg-violet-400/10",
  },
  {
    slug: "how-a-car-gets-wrapped",
    title: "How a car gets wrapped: the full process explained",
    excerpt: "Every step of a professional vehicle wrap — from surface prep and panel disassembly to squeegee technique, post-heating, and final trim.",
    date: "May 23, 2026",
    readTime: "8 min read",
    category: "Guide",
    categoryColor: "text-violet-300 border-violet-400/30 bg-violet-400/10",
  },
  {
    slug: "spacers-vs-new-wheels",
    title: "Spacers vs new wheels: which do you need?",
    excerpt: "When wheel spacers fix your fitment problem and when you need different wheels entirely. Costs, safety, and how to check before buying.",
    date: "May 22, 2026",
    readTime: "7 min read",
    category: "Fitment",
    categoryColor: "text-cyan-300 border-cyan-400/30 bg-cyan-400/10",
  },
  {
    slug: "ppf-vs-vinyl-pricing",
    title: "PPF vs vinyl: how to price each one",
    excerpt: "Why PPF costs 2-3x more than vinyl, how to quote each job profitably, and what to tell clients deciding between protection and style.",
    date: "May 22, 2026",
    readTime: "7 min read",
    category: "Pricing",
    categoryColor: "text-amber-300 border-amber-400/30 bg-amber-400/10",
  },
  {
    slug: "client-says-quote-too-high",
    title: "\"Your quote is too high.\" How to respond.",
    excerpt: "Why clients push back on wrap pricing and how to defend a fair quote with a transparent breakdown instead of caving on price.",
    date: "May 21, 2026",
    readTime: "6 min read",
    category: "Business",
    categoryColor: "text-amber-300 border-amber-400/30 bg-amber-400/10",
  },
  {
    slug: "wrap-bubbling-lifting",
    title: "My wrap is bubbling and lifting after a week.",
    excerpt: "The four real causes of early wrap failure — bad prep, no post-heat, trapped moisture, over-stretching — and how to prevent each one.",
    date: "May 21, 2026",
    readTime: "7 min read",
    category: "Troubleshooting",
    categoryColor: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
  },
  {
    slug: "missed-install-deadline",
    title: "I promised a wrap in 2 days. It took 5.",
    excerpt: "Why wrap jobs blow past schedule, the phases people forget to plan, and how to build a timeline that actually holds.",
    date: "May 20, 2026",
    readTime: "6 min read",
    category: "Workflow",
    categoryColor: "text-violet-300 border-violet-400/30 bg-violet-400/10",
  },
  {
    slug: "ran-out-of-vinyl-mid-job",
    title: "I ran out of vinyl mid-wrap.",
    excerpt: "Why installers underbuy film, the batch-number trap, and how to calculate exactly how much vinyl to order with waste factor.",
    date: "May 20, 2026",
    readTime: "6 min read",
    category: "Materials",
    categoryColor: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
  },
  {
    slug: "quoted-too-low-lost-money",
    title: "I quoted a wrap too low and lost $2,000. Here's the fix.",
    excerpt: "Why new wrap shops underquote jobs and the exact 5-factor formula that prevents it. Plus how to recover when you've already lost.",
    date: "May 19, 2026",
    readTime: "6 min read",
    category: "Business",
    categoryColor: "text-amber-300 border-amber-400/30 bg-amber-400/10",
  },
  {
    slug: "wheels-rub-after-install",
    title: "My wheels rub after install. Here's why.",
    excerpt: "Diagnose where it's rubbing, what caused it, and how to fix each scenario. Plus how to prevent it before buying wheels.",
    date: "May 19, 2026",
    readTime: "6 min read",
    category: "Troubleshooting",
    categoryColor: "text-cyan-300 border-cyan-400/30 bg-cyan-400/10",
  },
  {
    slug: "how-long-does-a-wrap-last",
    title: "How long does a vehicle wrap actually last?",
    excerpt: "Real lifespan numbers by vinyl type, finish, and climate. Plus warning signs your wrap is failing and when to repair vs replace.",
    date: "May 18, 2026",
    readTime: "7 min read",
    category: "Materials",
    categoryColor: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
  },
  {
    slug: "vehicle-wrap-vs-paint",
    title: "Vehicle wrap vs paint: which one wins?",
    excerpt: "Full comparison of cost, longevity, reversibility, and use cases. Plus when each option actually makes sense.",
    date: "May 17, 2026",
    readTime: "9 min read",
    category: "Comparison",
    categoryColor: "text-cyan-300 border-cyan-400/30 bg-cyan-400/10",
  },
  {
    slug: "vehicle-wrap-cost-2026",
    title: "How much does a vehicle wrap cost in 2026?",
    excerpt: "A complete breakdown of vehicle wrap pricing — what drives cost, what shops charge, and how to estimate any job.",
    date: "May 16, 2026",
    readTime: "8 min read",
    category: "Pricing",
    categoryColor: "text-amber-300 border-amber-400/30 bg-amber-400/10",
  },
];

export default function BlogIndex() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-amber-400/20 blur-[120px]" />
        <div className="absolute top-[400px] right-[5%] h-[450px] w-[450px] rounded-full bg-cyan-400/15 blur-[120px]" />
      </div>

      <header className="sticky top-4 z-50 mx-4 lg:mx-8">
        <nav className="mx-auto flex max-w-4xl items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
          <Link href="/" className="group flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to home
          </Link>
          <span className="text-sm font-medium">Blog</span>
        </nav>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <div className="mb-12 text-center">
          <p className="bg-gradient-to-r from-amber-400 via-cyan-400 to-violet-400 bg-clip-text text-xs font-medium uppercase tracking-[0.25em] text-transparent">Resources</p>
          <h1 className="mt-2 text-4xl font-medium tracking-tight text-white sm:text-5xl">Insights for installers</h1>
          <p className="mx-auto mt-4 max-w-lg text-sm text-zinc-400 sm:text-base">
            Pricing guides, industry breakdowns, and tools to run a better wrap shop.
          </p>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.05]">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className={"rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider " + post.categoryColor}>
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-zinc-500">
                  <Calendar className="h-3 w-3" /> {post.date}
                </span>
                <span className="flex items-center gap-1 text-xs text-zinc-500">
                  <Clock className="h-3 w-3" /> {post.readTime}
                </span>
              </div>
              <h2 className="text-xl font-medium text-white transition group-hover:text-amber-200 sm:text-2xl">{post.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{post.excerpt}</p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-amber-300">
                Read article <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}