import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Plotter vs outsourcing: when the math actually works in your favor",
  description: "Should your wrap shop buy a plotter or keep outsourcing cuts? A real cost breakdown with the volume threshold where buying makes sense — and when outsourcing is still the smarter play.",
  openGraph: {
    title: "Plotter vs outsourcing: when does buying make sense?",
    description: "The real math behind the in-house vs outsource decision for wrap shops.",
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
              <Calendar className="h-3 w-3" /> June 1, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 8 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Plotter vs outsourcing: <span className="bg-gradient-to-r from-yellow-200 via-amber-200 to-yellow-200 bg-clip-text text-transparent">when the math actually works</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            Every wrap shop owner runs this calculation eventually: is it time to bring cutting in-house? The honest answer depends on a handful of numbers — most of them invisible until you actually do the math. Here&apos;s the real cost breakdown, with the threshold where buying makes sense and when outsourcing still wins.
          </p>
        </div>

        <figure className="mb-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80"
              alt="A workshop with cutting and design equipment"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <figcaption className="mt-2 text-center text-xs text-zinc-500">The decision usually comes down to monthly volume and one number most owners don&apos;t track: time saved.</figcaption>
        </figure>

        <div className="mb-10 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6 backdrop-blur-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-yellow-300">Key takeaways</p>
          <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
            <li>• A $3,000 entry-level plotter typically pays back in 5 to 7 months at 8+ jobs/month</li>
            <li>• Outsourcing costs $50 to $150 per job, but the real cost is wait time and revision delays</li>
            <li>• Material savings from nesting alone often cover the plotter monthly cost</li>
            <li>• Below 4 jobs/month, outsourcing usually still wins on cash flow</li>
            <li>• Above 12 jobs/month, not having a plotter is costing you 8 to 12% of revenue</li>
          </ul>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">What outsourcing actually costs</h2>
          <p className="leading-relaxed">
            The sticker price is the obvious number — most cut shops charge $50 to $150 per job depending on complexity. For a small shop doing 8 jobs a month, that&apos;s $400 to $1,200 monthly in cut fees alone. Annually: $4,800 to $14,400.
          </p>
          <p className="leading-relaxed">
            But that&apos;s just the visible cost. The hidden costs add up fast:
          </p>

          <h3 className="mt-8 text-xl font-medium text-white">Turnaround delay</h3>
          <p className="leading-relaxed">
            Most outsourced cuts take 1 to 3 business days. That&apos;s 1 to 3 days where the job is sitting still in your shop, taking up bay space, and pushing your booking schedule out. For a shop running close to capacity, that delay alone can cost you a job or two per month.
          </p>

          <h3 className="mt-8 text-xl font-medium text-white">Revision cycles</h3>
          <p className="leading-relaxed">
            If the cuts come back wrong — wrong dimensions, missing pieces, mirrored panels — you wait again. A two-revision job that should have shipped in 4 days takes 10 days. Multiply by the jobs in your pipeline and you start losing real money.
          </p>

          <h3 className="mt-8 text-xl font-medium text-white">Shipping or pickup</h3>
          <p className="leading-relaxed">
            Either you&apos;re paying for express shipping every job ($15 to $40), or you&apos;re driving across town to pick up. That&apos;s 30 to 60 minutes of someone&apos;s time, every single job.
          </p>

          <blockquote className="my-10 border-l-2 border-yellow-400/50 pl-6">
            <p className="text-xl font-medium leading-relaxed text-white">
              &quot;The cut fee is maybe 40% of the true cost of outsourcing. The rest is buried in time and waiting.&quot;
            </p>
          </blockquote>

          <h2 className="mt-12 text-2xl font-medium text-white">What a plotter actually costs</h2>
          <p className="leading-relaxed">
            Entry-level vinyl cutters from reputable brands run $2,500 to $4,500. Mid-tier plotters with optical eyes and contour cutting are $5,000 to $9,000. Top-tier production plotters from Graphtec, Roland, or Summa start at $12,000 and climb from there.
          </p>
          <p className="leading-relaxed">
            For a small shop doing under 20 jobs a month, the entry-level tier is plenty. Don&apos;t over-buy on capacity you won&apos;t use.
          </p>
          <p className="leading-relaxed">
            Ongoing costs are modest: blade replacements every few months ($30 to $60 each), a cutting mat every 6 to 12 months ($80 to $150), and software subscriptions if you go with SignCut or FlexiSign ($25 to $50 monthly). Total monthly operating cost for a busy small shop: typically $50 to $100.
          </p>

          <figure className="my-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1200&q=80"
                alt="Rolls of vinyl material in a wrap shop"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-zinc-500">The plotter pays itself back fastest through nesting — fitting more panels per roll than manual cutting can.</figcaption>
          </figure>

          <h2 className="mt-12 text-2xl font-medium text-white">The volume threshold</h2>
          <p className="leading-relaxed">
            The math gets clear once you plug in monthly job count. Here&apos;s the rough payback period for a $3,500 entry-level plotter, assuming $80 per job outsource cost saved plus $90 in time and material savings (nesting + no waiting):
          </p>

          <div className="my-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6 backdrop-blur-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-zinc-500">
                  <th className="py-2 text-left text-xs uppercase tracking-wider font-medium">Jobs / month</th>
                  <th className="py-2 text-right text-xs uppercase tracking-wider font-medium">Monthly savings</th>
                  <th className="py-2 text-right text-xs uppercase tracking-wider font-medium">Payback</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">4 / month</td>
                  <td className="py-2 text-right font-medium text-white">$680</td>
                  <td className="py-2 text-right font-medium text-yellow-300">5.1 months</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">8 / month</td>
                  <td className="py-2 text-right font-medium text-white">$1,360</td>
                  <td className="py-2 text-right font-medium text-yellow-300">2.6 months</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">12 / month</td>
                  <td className="py-2 text-right font-medium text-white">$2,040</td>
                  <td className="py-2 text-right font-medium text-yellow-300">1.7 months</td>
                </tr>
                <tr>
                  <td className="py-2 text-zinc-400">20 / month</td>
                  <td className="py-2 text-right font-medium text-white">$3,400</td>
                  <td className="py-2 text-right font-medium text-yellow-300">1 month</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-3 text-xs text-zinc-500">Assumes $3,500 plotter, $80/job outsource saved, $90/job time + material savings.</p>
          </div>

          <p className="leading-relaxed">
            For anyone running 8+ jobs a month, the case is overwhelming — you pay it back inside a quarter and every month after is pure margin. Below 4 jobs a month and the picture changes: outsourcing&apos;s flexibility (no fixed cost, scale up or down freely) starts to matter more than the per-job savings.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">The non-financial reasons to bring it in-house</h2>
          <p className="leading-relaxed">
            Money is half the equation. Three other factors matter:
          </p>

          <h3 className="mt-8 text-xl font-medium text-white">Quality control</h3>
          <p className="leading-relaxed">
            When you cut in-house, you check every panel before it touches the car. When you outsource, you find problems an hour into the install. A plotter eliminates a whole class of install failures caused by bad cuts.
          </p>

          <h3 className="mt-8 text-xl font-medium text-white">Speed to install</h3>
          <p className="leading-relaxed">
            Customers walking in for a same-day decal job, a quick fleet refresh, or an emergency repair — you can serve all of these with in-house cutting. Outsourced shops can&apos;t. Over time, this opens up business categories you couldn&apos;t touch before.
          </p>

          <h3 className="mt-8 text-xl font-medium text-white">Iteration on tricky panels</h3>
          <p className="leading-relaxed">
            Sometimes a panel takes two or three attempts to dial in. With in-house cutting, that&apos;s 15 minutes between attempts. With outsourcing, it&apos;s another day per attempt. For complex custom work, in-house unlocks a different level of quality.
          </p>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-yellow-400/40 via-yellow-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-yellow-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-yellow-300">Run your shop&apos;s numbers</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Get your real payback period</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Enter your job count, current outsourcing cost, time saved per job, and labor rate. Our Waste &amp; ROI Calculator shows exactly when any piece of equipment pays itself back for your specific shop.
              </p>
              <Link href="/vinyl-waste-roi-calculator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-yellow-200 hover:to-yellow-400">
                Open ROI calculator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">When outsourcing still wins</h2>
          <p className="leading-relaxed">
            Don&apos;t buy a plotter just because the spreadsheet says so. Outsourcing genuinely makes more sense when:
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">You&apos;re doing under 4 jobs a month.</strong> Fixed equipment costs eat margins on low volume. Outsourcing scales with your business.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Your jobs are simple and consistent.</strong> If you mostly install pre-cut kits or do full body wraps with minimal custom work, the value of in-house cutting drops a lot.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">You don&apos;t want to learn cutting software.</strong> Plotters require real software skills. If nobody on your team has the bandwidth to learn cutting workflow, the equipment will sit unused.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Cash flow is tight.</strong> $3,500 upfront vs. $80/job is a different math depending on your bank balance. If buying the plotter means a stressful month, outsource until volume justifies it without strain.
          </p>

          <div className="my-10 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 backdrop-blur-xl">
            <div className="mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-emerald-300" />
              <p className="text-xs font-medium uppercase tracking-wider text-emerald-300">The middle path</p>
            </div>
            <p className="text-sm leading-relaxed text-zinc-300">
              Some shops keep a small plotter for fast same-day cuts and decals, while still outsourcing complex full-vehicle kits to specialists with high-end machines. You get the responsiveness in-house, and the precision on big jobs from someone with $20K of equipment. Best of both worlds for many small shops.
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Frequently asked questions</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Which plotter brand should I start with?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">For under $5K, Graphtec CE7000-60 and Roland GS2-24 are reliable starters. Avoid the cheapest no-name plotters — blade tracking is rough and you&apos;ll waste material learning their quirks.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">How long is the learning curve?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Plan on 2 to 4 weeks before you&apos;re cutting cleanly and confidently. The first week you&apos;ll waste material. After a month, it should feel routine.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Can I lease a plotter?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Yes — many vinyl suppliers and equipment dealers offer 24 to 36 month leases at around 3% of purchase price monthly. Often makes more sense than depleting working capital.</p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            For most shops doing more than 6 to 8 jobs a month, an entry-level plotter is the highest-ROI piece of equipment you can buy. It pays itself back inside a quarter and starts adding 8 to 12% to your effective margin from month one. Below that volume, or in cash-constrained moments, outsourcing buys flexibility that&apos;s worth real money. Run your own numbers — don&apos;t guess. The right answer is shop-specific and the spreadsheet always tells the truth.
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
