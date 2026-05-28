import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "How to start a vehicle wrap business in 2026 (complete guide)",
  description: "A complete step-by-step guide to starting a vehicle wrap business — startup costs, equipment, training, pricing, finding clients, and avoiding the mistakes that sink new shops.",
  openGraph: {
    title: "How to start a vehicle wrap business in 2026",
    description: "Startup costs, equipment, training, pricing, and finding clients — the complete guide.",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-amber-400/20 blur-[120px]" />
        <div className="absolute top-[600px] right-[5%] h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute top-[1200px] left-[5%] h-[400px] w-[400px] rounded-full bg-violet-400/10 blur-[120px]" />
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
              <Calendar className="h-3 w-3" /> May 28, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 12 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            How to start a <span className="bg-gradient-to-r from-amber-200 via-cyan-300 to-amber-200 bg-clip-text text-transparent">vehicle wrap business</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            The vehicle wrap industry is growing fast, and the barrier to entry is lower than most trades — but lower barrier doesn&apos;t mean easy. This is the complete, honest guide to starting a wrap business in 2026: what it costs, what you need, and the mistakes that sink most new shops in year one.
          </p>
        </div>

        {/* HERO IMAGE */}
        <figure className="mb-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1632823471565-1ecdf5c6d7f9?w=1200&q=80"
              alt="A vehicle wrap shop workspace"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <figcaption className="mt-2 text-center text-xs text-zinc-500">A clean, controlled workspace is the foundation of a wrap business.</figcaption>
        </figure>

        {/* KEY TAKEAWAYS */}
        <div className="mb-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 backdrop-blur-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-amber-300">Key takeaways</p>
          <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
            <li>• Realistic startup cost: $15,000–$50,000 depending on whether you rent a bay</li>
            <li>• Training matters more than equipment — bad installs kill reputations</li>
            <li>• Most new shops fail from underpricing, not lack of work</li>
            <li>• Profitability usually arrives in year 2, not month 2</li>
          </ul>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">Step 1: Learn the craft first</h2>
          <p className="leading-relaxed">
            This is the step most people skip, and it&apos;s the one that matters most. Wrapping looks simple in timelapse videos, but a clean install on compound curves, recesses, and edges takes real skill. A botched wrap that bubbles and peels in weeks doesn&apos;t just cost you that job — it costs you every referral that client would have sent.
          </p>
          <p className="leading-relaxed">
            Your options for learning:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Hands-on training courses</strong> — brands like 3M and Avery Dennison run certification programs; independent academies offer week-long intensives.</li>
            <li className="list-disc"><strong className="text-white">Apprenticing at an existing shop</strong> — the slowest path but the most thorough.</li>
            <li className="list-disc"><strong className="text-white">Deliberate self-practice</strong> — buy cheap practice vinyl and wrap junkyard panels until bumpers stop scaring you.</li>
          </ul>
          <p className="leading-relaxed">
            Plan on months of practice before you charge a customer. The cars you practice on should be your own or write-offs — never a paying client&apos;s daily driver while you&apos;re still learning.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Step 2: Understand the real startup costs</h2>
          <p className="leading-relaxed">
            Startup cost varies enormously based on one decision: do you work from a rented commercial bay or start smaller? Here&apos;s a realistic breakdown:
          </p>

          <div className="my-6 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 backdrop-blur-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-zinc-500">
                  <th className="py-2 text-left text-xs uppercase tracking-wider font-medium">Item</th>
                  <th className="py-2 text-right text-xs uppercase tracking-wider font-medium">Cost range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Training / certification</td>
                  <td className="py-2 text-right font-medium text-white">$1,500 – $5,000</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Tools (squeegees, knives, heat guns, IR lamp)</td>
                  <td className="py-2 text-right font-medium text-white">$1,000 – $3,000</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Initial vinyl stock</td>
                  <td className="py-2 text-right font-medium text-white">$2,000 – $5,000</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Bay rent &amp; deposit (if leasing)</td>
                  <td className="py-2 text-right font-medium text-white">$3,000 – $15,000</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Lighting &amp; climate control</td>
                  <td className="py-2 text-right font-medium text-white">$2,000 – $8,000</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Insurance &amp; licensing</td>
                  <td className="py-2 text-right font-medium text-white">$1,000 – $4,000</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Branding, website, marketing</td>
                  <td className="py-2 text-right font-medium text-white">$500 – $5,000</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium text-white">Realistic total</td>
                  <td className="py-2 text-right font-medium text-amber-300">$15,000 – $50,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed">
            You can start leaner by sharing a bay, working mobile, or sub-renting space in a detailing shop. Many successful installers started in a single rented bay before scaling up.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Step 3: Set up the right workspace</h2>
          <p className="leading-relaxed">
            Environment makes or breaks wrap quality. Vinyl needs a clean, dust-free, climate-controlled space — film won&apos;t adhere properly in cold, and dust contamination causes bubbles. The essentials:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Climate control:</strong> ideally 65-75°F (18-24°C), low humidity.</li>
            <li className="list-disc"><strong className="text-white">Bright, even lighting:</strong> you can&apos;t fix what you can&apos;t see. Daylight-balanced LED strips on all sides.</li>
            <li className="list-disc"><strong className="text-white">Space to walk fully around the vehicle</strong> with room for the film roll and tools.</li>
            <li className="list-disc"><strong className="text-white">Clean floors and minimal airflow</strong> to keep dust out of the air during install.</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">Step 4: Choose your vinyl suppliers</h2>
          <p className="leading-relaxed">
            Stick with premium cast films from established brands. The major names — 3M, Avery Dennison, KPMF, and Hexis — all make professional-grade cast vinyl with strong durability and manufacturer backing. Cheap calendered films from unknown brands will save money upfront and destroy your reputation when they fail.
          </p>
          <p className="leading-relaxed">
            Build relationships with one or two distributors early. Good suppliers help with batch consistency, bulk pricing, and getting material fast when a job needs a redo.
          </p>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-amber-400/40 via-amber-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-amber-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-amber-300">Free tool for new shops</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Price your first jobs correctly</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Underpricing is the #1 killer of new wrap shops. Our free Wrap Cost Calculator builds material, labor, complexity, and margin into every quote — so you never lose money on a job. Plus PDF export for professional client quotes.
              </p>
              <Link href="/wrap-cost-calculator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-amber-200 hover:to-amber-400">
                Open cost calculator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Step 5: Price for profit, not just to win jobs</h2>
          <p className="leading-relaxed">
            Here&apos;s the trap nearly every new shop falls into: pricing low to win work, then realizing they made nothing — or lost money — after material, labor, and overhead. A profitable quote includes five things:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Material</strong> with a proper waste factor (10-40% depending on finish)</li>
            <li className="list-disc"><strong className="text-white">Labor</strong> at a rate that accounts for your skill and time</li>
            <li className="list-disc"><strong className="text-white">Complexity</strong> adjustment for difficult vehicles</li>
            <li className="list-disc"><strong className="text-white">Overhead</strong> — rent, insurance, supplies, software</li>
            <li className="list-disc"><strong className="text-white">Margin</strong> — your actual profit, not just covering costs</li>
          </ul>
          <p className="leading-relaxed">
            Veteran shops charge more than newcomers because they&apos;ve learned this the hard way. Charge what the work is worth from day one.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Step 6: Find your first clients</h2>
          <p className="leading-relaxed">
            With skills and pricing sorted, you need work. The fastest paths for a new shop:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Build a portfolio</strong> — wrap your own car and friends&apos; cars (at cost) to get photos.</li>
            <li className="list-disc"><strong className="text-white">Local social media</strong> — Instagram and Facebook are where wrap work gets discovered. Post every job.</li>
            <li className="list-disc"><strong className="text-white">Commercial fleets</strong> — local businesses with vans are repeat, high-value clients. One plumber with 5 vans beats 5 one-off cars.</li>
            <li className="list-disc"><strong className="text-white">Partner with detailers and body shops</strong> — they get wrap requests they can&apos;t fulfill.</li>
            <li className="list-disc"><strong className="text-white">Car meets and clubs</strong> — enthusiasts are your earliest adopters and loudest referrers.</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">Step 7: Understand the timeline to profitability</h2>
          <p className="leading-relaxed">
            Be honest with yourself about the runway. Most wrap businesses don&apos;t turn real profit in their first few months. Year one is about building skill, reputation, and a portfolio while covering costs. Profitability typically arrives in year two as referrals compound and you get faster on each job.
          </p>
          <p className="leading-relaxed">
            Have enough savings or income to survive that ramp. The shops that fail usually aren&apos;t bad at wrapping — they run out of money before the referrals kick in.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">The mistakes that sink new shops</h2>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Underpricing</strong> to win jobs, then losing money on every one.</li>
            <li className="list-disc"><strong className="text-white">Skipping prep</strong> to save time, causing wraps to fail and reputations to die.</li>
            <li className="list-disc"><strong className="text-white">Taking customer cars before you&apos;re ready</strong> — practice on your own first.</li>
            <li className="list-disc"><strong className="text-white">Buying cheap vinyl</strong> that fails and generates complaints.</li>
            <li className="list-disc"><strong className="text-white">No buffer for redos</strong> in pricing or scheduling.</li>
            <li className="list-disc"><strong className="text-white">Ignoring overhead</strong> when setting hourly rates.</li>
          </ul>

          {/* FAQ */}
          <h2 className="mt-12 text-2xl font-medium text-white">Frequently asked questions</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Do I need a license to wrap cars?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Requirements vary by region — most places need a general business license and liability insurance. Check your local regulations before taking paying work.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Can I start as a one-person operation?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Yes, many do — but large panels like roofs and full sides are much faster and cleaner with two people. Many solo installers bring in help for big jobs.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">How long until I&apos;m good enough to charge?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">It varies, but plan on months of dedicated practice. You&apos;re ready when you can wrap a full bumper cleanly without wrinkles or lifting.</p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            Starting a wrap business is genuinely achievable, but it rewards patience and craft over hustle and hype. Learn the skill properly, set up a clean workspace, use premium materials, price for real profit, and give yourself the runway to reach year two. Do those things and you&apos;ll be in the minority of shops that actually make it.
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