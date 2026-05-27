import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "The real cost of wrapping a Tesla Model 3 (full breakdown)",
  description: "A hyper-detailed, line-by-line cost breakdown of wrapping a Tesla Model 3 — material, labor, complexity, and total — plus why this specific car wraps the way it does.",
  openGraph: {
    title: "The real cost of wrapping a Tesla Model 3",
    description: "Line-by-line breakdown of a Tesla Model 3 wrap: material, labor, complexity, total.",
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
        <div className="mb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-amber-300">
              Case Study
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> May 27, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 7 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            The real cost of wrapping a <span className="bg-gradient-to-r from-amber-200 via-cyan-300 to-amber-200 bg-clip-text text-transparent">Tesla Model 3</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            Forget vague ranges. This is a line-by-line breakdown of exactly what goes into wrapping a Tesla Model 3 — one of the most commonly wrapped cars on the road — and why it lands where it does on price.
          </p>
        </div>

        {/* HERO IMAGE */}
        <figure className="mb-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&q=80"
              alt="A Tesla Model 3"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <figcaption className="mt-2 text-center text-xs text-zinc-500">The Tesla Model 3 — clean lines, but a few wrap-specific quirks.</figcaption>
        </figure>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">Why the Model 3 specifically?</h2>
          <p className="leading-relaxed">
            It&apos;s one of the most-wrapped cars in the world. The factory color range is limited, owners are style-conscious, and the smooth, relatively simple body makes it a popular choice for color changes. That combination means almost every wrap shop has quoted one — so it&apos;s a perfect benchmark car.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">The full line-by-line breakdown</h2>
          <p className="leading-relaxed">
            Here&apos;s a realistic full gloss color-change wrap on a Model 3, using premium cast film, at a mid-market shop rate:
          </p>

          <div className="my-6 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 backdrop-blur-xl">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-2 text-zinc-400">Premium cast vinyl (~18m + 15% waste)</td>
                  <td className="py-2 text-right font-medium text-white">$830</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 text-zinc-400">Labor (~32 hrs @ $60/hr)</td>
                  <td className="py-2 text-right font-medium text-white">$1,920</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 text-zinc-400">Complexity (+20%, moderate)</td>
                  <td className="py-2 text-right font-medium text-white">$384</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 text-zinc-400">Disassembly &amp; reassembly</td>
                  <td className="py-2 text-right font-medium text-white">$350</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 text-zinc-400">Shop supplies &amp; overhead (+15%)</td>
                  <td className="py-2 text-right font-medium text-white">$508</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 text-zinc-400">Margin (30%)</td>
                  <td className="py-2 text-right font-medium text-white">$1,196</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium text-white">Total</td>
                  <td className="py-2 text-right text-lg font-medium text-amber-300">~$5,188</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">The Model 3&apos;s wrap-specific quirks</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Flush door handles</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">The Model 3&apos;s recessed handles need careful film work to wrap cleanly — a small but real time-add compared to traditional handles.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Large glass roof</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Less painted roof area than a typical sedan means slightly less film up top, but the surrounding pillars and trim still need precise edges.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Smooth, simple panels</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">The Model 3&apos;s clean body lines are forgiving — fewer sharp creases and add-ons than many performance cars, which keeps complexity moderate rather than high.</p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">How finish changes the total</h2>
          <div className="my-6 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 backdrop-blur-xl">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Gloss color change</td>
                  <td className="py-2 text-right font-medium text-white">~$5,200</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Satin / matte</td>
                  <td className="py-2 text-right font-medium text-white">~$5,600</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Color-shift</td>
                  <td className="py-2 text-right font-medium text-white">~$7,500</td>
                </tr>
                <tr>
                  <td className="py-2 text-zinc-400">Chrome</td>
                  <td className="py-2 text-right font-medium text-white">~$9,000+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Ways to lower the cost</h2>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Partial wrap:</strong> roof, mirrors, and accents for a two-tone look at a fraction of the price.</li>
            <li className="list-disc"><strong className="text-white">Skip premium finishes:</strong> gloss costs far less than chrome or color-shift.</li>
            <li className="list-disc"><strong className="text-white">Off-peak scheduling:</strong> some shops discount during slow weeks.</li>
            <li className="list-disc"><strong className="text-white">Don&apos;t cheap out on film:</strong> the one place NOT to save — calendered vinyl fails fast.</li>
          </ul>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-amber-400/40 via-amber-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-amber-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-amber-300">Different car?</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Build this breakdown for any vehicle</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Our free Wrap Cost Calculator runs this exact line-by-line math for any car, finish, and complexity — and exports a clean PDF quote.
              </p>
              <Link href="/wrap-cost-calculator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-amber-200 hover:to-amber-400">
                Open cost calculator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            A quality full gloss wrap on a Tesla Model 3 lands around <strong className="text-white">$5,000-$5,500</strong> at a mid-market shop, more for premium finishes. The car&apos;s clean body keeps complexity moderate, but flush handles and precise edge work still demand skilled labor. If a quote comes in dramatically lower, ask what film they&apos;re using — that&apos;s usually where the corner is being cut.
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