import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Layers, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "My wrap is bubbling and lifting after a week. Here's why.",
  description: "The real causes of vinyl bubbles, edge lifting, and tunneling after install — bad prep, no post-heat, wrong film — and how to prevent each one.",
  openGraph: {
    title: "Wrap bubbling and lifting after a week — the fix",
    description: "Why fresh wraps bubble, tunnel, and lift at edges, and how to prevent every cause.",
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
              Troubleshooting
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> May 21, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 7 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            My wrap is bubbling and lifting <span className="bg-gradient-to-r from-emerald-200 via-red-300 to-emerald-200 bg-clip-text text-transparent">after a week.</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            The car looked perfect when it left the shop. Seven days later there are bubbles on the hood and the edges are creeping up at the door handles. Almost always, the cause traces back to one of four mistakes — and all of them are preventable.
          </p>
        </div>

        <div className="mb-10 rounded-2xl border border-red-400/20 bg-red-400/5 p-6 backdrop-blur-xl">
          <div className="mb-3 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-red-300" />
            <p className="text-xs font-medium uppercase tracking-wider text-red-300">Symptom → cause</p>
          </div>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-2 text-zinc-400">Edges lifting at handles/trim</td>
                <td className="py-2 text-right font-medium text-white">No post-heat / no edge seal</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-2 text-zinc-400">Bubbles appearing days later</td>
                <td className="py-2 text-right font-medium text-white">Trapped moisture or solvent</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-2 text-zinc-400">Tunneling / channels under film</td>
                <td className="py-2 text-right font-medium text-white">Pre-stretched, then relaxed</td>
              </tr>
              <tr>
                <td className="py-2 text-zinc-400">Film not sticking at all</td>
                <td className="py-2 text-right font-medium text-white">Contaminated surface (prep failure)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">Cause 1: Skipped or rushed prep</h2>
          <p className="leading-relaxed">
            This is the number one cause of early failure. Vinyl adhesive needs a perfectly clean, contaminant-free surface to bond. Any wax, grease, silicone, or dust left behind means the film is sticking to the contaminant, not the paint.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">The fix:</strong> a full decontamination — wash, clay bar, then a thorough IPA (isopropyl alcohol) wipe-down on every panel right before install. Pay special attention to door jambs, edges, and recesses where old wax hides.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Cause 2: No post-heat on edges</h2>
          <p className="leading-relaxed">
            Vinyl has &quot;memory.&quot; When you stretch it around a curve or into a recess, it wants to return to its original flat shape. <strong className="text-white">Post-heating</strong> — bringing the film to its activation temperature with a heat gun — removes that memory so it stays put.
          </p>
          <p className="leading-relaxed">
            Skip post-heat and the film slowly pulls back over the following days. That&apos;s why edges look fine on day one and lift by day seven. Every stretched area and every edge must be heat-set to the manufacturer&apos;s spec (usually around 90-110°C / 195-230°F).
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Cause 3: Trapped moisture or solvent</h2>
          <p className="leading-relaxed">
            Bubbles that appear days after install — especially small, scattered ones — are often outgassing. If the surface was even slightly damp during install, or if solvent-based adhesive wasn&apos;t given time to off-gas, vapor gets trapped under the film and forms bubbles as it escapes.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">The fix:</strong> install on a fully dry surface in a climate-controlled bay. Small bubbles can sometimes be worked out with a heat gun and a pin-prick release, but prevention is the only real cure.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Cause 4: Over-stretching</h2>
          <p className="leading-relaxed">
            Pulling the film hard to cover a tricky area feels efficient in the moment, but over-stretched vinyl thins out and fights to relax. Days later it tunnels, lifts, or distorts. This is especially common around bumpers and deep curves.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">The fix:</strong> use relief cuts, work in sections, and let the film do the work with heat rather than brute force. If you&apos;re stretching more than the manufacturer recommends, you need more material, not more pull — which starts with ordering enough film in the first place.
          </p>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-emerald-400/40 via-emerald-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Layers className="h-5 w-5 text-emerald-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-emerald-300">Don&apos;t let short film force over-stretching</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Order enough vinyl to work properly</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Over-stretching often happens because installers are trying to stretch too little film across too much car. Our free Vinyl Material Estimator calculates the right amount with proper waste factor so you always have room to work.
              </p>
              <Link href="/vinyl-material-estimator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-emerald-300 to-emerald-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-emerald-200 hover:to-emerald-400">
                Open material estimator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Can you fix it after the fact?</h2>
          <p className="leading-relaxed">
            Sometimes — depending on the cause and how early you catch it:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Lifting edges:</strong> clean underneath, re-apply heat, and re-seal. If the adhesive picked up contamination, that section needs replacing.</li>
            <li className="list-disc"><strong className="text-white">Small bubbles:</strong> heat and squeegee out, or release with a fine pin and press flat.</li>
            <li className="list-disc"><strong className="text-white">Tunneling from over-stretch:</strong> usually needs the panel re-done. The film&apos;s memory is already compromised.</li>
            <li className="list-disc"><strong className="text-white">Prep failure (won&apos;t stick):</strong> no rescue. Strip, re-prep, and re-wrap the affected panels.</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">How to prevent all of it</h2>
          <p className="leading-relaxed">
            Every early-failure cause comes down to discipline, not talent:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc">Decontaminate fully and IPA-wipe right before install</li>
            <li className="list-disc">Install in a dry, climate-controlled space</li>
            <li className="list-disc">Post-heat every edge and stretched area to spec</li>
            <li className="list-disc">Use relief cuts instead of over-stretching</li>
            <li className="list-disc">Order enough film so you&apos;re never tempted to stretch thin</li>
            <li className="list-disc">Do a 24-hour QC check before handing the car back</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            A wrap that bubbles or lifts within a week is almost never a film defect — it&apos;s a process problem. Clean surface, proper heat, no over-stretching, dry conditions. Nail those four and early failures basically disappear.
          </p>
          <p className="leading-relaxed">
            The shops with the best reputations aren&apos;t the fastest installers. They&apos;re the ones whose wraps still look perfect at the one-year mark.
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