import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "I quoted a wrap too low and lost $2,000. Here's the fix.",
  description: "Why new wrap shops underquote jobs, the exact math that prevents it, and a free calculator that builds margin into every quote automatically.",
  openGraph: {
    title: "I quoted too low and lost $2,000 on one wrap",
    description: "The real reason new wrap shops lose money on quotes and how to fix it permanently.",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-amber-400/20 blur-[120px]" />
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
            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-amber-300">
              Business
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> May 19, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 6 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            &quot;I quoted a wrap too low and <span className="bg-gradient-to-r from-amber-200 via-red-300 to-amber-200 bg-clip-text text-transparent">lost $2,000.&quot;</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            If you&apos;ve been wrapping for less than two years, this has probably happened to you. A simple-looking job that turned into a money pit. Here&apos;s why it keeps happening and the math that stops it.
          </p>
        </div>

        <div className="mb-10 rounded-2xl border border-red-400/20 bg-red-400/5 p-6 backdrop-blur-xl">
          <div className="mb-3 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-red-300" />
            <p className="text-xs font-medium uppercase tracking-wider text-red-300">The real story</p>
          </div>
          <p className="text-sm leading-relaxed text-zinc-300">
            New installer quotes a full Tesla Model 3 wrap at <strong className="text-white">$2,800</strong>. Seems fair. Client agrees. Three weeks later, the install took 48 hours instead of 30, vinyl waste was 35% instead of 15%, and one panel had to be redone. Final cost: <strong className="text-white">$4,600</strong>. Profit: <strong className="text-red-300">negative $1,800</strong>.
          </p>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">Why new shops underquote</h2>
          <p className="leading-relaxed">
            Every new wrap shop makes the same three mistakes. Usually all at once.
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Mistake 1: Forgetting waste factor</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                New installers buy 18 meters of vinyl for an 18-meter job. Veterans buy 22. A standard gloss wrap loses 10-15% to trimming, repositioning, and mistakes. Chrome and color-shift waste 30-40%.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Mistake 2: Quoting labor at face value</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                You estimate 30 hours, charge $45/hr, quote $1,350. But that&apos;s before complexity surprises (recessed handles, chrome trim, bad paint underneath). Real labor often runs 30-50% over plan. Quote with a buffer or eat the cost.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Mistake 3: Ignoring overhead</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Bay rent, insurance, software, knives, magnets, IPA, paper towels. Every job burns $50-200 in invisible costs. New shops forget to bake this into hourly rates. Veterans charge $75/hr instead of $45/hr for the same install.
              </p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">The math that fixes it</h2>
          <p className="leading-relaxed">
            A profitable quote follows a simple formula. Most shops get it wrong by missing 1 or 2 of these five factors:
          </p>

          <div className="my-6 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 backdrop-blur-xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-amber-300">The formula</p>
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-2 text-zinc-400">1. Material</td>
                  <td className="py-2 text-right font-medium text-white">vinyl × (1 + waste%)</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 text-zinc-400">2. Labor</td>
                  <td className="py-2 text-right font-medium text-white">hours × hourly rate</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 text-zinc-400">3. Complexity</td>
                  <td className="py-2 text-right font-medium text-white">+10% to +50%</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 text-zinc-400">4. Overhead</td>
                  <td className="py-2 text-right font-medium text-white">+15% of subtotal</td>
                </tr>
                <tr>
                  <td className="py-2 text-zinc-400">5. Margin</td>
                  <td className="py-2 text-right font-medium text-white">+20% to +40%</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-4 text-xs text-zinc-500">Skip any of these = lose money on the job.</p>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Redoing the Tesla quote correctly</h2>
          <p className="leading-relaxed">
            Same Model 3 wrap, this time with all factors in:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Material:</strong> 18m vinyl + 15% waste = 20.7m × $40 = $828</li>
            <li className="list-disc"><strong className="text-white">Labor:</strong> 35 hours × $60/hr = $2,100</li>
            <li className="list-disc"><strong className="text-white">Complexity (Tesla = moderate):</strong> +20% on labor = $420</li>
            <li className="list-disc"><strong className="text-white">Overhead:</strong> +15% on subtotal = $501</li>
            <li className="list-disc"><strong className="text-white">Margin (30%):</strong> $1,154</li>
          </ul>
          <p className="leading-relaxed">
            <strong className="text-white">Real quote: $5,003</strong> — not $2,800. The job now has actual profit built in, plus protection for the inevitable surprises.
          </p>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-amber-400/40 via-amber-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-amber-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-amber-300">Stop doing this math by hand</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Build the right quote in 60 seconds</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Our free Wrap Cost Calculator bakes all 5 factors in automatically. Adjust sliders, pick complexity, set your margin — get a client-ready PDF quote instantly.
              </p>
              <Link href="/wrap-cost-calculator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-amber-200 hover:to-amber-400">
                Open the calculator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">How to recover when you&apos;ve already underquoted</h2>
          <p className="leading-relaxed">
            If you&apos;re mid-job and realize the quote is too low, you have three options:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Eat the loss this once</strong> and learn. Tell the client there were unexpected complications but you&apos;re honoring the quote. Their referrals matter more than $1,500.</li>
            <li className="list-disc"><strong className="text-white">Have an honest conversation.</strong> &quot;The factory paint underneath needs prep we didn&apos;t see in the original quote. Here&apos;s a revised number.&quot; Most clients accept this if it&apos;s under 20% extra and explained upfront.</li>
            <li className="list-disc"><strong className="text-white">Cut scope.</strong> Skip jambs, mirrors, or interior panels and finish what was quoted. Be transparent.</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">The bigger lesson</h2>
          <p className="leading-relaxed">
            Wrap pricing isn&apos;t a guess. It&apos;s a formula. Every veteran shop charges more than newcomers because they&apos;ve done this math the hard way — usually after losing money on 3-5 jobs in their first year.
          </p>
          <p className="leading-relaxed">
            Use the formula. Build in margin. Add overhead. Stop quoting from gut feel. Your business will thank you in year 2.
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