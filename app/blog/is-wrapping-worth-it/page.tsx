"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator } from "lucide-react";

export default function BlogPost() {
  const [vehicleValue, setVehicleValue] = useState(35000);
  const [yearsKeeping, setYearsKeeping] = useState(5);
  const [finish, setFinish] = useState<"gloss" | "satin" | "premium">("gloss");

  // Rough cost models
  const wrapCost = finish === "premium" ? 6500 : finish === "satin" ? 4000 : 3200;
  const paintCost = 5500;

  // Wrap protects paint → resale benefit; paint job hurts resale slightly
  const wrapResaleBenefit = Math.round(vehicleValue * 0.08);
  const paintResalePenalty = Math.round(vehicleValue * 0.12);

  const wrapNet = wrapCost - wrapResaleBenefit;
  const paintNet = paintCost + paintResalePenalty;

  const wrapWins = wrapNet < paintNet;
  const diff = Math.abs(wrapNet - paintNet);

  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[120px]" />
        <div className="absolute top-[600px] right-[5%] h-[450px] w-[450px] rounded-full bg-amber-400/10 blur-[120px]" />
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
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-cyan-300">
              Interactive
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> May 27, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 6 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Is wrapping worth it <span className="bg-gradient-to-r from-cyan-200 via-amber-200 to-cyan-200 bg-clip-text text-transparent">vs paint?</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            The honest answer depends on your car&apos;s value, how long you&apos;ll keep it, and the finish you want. Instead of guessing, use the calculator below — adjust the sliders and see which option actually makes more financial sense for your situation.
          </p>
        </div>

        {/* LIVE MINI CALCULATOR */}
        <div className="mb-12 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6 backdrop-blur-xl sm:p-8">
          <div className="mb-6 flex items-center gap-2">
            <Calculator className="h-5 w-5 text-cyan-300" />
            <p className="text-xs font-medium uppercase tracking-wider text-cyan-300">Try it — wrap vs paint calculator</p>
          </div>

          {/* Vehicle value */}
          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm text-zinc-300">Vehicle value</label>
              <span className="text-sm font-medium text-white">${vehicleValue.toLocaleString()}</span>
            </div>
            <input
              type="range" min={10000} max={150000} step={1000}
              value={vehicleValue}
              onChange={(e) => setVehicleValue(Number(e.target.value))}
              className="w-full accent-cyan-400"
            />
          </div>

          {/* Years keeping */}
          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm text-zinc-300">Years you&apos;ll keep the car</label>
              <span className="text-sm font-medium text-white">{yearsKeeping} years</span>
            </div>
            <input
              type="range" min={1} max={15} step={1}
              value={yearsKeeping}
              onChange={(e) => setYearsKeeping(Number(e.target.value))}
              className="w-full accent-cyan-400"
            />
          </div>

          {/* Finish */}
          <div className="mb-6">
            <label className="mb-2 block text-sm text-zinc-300">Wrap finish</label>
            <div className="grid grid-cols-3 gap-2">
              {([["gloss", "Gloss"], ["satin", "Satin"], ["premium", "Premium"]] as const).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setFinish(key)}
                  className={
                    "rounded-lg border px-3 py-2 text-sm transition " +
                    (finish === key
                      ? "border-cyan-400/50 bg-cyan-400/10 text-white"
                      : "border-white/10 bg-white/[0.02] text-zinc-400 hover:text-white")
                  }
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 gap-3">
            <div className={"rounded-xl border p-4 " + (wrapWins ? "border-cyan-400/40 bg-cyan-400/10" : "border-white/10 bg-white/[0.02]")}>
              <p className="text-xs uppercase tracking-wider text-zinc-400">Wrap</p>
              <p className="mt-1 text-2xl font-medium text-white">${wrapCost.toLocaleString()}</p>
              <p className="mt-1 text-[11px] text-zinc-500">~${wrapResaleBenefit.toLocaleString()} resale benefit (paint protected)</p>
            </div>
            <div className={"rounded-xl border p-4 " + (!wrapWins ? "border-amber-400/40 bg-amber-400/10" : "border-white/10 bg-white/[0.02]")}>
              <p className="text-xs uppercase tracking-wider text-zinc-400">Paint</p>
              <p className="mt-1 text-2xl font-medium text-white">${paintCost.toLocaleString()}</p>
              <p className="mt-1 text-[11px] text-zinc-500">~${paintResalePenalty.toLocaleString()} resale penalty (aftermarket paint)</p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-white/10 bg-[#0a0a12]/60 p-4 text-center">
            <p className="text-sm text-zinc-400">
              For a <span className="text-white">${vehicleValue.toLocaleString()}</span> car kept <span className="text-white">{yearsKeeping} years</span>:
            </p>
            <p className="mt-1 text-lg font-medium text-white">
              {wrapWins ? "Wrapping" : "Painting"} likely makes more sense
              <span className="text-zinc-400"> — by roughly ${diff.toLocaleString()}</span>
            </p>
          </div>

          <p className="mt-4 text-center text-[10px] uppercase tracking-wider text-zinc-600">
            Rough estimate for illustration — not a formal quote
          </p>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">How the math actually works</h2>
          <p className="leading-relaxed">
            Most wrap-vs-paint comparisons only look at upfront cost. That misses the biggest financial factor: <strong className="text-white">resale value.</strong> A wrap protects your factory paint and peels off cleanly, so the car sells as a clean, original-paint vehicle. An aftermarket paint job — however nice — usually lowers resale because buyers are wary of repaints.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">When wrapping wins</h2>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc">You might sell or trade within 5-7 years</li>
            <li className="list-disc">The car has good factory paint worth protecting</li>
            <li className="list-disc">You want a finish paint can&apos;t do (matte, satin, color-shift)</li>
            <li className="list-disc">It&apos;s a lease or financed vehicle</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">When paint wins</h2>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc">You&apos;ll keep the car 10+ years</li>
            <li className="list-disc">The existing paint is already damaged</li>
            <li className="list-disc">You want a traditional solid color with deep gloss</li>
            <li className="list-disc">It&apos;s a restoration where originality doesn&apos;t apply</li>
          </ul>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-cyan-400/40 via-cyan-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-cyan-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-cyan-300">Get a real quote</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Price your exact wrap</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                The calculator above is a rough model. For a real itemized estimate by vehicle, finish, and complexity, use our full Wrap Cost Calculator and download a PDF quote.
              </p>
              <Link href="/wrap-cost-calculator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-cyan-300 to-cyan-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-cyan-200 hover:to-cyan-400">
                Open cost calculator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            For most people keeping a decent car under 7 years, wrapping comes out ahead once resale is factored in — plus you get reversibility and protection. For long-term keepers and damaged paint, a quality respray still wins. Run your own numbers above; the right answer is the one that fits your situation, not a generic rule.
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