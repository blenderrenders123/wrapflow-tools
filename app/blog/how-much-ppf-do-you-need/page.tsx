import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "How much PPF do you actually need? A friendly guide to coverage",
  description: "Confused about partial vs full PPF coverage? Here's a friendly, no-jargon walkthrough of which areas of your car actually need paint protection film — and which don't.",
  openGraph: {
    title: "How much PPF do you actually need?",
    description: "A friendly guide to choosing partial vs full PPF coverage for your car.",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-orange-400/20 blur-[120px]" />
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
            <span className="rounded-full border border-orange-400/30 bg-orange-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-orange-300">
              PPF guide
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> May 31, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 7 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            How much PPF do you <span className="bg-gradient-to-r from-orange-200 via-amber-200 to-orange-200 bg-clip-text text-transparent">actually need?</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            You&apos;ve decided to get paint protection film. Great choice — your future self will thank you. But now you&apos;re staring at a quote with options like &quot;partial,&quot; &quot;track pack,&quot; and &quot;full body,&quot; and the prices are wildly different. Don&apos;t worry, we&apos;ll walk through this together.
          </p>
        </div>

        {/* HERO IMAGE */}
        <figure className="mb-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
              alt="A clean sports car with paint protection"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <figcaption className="mt-2 text-center text-xs text-zinc-500">PPF is invisible armor — but you don&apos;t need it everywhere.</figcaption>
        </figure>

        {/* KEY TAKEAWAYS */}
        <div className="mb-10 rounded-2xl border border-orange-400/20 bg-orange-400/5 p-6 backdrop-blur-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-orange-300">The short version</p>
          <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
            <li>• Most cars only need PPF on the front-facing areas</li>
            <li>• Partial coverage protects ~80% of damage zones for ~30% of the cost</li>
            <li>• Full body PPF is mostly for high-end cars or daily highway drivers</li>
            <li>• The right amount depends on how you drive, not what you drive</li>
          </ul>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">First, what is PPF actually doing?</h2>
          <p className="leading-relaxed">
            Think of PPF like a phone screen protector, but for your car&apos;s paint. It&apos;s a clear, flexible film that sits on top of the paint and takes hits from rocks, bugs, road debris, and minor scrapes — so your actual paint stays untouched.
          </p>
          <p className="leading-relaxed">
            Here&apos;s the cool part: modern PPF is self-healing. Minor swirl marks and surface scratches actually disappear when the film warms up in the sun. It&apos;s a bit like magic, except it&apos;s just polymer chemistry.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Where does damage actually happen?</h2>
          <p className="leading-relaxed">
            This is the question that decides everything. Damage on cars isn&apos;t spread evenly — it concentrates in very specific zones. Here&apos;s where:
          </p>

          <h3 className="mt-6 text-xl font-medium text-white">The front bumper and hood</h3>
          <p className="leading-relaxed">
            These take 90% of all rock chip damage. Every highway mile, every gravel driveway, every truck on the freeway flicking up debris — it all hits here first. If you only protect one area on your car, this is it.
          </p>

          <h3 className="mt-6 text-xl font-medium text-white">Headlights and fog lights</h3>
          <p className="leading-relaxed">
            Modern headlights are expensive (often $1,000+ to replace). They also yellow and pit over time from UV and debris. PPF on headlights keeps them clear for the life of the car. Easy win.
          </p>

          <h3 className="mt-6 text-xl font-medium text-white">Front fenders (the partial side panels)</h3>
          <p className="leading-relaxed">
            Tires kick rocks back, and the front fenders take a beating from your own wheels. The area behind your front tires is a damage hotspot most people don&apos;t think about until they see the chips.
          </p>

          <figure className="my-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80"
                alt="Close-up of a car's front end"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-zinc-500">The front end gets nearly all the damage. Protect it well, and you&apos;re mostly done.</figcaption>
          </figure>

          <h3 className="mt-6 text-xl font-medium text-white">Door edges and door cups</h3>
          <p className="leading-relaxed">
            Tiny coverage area, huge impact. Door edges chip every time you open the door into something, and door cups (behind the handle) collect fingernail scratches over the years. A few inches of PPF here saves a lot of touch-up paint later.
          </p>

          <h3 className="mt-6 text-xl font-medium text-white">Mirrors and rocker panels</h3>
          <p className="leading-relaxed">
            Mirrors get bug splat and bumps in parking lots. Rocker panels (the lower sides of the car) catch road grime, salt, and stones thrown up by your own tires. These are bonus zones — nice to have, not critical.
          </p>

          {/* PULL QUOTE */}
          <blockquote className="my-10 border-l-2 border-orange-400/50 pl-6">
            <p className="text-xl font-medium leading-relaxed text-white">
              &quot;The first 30% of your PPF budget protects 80% of the damage. That&apos;s where the value is.&quot;
            </p>
          </blockquote>

          <h2 className="mt-12 text-2xl font-medium text-white">The three common packages</h2>
          <p className="leading-relaxed">
            Most shops bundle PPF into three tiers. Here&apos;s what each one actually covers, in plain English:
          </p>

          <h3 className="mt-6 text-xl font-medium text-white">Partial front (a.k.a. &quot;the essentials&quot;)</h3>
          <p className="leading-relaxed">
            Covers the front bumper, part of the hood (usually 18-24 inches back), part of the fenders, headlights, and mirrors. This is the sweet spot for most daily drivers. You get the protection where you actually need it, without breaking the bank.
          </p>

          <h3 className="mt-6 text-xl font-medium text-white">Full front (a.k.a. &quot;track pack&quot;)</h3>
          <p className="leading-relaxed">
            Same as partial, but extends to the full hood and full front fenders. Better for highway commuters or anyone who&apos;s noticed a lot of stone chips on their current car. Costs more, but the seam line disappears so it looks cleaner.
          </p>

          <h3 className="mt-6 text-xl font-medium text-white">Full body</h3>
          <p className="leading-relaxed">
            Every painted panel gets film. This is overkill for most cars, but if you&apos;ve got a $150K sports car, an exotic, or a vehicle you plan to keep forever, it&apos;s peace of mind. It&apos;s also the only way to preserve paint that might be impossible to color-match later.
          </p>

          {/* COVERAGE TABLE */}
          <h2 className="mt-12 text-2xl font-medium text-white">What each package roughly costs</h2>
          <div className="my-6 rounded-2xl border border-orange-400/20 bg-orange-400/5 p-6 backdrop-blur-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-zinc-500">
                  <th className="py-2 text-left text-xs uppercase tracking-wider font-medium">Package</th>
                  <th className="py-2 text-right text-xs uppercase tracking-wider font-medium">Typical price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Partial front</td>
                  <td className="py-2 text-right font-medium text-white">$1,200 – $2,000</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Full front (track pack)</td>
                  <td className="py-2 text-right font-medium text-white">$2,000 – $3,500</td>
                </tr>
                <tr>
                  <td className="py-2 text-zinc-400">Full body</td>
                  <td className="py-2 text-right font-medium text-white">$5,000 – $9,000+</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-3 text-xs text-zinc-500">Prices vary by film brand, vehicle size, and shop. Always get 2-3 quotes.</p>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">So what should you actually pick?</h2>
          <p className="leading-relaxed">
            Honest answer: it depends on your driving. Here&apos;s a quick gut check:
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">You mostly do short city trips?</strong> Partial front is plenty. Damage hotspots covered, money saved.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">You&apos;re on the highway 30+ minutes daily?</strong> Go full front. The hood and fenders will pick up chips fast otherwise.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">You&apos;ve got an exotic or a car you&apos;ll never sell?</strong> Full body. The cost makes sense because the alternative is a $20K respray.
          </p>

          {/* CTA */}
          <div className="my-12 rounded-2xl bg-gradient-to-br from-orange-400/40 via-orange-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-orange-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-orange-300">See what you actually need</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Visualize your PPF coverage</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Pick the zones you want to protect on a visual car map and see total coverage plus an instant cost estimate. No signup, completely free.
              </p>
              <Link href="/ppf-coverage-visualizer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-orange-300 to-orange-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-orange-200 hover:to-orange-400">
                Open PPF visualizer <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* TIP BOX */}
          <div className="my-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6 backdrop-blur-xl">
            <div className="mb-3 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-cyan-300" />
              <p className="text-xs font-medium uppercase tracking-wider text-cyan-300">Pro tip</p>
            </div>
            <p className="text-sm leading-relaxed text-zinc-300">
              If you&apos;re getting a wrap and PPF, install PPF first on the high-impact zones, then wrap over the rest. Best of both worlds — protection where it matters, style everywhere else.
            </p>
          </div>

          {/* FAQ */}
          <h2 className="mt-12 text-2xl font-medium text-white">Quick questions, quick answers</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Can you see PPF on a car?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Modern PPF is virtually invisible when installed well. You might notice a faint edge line if you look closely, but nobody else will.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">How long does PPF last?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Quality PPF lasts 7 to 10 years with proper care. Most premium films come with a 10-year warranty against yellowing and cracking.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Does PPF affect the paint underneath?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Nope — when removed properly, the paint underneath is in the same (or better) condition than the day the PPF was applied.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Should I get PPF on a used car?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Absolutely, especially if the paint is still in good shape. PPF stops further damage and preserves resale value.</p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            You don&apos;t need to wrap your entire car in clear film to protect it well. The damage you&apos;re trying to prevent happens in predictable places — and partial front coverage handles most of it for a fraction of the price. Start with where damage actually happens, scale up only if your driving justifies it. Easy.
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
