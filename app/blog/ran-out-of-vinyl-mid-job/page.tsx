import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Layers, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "I ran out of vinyl mid-wrap. Here's how to never do it again.",
  description: "Why installers underbuy vinyl, how to calculate linear meters with proper waste factor, and a free estimator that tells you exactly how much film to order.",
  openGraph: {
    title: "I ran out of vinyl mid-job — here's the fix",
    description: "How to calculate exactly how much vinyl a wrap needs, including waste factor by finish type.",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-emerald-400/20 blur-[120px]" />
        <div className="absolute top-[600px] right-[5%] h-[450px] w-[450px] rounded-full bg-red-400/10 blur-[120px]" />
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
              <Calendar className="h-3 w-3" /> May 20, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 6 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            &quot;I ran out of vinyl <span className="bg-gradient-to-r from-emerald-200 via-red-300 to-emerald-200 bg-clip-text text-transparent">mid-wrap.&quot;</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            You&apos;re three panels from finishing and the roll runs out. The remaining film is on backorder, or worse — it&apos;s a different batch with a slight color shift. The car sits half-wrapped for a week. Here&apos;s why this happens and how to never repeat it.
          </p>
        </div>

        <div className="mb-10 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 backdrop-blur-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-emerald-300">Waste factor by finish</p>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Gloss vinyl</td>
                <td className="py-2 text-right font-medium text-white">+10 – 15%</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Satin / matte</td>
                <td className="py-2 text-right font-medium text-white">+15 – 20%</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Carbon fiber / textured</td>
                <td className="py-2 text-right font-medium text-white">+20 – 25%</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Chrome / color-shift</td>
                <td className="py-2 text-right font-medium text-white">+30 – 40%</td>
              </tr>
              <tr>
                <td className="py-2 text-zinc-400">PPF</td>
                <td className="py-2 text-right font-medium text-white">+25 – 35%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">Why installers underbuy vinyl</h2>
          <p className="leading-relaxed">
            Running short almost always comes down to one of these miscalculations:
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">1. Measuring panels, not buying for waste</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Your panels add up to 16 meters, so you buy 16. But trimming, repositioning, failed pieces, and pattern matching eat 2-6 meters depending on finish. The film you need is always more than the film you measure.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">2. Ignoring directional finishes</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Carbon fiber, brushed metal, and color-shift films have a grain or direction. You can&apos;t rotate pieces to save material — every panel must run the same way. That forces more waste and a bigger order.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">3. No margin for redos</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Even veterans botch a panel occasionally. A lifted edge, a crease, contamination under the film. If you bought exactly enough, one redo means a half-wrapped car and a backorder wait.
              </p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">The batch-number problem</h2>
          <p className="leading-relaxed">
            Here&apos;s the part that makes running short genuinely dangerous: <strong className="text-white">vinyl color varies slightly between production batches.</strong> If you order more film later, it may come from a different batch with a subtle shade difference.
          </p>
          <p className="leading-relaxed">
            On a single panel that&apos;s often invisible. But if your replacement film ends up next to original film on the same body line, the mismatch can be obvious in sunlight. This is why pros buy all the film for a job at once, from the same batch, with margin to spare.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">How to calculate vinyl correctly</h2>
          <p className="leading-relaxed">
            The right way to estimate film for a job:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Measure each panel</strong> in length × width, convert to the roll&apos;s width (usually 1.52m).</li>
            <li className="list-disc"><strong className="text-white">Sum the linear meters</strong> needed across all panels.</li>
            <li className="list-disc"><strong className="text-white">Apply the waste factor</strong> for your finish (see table above).</li>
            <li className="list-disc"><strong className="text-white">Round up to the next roll size</strong> your supplier sells.</li>
            <li className="list-disc"><strong className="text-white">Add one extra panel&apos;s worth</strong> if it&apos;s a directional or expensive finish.</li>
          </ul>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-emerald-400/40 via-emerald-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Layers className="h-5 w-5 text-emerald-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-emerald-300">Order the right amount, every time</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Calculate vinyl by panel in seconds</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Our free Vinyl Material Estimator lets you add each panel, picks the right waste factor for your finish automatically, and tells you exactly how many linear meters and rolls to order.
              </p>
              <Link href="/vinyl-material-estimator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-emerald-300 to-emerald-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-emerald-200 hover:to-emerald-400">
                Open material estimator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">What to do if you&apos;re already short</h2>
          <p className="leading-relaxed">
            Stuck mid-job with no film left? Damage control:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Check the batch number</strong> on your original roll before ordering more. Give it to your supplier and ask for the same batch if any stock remains.</li>
            <li className="list-disc"><strong className="text-white">Prioritize hidden panels</strong> for any slightly-off film — door jambs, lower areas, places not viewed side-by-side with original film.</li>
            <li className="list-disc"><strong className="text-white">Don&apos;t mix batches on the same visible body line.</strong> If you must, re-wrap the adjacent panel with new film so the whole line matches.</li>
            <li className="list-disc"><strong className="text-white">Keep the car covered and indoors</strong> while you wait. Half-wrapped vehicles with exposed adhesive edges collect dust and contamination fast.</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            Running out of vinyl costs you time, money, and sometimes a color-matched redo. The fix is simple: never buy the film you measured — buy the film you measured plus the right waste factor, rounded up, all from one batch.
          </p>
          <p className="leading-relaxed">
            Slightly over-ordering costs a few extra meters. Running short costs days of downtime and a frustrated client. The math is not close.
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