import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "How much vinyl do you need? A panel-by-panel guide",
  description: "How many linear meters of vinyl wrap does your vehicle actually need? Panel-by-panel breakdown by vehicle type, with finish multipliers and waste factor math.",
  openGraph: {
    title: "How much vinyl do you need for a wrap?",
    description: "Panel-by-panel vinyl coverage guide with real numbers.",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-emerald-400/20 blur-[120px]" />
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
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-emerald-300">
              Materials
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> June 2, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 7 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            How much vinyl do <span className="bg-gradient-to-r from-emerald-200 via-cyan-200 to-emerald-200 bg-clip-text text-transparent">you need?</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            Order too little and you&apos;re halting the job mid-install waiting on a new roll. Order too much and you&apos;re sitting on $200+ of leftover material with no use case. Here&apos;s how to figure out exactly how much vinyl any vehicle actually needs — panel by panel, with the right safety margin.
          </p>
        </div>

        <figure className="mb-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1200&q=80"
              alt="Rolls of vinyl material"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <figcaption className="mt-2 text-center text-xs text-zinc-500">Most installers over-order by 15 to 25%. The right number is closer to 10%.</figcaption>
        </figure>

        <div className="mb-10 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 backdrop-blur-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-emerald-300">Quick numbers</p>
          <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
            <li>• Compact sedan, full wrap: 16 – 18 linear meters</li>
            <li>• Midsize sedan or coupe: 18 – 22 meters</li>
            <li>• Midsize SUV: 22 – 26 meters</li>
            <li>• Full-size truck or large SUV: 26 – 32 meters</li>
            <li>• Add 10 to 15% waste factor for cast vinyl, 15 to 20% for chrome and color-shift</li>
          </ul>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">The right unit to think in</h2>
          <p className="leading-relaxed">
            Vinyl is sold in rolls measured by width × length — typically 60 inches wide by 25, 50, or 75 yards long. But you don&apos;t plan in &quot;rolls&quot; — you plan in <strong className="text-white">linear meters</strong> (or yards) at the standard 60-inch roll width. This is the unit every quote, every spec sheet, and every panel cut uses.
          </p>
          <p className="leading-relaxed">
            One linear meter of 60-inch vinyl gives you about 1.5 square meters of usable material. That&apos;s your fundamental unit.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Panel-by-panel breakdown (typical sedan)</h2>
          <p className="leading-relaxed">
            Here&apos;s the real math for a midsize sedan, like a Tesla Model 3 or BMW 3 Series:
          </p>

          <div className="my-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 backdrop-blur-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-zinc-500">
                  <th className="py-2 text-left text-xs uppercase tracking-wider font-medium">Panel</th>
                  <th className="py-2 text-right text-xs uppercase tracking-wider font-medium">Linear meters</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Hood</td>
                  <td className="py-2 text-right font-medium text-white">2.2 m</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Roof</td>
                  <td className="py-2 text-right font-medium text-white">1.8 m</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Trunk lid</td>
                  <td className="py-2 text-right font-medium text-white">1.6 m</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Front bumper</td>
                  <td className="py-2 text-right font-medium text-white">2.0 m</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Rear bumper</td>
                  <td className="py-2 text-right font-medium text-white">1.8 m</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Doors (×4)</td>
                  <td className="py-2 text-right font-medium text-white">4.8 m</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Front fenders (×2)</td>
                  <td className="py-2 text-right font-medium text-white">2.4 m</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Rear quarters (×2)</td>
                  <td className="py-2 text-right font-medium text-white">2.4 m</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Mirrors, handles, small parts</td>
                  <td className="py-2 text-right font-medium text-white">0.8 m</td>
                </tr>
                <tr className="border-b border-white/5 border-t border-white/15">
                  <td className="py-2 font-medium text-white">Subtotal (raw)</td>
                  <td className="py-2 text-right font-medium text-white">19.8 m</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium text-emerald-300">+ 12% waste factor</td>
                  <td className="py-2 text-right font-medium text-emerald-300">~22 m</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed">
            That&apos;s about half of a standard 50-yard (45-meter) roll. For a full sedan wrap in a single color, one roll covers it comfortably.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">The waste factor explained</h2>
          <p className="leading-relaxed">
            Raw panel measurements give you the bare-minimum coverage. But you can&apos;t cut every panel to the exact dimension — vinyl needs trim margin for stretching, wrapping into edges, and squaring up cuts. That extra material is the <strong className="text-white">waste factor</strong>.
          </p>
          <p className="leading-relaxed">
            Typical waste factors by finish:
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Standard gloss or satin solids:</strong> 10 to 12%. Forgiving material, minimal extra needed.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Matte and textured finishes:</strong> 12 to 15%. Less stretch, more careful trimming required.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Metallics:</strong> 12 to 15%. Slight directional pattern means some panels can&apos;t be flipped or rotated.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Chrome and color-shift:</strong> 15 to 20%. Stiffer film, strong directional patterns, and harder to repair mistakes.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">PPF over wrap:</strong> 18 to 22%. Two films, two waste factors, plus PPF is brutally unforgiving on tight curves.
          </p>

          <blockquote className="my-10 border-l-2 border-emerald-400/50 pl-6">
            <p className="text-xl font-medium leading-relaxed text-white">
              &quot;Order 10% over for cast vinyl. 20% over only if you&apos;re working with chrome or color-shift. Anything more is money you&apos;re leaving on the cutting room floor.&quot;
            </p>
          </blockquote>

          <h2 className="mt-12 text-2xl font-medium text-white">How vehicle type changes the math</h2>
          <p className="leading-relaxed">
            Bigger vehicles aren&apos;t just proportionally more — they have more complex panel geometry, deeper body lines, and harder-to-wrap surfaces:
          </p>

          <div className="my-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 backdrop-blur-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-zinc-500">
                  <th className="py-2 text-left text-xs uppercase tracking-wider font-medium">Vehicle</th>
                  <th className="py-2 text-right text-xs uppercase tracking-wider font-medium">Linear meters (with waste)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Compact (Civic, Corolla)</td>
                  <td className="py-2 text-right font-medium text-white">16 – 18 m</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Midsize sedan (Model 3, 3 Series)</td>
                  <td className="py-2 text-right font-medium text-white">20 – 22 m</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Large sedan / coupe (5 Series, Mustang)</td>
                  <td className="py-2 text-right font-medium text-white">22 – 25 m</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Compact SUV (RAV4, CR-V)</td>
                  <td className="py-2 text-right font-medium text-white">22 – 24 m</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Midsize SUV (X5, Q7)</td>
                  <td className="py-2 text-right font-medium text-white">24 – 28 m</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Full-size SUV (Tahoe, Suburban)</td>
                  <td className="py-2 text-right font-medium text-white">28 – 32 m</td>
                </tr>
                <tr>
                  <td className="py-2 text-zinc-400">Full-size truck (F-150, RAM)</td>
                  <td className="py-2 text-right font-medium text-white">28 – 34 m</td>
                </tr>
              </tbody>
            </table>
          </div>

          <figure className="my-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80"
                alt="A workshop with cutting tools and vinyl rolls"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-zinc-500">A 50-yard (45m) roll typically covers most cars in a single color, with a few meters left for repairs.</figcaption>
          </figure>

          <h2 className="mt-12 text-2xl font-medium text-white">Common over-ordering traps</h2>
          <p className="leading-relaxed">
            <strong className="text-white">&quot;I&apos;ll get extra just in case.&quot;</strong> Adding 5 extra meters &quot;for safety&quot; is $30 to $80 of material that will sit on a shelf for years. Order the right amount; if you fail a panel, order more from the same batch (color batching matters — never mix batches mid-job).
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Forgetting the door jambs.</strong> If wrapping into jambs, add 1 to 2 meters total. Skip them at install? Subtract that, and add risk of premature lifting.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Two-tone designs.</strong> A two-color wrap is rarely 50/50. The dominant color uses 70 to 80% of the linear meters. Calculate each color separately, not as halves.
          </p>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-emerald-400/40 via-emerald-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-emerald-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-emerald-300">Skip the manual math</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Calculate exact vinyl needs in seconds</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Pick your vehicle, panels to wrap, and finish type. Our Vinyl Material Estimator gives you the linear meter total with built-in waste factor for each finish — accurate enough to order from.
              </p>
              <Link href="/vinyl-material-estimator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-emerald-300 to-emerald-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-emerald-200 hover:to-emerald-400">
                Open material estimator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="my-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 backdrop-blur-xl">
            <div className="mb-3 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-amber-300" />
              <p className="text-xs font-medium uppercase tracking-wider text-amber-300">Pro tip</p>
            </div>
            <p className="text-sm leading-relaxed text-zinc-300">
              When you order, request the same batch number for the entire job — different production batches can have subtle color variation that&apos;s invisible on the roll but obvious once installed across multiple panels. Most suppliers will accommodate if you ask upfront.
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Frequently asked questions</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Can I use leftover vinyl on another job?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Yes, for small accent pieces, mirror caps, or hood inserts — anything under 1 to 2 meters. Color and batch matters, so don&apos;t mix leftover into a primary panel.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">What if I run out mid-install?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Stop the job, order from the same batch immediately, and resume only when the new material arrives. Splicing different batches in visible panels almost always shows under sunlight.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Do calendered and cast films use the same amount?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Linear-meter coverage is similar, but calendered vinyl has higher waste because it&apos;s less forgiving on curves. Add 3 to 5% extra waste factor for calendered.</p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            Vinyl planning isn&apos;t magic — it&apos;s panel area × 1.1 to 1.2 for waste. Most cars land between 18 and 28 meters of cast vinyl for a full wrap. Order the right amount, not &quot;just in case&quot; amount, and your margin per job goes up noticeably. The cost of running short once a year is far less than the cost of over-ordering every job.
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
