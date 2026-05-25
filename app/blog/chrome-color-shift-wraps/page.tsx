import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator, PlayCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Chrome & color-shift wraps explained (cost, care, and reality)",
  description: "What chrome and color-shift vinyl wraps really cost, how long they last, why they're harder to install, and whether they're worth it. With photos and video.",
  openGraph: {
    title: "Chrome & color-shift wraps explained",
    description: "Cost, lifespan, install difficulty, and care for chrome and color-shift wraps.",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[120px]" />
        <div className="absolute top-[600px] right-[5%] h-[450px] w-[450px] rounded-full bg-violet-400/15 blur-[120px]" />
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
              Materials
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> May 25, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 7 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Chrome &amp; color-shift wraps <span className="bg-gradient-to-r from-cyan-200 via-violet-300 to-amber-200 bg-clip-text text-transparent">explained</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            They&apos;re the most jaw-dropping finishes in the wrap world — and the most misunderstood. Here&apos;s what chrome and color-shift wraps actually cost, how they behave in the real world, and whether they&apos;re worth it.
          </p>
        </div>

        {/* HERO IMAGE */}
        <figure className="mb-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80"
              alt="A car with a striking metallic finish"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <figcaption className="mt-2 text-center text-xs text-zinc-500">Chrome and color-shift finishes turn heads like nothing else.</figcaption>
        </figure>

        {/* KEY TAKEAWAYS BOX */}
        <div className="mb-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6 backdrop-blur-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-cyan-300">Key takeaways</p>
          <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
            <li>• Chrome &amp; color-shift cost 2-3x a standard gloss wrap</li>
            <li>• They have a shorter lifespan (2-4 years) and higher install difficulty</li>
            <li>• High waste factor (30-40%) drives material cost up significantly</li>
          </ul>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">What makes them different</h2>
          <p className="leading-relaxed">
            Standard vinyl is pigment under a clear top layer. Chrome and color-shift films add a <strong className="text-white">metallic or multi-layer optical coating</strong> that reflects light like polished metal (chrome) or shifts hue depending on viewing angle (color-shift, also called &quot;flip&quot; or &quot;ColorFlow&quot;). That special layer is what makes them stunning — and fragile.
          </p>

          {/* IMAGE */}
          <figure className="my-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?w=1200&q=80"
                alt="Close-up of a color-shifting metallic car finish"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-zinc-500">Color-shift films change hue depending on the angle and light.</figcaption>
          </figure>

          <h2 className="mt-12 text-2xl font-medium text-white">What they cost</h2>
          <div className="my-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6 backdrop-blur-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-zinc-500">
                  <th className="py-2 text-left text-xs uppercase tracking-wider font-medium">Finish</th>
                  <th className="py-2 text-right text-xs uppercase tracking-wider font-medium">Full vehicle</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Standard gloss</td>
                  <td className="py-2 text-right font-medium text-white">$2,500 – $4,500</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Color-shift</td>
                  <td className="py-2 text-right font-medium text-white">$5,000 – $8,000</td>
                </tr>
                <tr>
                  <td className="py-2 text-zinc-400">Chrome</td>
                  <td className="py-2 text-right font-medium text-white">$6,000 – $10,000+</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* VIDEO EMBED */}
          <div className="my-10">
            <div className="mb-3 flex items-center gap-2">
              <PlayCircle className="h-5 w-5 text-cyan-300" />
              <p className="text-sm font-medium text-white">See chrome &amp; color-shift in motion</p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/i4Bgx4YTW3w"
                title="Chrome and color-shift wrap video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="mt-2 text-center text-xs text-zinc-500">These finishes only make sense in motion. Credit: original creator on YouTube.</p>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Why they cost so much more</h2>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Expensive raw material:</strong> the optical layers cost far more to produce than standard pigment film.</li>
            <li className="list-disc"><strong className="text-white">High waste (30-40%):</strong> these films are directional and unforgiving — you can&apos;t rotate pieces, so more goes to scrap.</li>
            <li className="list-disc"><strong className="text-white">Harder install:</strong> chrome especially shows every imperfection and can&apos;t be over-stretched without cracking the metallic layer.</li>
            <li className="list-disc"><strong className="text-white">Skill premium:</strong> few installers do chrome well, so those who do charge accordingly.</li>
          </ul>

          {/* PULL QUOTE */}
          <blockquote className="my-10 border-l-2 border-cyan-400/50 pl-6">
            <p className="text-xl font-medium leading-relaxed text-white">
              &quot;Chrome looks incredible for the first two years. Whether it&apos;s worth it depends entirely on how long you plan to keep the look.&quot;
            </p>
          </blockquote>

          <h2 className="mt-12 text-2xl font-medium text-white">The lifespan reality</h2>
          <p className="leading-relaxed">
            This is where expectations need managing. Chrome and color-shift films last <strong className="text-white">2-4 years</strong> versus 5-7 for gloss. The metallic layer is sensitive to heat cycling and can crack or &quot;web&quot; over time, and edges tend to lift sooner. They demand garage storage and gentle care to look their best.
          </p>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-cyan-400/40 via-cyan-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-cyan-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-cyan-300">Considering a premium finish?</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Price chrome or color-shift accurately</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Our free Wrap Cost Calculator includes premium finish options with the right waste factor built in, so chrome and color-shift quotes reflect their real cost.
              </p>
              <Link href="/wrap-cost-calculator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-cyan-300 to-cyan-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-cyan-200 hover:to-cyan-400">
                Open cost calculator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* FAQ BLOCK */}
          <h2 className="mt-12 text-2xl font-medium text-white">Frequently asked questions</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Is chrome legal on roads?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">It varies by region — some places restrict highly reflective finishes for safety. Check local regulations before committing.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Can I wash a chrome wrap normally?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Hand wash only, gently. No automatic washes, no harsh chemicals, and dry promptly to avoid water spotting on the metallic layer.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Is color-shift the same as chrome?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">No. Chrome is a mirror-like reflective finish; color-shift changes hue with viewing angle. Both are premium, but they&apos;re different looks.</p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            Chrome and color-shift wraps are the showpieces of the vinyl world — unmatched visual impact at a premium price and a shorter lifespan. If you want maximum head-turn for a few years and you&apos;ll care for it properly, they&apos;re worth every dollar. If you want long-term value, a quality gloss costs less and lasts longer.
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