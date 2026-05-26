import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator, PlayCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "How much does it cost to wrap a truck or SUV in 2026?",
  description: "Real 2026 pricing to wrap a truck or SUV — full and partial wraps, material needs by size, what drives the cost up, and how to estimate your own job.",
  openGraph: {
    title: "How much does it cost to wrap a truck or SUV?",
    description: "Real 2026 truck and SUV wrap pricing, material needs, and cost factors.",
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
              Pricing
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> May 26, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 7 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            What does it cost to wrap a <span className="bg-gradient-to-r from-amber-200 via-cyan-300 to-amber-200 bg-clip-text text-transparent">truck or SUV?</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            Trucks and SUVs cost more to wrap than cars — more surface area, taller panels, more material, more labor. In 2026, expect <strong className="text-white">$3,000 to $6,500</strong> for a full wrap, depending on size and finish. Here&apos;s the full breakdown.
          </p>
        </div>

        {/* HERO IMAGE */}
        <figure className="mb-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&q=80"
              alt="A pickup truck parked outdoors"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <figcaption className="mt-2 text-center text-xs text-zinc-500">Bigger vehicles need more film and more hours in the bay.</figcaption>
        </figure>

        {/* QUICK ANSWER TABLE */}
        <div className="mb-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 backdrop-blur-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-amber-300">Quick pricing</p>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Mid-size SUV / small truck (full)</td>
                <td className="py-2 text-right font-medium text-white">$3,000 – $4,500</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Full-size truck / large SUV (full)</td>
                <td className="py-2 text-right font-medium text-white">$4,000 – $6,500</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Partial wrap (hood, roof, accents)</td>
                <td className="py-2 text-right font-medium text-white">$1,000 – $2,500</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Premium finish (chrome, color-shift)</td>
                <td className="py-2 text-right font-medium text-white">$7,000 – $10,000+</td>
              </tr>
              <tr>
                <td className="py-2 text-zinc-400">Commercial / printed branding</td>
                <td className="py-2 text-right font-medium text-white">$3,500 – $7,500</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">Why trucks &amp; SUVs cost more than cars</h2>
          <p className="leading-relaxed">
            It comes down to surface area and complexity. A sedan needs around 230 sq ft of vinyl; a full-size truck or large SUV can need far more, plus taller panels, larger flat expanses, and features like bed sides, tailgates, and roof racks that all add labor.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Material needs by size</h2>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Small/mid trucks</strong> (Ranger, Tacoma, Colorado): ~55-65 ft of film</li>
            <li className="list-disc"><strong className="text-white">Full-size trucks</strong> (F-150, Silverado, Ram 1500, Sierra): ~65-75 ft</li>
            <li className="list-disc"><strong className="text-white">Heavy-duty trucks</strong> (Super Duty, Ram 2500/3500, Denali HD): ~75-85 ft</li>
            <li className="list-disc"><strong className="text-white">Add extra</strong> for wide fenders, roof racks, tonneau covers, or aftermarket parts</li>
          </ul>

          {/* VIDEO */}
          <div className="my-10">
            <div className="mb-3 flex items-center gap-2">
              <PlayCircle className="h-5 w-5 text-amber-300" />
              <p className="text-sm font-medium text-white">Watch a full vehicle wrap</p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/i4Bgx4YTW3w"
                title="Full vehicle wrap timelapse"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="mt-2 text-center text-xs text-zinc-500">A full wrap, start to finish. Credit: original creator on YouTube.</p>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">What drives the price up or down</h2>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Finish:</strong> gloss/satin/matte are standard; metallic, chrome, and color-shift cost significantly more.</li>
            <li className="list-disc"><strong className="text-white">Coverage:</strong> a partial wrap (hood, roof, accents) is a fraction of a full wrap.</li>
            <li className="list-disc"><strong className="text-white">Vehicle condition:</strong> bad paint, rust, or aftermarket parts add prep time.</li>
            <li className="list-disc"><strong className="text-white">Design complexity:</strong> printed graphics and custom designs cost more than solid color changes.</li>
            <li className="list-disc"><strong className="text-white">Region:</strong> coastal/metro shops charge more per hour than rural ones.</li>
          </ul>

          {/* PULL QUOTE */}
          <blockquote className="my-10 border-l-2 border-amber-400/50 pl-6">
            <p className="text-xl font-medium leading-relaxed text-white">
              &quot;The cheapest quote isn&apos;t the best deal. On a big vehicle, cheap film and rushed prep fail twice as fast.&quot;
            </p>
          </blockquote>

          <h2 className="mt-12 text-2xl font-medium text-white">Full vs partial: which makes sense?</h2>
          <p className="leading-relaxed">
            If you want a complete color change or full commercial branding, a full wrap is the way. But if your goal is a style accent or you&apos;re on a budget, a partial wrap — blacked-out roof, contrast hood, accent stripes — gives big visual impact for a fraction of the cost. On trucks especially, a two-tone partial can look factory-custom.
          </p>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-amber-400/40 via-amber-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-amber-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-amber-300">Get a real number</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Estimate your truck or SUV wrap</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Plug in your vehicle size, finish, and coverage in our free Wrap Cost Calculator for an instant estimate and a downloadable PDF quote. No signup.
              </p>
              <Link href="/wrap-cost-calculator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-amber-200 hover:to-amber-400">
                Open cost calculator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="mt-12 text-2xl font-medium text-white">Frequently asked questions</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Is wrapping a truck cheaper than painting it?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Usually yes for a quality result, and a wrap protects the factory paint and can be removed later — unlike paint.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">How long does a truck wrap take?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Typically 3-5 days for a full wrap, depending on size, finish, and how much disassembly is needed.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Does a bigger truck always cost more?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Generally yes — more surface area means more film and more labor hours, which are the two biggest cost drivers.</p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            Budget <strong className="text-white">$3,000-$6,500</strong> for a full truck or SUV wrap in 2026, more for premium finishes or commercial graphics. Size and finish are the biggest levers. Get an itemized quote, and don&apos;t let the lowest number tempt you into cheap film that fails early on all that surface area.
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