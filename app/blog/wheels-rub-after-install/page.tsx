import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Ruler, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "My wheels rub after install. Here's how to fix it (and prevent it).",
  description: "Why new wheels rub fenders or stick out too far, how to diagnose the exact problem, and a free fitment calculator that prevents it before you buy.",
  openGraph: {
    title: "My wheels rub after install — here's the fix",
    description: "Diagnose offset, poke, and clearance issues. Plus how to spec wheels right the first time.",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[120px]" />
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
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-cyan-300">
              Troubleshooting
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> May 19, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 6 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            My wheels rub after install. <span className="bg-gradient-to-r from-cyan-200 via-red-300 to-cyan-200 bg-clip-text text-transparent">Here&apos;s why.</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            You unboxed a new set of wheels, mounted them up, took the car off the lift, and heard the worst sound: <strong className="text-white">rubbing</strong>. The fix is rarely &quot;just hammer the fender.&quot; Here&apos;s how to diagnose what actually went wrong.
          </p>
        </div>

        <div className="mb-10 rounded-2xl border border-red-400/20 bg-red-400/5 p-6 backdrop-blur-xl">
          <div className="mb-3 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-red-300" />
            <p className="text-xs font-medium uppercase tracking-wider text-red-300">The 4 ways wheels rub</p>
          </div>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-2 text-zinc-400">Fender rub at full lock</td>
                <td className="py-2 text-right font-medium text-white">Wheel too wide / offset too low</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-2 text-zinc-400">Inner fender liner rub</td>
                <td className="py-2 text-right font-medium text-white">Offset too high (backspacing too deep)</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-2 text-zinc-400">Rubbing over bumps</td>
                <td className="py-2 text-right font-medium text-white">Suspension compresses, no clearance</td>
              </tr>
              <tr>
                <td className="py-2 text-zinc-400">Tire stretch / sidewall touches</td>
                <td className="py-2 text-right font-medium text-white">Tire too wide for wheel</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">First: diagnose where it&apos;s rubbing</h2>
          <p className="leading-relaxed">
            Don&apos;t start cutting metal yet. The fix depends entirely on which part of the tire is hitting which part of the car. Spend 5 minutes finding the contact point.
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Mark the tire</strong> with chalk in 4 spots around the sidewall</li>
            <li className="list-disc"><strong className="text-white">Drive over a speed bump</strong> at low speed, then check where the chalk wore off</li>
            <li className="list-disc"><strong className="text-white">Turn the wheel full lock both directions</strong> and inspect the fender liner</li>
            <li className="list-disc"><strong className="text-white">Push down on the corner</strong> to simulate suspension compression</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">If it&apos;s rubbing the outer fender lip</h2>
          <p className="leading-relaxed">
            This is the most common issue. The wheel sits too far outboard — either the offset is too low or the wheel is too wide.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Quick fixes</strong> (without changing wheels):
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Fender rolling</strong> — flattens the inner lip. $50-200 per fender. Best ROI fix.</li>
            <li className="list-disc"><strong className="text-white">Fender pulling</strong> — physically pulls the fender outward. More aggressive.</li>
            <li className="list-disc"><strong className="text-white">Lower-profile tires</strong> — shorter sidewall = less rubbing on bumps.</li>
            <li className="list-disc"><strong className="text-white">Smaller spacers in reverse</strong> — won&apos;t help if you&apos;re running spacers already.</li>
          </ul>
          <p className="leading-relaxed">
            <strong className="text-white">Permanent fix:</strong> wheels with higher offset (more positive ET number) or narrower wheels.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">If it&apos;s rubbing the inner fender liner</h2>
          <p className="leading-relaxed">
            The wheel sits too far inboard. Backspacing is too deep, or you&apos;ve gone wider without adjusting offset to compensate.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Quick fixes</strong>:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Wheel spacers</strong> — push the wheel outboard 5-25mm. $50-150 per pair.</li>
            <li className="list-disc"><strong className="text-white">Trim the fender liner</strong> — cuts away plastic, doesn&apos;t affect structure. Free.</li>
            <li className="list-disc"><strong className="text-white">Camber adjustment</strong> — angles the top of the tire inward. Limited effect.</li>
          </ul>
          <p className="leading-relaxed">
            <strong className="text-white">Permanent fix:</strong> wheels with lower offset (more negative ET) or different backspacing.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">If it&apos;s only rubbing over bumps</h2>
          <p className="leading-relaxed">
            Static measurements look fine, but suspension compression eats your buffer. This is brutal because it usually only happens at the worst times (passengers, full tank, speed bumps at full speed).
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Raise ride height</strong> — coilovers or stock springs. Adds 10-20mm clearance instantly.</li>
            <li className="list-disc"><strong className="text-white">Stiffer springs/dampers</strong> — reduces compression travel.</li>
            <li className="list-disc"><strong className="text-white">Bump stops</strong> — limits how far the suspension can compress.</li>
            <li className="list-disc"><strong className="text-white">Smaller tire diameter</strong> — last resort, changes gearing.</li>
          </ul>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-cyan-400/40 via-cyan-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Ruler className="h-5 w-5 text-cyan-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-cyan-300">Prevent this next time</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Check fitment before the wheels arrive</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Our free Wheel Fitment Calculator shows poke, backspacing, and rubbing zones on a live diagram. Adjust offset and tire size before you buy.
              </p>
              <Link href="/wheel-fitment-calculator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-cyan-300 to-cyan-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-cyan-200 hover:to-cyan-400">
                Open fitment calculator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">The fitment formula every shop should know</h2>
          <p className="leading-relaxed">
            Poke and tuck are both measured in millimeters from the hub centerline. To predict rubbing:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Poke</strong> = (wheel width ÷ 2) − offset</li>
            <li className="list-disc"><strong className="text-white">If poke &gt; fender clearance:</strong> guaranteed rub</li>
            <li className="list-disc"><strong className="text-white">If poke &gt; clearance − 10mm:</strong> rubs on bumps</li>
            <li className="list-disc"><strong className="text-white">If poke &lt; clearance − 25mm:</strong> wheels sit too far in (deep tuck)</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">When to give up and re-spec</h2>
          <p className="leading-relaxed">
            If you&apos;ve already done fender rolling, spacers, and lowered the car — and it still rubs hard — you bought the wrong wheels. It happens. Eat the loss, sell them on Facebook Marketplace, and use a fitment calculator before buying the next set.
          </p>
          <p className="leading-relaxed">
            The cost of guessing wrong on wheels: $500-2,000 in spacers, fender work, and tire damage. The cost of getting it right the first time: <strong className="text-white">free.</strong>
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