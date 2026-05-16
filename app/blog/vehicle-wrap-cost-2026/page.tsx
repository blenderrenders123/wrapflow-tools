import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "How much does a vehicle wrap cost in 2026? Full breakdown",
  description: "Complete guide to vehicle wrap pricing in 2026. Material costs, labor rates, complexity factors, and shop overhead — with real numbers and a free calculator.",
  openGraph: {
    title: "How much does a vehicle wrap cost in 2026?",
    description: "Complete pricing breakdown with real numbers. Material, labor, complexity, overhead.",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-amber-400/20 blur-[120px]" />
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
        {/* Header */}
        <div className="mb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-amber-300">
              Pricing
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> May 16, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 8 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            How much does a vehicle wrap cost in <span className="bg-gradient-to-r from-amber-200 via-cyan-300 to-violet-300 bg-clip-text text-transparent">2026?</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            A full vehicle wrap typically costs <strong className="text-white">$2,500 to $6,000</strong> in 2026 — but the range goes from $1,200 for a basic partial wrap to over $10,000 for premium materials on exotic vehicles. Here&apos;s exactly what drives that price.
          </p>
        </div>

        {/* Quick answer box */}
        <div className="mb-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 backdrop-blur-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-amber-300">Quick answer</p>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Partial wrap (hood, roof, mirrors)</td>
                <td className="py-2 text-right font-medium text-white">$800 – $2,500</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Full color change (gloss vinyl)</td>
                <td className="py-2 text-right font-medium text-white">$2,500 – $4,500</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Full wrap (satin or matte)</td>
                <td className="py-2 text-right font-medium text-white">$3,500 – $5,500</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Premium finish (chrome, color shift)</td>
                <td className="py-2 text-right font-medium text-white">$6,000 – $10,000+</td>
              </tr>
              <tr>
                <td className="py-2 text-zinc-400">Full PPF (paint protection film)</td>
                <td className="py-2 text-right font-medium text-white">$4,000 – $8,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Body content */}
        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">What drives the cost of a vehicle wrap?</h2>
          <p className="leading-relaxed">
            Vehicle wrap pricing comes down to four main factors. Most shops use these same inputs whether they realize it or not.
          </p>

          <div className="space-y-4">
            <Section number="1" title="Material cost ($1,000 – $3,000)" color="amber">
              <p>The vinyl itself is usually 30-40% of the total quote. A standard sedan needs <strong className="text-white">15-20 linear meters</strong> of 1.52m-wide cast vinyl. Premium brands like 3M 2080, Avery Dennison SW900, and KPMF run $30-50 per meter wholesale, plus 10-15% waste factor.</p>
              <p>Chrome and color-shift finishes can triple this cost because they waste up to 35% during install and the raw material is far more expensive per roll.</p>
            </Section>

            <Section number="2" title="Labor ($1,500 – $3,000)" color="cyan">
              <p>A full wrap takes <strong className="text-white">30-45 labor hours</strong> from start to finish — prep, install, reassembly. At shop rates of $50-80 per hour, that&apos;s $1,500-$3,600 in labor alone.</p>
              <p>Solo installers can stretch this to 5-7 days. A two-person team finishes in 2-3 days. Skipping prep is the fastest way to make a wrap fail within months.</p>
            </Section>

            <Section number="3" title="Complexity multiplier (+10-50%)" color="violet">
              <p>Not all vehicles are equal. Sports cars with deep curves, recessed handles, chrome trim, and tight body lines take longer. A Porsche 911 might take 50% more time than a Toyota Camry.</p>
              <p>Modifications also push complexity up: roof racks, body kits, aftermarket spoilers, and matte paint all add hours and require special handling.</p>
            </Section>

            <Section number="4" title="Shop overhead ($300 – $800)" color="emerald">
              <p>Often invisible to clients but very real for shops. This includes bay rent, climate control, lighting, insurance, tool maintenance, software subscriptions, and the dozen consumables every job burns through (knives, magnets, IPA, squeegees).</p>
              <p>Mature shops bake this into hourly rates. New shops sometimes forget and lose money on every job.</p>
            </Section>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Why prices vary so much by region</h2>
          <p className="leading-relaxed">
            The same wrap in Los Angeles can cost 60% more than in Cleveland. Three reasons:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Labor rates:</strong> Coastal cities run $80-100/hr. Midwest shops run $50-70/hr.</li>
            <li className="list-disc"><strong className="text-white">Demand density:</strong> Where wraps are common, shops have steady work and can charge premium. Where they&apos;re rare, shops compete harder on price.</li>
            <li className="list-disc"><strong className="text-white">Operating costs:</strong> A 2,000 sq ft bay in Manhattan vs Tulsa — same square footage, 5x the rent.</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">How to spot a fair quote</h2>
          <p className="leading-relaxed">
            If a shop quotes you a number, ask them to break it down by material and labor. A legitimate quote should show roughly:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">30-40%</strong> material</li>
            <li className="list-disc"><strong className="text-white">40-55%</strong> labor</li>
            <li className="list-disc"><strong className="text-white">10-20%</strong> overhead + margin</li>
          </ul>
          <p className="leading-relaxed">
            If a shop won&apos;t break it down, or the material portion is under 20%, ask why. Either they&apos;re using cheap cast film, or they&apos;re padding labor.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Hidden costs to watch for</h2>
          <div className="space-y-3">
            <p className="leading-relaxed"><strong className="text-white">Disassembly fees:</strong> Removing badges, door handles, mirrors — some shops charge $150-400 extra for this.</p>
            <p className="leading-relaxed"><strong className="text-white">Pre-wrap correction:</strong> If your paint has swirl marks or oxidation, expect $200-500 for clay bar + machine polish before wrap goes on.</p>
            <p className="leading-relaxed"><strong className="text-white">Removal fees later:</strong> Wraps over 5 years old or installed over chipped paint can cost $500-1,500 to remove cleanly.</p>
            <p className="leading-relaxed"><strong className="text-white">Mid-job add-ons:</strong> Add door jambs ($200), interior trim ($300+), under-hood ($400+) — these aren&apos;t in base quotes.</p>
          </div>

          {/* CTA to calculator */}
          <div className="my-12 rounded-2xl bg-gradient-to-br from-amber-400/40 via-amber-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-amber-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-amber-300">Free tool</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Calculate your wrap cost in 60 seconds</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Plug in your vehicle, finish, labor rate, and complexity — get an instant quote with PDF export. Free, no signup.
              </p>
              <Link href="/wrap-cost-calculator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-amber-200 hover:to-amber-400">
                Open calculator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Vehicle wrap vs respraying: which is cheaper?</h2>
          <p className="leading-relaxed">
            A quality paint job costs <strong className="text-white">$3,500-$8,000</strong> at a body shop. So at first glance, wraps and paint are similar. The difference is reversibility and protection — wraps come off cleanly, paint doesn&apos;t. Wraps also protect the factory paint underneath, which preserves resale value.
          </p>
          <p className="leading-relaxed">
            For one-time aesthetic changes, paint wins on longevity. For protection, custom looks, fleet branding, or any plan to revert later, wraps win on every other metric.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">How long does a wrap last?</h2>
          <p className="leading-relaxed">
            Premium cast vinyl from 3M, Avery, or KPMF lasts <strong className="text-white">5-7 years</strong> outdoors, longer if garaged. Calendered (cheap) vinyl lasts 2-3 years. PPF lasts 10+ years with self-healing properties.
          </p>
          <p className="leading-relaxed">
            Lifespan depends heavily on climate: UV intensity, temperature swings, and salt exposure all shorten it. Garage-kept vehicles in mild climates can keep wraps looking new for 8+ years.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            For most owners, budget <strong className="text-white">$3,000-$5,000</strong> for a quality full color change on a standard sedan. Add 30-50% for premium finishes or complex vehicles. The cheapest quote isn&apos;t always the best deal — material grade and prep quality matter more than upfront cost.
          </p>
          <p className="leading-relaxed">
            And if you&apos;re a shop owner reading this, our <Link href="/wrap-cost-calculator" className="text-amber-300 underline-offset-4 hover:underline">free wrap cost calculator</Link> lets you generate accurate quotes with PDF export — no signup, runs in your browser.
          </p>
        </div>

        {/* Back to blog */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to all posts
          </Link>
        </div>
      </article>
    </main>
  );
}

function Section({ number, title, color, children }: { number: string; title: string; color: "amber" | "cyan" | "violet" | "emerald"; children: React.ReactNode }) {
  const colors = {
    amber: "from-amber-400 to-amber-600",
    cyan: "from-cyan-400 to-cyan-600",
    violet: "from-violet-400 to-violet-600",
    emerald: "from-emerald-400 to-emerald-600",
  };
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
      <div className="mb-2 flex items-center gap-3">
        <div className={"flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br text-xs font-bold text-zinc-900 " + colors[color]}>
          {number}
        </div>
        <h3 className="text-base font-medium text-white">{title}</h3>
      </div>
      <div className="space-y-2 pl-10 text-sm leading-relaxed text-zinc-400">
        {children}
      </div>
    </div>
  );
}