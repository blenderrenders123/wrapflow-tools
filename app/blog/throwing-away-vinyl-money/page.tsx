import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator, TrendingDown } from "lucide-react";

export const metadata: Metadata = {
  title: "You're throwing away $4,000 of vinyl a year. Here's the math.",
  description: "How much money the average wrap shop loses to vinyl scrap each year, the four biggest sources of waste, and what to actually do about it.",
  openGraph: {
    title: "You're throwing away $4,000 of vinyl a year",
    description: "The real cost of vinyl waste in a wrap shop — and how to cut it in half.",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-yellow-400/20 blur-[120px]" />
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
            <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-yellow-300">
              Shop economics
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> May 30, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 7 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            You&apos;re throwing away <span className="bg-gradient-to-r from-yellow-200 via-amber-200 to-yellow-200 bg-clip-text text-transparent">$4,000</span> of vinyl a year
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            Every wrap shop has a scrap pile. Most owners glance at it and shrug — it&apos;s part of the cost of doing business, right? Run the actual math and the number is bigger than you think. For most small shops, vinyl waste is the single largest controllable expense after labor.
          </p>
        </div>

        {/* HERO IMAGE */}
        <figure className="mb-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1200&q=80"
              alt="Vinyl rolls in a wrap shop"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <figcaption className="mt-2 text-center text-xs text-zinc-500">Every offcut in your scrap bin has a dollar value. Most shops never add it up.</figcaption>
        </figure>

        {/* KEY TAKEAWAYS */}
        <div className="mb-10 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6 backdrop-blur-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-yellow-300">Key takeaways</p>
          <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
            <li>• Average waste in a wrap shop is 25 to 40% of every roll</li>
            <li>• At 8 jobs a month, that&apos;s typically $3,000 to $5,000 a year per shop</li>
            <li>• Most waste comes from four specific habits, all fixable</li>
            <li>• Cutting waste in half is realistic without buying new equipment</li>
            <li>• A plotter or laminator pays itself back faster than most owners think</li>
          </ul>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">The math nobody runs</h2>
          <p className="leading-relaxed">
            A typical 60-inch wide, 50-yard roll of cast vinyl costs around $450. That roll has roughly 83 square yards of usable material. On a full wrap job, the panels you actually use cover about 50 to 60 of those square yards. The rest — between 23 and 33 square yards — ends up in the scrap bin.
          </p>
          <p className="leading-relaxed">
            Multiply that by 8 jobs a month, 12 months a year, and the cost per square yard, and you get a number that&apos;s usually somewhere between $3,000 and $5,000 in pure vinyl waste annually. For a shop netting maybe $60,000 to $100,000 a year, that&apos;s 4 to 8% of net revenue going straight to the dumpster.
          </p>

          {/* PULL QUOTE */}
          <blockquote className="my-10 border-l-2 border-yellow-400/50 pl-6">
            <p className="text-xl font-medium leading-relaxed text-white">
              &quot;Most shop owners I talk to think their waste is around 10%. When we actually measure, it&apos;s closer to 30%.&quot;
            </p>
          </blockquote>

          <h2 className="mt-12 text-2xl font-medium text-white">Where the money actually goes</h2>
          <p className="leading-relaxed">
            Vinyl waste comes from four specific places. Each one is fixable independently.
          </p>

          <h3 className="mt-8 text-xl font-medium text-white">1. Oversized safety margins</h3>
          <p className="leading-relaxed">
            The biggest single source. Installers cut panels 4 to 6 inches larger than needed &quot;just in case.&quot; On a hood panel, that&apos;s maybe an extra half-square-yard per cut — about $5 of material per panel, on every panel of every job. Across a full wrap with 30+ panels, the safety margin alone can cost $150.
          </p>
          <p className="leading-relaxed">
            Fix: template the vehicle once, measure twice, cut to 2 inches of margin max. Confidence comes from experience, not from extra vinyl.
          </p>

          <h3 className="mt-8 text-xl font-medium text-white">2. Cutting one panel at a time</h3>
          <p className="leading-relaxed">
            Panels cut individually, one after the other from the front of the roll, leave huge unusable strips between them. The same panels, nested together by a plotter or planned manually before cutting, can fit in 30 to 40% less material.
          </p>
          <p className="leading-relaxed">
            Fix: lay out all panels for a job on paper or in cutting software first. Nest the small ones into the gaps between large ones.
          </p>

          <figure className="my-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80"
                alt="A workshop with cutting and design equipment"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-zinc-500">A $3,500 plotter recovers itself in about 7 months for the average 8-jobs-a-month shop.</figcaption>
          </figure>

          <h3 className="mt-8 text-xl font-medium text-white">3. Failed installs and re-cuts</h3>
          <p className="leading-relaxed">
            Every botched panel is a double cost: the wasted vinyl plus the labor to redo it. The average shop wastes 1 to 2 panels per job to install errors — bubbles that couldn&apos;t be worked out, tears from over-stretching, wrong-side application of directional film.
          </p>
          <p className="leading-relaxed">
            Fix: practice on offcuts before applying to the car. The 10 minutes of practice saves an hour of re-do.
          </p>

          <h3 className="mt-8 text-xl font-medium text-white">4. Unsold offcuts</h3>
          <p className="leading-relaxed">
            Most shops throw away pieces that are still 1 to 3 square yards in usable size. These pieces have real value — accent jobs, mirror caps, hood inserts, small decals. Some shops bundle them and sell them as &quot;practice packs&quot; to apprentices and hobbyists for $20 to $40 each.
          </p>
          <p className="leading-relaxed">
            Fix: organize a shelf for offcuts above 0.5 sq yd. Sell them, use them on small custom requests, or hand them to your social media person for content.
          </p>

          {/* WASTE TABLE */}
          <h2 className="mt-12 text-2xl font-medium text-white">What waste actually costs by shop size</h2>
          <div className="my-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6 backdrop-blur-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-zinc-500">
                  <th className="py-2 text-left text-xs uppercase tracking-wider font-medium">Jobs / month</th>
                  <th className="py-2 text-right text-xs uppercase tracking-wider font-medium">Annual waste (30%)</th>
                  <th className="py-2 text-right text-xs uppercase tracking-wider font-medium">If cut to 15%</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">4 / month</td>
                  <td className="py-2 text-right font-medium text-white">$2,200</td>
                  <td className="py-2 text-right font-medium text-yellow-300">+$1,100</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">8 / month</td>
                  <td className="py-2 text-right font-medium text-white">$4,400</td>
                  <td className="py-2 text-right font-medium text-yellow-300">+$2,200</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">12 / month</td>
                  <td className="py-2 text-right font-medium text-white">$6,600</td>
                  <td className="py-2 text-right font-medium text-yellow-300">+$3,300</td>
                </tr>
                <tr>
                  <td className="py-2 text-zinc-400">20 / month</td>
                  <td className="py-2 text-right font-medium text-white">$11,000</td>
                  <td className="py-2 text-right font-medium text-yellow-300">+$5,500</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-3 text-xs text-zinc-500">Assumes $450/roll, 1.2 rolls average per job. Real numbers vary by film grade and job mix.</p>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">When equipment actually makes sense</h2>
          <p className="leading-relaxed">
            A plotter is the most common upgrade conversation. A decent entry-level cutter runs $2,500 to $4,500. For a shop doing 8+ jobs a month, the math is genuinely good: nesting cuts can save 25 to 30% of material per job, which on $400 of material per job is $100 to $120 saved. At 8 jobs a month, that&apos;s about $9,000 to $11,000 a year — paying for itself in 4 to 6 months.
          </p>
          <p className="leading-relaxed">
            Add the labor savings (no more freehand templating), and a plotter is usually the highest-ROI piece of equipment a small shop can buy. The same math applies to laminators, heat presses, and post-cure ovens — they just need volume to justify them.
          </p>

          {/* CTA */}
          <div className="my-12 rounded-2xl bg-gradient-to-br from-yellow-400/40 via-yellow-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-yellow-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-yellow-300">Run your own numbers</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">See what your shop actually loses to scrap</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Plug in your roll size, cost, jobs per month, and current usage. Our free Waste &amp; ROI Calculator shows you annual waste cost and the payback period on any equipment you&apos;re considering.
              </p>
              <Link href="/vinyl-waste-roi-calculator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-yellow-200 hover:to-yellow-400">
                Open waste calculator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* QUICK WINS BOX */}
          <div className="my-10 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 backdrop-blur-xl">
            <div className="mb-3 flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-emerald-300" />
              <p className="text-xs font-medium uppercase tracking-wider text-emerald-300">Quick wins this week</p>
            </div>
            <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
              <li>• Measure and record waste on the next 3 jobs to get your real baseline number</li>
              <li>• Reduce safety margins from 4 inches to 2 inches on the next install</li>
              <li>• Set up an offcut shelf, organized by size — sell anything over 1 sq yd</li>
              <li>• Lay out all panels on paper before cutting, even by hand</li>
            </ul>
          </div>

          {/* FAQ */}
          <h2 className="mt-12 text-2xl font-medium text-white">Frequently asked questions</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">How do I measure my actual waste percentage?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Track the total roll length used per job and the total panel area applied. The difference is waste. Do it for 3 to 5 jobs and average them. Most shops are shocked the first time.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Is 15% waste actually achievable?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">For a small shop doing manual cuts, 15 to 18% is the realistic floor. With a plotter and nesting software, top shops hit 8 to 12%. Below that you start cutting too tight and increasing failure rates.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Should I just charge more to cover waste?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">You already are — it&apos;s baked into your pricing. The question is whether you keep that money as profit or hand it back to the supplier with every order. Cutting waste is a direct margin increase, not a price-the-customer problem.</p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            The scrap pile in the corner of your shop is money. Not metaphorically — literally, in dollars, every month. The fix isn&apos;t one big thing; it&apos;s four small habits and maybe one piece of equipment. Run the numbers for your specific shop and the path forward becomes obvious. Most owners are leaving more on the floor than they&apos;d ever leave on the table in a negotiation.
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
