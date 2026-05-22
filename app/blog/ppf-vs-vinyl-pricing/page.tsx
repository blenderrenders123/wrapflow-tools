import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "PPF vs vinyl wrap pricing: how to quote each one right.",
  description: "Why PPF costs 2-3x more than vinyl wrap, how to price each job correctly, and what to tell clients deciding between protection and style.",
  openGraph: {
    title: "PPF vs vinyl wrap: how to price each one",
    description: "Why PPF costs more than vinyl and how to quote both jobs profitably.",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-amber-400/20 blur-[120px]" />
        <div className="absolute top-[600px] right-[5%] h-[450px] w-[450px] rounded-full bg-emerald-400/10 blur-[120px]" />
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
            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-amber-300">
              Pricing
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> May 22, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 7 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            PPF vs vinyl: <span className="bg-gradient-to-r from-amber-200 via-emerald-300 to-amber-200 bg-clip-text text-transparent">how to price each one</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            A client asks &quot;what&apos;s the difference between PPF and a wrap, and why is one so much more expensive?&quot; If you can&apos;t answer clearly and quote both confidently, you lose the job. Here&apos;s how to price each correctly.
          </p>
        </div>

        <div className="mb-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 backdrop-blur-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-amber-300">Side by side</p>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-zinc-500">
                <th className="py-2 text-left text-xs uppercase tracking-wider font-medium"></th>
                <th className="py-2 text-right text-xs uppercase tracking-wider font-medium">Vinyl</th>
                <th className="py-2 text-right text-xs uppercase tracking-wider font-medium">PPF</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Material cost / meter</td>
                <td className="py-2 text-right font-medium text-white">$30 – $50</td>
                <td className="py-2 text-right font-medium text-white">$80 – $150</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Full vehicle cost</td>
                <td className="py-2 text-right font-medium text-white">$2.5k – $6k</td>
                <td className="py-2 text-right font-medium text-white">$5k – $9k</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Install difficulty</td>
                <td className="py-2 text-right font-medium text-white">Moderate</td>
                <td className="py-2 text-right font-medium text-white">High</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Lifespan</td>
                <td className="py-2 text-right font-medium text-white">5 – 7 yrs</td>
                <td className="py-2 text-right font-medium text-white">10+ yrs</td>
              </tr>
              <tr>
                <td className="py-2 text-zinc-400">Primary purpose</td>
                <td className="py-2 text-right font-medium text-white">Looks</td>
                <td className="py-2 text-right font-medium text-white">Protection</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">Why PPF costs 2-3x more</h2>
          <p className="leading-relaxed">
            Clients assume film is film. It isn&apos;t. PPF (paint protection film) costs dramatically more than vinyl for three concrete reasons:
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">1. Material is far more expensive</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                PPF is a thick, self-healing urethane film engineered to absorb rock chips. It costs 2-4x per meter what vinyl does, and you use more of it because of higher waste.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">2. Install is much harder</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                PPF is thicker and stiffer than vinyl, installed wet with slip and tack solutions, and demands precise pattern work. It takes more hours and more skill, so labor is higher.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">3. Higher waste factor</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Whether you bulk-cut or use a plotter with pre-made patterns, PPF wastes 25-35% versus 10-15% for gloss vinyl. That waste is expensive at PPF material prices.
              </p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">How to price a vinyl wrap</h2>
          <p className="leading-relaxed">
            Standard wrap pricing formula: material (with 10-20% waste) + labor + complexity + overhead + margin. A full gloss color change on a sedan lands around $2,500-$4,500 depending on your market.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">How to price PPF</h2>
          <p className="leading-relaxed">
            Same formula, different inputs. PPF is usually quoted by coverage package rather than full-vehicle-only:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Partial front (bumper, hood edge, mirrors):</strong> $800-1,500</li>
            <li className="list-disc"><strong className="text-white">Full front (full hood, fenders, bumper, mirrors):</strong> $1,500-3,000</li>
            <li className="list-disc"><strong className="text-white">Track package (front + rockers + A-pillars):</strong> $3,000-4,500</li>
            <li className="list-disc"><strong className="text-white">Full vehicle PPF:</strong> $5,000-9,000+</li>
          </ul>
          <p className="leading-relaxed">
            Use higher waste (25-35%), higher material cost per meter, and more labor hours than an equivalent vinyl job. Don&apos;t reuse your vinyl numbers — you&apos;ll badly underquote.
          </p>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-amber-400/40 via-amber-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-amber-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-amber-300">Quote both accurately</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Price vinyl and PPF jobs in seconds</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Our free Wrap Cost Calculator includes a PPF finish option with its own waste factor, so you can quote protection jobs as confidently as color changes — and hand the client a clean PDF either way.
              </p>
              <Link href="/wrap-cost-calculator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-amber-200 hover:to-amber-400">
                Open the calculator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">What to tell the deciding client</h2>
          <p className="leading-relaxed">
            When a client can&apos;t choose, frame it by their actual goal, not the price:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">&quot;I want a new color or look&quot;</strong> → vinyl wrap. PPF is mostly clear; it&apos;s not a styling product.</li>
            <li className="list-disc"><strong className="text-white">&quot;I want to protect my expensive paint&quot;</strong> → PPF, at least on the front impact zones.</li>
            <li className="list-disc"><strong className="text-white">&quot;I want both&quot;</strong> → PPF on high-impact areas, vinyl everywhere else, or color PPF (premium hybrid).</li>
            <li className="list-disc"><strong className="text-white">&quot;I&apos;m on a budget&quot;</strong> → vinyl for looks, or partial-front PPF for the protection that matters most.</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">The upsell that isn&apos;t sleazy</h2>
          <p className="leading-relaxed">
            A genuinely useful combo to offer: vinyl color change for the look, plus clear PPF over the front bumper and hood for chip protection. The client gets the style they want and protects the most vulnerable panels. It&apos;s an honest recommendation that also raises your ticket.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            PPF and vinyl are different products solving different problems, and they must be priced differently. Vinyl is for looks at a moderate price; PPF is for protection at a premium. Reuse your vinyl math on a PPF job and you&apos;ll lose money on every quote.
          </p>
          <p className="leading-relaxed">
            Price each correctly, explain the difference in plain language, and let the client choose based on their goal. Educated clients spend more and complain less.
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