import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Layers, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Wrap removal pulled my paint off. Here's why (and how to prevent it).",
  description: "Why vinyl wrap removal sometimes damages paint, which situations are high-risk, and the safe removal method that protects the surface underneath.",
  openGraph: {
    title: "Wrap removal damaged my paint — here's the fix",
    description: "Why wrap removal pulls paint, which cars are high-risk, and how to remove vinyl safely.",
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
              <Calendar className="h-3 w-3" /> May 24, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 7 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            &quot;Wrap removal pulled my <span className="bg-gradient-to-r from-emerald-200 via-red-300 to-emerald-200 bg-clip-text text-transparent">paint off.&quot;</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            One of the biggest selling points of wraps is that they come off cleanly and protect the paint underneath. So when removal lifts paint, primer, or leaves a mess, something went wrong — usually before the wrap ever went on. Here&apos;s why it happens and how to prevent it.
          </p>
        </div>

        <div className="mb-10 rounded-2xl border border-red-400/20 bg-red-400/5 p-6 backdrop-blur-xl">
          <div className="mb-3 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-red-300" />
            <p className="text-xs font-medium uppercase tracking-wider text-red-300">High-risk situations</p>
          </div>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-2 text-zinc-400">Wrap applied over repainted panels</td>
                <td className="py-2 text-right font-medium text-white">High risk</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-2 text-zinc-400">Cheap calendered vinyl left on too long</td>
                <td className="py-2 text-right font-medium text-white">High risk</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-2 text-zinc-400">Wrap over peeling or chipped paint</td>
                <td className="py-2 text-right font-medium text-white">High risk</td>
              </tr>
              <tr>
                <td className="py-2 text-zinc-400">Quality cast film on factory paint</td>
                <td className="py-2 text-right font-medium text-emerald-300">Low risk</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">It&apos;s almost never the factory paint</h2>
          <p className="leading-relaxed">
            Healthy, original factory paint is extremely durable. Properly applied vinyl will not pull factory paint off — the adhesive bond between film and paint is weaker than the bond between paint and the car. When paint comes off during removal, it&apos;s a sign the paint was already compromised.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">The real causes</h2>

          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">1. Repainted panels with weak adhesion</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Aftermarket resprays — especially cheap ones or panels fixed after an accident — often have poor adhesion to the surface beneath. The wrap adhesive can be stronger than that weak paint bond, so removal lifts the respray. This is the single most common cause.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">2. Vinyl left on far too long</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Cheap calendered vinyl past its lifespan gets brittle and its adhesive cures hard. After years of UV, the film fuses to the surface and tears into tiny pieces on removal, often taking clear coat with it.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">3. Wrapping over already-failing paint</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                If paint was already chipping, bubbling, or oxidized when the wrap went on, removal simply exposes what was already failing. The wrap didn&apos;t cause it — it revealed it.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">4. Too much heat, too aggressive</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Overheating during removal can soften paint, and ripping film off at a sharp angle instead of low and slow increases stress on the surface. Technique matters.
              </p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">The safe removal method</h2>
          <p className="leading-relaxed">
            Done right, removal is low-and-slow with gentle heat:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Warm the film gently</strong> with a heat gun to soften the adhesive — warm, not scorching.</li>
            <li className="list-disc"><strong className="text-white">Peel at a low angle</strong> (around 15-20°), not straight out. Low angle keeps stress off the paint.</li>
            <li className="list-disc"><strong className="text-white">Pull slowly and steadily</strong> — quick yanks tear film and stress the surface.</li>
            <li className="list-disc"><strong className="text-white">Keep film at body temperature</strong> as you go; cold film snaps and leaves adhesive.</li>
            <li className="list-disc"><strong className="text-white">Remove leftover adhesive</strong> with adhesive remover and a microfiber, never a scraper on paint.</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">How to protect yourself as a shop</h2>
          <p className="leading-relaxed">
            Removal liability is real. Protect your shop and set client expectations before you ever touch the car:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Inspect and document</strong> the paint before removal. Photograph any existing chips, respray signs, or weak areas.</li>
            <li className="list-disc"><strong className="text-white">Ask about repaint history.</strong> If the car&apos;s been in an accident or resprayed, warn the client that aftermarket paint can lift.</li>
            <li className="list-disc"><strong className="text-white">Use a removal disclaimer</strong> for high-risk vehicles, in writing, signed before work starts.</li>
            <li className="list-disc"><strong className="text-white">Never promise zero risk</strong> on a car with unknown paint history.</li>
          </ul>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-emerald-400/40 via-emerald-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Layers className="h-5 w-5 text-emerald-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-emerald-300">Planning a re-wrap after removal?</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Estimate the new vinyl in seconds</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Once the old wrap is off, our free Vinyl Material Estimator calculates exactly how much new film to order, with the right waste factor for your finish.
              </p>
              <Link href="/vinyl-material-estimator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-emerald-300 to-emerald-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-emerald-200 hover:to-emerald-400">
                Open material estimator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">What to do if paint already came off</h2>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Stop immediately</strong> and assess how deep the damage goes — clear coat only, or down to primer/metal.</li>
            <li className="list-disc"><strong className="text-white">Document everything</strong> with photos for the client conversation and any insurance.</li>
            <li className="list-disc"><strong className="text-white">Be honest with the client</strong> about what likely caused it (usually pre-existing repaint or paint condition).</li>
            <li className="list-disc"><strong className="text-white">Refer to a body shop</strong> for repaint of affected panels rather than attempting a patch.</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            Quality vinyl on healthy factory paint removes cleanly — that&apos;s the whole point of a wrap. Paint damage on removal almost always means the paint was already compromised: a respray, age, or pre-existing failure. The defense is inspection, honest communication, and patient low-and-slow technique.
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