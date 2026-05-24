import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Layers, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "I keep getting wrinkles on bumpers. Here's how to stop it.",
  description: "Why vinyl wrinkles and fingers on curved bumpers, the heat-and-stretch technique that prevents it, and how relief cuts and enough material make it easy.",
  openGraph: {
    title: "Vinyl wrinkles on bumpers — how to fix it",
    description: "Why wraps wrinkle on curves and the technique that gives a clean finish every time.",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-emerald-400/20 blur-[120px]" />
        <div className="absolute top-[600px] right-[5%] h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <header className="sticky top-4 z-50 mx-4 lg:mx-8">
        <nav className="mx-auto flex max-w-3xl items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
          <Link href="/blog" className="group flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            All posts
          </Link>
          <Link href="/" className="text-sm text-zinc-400 transition hover:text-white">
            WrapFlow.tools
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <div className="mb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-emerald-300">
              Technique
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> May 24, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 6 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            I keep getting wrinkles <span className="bg-gradient-to-r from-emerald-200 via-cyan-300 to-emerald-200 bg-clip-text text-transparent">on bumpers.</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            Flat panels are easy. Then you hit a bumper — all compound curves and recesses — and the film fingers, wrinkles, and bunches up. This is the wall almost every new installer hits. The good news: it&apos;s a technique problem, and technique is learnable.
          </p>
        </div>

        <div className="mb-10 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 backdrop-blur-xl">
          <div className="mb-3 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-emerald-300" />
            <p className="text-xs font-medium uppercase tracking-wider text-emerald-300">Why wrinkles happen</p>
          </div>
          <p className="text-sm leading-relaxed text-zinc-300">
            A bumper is a compound curve — it bends in two directions at once. Flat film can&apos;t conform to that without either stretching (the right way) or folding over on itself (wrinkles). Every wrinkle is excess material that had nowhere to go.
          </p>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">The core principle: heat and stretch, don&apos;t push</h2>
          <p className="leading-relaxed">
            New installers try to squeegee wrinkles flat, pushing the excess film around. That never works on a compound curve — you&apos;re just moving the wrinkle somewhere else. The fix is to <strong className="text-white">lift, heat, and stretch</strong> the film so the excess is absorbed into the curve, then set it down smooth.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">The step-by-step method</h2>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Work from the center out.</strong> Anchor the middle of the panel first, then move toward edges.</li>
            <li className="list-disc"><strong className="text-white">When a wrinkle forms, lift the film back</strong> past the wrinkle rather than fighting it in place.</li>
            <li className="list-disc"><strong className="text-white">Apply heat</strong> until the film is warm and pliable (around its activation temp).</li>
            <li className="list-disc"><strong className="text-white">Stretch gently and evenly</strong> while laying it back down, letting the film conform to the curve.</li>
            <li className="list-disc"><strong className="text-white">Squeegee from the anchored area outward</strong>, chasing air and excess toward the edge.</li>
            <li className="list-disc"><strong className="text-white">Post-heat the finished area</strong> so it holds the new shape.</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">Use relief cuts on deep recesses</h2>
          <p className="leading-relaxed">
            Some bumper areas — around fog lights, tow hooks, sharp intakes — are too deep to stretch over cleanly. Trying to force it guarantees wrinkles. Instead, make a strategic <strong className="text-white">relief cut</strong>: a small, hidden cut that releases tension and lets the film lay flat, then overlap or seam it where it won&apos;t be seen.
          </p>
          <p className="leading-relaxed">
            Knowing where to cut is the difference between an amateur and a pro finish. Hide cuts in natural shadow lines, panel gaps, or recesses where the eye won&apos;t catch them.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Temperature matters more than effort</h2>
          <p className="leading-relaxed">
            Cold film fights you. Warm film cooperates. If you&apos;re struggling and sweating, the film is probably too cold. Most wrinkle battles are actually heat problems — the film isn&apos;t pliable enough to absorb the stretch, so it folds instead.
          </p>
          <p className="leading-relaxed">
            Keep the heat gun close and work the film to a consistent, even warmth. Don&apos;t scorch one spot — move steadily and keep the whole working area pliable.
          </p>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-emerald-400/40 via-emerald-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Layers className="h-5 w-5 text-emerald-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-emerald-300">Give yourself room to work</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Order enough film for the stretch</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Bumpers eat more material than flat panels because of stretch and relief cuts. Our free Vinyl Material Estimator factors in waste so you never end up stretching too little film across a complex curve.
              </p>
              <Link href="/vinyl-material-estimator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-emerald-300 to-emerald-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-emerald-200 hover:to-emerald-400">
                Open material estimator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Common mistakes that cause wrinkles</h2>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Squeegeeing too fast</strong> over a curve, trapping excess film ahead of the blade.</li>
            <li className="list-disc"><strong className="text-white">Not lifting enough</strong> when a wrinkle starts — trying to fix it in place.</li>
            <li className="list-disc"><strong className="text-white">Working cold</strong> — the most common and most fixable mistake.</li>
            <li className="list-disc"><strong className="text-white">Over-stretching</strong> to avoid a relief cut, which thins the film and causes tunneling later.</li>
            <li className="list-disc"><strong className="text-white">Starting at an edge</strong> instead of anchoring the center first.</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">Practice on a spare bumper</h2>
          <p className="leading-relaxed">
            Bumpers are the skill that separates beginners from pros, and the only way to get good is reps. Grab a junkyard bumper and a roll of cheap practice vinyl. Wrap it, peel it, wrap it again. An afternoon of deliberate practice does more than a month of learning on customer cars.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            Wrinkles aren&apos;t a talent problem — they&apos;re excess film with nowhere to go. Heat the film, stretch it into the curve instead of pushing it, use relief cuts on deep recesses, and never work cold. Master that and bumpers go from your worst nightmare to just another panel.
          </p>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to all posts
          </Link>
        </div>
      </article>
    </main>
  );
}