import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Ruler, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Wheel spacers vs new wheels: which do you actually need?",
  description: "When wheel spacers fix a fitment problem and when you need different wheels entirely. Costs, safety, and how to know before you spend money.",
  openGraph: {
    title: "Wheel spacers vs new wheels — which do you need?",
    description: "When spacers solve your fitment problem and when you need new wheels. Plus how to check before buying.",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[120px]" />
        <div className="absolute top-[600px] right-[5%] h-[450px] w-[450px] rounded-full bg-violet-400/10 blur-[120px]" />
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
              Fitment
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> May 22, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 7 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Spacers vs new wheels: <span className="bg-gradient-to-r from-cyan-200 via-violet-300 to-cyan-200 bg-clip-text text-transparent">which do you need?</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            Your wheels sit too far in and look sunken in the arches. Do you spend $120 on spacers or $2,000 on new wheels? The answer depends entirely on <strong className="text-white">why</strong> they sit wrong — and getting it wrong wastes real money.
          </p>
        </div>

        <div className="mb-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6 backdrop-blur-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-cyan-300">Quick decision guide</p>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Wheels sit too far in (tuck)</td>
                <td className="py-2 text-right font-medium text-white">Spacers work</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Wheels poke out / rub fender</td>
                <td className="py-2 text-right font-medium text-white">New wheels needed</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Wrong bolt pattern</td>
                <td className="py-2 text-right font-medium text-white">New wheels (or adapters)</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Need 5-25mm correction</td>
                <td className="py-2 text-right font-medium text-white">Spacers work</td>
              </tr>
              <tr>
                <td className="py-2 text-zinc-400">Need 30mm+ correction</td>
                <td className="py-2 text-right font-medium text-white">New wheels better</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">What spacers actually do</h2>
          <p className="leading-relaxed">
            A wheel spacer sits between the hub and the wheel, pushing the wheel outward. It effectively reduces the wheel&apos;s offset — a 15mm spacer on a +35 offset wheel makes it behave like a +20 offset wheel.
          </p>
          <p className="leading-relaxed">
            That&apos;s the key insight: <strong className="text-white">spacers can only push wheels OUT, never in.</strong> If your problem is wheels sitting too deep in the arch, spacers are the perfect cheap fix. If your wheels already poke too far out, spacers make it worse.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">When spacers are the right call</h2>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Wheels look sunken</strong> and you want them flush with the fender</li>
            <li className="list-disc"><strong className="text-white">Small correction needed</strong> (5-25mm) — the practical sweet spot for spacers</li>
            <li className="list-disc"><strong className="text-white">Inner clearance issues</strong> — wheel rubbing suspension or brake caliper</li>
            <li className="list-disc"><strong className="text-white">Your wheels are otherwise perfect</strong> — right size, style, and bolt pattern</li>
          </ul>
          <p className="leading-relaxed">
            At $50-150 a pair, hub-centric spacers from a reputable brand are a legitimate, safe solution used on everything from track cars to show builds.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">When you need new wheels</h2>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Wheels already poke or rub</strong> — spacers can&apos;t pull them in, only new wheels with higher offset fix this</li>
            <li className="list-disc"><strong className="text-white">Wrong bolt pattern entirely</strong> — adapters exist but stack thickness and add risk</li>
            <li className="list-disc"><strong className="text-white">You need 30mm+ correction</strong> — spacers that thick require longer studs and careful engineering</li>
            <li className="list-disc"><strong className="text-white">The wheels are the wrong width</strong> for the tire or look you want</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">The safety conversation</h2>
          <p className="leading-relaxed">
            Spacers get a bad reputation, but the issue is almost always cheap parts or bad installation, not the concept itself. To use them safely:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Use hub-centric spacers</strong> that match your hub bore exactly — never slip-on bolt-centric junk</li>
            <li className="list-disc"><strong className="text-white">Ensure enough stud engagement</strong> — for thick spacers you need extended studs or bolts</li>
            <li className="list-disc"><strong className="text-white">Torque to spec</strong> and re-check after the first 50-100 miles</li>
            <li className="list-disc"><strong className="text-white">Buy from reputable brands</strong> — this is not the place to save $30</li>
          </ul>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-cyan-400/40 via-cyan-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Ruler className="h-5 w-5 text-cyan-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-cyan-300">Know before you spend</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">See exactly how spacers change your fitment</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Our free Wheel Fitment Calculator lets you adjust offset and see poke, tuck, and rubbing zones on a live diagram. Test a spacer&apos;s effect before you buy — or confirm you actually need new wheels.
              </p>
              <Link href="/wheel-fitment-calculator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-cyan-300 to-cyan-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-cyan-200 hover:to-cyan-400">
                Open fitment calculator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">The cost comparison</h2>
          <p className="leading-relaxed">
            For a pure stance/flushness fix where your current wheels are otherwise right:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Quality spacers:</strong> $50-150 per pair, $100-300 for all four corners</li>
            <li className="list-disc"><strong className="text-white">Extended studs/bolts</strong> (if needed): $40-100</li>
            <li className="list-disc"><strong className="text-white">New wheels:</strong> $800-3,000+ a set, plus mounting and balancing</li>
          </ul>
          <p className="leading-relaxed">
            If spacers solve your problem, they&apos;re a 10x cheaper fix. The mistake is buying spacers for a problem they can&apos;t solve — like trying to fix poke or a rubbing fender by pushing the wheel further out.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            If your wheels sit too far in and everything else about them is right, spacers are the smart, cheap fix. If they poke, rub, or have the wrong specs, no spacer will save you — you need different wheels.
          </p>
          <p className="leading-relaxed">
            Before spending a dollar either way, model the change. Knowing your exact poke and clearance numbers turns a $2,000 guess into a $120 certainty.
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