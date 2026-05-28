import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "3M vs Avery vs KPMF vs Hexis: complete vinyl wrap brand comparison",
  description: "An in-depth comparison of the four major vinyl wrap brands — 3M 2080, Avery SW900, KPMF, and Hexis. Durability, warranty, color range, install feel, and which to choose.",
  openGraph: {
    title: "3M vs Avery vs KPMF vs Hexis: full brand comparison",
    description: "In-depth comparison of the four major vinyl wrap brands: durability, warranty, colors, install.",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[120px]" />
        <div className="absolute top-[600px] right-[5%] h-[450px] w-[450px] rounded-full bg-emerald-400/10 blur-[120px]" />
        <div className="absolute top-[1200px] left-[5%] h-[400px] w-[400px] rounded-full bg-amber-400/10 blur-[120px]" />
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
              <Calendar className="h-3 w-3" /> May 28, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 11 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            3M vs Avery vs KPMF vs Hexis: <span className="bg-gradient-to-r from-cyan-200 via-emerald-300 to-amber-200 bg-clip-text text-transparent">the full comparison</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            The four big names in cast wrap film are all genuinely good — which is exactly why the choice confuses people. This is a detailed, no-hype comparison of 3M, Avery Dennison, KPMF, and Hexis across the factors that actually matter: durability, warranty, color range, and how each one feels to install.
          </p>
        </div>

        {/* HERO IMAGE */}
        <figure className="mb-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80"
              alt="Rolls of vinyl wrap film"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <figcaption className="mt-2 text-center text-xs text-zinc-500">All four brands make premium cast film — the differences are in the details.</figcaption>
        </figure>

        {/* KEY TAKEAWAYS */}
        <div className="mb-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6 backdrop-blur-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-cyan-300">Key takeaways</p>
          <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
            <li>• All four are premium cast films — you can&apos;t go wrong with any of them</li>
            <li>• 3M &amp; Avery dominate on availability, color range, and support</li>
            <li>• KPMF &amp; Hexis shine for unique specialty colors and finishes</li>
            <li>• The biggest quality gap isn&apos;t between these brands — it&apos;s between cast and cheap calendered film</li>
          </ul>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">First: why cast film matters</h2>
          <p className="leading-relaxed">
            Before comparing brands, understand the category. All four of these make <strong className="text-white">cast vinyl</strong> — the premium type made by casting liquid PVC into thin, stable, conformable film. It&apos;s thinner, more durable, and far better at conforming to curves than cheap <strong className="text-white">calendered</strong> vinyl, which is rolled into sheets and shrinks over time.
          </p>
          <p className="leading-relaxed">
            The single most important takeaway of this whole article: the quality difference between any of these four premium brands is small. The quality difference between any of them and a no-name calendered film is enormous. Don&apos;t obsess over 3M-vs-Avery while ignoring the cast-vs-calendered question that actually determines whether your wrap lasts 5 years or 2.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">3M (2080 Series)</h2>
          <p className="leading-relaxed">
            3M is the pioneer of the industry and the most widely available brand worldwide. The 2080 series, launched in 2020, is the modern flagship — known for excellent conformability on complex curves and a long, proven track record.
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Adhesive tech:</strong> Controltac with Comply air-release channels for bubble-free, repositionable installs</li>
            <li className="list-disc"><strong className="text-white">Thickness:</strong> around 3.5 mil with pressure-activated adhesive</li>
            <li className="list-disc"><strong className="text-white">Durability:</strong> up to 7 years outdoor</li>
            <li className="list-disc"><strong className="text-white">Best for:</strong> installers who want maximum availability, support, and a huge finish range</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">Avery Dennison (SW900)</h2>
          <p className="leading-relaxed">
            Avery&apos;s Supreme Wrapping Film SW900 is 3M&apos;s closest rival and the other brand virtually every certified shop stocks. It&apos;s especially loved for color consistency and how easy it is to handle during installation.
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Adhesive tech:</strong> Easy Apply RS for repositionability and faster installs</li>
            <li className="list-disc"><strong className="text-white">Color range:</strong> wide palette with strong color accuracy</li>
            <li className="list-disc"><strong className="text-white">Durability:</strong> comparable to 3M, with a multi-year warranty</li>
            <li className="list-disc"><strong className="text-white">Best for:</strong> installers who prioritize easy handling and consistent color batches</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">KPMF</h2>
          <p className="leading-relaxed">
            KPMF (Kay Premium Marking Films) is the specialist&apos;s favorite. While 3M and Avery win on breadth, KPMF is celebrated for stunning, distinctive colors — iridescent, glitter, and unique finish options that the bigger brands don&apos;t always match.
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Standout strength:</strong> unique, eye-catching specialty colors and finishes</li>
            <li className="list-disc"><strong className="text-white">Install feel:</strong> slightly more challenging to reposition than 3M, per many installers</li>
            <li className="list-disc"><strong className="text-white">Quality:</strong> genuine premium cast film, fully in the same tier as 3M and Avery</li>
            <li className="list-disc"><strong className="text-white">Best for:</strong> standout custom builds where the color itself is the point</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">Hexis</h2>
          <p className="leading-relaxed">
            Hexis is a major European manufacturer with a strong professional reputation, particularly popular outside North America. It produces premium cast films across the full range of finishes and is a staple in many European wrap shops.
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Standout strength:</strong> strong European availability and a broad professional finish range</li>
            <li className="list-disc"><strong className="text-white">Quality:</strong> premium cast film on par with the other three</li>
            <li className="list-disc"><strong className="text-white">Best for:</strong> shops in regions where Hexis distribution and support are strongest</li>
          </ul>

          {/* COMPARISON TABLE */}
          <h2 className="mt-12 text-2xl font-medium text-white">Side-by-side comparison</h2>
          <div className="my-6 overflow-x-auto rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6 backdrop-blur-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-zinc-500">
                  <th className="py-2 text-left text-xs uppercase tracking-wider font-medium">Brand</th>
                  <th className="py-2 text-left text-xs uppercase tracking-wider font-medium">Strength</th>
                  <th className="py-2 text-right text-xs uppercase tracking-wider font-medium">Install ease</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-2 font-medium text-white">3M 2080</td>
                  <td className="py-2 text-zinc-400">Availability, conformability</td>
                  <td className="py-2 text-right text-emerald-300">Excellent</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 font-medium text-white">Avery SW900</td>
                  <td className="py-2 text-zinc-400">Color consistency, handling</td>
                  <td className="py-2 text-right text-emerald-300">Excellent</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 font-medium text-white">KPMF</td>
                  <td className="py-2 text-zinc-400">Unique specialty colors</td>
                  <td className="py-2 text-right text-amber-300">Good</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium text-white">Hexis</td>
                  <td className="py-2 text-zinc-400">European range &amp; support</td>
                  <td className="py-2 text-right text-emerald-300">Very good</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* PULL QUOTE */}
          <blockquote className="my-10 border-l-2 border-cyan-400/50 pl-6">
            <p className="text-xl font-medium leading-relaxed text-white">
              &quot;Pick the brand that has the exact color you want, in stock, near you. At this tier, that matters more than the logo on the roll.&quot;
            </p>
          </blockquote>

          <h2 className="mt-12 text-2xl font-medium text-white">So which should you choose?</h2>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Want maximum availability &amp; support:</strong> 3M or Avery — they&apos;re everywhere and every installer knows them.</li>
            <li className="list-disc"><strong className="text-white">Want a unique, head-turning color:</strong> KPMF for iridescent and specialty finishes.</li>
            <li className="list-disc"><strong className="text-white">Based in Europe:</strong> Hexis is often the most available premium option with strong local support.</li>
            <li className="list-disc"><strong className="text-white">Honestly unsure:</strong> go with whichever has the exact color you want, in stock, from a supplier near you.</li>
          </ul>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-cyan-400/40 via-cyan-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-cyan-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-cyan-300">Whichever brand you pick</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Calculate how much film you&apos;ll need</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Our free Vinyl Material Estimator works out linear meters by panel with the right waste factor for your finish — so you order the correct amount of whichever brand you choose.
              </p>
              <Link href="/vinyl-material-estimator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-cyan-300 to-cyan-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-cyan-200 hover:to-cyan-400">
                Open material estimator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="mt-12 text-2xl font-medium text-white">Frequently asked questions</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Is 3M really better than the others?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Not necessarily — it&apos;s the most available and proven, but Avery, KPMF, and Hexis are all genuine premium cast films in the same quality tier.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Can I mix brands on one car?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">It&apos;s best not to. Different brands can have slightly different sheen and color, which may be visible across adjacent panels. Stick to one brand per vehicle.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Does brand affect lifespan?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Among these four premium brands, lifespan is broadly similar (5-7 years). Finish type, install quality, and care affect longevity far more than which of these brands you choose.</p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            3M, Avery Dennison, KPMF, and Hexis are all excellent premium cast films, and any of them will serve you well. 3M and Avery win on availability and support; KPMF and Hexis shine for specialty colors and regional strength. Choose based on the color you want and what&apos;s available near you — and remember that install quality and proper care matter far more than the brand on the roll.
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