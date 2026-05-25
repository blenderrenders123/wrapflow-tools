import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator, PlayCircle } from "lucide-react";
import BeforeAfter from "../../components/BeforeAfter";

export const metadata: Metadata = {
  title: "10 stunning vehicle wrap transformations (before & after)",
  description: "Real before-and-after vehicle wrap transformations showing what's possible with vinyl — color changes, finishes, and full makeovers. Plus how to price your own.",
  openGraph: {
    title: "10 stunning vehicle wrap transformations",
    description: "Before-and-after wrap transformations and what's possible with vinyl.",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-violet-400/20 blur-[120px]" />
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
            <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-violet-300">
              Inspiration
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> May 25, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 6 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            10 stunning wrap <span className="bg-gradient-to-r from-violet-200 via-cyan-300 to-violet-200 bg-clip-text text-transparent">transformations</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            Nothing sells a wrap like seeing one. Drag the sliders below to reveal how a vinyl wrap completely changes a vehicle — no paint, no permanence, just a few days in the bay.
          </p>
        </div>

        {/* KEY TAKEAWAYS BOX */}
        <div className="mb-10 rounded-2xl border border-violet-400/20 bg-violet-400/5 p-6 backdrop-blur-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-violet-300">Key takeaways</p>
          <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
            <li>• A wrap can transform a car&apos;s entire look in 2-5 days</li>
            <li>• Every transformation below is reversible — factory paint stays protected underneath</li>
            <li>• Finish choice (gloss, satin, matte, chrome) changes the whole character of the car</li>
          </ul>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">1. Factory silver → matte military green</h2>
          <p className="leading-relaxed">
            One of the most popular modern looks. A matte finish turns an ordinary daily driver into something that turns heads in a parking lot. Drag to compare:
          </p>
          <BeforeAfter
            beforeSrc="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
            afterSrc="https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80"
            caption="Silver factory paint transformed with a matte wrap."
          />

          <h2 className="mt-12 text-2xl font-medium text-white">2. The gloss color change</h2>
          <p className="leading-relaxed">
            Gloss wraps mimic a fresh paint job with a fraction of the commitment. The depth on a quality cast gloss film is genuinely hard to distinguish from paint.
          </p>
          <BeforeAfter
            beforeSrc="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80"
            afterSrc="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80"
            caption="A glossy color change brings a tired finish back to life."
          />

          {/* VIDEO EMBED */}
          <div className="my-10">
            <div className="mb-3 flex items-center gap-2">
              <PlayCircle className="h-5 w-5 text-violet-300" />
              <p className="text-sm font-medium text-white">Watch a full transformation</p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/UfhphgDXRTI"
                title="Car wrap transformation video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="mt-2 text-center text-xs text-zinc-500">Full transformation timelapse. Credit: original creator on YouTube.</p>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">3. Satin black — the understated upgrade</h2>
          <p className="leading-relaxed">
            Satin sits between gloss and matte, giving a deep, soft sheen that&apos;s become the signature look of modern performance cars.
          </p>
          <BeforeAfter
            beforeSrc="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=80"
            afterSrc="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1200&q=80"
            caption="Satin black adds menace without the maintenance of matte."
          />

          {/* PULL QUOTE */}
          <blockquote className="my-10 border-l-2 border-violet-400/50 pl-6">
            <p className="text-xl font-medium leading-relaxed text-white">
              &quot;The best part isn&apos;t the new look — it&apos;s that the factory paint is still perfect underneath when you peel it off years later.&quot;
            </p>
          </blockquote>

          <h2 className="mt-12 text-2xl font-medium text-white">4. Commercial van → rolling billboard</h2>
          <p className="leading-relaxed">
            For businesses, a wrap isn&apos;t vanity — it&apos;s advertising that works 24/7. A plain white work van becomes brand visibility on every road it drives.
          </p>
          <BeforeAfter
            beforeSrc="https://images.unsplash.com/photo-1606618303108-bb9e2c0c4a3d?w=1200&q=80"
            afterSrc="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&q=80"
            caption="A blank van becomes a mobile advertisement."
          />

          <div className="my-12 rounded-2xl bg-gradient-to-br from-violet-400/40 via-violet-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-violet-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-violet-300">Inspired to wrap yours?</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">See what your transformation would cost</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Pick a finish, your vehicle, and get an instant cost estimate with a downloadable PDF quote. Free, no signup.
              </p>
              <Link href="/wrap-cost-calculator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-violet-300 to-violet-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-violet-200 hover:to-violet-400">
                Open cost calculator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* FAQ BLOCK */}
          <h2 className="mt-12 text-2xl font-medium text-white">Frequently asked questions</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Does wrapping damage the original paint?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">No — quality vinyl on healthy factory paint protects it and removes cleanly. It actually shields the paint from UV and chips.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">How long does a transformation like these last?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Premium cast vinyl lasts 5-7 years outdoors, longer if garaged. Finish matters — gloss outlasts chrome.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Can I change it back?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Yes. That&apos;s the magic of wraps — peel it off and the factory finish is right there, often in better shape than when it went on.</p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            A wrap is the only way to completely transform a vehicle&apos;s look without touching the paint underneath. Whether it&apos;s a personal color change or a fleet branding job, the before-and-after speaks for itself.
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