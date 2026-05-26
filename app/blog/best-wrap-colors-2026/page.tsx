import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator, PlayCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Best car wrap colors in 2026: top trends, finishes & resale impact",
  description: "The most popular vehicle wrap colors and finishes for 2026 — satin, color-shift, tactical earth tones, nardo gray — with photos, video, and what each costs.",
  openGraph: {
    title: "Best car wrap colors in 2026",
    description: "Top wrap color trends and finishes for 2026 with photos, video, and pricing.",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-violet-400/20 blur-[120px]" />
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
            <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-violet-300">
              Trends
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> May 26, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 8 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Best car wrap colors in <span className="bg-gradient-to-r from-violet-200 via-amber-200 to-violet-200 bg-clip-text text-transparent">2026</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            2026 is the year satin overtook matte, earth tones went mainstream, and color-shift films stopped being a novelty. Here are the finishes turning heads this year — with what each one costs and how it affects resale.
          </p>
        </div>

        {/* HERO IMAGE */}
        <figure className="mb-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
              alt="A modern sports car with a premium finish"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <figcaption className="mt-2 text-center text-xs text-zinc-500">Finish choice defines a car&apos;s entire personality.</figcaption>
        </figure>

        {/* KEY TAKEAWAYS */}
        <div className="mb-10 rounded-2xl border border-violet-400/20 bg-violet-400/5 p-6 backdrop-blur-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-violet-300">Key takeaways</p>
          <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
            <li>• Satin has overtaken matte as the most requested finish</li>
            <li>• Tactical earth tones (army green, desert tan) are dominating trucks &amp; SUVs</li>
            <li>• Neutral tones hold resale value better than bold colors</li>
            <li>• Color-shift and chrome cost the most but turn the most heads</li>
          </ul>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">1. Satin finishes (the new default)</h2>
          <p className="leading-relaxed">
            Satin has officially overtaken matte as the most-requested finish category. It sits between gloss and matte — a soft, low-gloss sheen that looks like liquid metal in the right light. Satin gray, satin black, and satin bronze are the top sellers, and satin hides minor surface imperfections better than high-gloss.
          </p>
          <figure className="my-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=80"
                alt="A car with a satin finish"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-zinc-500">Satin black — refined, modern, and surprisingly practical.</figcaption>
          </figure>

          <h2 className="mt-12 text-2xl font-medium text-white">2. Tactical earth tones</h2>
          <p className="leading-relaxed">
            Military-inspired colors keep climbing. Army green (olive drab), desert tan, khaki, and sand bring a rugged, capable aesthetic that pairs perfectly with bronze wheels and roof racks. These look best on trucks, Jeeps, and SUVs — a Bronco or Rivian in tactical green is a genuine power move.
          </p>

          {/* VIDEO */}
          <div className="my-10">
            <div className="mb-3 flex items-center gap-2">
              <PlayCircle className="h-5 w-5 text-violet-300" />
              <p className="text-sm font-medium text-white">See a custom finish come together</p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/UfhphgDXRTI"
                title="Custom car wrap transformation video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="mt-2 text-center text-xs text-zinc-500">A full custom wrap transformation. Credit: original creator on YouTube.</p>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">3. Color-shift &amp; chameleon</h2>
          <p className="leading-relaxed">
            Multi-layer films that change hue with viewing angle are no longer just for show cars. Popular 2026 combinations include purple-to-teal, emerald-to-gold, and deep blue-to-bronze. The effect is impossible to achieve with paint at any reasonable price — which is exactly why wraps dominate this category.
          </p>
          <figure className="my-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?w=1200&q=80"
                alt="A car with a color-shifting finish"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-zinc-500">Color-shift films flip hue depending on the light and angle.</figcaption>
          </figure>

          <h2 className="mt-12 text-2xl font-medium text-white">4. Nardo gray &amp; neutral tones</h2>
          <p className="leading-relaxed">
            Nardo gray remains a perennial favorite — a flat, industrial gray that looks aggressive on performance cars and clean on daily drivers. Neutrals like gray, black, and white consistently hold resale value better than bold colors, making them the smart pick for anyone who might sell later.
          </p>

          {/* PULL QUOTE */}
          <blockquote className="my-10 border-l-2 border-violet-400/50 pl-6">
            <p className="text-xl font-medium leading-relaxed text-white">
              &quot;Bold colors win attention. Neutral tones win resale. Pick based on how long you&apos;ll keep the car.&quot;
            </p>
          </blockquote>

          <h2 className="mt-12 text-2xl font-medium text-white">5. Forged carbon</h2>
          <p className="leading-relaxed">
            Standard woven carbon-fiber vinyl has looked fake for years. Forged carbon — mimicking the chopped-fiber look of high-end supercars — is the 2026 upgrade. It resembles crushed marble or granite and works beautifully as an accent on hoods, roofs, and mirrors.
          </p>

          {/* COST TABLE */}
          <h2 className="mt-12 text-2xl font-medium text-white">What each finish costs</h2>
          <div className="my-6 rounded-2xl border border-violet-400/20 bg-violet-400/5 p-6 backdrop-blur-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-zinc-500">
                  <th className="py-2 text-left text-xs uppercase tracking-wider font-medium">Finish</th>
                  <th className="py-2 text-right text-xs uppercase tracking-wider font-medium">Relative cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Gloss / satin / matte solids</td>
                  <td className="py-2 text-right font-medium text-white">Standard</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Metallic</td>
                  <td className="py-2 text-right font-medium text-white">+10 – 20%</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Forged carbon</td>
                  <td className="py-2 text-right font-medium text-white">+15 – 30%</td>
                </tr>
                <tr>
                  <td className="py-2 text-zinc-400">Color-shift / chrome</td>
                  <td className="py-2 text-right font-medium text-white">+50 – 100%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-violet-400/40 via-violet-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-violet-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-violet-300">Found your color?</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">See what that finish costs on your car</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Pick your finish and vehicle in our free Wrap Cost Calculator for an instant estimate with a downloadable PDF quote. No signup.
              </p>
              <Link href="/wrap-cost-calculator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-violet-300 to-violet-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-violet-200 hover:to-violet-400">
                Open cost calculator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="mt-12 text-2xl font-medium text-white">Frequently asked questions</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Which wrap color is best for resale?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Neutral tones — gray, black, white — hold value best. Bold or polarizing colors can narrow your future buyer pool.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Does color affect how long a wrap lasts?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Finish matters more than color. Gloss and satin outlast chrome and color-shift, which are more sensitive to UV and heat.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Can I get a color paint can&apos;t do?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Absolutely — chrome, color-shift, and forged carbon are effectively impossible or wildly expensive to replicate in paint.</p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            2026 is all about satin sheens, tactical earth tones, and dynamic color-shift films. Pick a bold finish if you want attention and plan to keep the car; pick a neutral if resale matters. Either way, a wrap gets you there without touching the paint underneath.
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