import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator, PlayCircle, AlertTriangle, CheckCircle2, XCircle, Wrench, DollarSign, Timer } from "lucide-react";

export const metadata: Metadata = {
  title: "Can you wrap a car yourself? DIY vs professional (honest breakdown)",
  description:
    "DIY car wrap vs professional installation — real cost comparison, common mistakes, what's actually doable at home, and when to hire a shop. With video.",
  openGraph: {
    title: "Can you wrap a car yourself? DIY vs professional",
    description:
      "Real cost comparison, common DIY mistakes, and when to hire a pro. Honest breakdown with video.",
    type: "article",
    url: "https://wrapflow.site/blog/diy-vs-professional-wrap",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      {/* ── ambient blobs ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-amber-400/20 blur-[120px]" />
        <div className="absolute top-[600px] right-[5%] h-[450px] w-[450px] rounded-full bg-cyan-400/15 blur-[120px]" />
        <div className="absolute top-[1400px] left-[15%] h-[400px] w-[400px] rounded-full bg-violet-400/10 blur-[120px]" />
      </div>

      {/* ── nav ── */}
      <header className="sticky top-4 z-50 mx-4 lg:mx-8">
        <nav className="mx-auto flex max-w-3xl items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
          <Link href="/blog" className="group flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            All posts
          </Link>
          <span className="text-sm font-medium text-zinc-400">WrapFlow Blog</span>
        </nav>
      </header>

      {/* ── article ── */}
      <article className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        {/* ── header ── */}
        <div className="mb-12">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-amber-300">
              Guide
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> May 23, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 9 min read
            </span>
          </div>
          <h1 className="text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
            Can you wrap a car yourself?{" "}
            <span className="bg-gradient-to-r from-cyan-200 via-amber-200 to-cyan-200 bg-clip-text text-transparent">
              DIY vs professional — an honest breakdown
            </span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            YouTube makes DIY wrapping look easy. A roll of vinyl, a heat gun, a weekend — and your car looks brand new. But what the tutorials don&apos;t show is the $800 in wasted material, the blade cuts through your clear coat, and the edges lifting within a week. Here&apos;s the real story.
          </p>
        </div>

        {/* ── hero image ── */}
        <figure className="mb-12">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1619725002198-6a689b72f41d?w=1200&q=80"
              alt="Professional installer applying vinyl wrap to a car panel"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <figcaption className="mt-2 text-center text-xs text-zinc-500">
            A professional installer working vinyl around a complex curve — the kind of detail that separates a clean wrap from a peeling one.
          </figcaption>
        </figure>

        {/* ── content ── */}
        <div className="space-y-6 text-zinc-300">

          {/* ── video embed ── */}
          <div className="my-8">
            <div className="mb-3 flex items-center gap-2">
              <PlayCircle className="h-5 w-5 text-cyan-300" />
              <p className="text-sm font-medium text-white">Watch: first-time DIY car wrap attempt</p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/AsienSRwx9o"
                title="First time DIY car wrap"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="mt-2 text-center text-xs text-zinc-500">
              See what a first-time wrapper actually goes through. Credit: original creator on YouTube.
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">The real question everyone asks</h2>
          <p className="leading-relaxed">
            &ldquo;Can I save money by wrapping my own car?&rdquo; — thousands of people google this every month. The short answer: yes, you <em>can</em> wrap a car yourself. But should you? That depends on what you&apos;re wrapping, your expectations, and how much your time is worth.
          </p>
          <p className="leading-relaxed">
            Let&apos;s break it down honestly — no gatekeeping, no shop bias. Just the numbers, the risks, and where the line between &ldquo;totally doable&rdquo; and &ldquo;call a pro&rdquo; actually falls.
          </p>

          {/* ── cost comparison box ── */}
          <div className="my-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
            <div className="mb-5 flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-amber-300" />
              <h3 className="text-xl font-medium text-white">Cost comparison: DIY vs pro</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5">
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-cyan-300">DIY full wrap</p>
                <p className="text-2xl font-medium text-white">$500 – $1,500</p>
                <p className="mt-2 text-sm text-zinc-400">Vinyl roll + tools + cleaning supplies. Doesn&apos;t include wasted material from mistakes — which can add $200–$500 to your first attempt.</p>
              </div>
              <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-5">
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-amber-300">Professional install</p>
                <p className="text-2xl font-medium text-white">$2,500 – $5,000</p>
                <p className="mt-2 text-sm text-zinc-400">Includes material, labor, surface prep, panel disassembly, post-heat, and usually a 1–3 year installation warranty.</p>
              </div>
            </div>
            <div className="mt-4 rounded-lg border border-white/5 bg-white/[0.02] p-4">
              <p className="text-sm text-zinc-400">
                <span className="font-medium text-zinc-300">The hidden math:</span> Most first-time DIY wrappers spend $800–$2,000 total when you add wasted material, extra tools, and time. If the wrap fails and you bring it to a shop, add $400–$800 for removal before they can start fresh. Suddenly the &ldquo;savings&rdquo; disappear.
              </p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">What DIY wrapping actually involves</h2>
          <p className="leading-relaxed">
            It&apos;s not just &ldquo;stick vinyl on car.&rdquo; A full wrap is a multi-day process even for experienced installers. Here&apos;s what you&apos;re signing up for:
          </p>

          {/* ── tools image ── */}
          <figure className="my-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
                alt="Vinyl wrap tools including squeegee, heat gun, and cutting tools"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-zinc-500">
              A proper toolkit is non-negotiable — heat gun, multiple squeegees, knifeless tape, IR thermometer, and quality blades.
            </figcaption>
          </figure>

          {/* ── tools list ── */}
          <div className="my-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-2">
              <Wrench className="h-5 w-5 text-violet-300" />
              <h3 className="text-lg font-medium text-white">The minimum toolkit ($200–$500)</h3>
            </div>
            <div className="grid gap-3 text-sm sm:grid-cols-2">
              {[
                "Quality heat gun (not a hair dryer)",
                "Felt-edge squeegees (multiple types)",
                "Knifeless cutting tape",
                "Surface prep / isopropyl alcohol",
                "Infrared thermometer",
                "Precision cutting blades",
                "Microfiber towels",
                "Clean, dust-free garage space",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Where DIY actually works</h2>
          <p className="leading-relaxed">
            Not every wrap job needs a pro. There are projects where doing it yourself makes total sense — and where you&apos;ll actually get good results on your first try:
          </p>

          <div className="my-6 space-y-3">
            {[
              { label: "Hood or roof wrap", desc: "Large, flat panels with minimal curves. Perfect starter project." },
              { label: "Chrome delete", desc: "Trim pieces and window surrounds. Small, forgiving, and hugely satisfying." },
              { label: "Interior trim accents", desc: "Dashboard strips, center console. Low-risk practice with instant payoff." },
              { label: "Mirror caps", desc: "Compound curve practice on a small, cheap-to-redo part." },
              { label: "Racing stripes / accent lines", desc: "Simple geometry. Knifeless tape makes it nearly foolproof." },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-xl border border-emerald-400/10 bg-emerald-400/5 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                <div>
                  <p className="font-medium text-white">{item.label}</p>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Where DIY falls apart</h2>
          <p className="leading-relaxed">
            These are the jobs where first-timers consistently burn material, damage paint, or end up in a shop anyway:
          </p>

          <div className="my-6 space-y-3">
            {[
              { label: "Full vehicle color change", desc: "40–80 hours for a beginner. Every panel, every edge, every door jamb. One bad stretch and you're buying another roll." },
              { label: "Bumpers and fenders", desc: "Deep compound curves, recesses, and sensor cutouts. This is where pros earn their money." },
              { label: "Door handles and mirrors", desc: "Tiny, complex shapes with zero margin for error. Most DIY fails start here." },
              { label: "Chrome or specialty finishes", desc: "Chrome vinyl shows every imperfection. Satin metallics telegraph stretch marks. Unforgiving." },
              { label: "Leased or high-value vehicles", desc: "The risk of blade cuts through your clear coat just isn't worth it." },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-xl border border-red-400/10 bg-red-400/5 p-4">
                <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" />
                <div>
                  <p className="font-medium text-white">{item.label}</p>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── second image ── */}
          <figure className="my-10">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=80"
                alt="Close up of a professionally wrapped car with flawless finish"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-zinc-500">
              The difference between pro and DIY shows most in edge work, seams, and complex curves.
            </figcaption>
          </figure>

          {/* ── time comparison ── */}
          <div className="my-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
            <div className="mb-5 flex items-center gap-2">
              <Timer className="h-5 w-5 text-cyan-300" />
              <h3 className="text-xl font-medium text-white">Time investment: the real difference</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5">
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-cyan-300">DIY (first timer)</p>
                <p className="text-2xl font-medium text-white">40 – 80 hours</p>
                <p className="mt-2 text-sm text-zinc-400">Spread over several weekends. Plus setup, cleanup, re-dos, and trips to buy more vinyl when you run out or ruin a panel.</p>
              </div>
              <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-5">
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-amber-300">Professional shop</p>
                <p className="text-2xl font-medium text-white">2 – 5 days</p>
                <p className="mt-2 text-sm text-zinc-400">In a temperature-controlled bay with proper lighting. Drop off Monday, pick up Thursday. Warranty included.</p>
              </div>
            </div>
          </div>

          {/* ── common mistakes ── */}
          <h2 className="mt-12 text-2xl font-medium text-white">The 5 most expensive DIY mistakes</h2>
          <p className="leading-relaxed">
            These aren&apos;t theoretical — they&apos;re what shops see every week when someone brings in a failed DIY job:
          </p>

          <div className="my-6 space-y-4">
            {[
              {
                title: "Skipping surface prep",
                cost: "Costs you: adhesion failure within days",
                detail: "Even tiny dust particles, wax residue, or fingerprints create bubbles and lifting. Pros spend hours decontaminating before any vinyl touches paint."
              },
              {
                title: "Overstretching on curves",
                cost: "Costs you: premature failure + color distortion",
                detail: "Stretched vinyl thins out, changes color, and snaps back over time. That bumper wrap that looked fine on day one? It's lifting by week three."
              },
              {
                title: "Cutting into clear coat",
                cost: "Costs you: $500–$1,500 paint correction",
                detail: "One blade slip on a door edge and you've cut through clear coat into paint. Now you need body work before anyone can re-wrap it."
              },
              {
                title: "No post-heat",
                cost: "Costs you: edges lifting everywhere",
                detail: "Post-heating sets the vinyl's memory. Skip it and every edge, tuck, and relief cut will lift within weeks — guaranteed."
              },
              {
                title: "Cheap vinyl",
                cost: "Costs you: cracking and yellowing within a year",
                detail: "Bargain vinyl from unknown brands uses calendered film that shrinks, cracks, and fades. Premium cast vinyl from 3M or Avery Dennison exists for a reason."
              },
            ].map((item, i) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-2 flex items-start gap-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-amber-400/15 text-xs font-bold text-amber-300">{i + 1}</span>
                  <div>
                    <p className="font-medium text-white">{item.title}</p>
                    <p className="text-xs text-amber-300/80">{item.cost}</p>
                  </div>
                </div>
                <p className="ml-10 text-sm leading-relaxed text-zinc-400">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* ── warning box ── */}
          <div className="my-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-1 h-6 w-6 flex-shrink-0 text-amber-400" />
              <div>
                <p className="font-medium text-white">The &ldquo;DIY to pro rescue&rdquo; pipeline</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  The most common outcome shops report: a DIYer spends $800 on material, invests a full weekend, realizes bumpers and mirrors are beyond their skill, and brings the car in. Now the shop has to remove the failed wrap ($400–$800) before starting fresh. Total spent: more than just hiring a pro from the start.
                </p>
              </div>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">The honest verdict</h2>
          <p className="leading-relaxed">
            DIY wrapping is a real, learnable skill — not a scam and not impossible. But it&apos;s not the weekend shortcut YouTube makes it look like either. Here&apos;s the decision framework:
          </p>

          <div className="my-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <div className="space-y-4">
              <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-5">
                <p className="mb-2 font-medium text-emerald-300">Go DIY if…</p>
                <p className="text-sm leading-relaxed text-zinc-300">
                  You&apos;re wrapping flat panels or small accents. You have a clean garage, patience, and realistic expectations. You treat it as a skill to build, not a cost-cutting hack. Start with a hood, a roof, or a chrome delete — nail those first.
                </p>
              </div>
              <div className="rounded-xl border border-amber-400/15 bg-amber-400/5 p-5">
                <p className="mb-2 font-medium text-amber-300">Hire a pro if…</p>
                <p className="text-sm leading-relaxed text-zinc-300">
                  You want a full color change. You&apos;re wrapping a leased, financed, or high-value car. You want a warranty. You need it done in days, not weekends. Or you just want it to look flawless — which is the whole point.
                </p>
              </div>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Estimate your wrap costs before deciding</h2>
          <p className="leading-relaxed">
            Whether you go DIY or pro, you need to know what materials cost and how much vinyl your specific vehicle needs. That&apos;s exactly what these tools are for:
          </p>

          {/* ── CTA cards ── */}
          <div className="my-8 grid gap-4 sm:grid-cols-2">
            <Link
              href="/wrap-cost-calculator"
              className="group rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5 transition hover:border-amber-400/40 hover:bg-amber-400/10"
            >
              <div className="mb-2 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-amber-300" />
                <span className="text-sm font-medium text-amber-300">Wrap Cost Calculator</span>
              </div>
              <p className="text-sm text-zinc-400">Get an instant estimate for your vehicle — by size, finish, and coverage type. Compare DIY vs shop pricing.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-amber-300">
                Try it free <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/vinyl-material-estimator"
              className="group rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              <div className="mb-2 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-cyan-300" />
                <span className="text-sm font-medium text-cyan-300">Vinyl Material Estimator</span>
              </div>
              <p className="text-sm text-zinc-400">Calculate exactly how much vinyl film you need — with built-in waste factor so you don&apos;t run out mid-job.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-cyan-300">
                Try it free <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

          {/* ── bottom nav ── */}
          <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/blog" className="group flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              Back to all posts
            </Link>
            <Link
              href="/blog/how-a-car-gets-wrapped"
              className="group flex items-center gap-2 text-sm text-zinc-400 transition hover:text-amber-200"
            >
              Next: How a car gets wrapped
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
