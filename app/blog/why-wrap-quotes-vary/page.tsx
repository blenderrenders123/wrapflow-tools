import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Why wrap quotes vary so much (and how to spot a fair one)",
  description: "Same car, three quotes — $3,000, $5,500, and $8,000. What explains the gap? A breakdown of the 5 factors that drive wrap pricing and how to tell which shop is actually a good deal.",
  openGraph: {
    title: "Why wrap quotes vary so much",
    description: "How to spot a fair wrap quote vs an overpriced (or underpriced) one.",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-amber-400/20 blur-[120px]" />
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
            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-amber-300">
              Pricing
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> June 4, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 8 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Why wrap quotes <span className="bg-gradient-to-r from-amber-200 via-orange-200 to-amber-200 bg-clip-text text-transparent">vary so much</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            You got three quotes for the same wrap on the same car: $3,000, $5,500, and $8,000. That&apos;s a 2.5× spread. It&apos;s confusing, and it makes it tempting to either grab the cheapest one or assume the most expensive is &quot;the quality option.&quot; Both are usually wrong. Here&apos;s what actually drives wrap pricing and how to spot the genuinely fair quote.
          </p>
        </div>

        <figure className="mb-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80"
              alt="A car undergoing a wrap installation"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <figcaption className="mt-2 text-center text-xs text-zinc-500">A $3,000 wrap and a $7,000 wrap can use the exact same film. The difference is everything else.</figcaption>
        </figure>

        <div className="mb-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 backdrop-blur-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-amber-300">Quote spread, decoded</p>
          <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
            <li>• Film grade explains 25 to 35% of the price difference</li>
            <li>• Prep depth and door jamb work account for another 20 to 30%</li>
            <li>• Labor rates differ by 2 to 3× between regions and shop tiers</li>
            <li>• Boutique shops add a 30 to 50% reputation premium</li>
            <li>• Suspiciously cheap quotes almost always cut on prep, not film</li>
          </ul>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">1. The film itself</h2>
          <p className="leading-relaxed">
            Not all vinyl is created equal. Calendered film is cheaper, stiffer, and shorter-lived. Cast film is thinner, more conformable, and rated for 5 to 7 years. Premium cast films (3M 2080, Avery SW900, KPMF) cost the installer roughly 2.5× more than budget calendered options.
          </p>
          <p className="leading-relaxed">
            A typical full sedan wrap uses about 22 linear meters of material. The difference between calendered and premium cast film is roughly $400 to $600 in raw materials alone. Marked up at typical shop margins, that becomes $800 to $1,200 of quote difference.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Red flag:</strong> A shop that won&apos;t tell you the exact brand and product code. Always ask. Always get it on the invoice.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">2. Prep depth</h2>
          <p className="leading-relaxed">
            This is where the biggest quality differences live, and where most quote variations come from. Proper prep includes a full pH-neutral wash, IPA wipe-down of every panel, decontamination of waxes and silicones, and partial disassembly (mirrors, badges, trim) so vinyl wraps under edges rather than over them.
          </p>
          <p className="leading-relaxed">
            A thorough prep takes 4 to 6 hours of labor before any vinyl touches the car. A rushed prep takes 30 minutes. Both shops will tell you they &quot;prepared the car.&quot; Only one will give you a wrap that lasts 5+ years.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Red flag:</strong> A quote that doesn&apos;t itemize prep, or a turnaround time that&apos;s suspiciously fast (a full wrap in 1 day = prep was skipped).
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">3. Door jambs, edges, and details</h2>
          <p className="leading-relaxed">
            Wrapping into door jambs adds 30 to 45 minutes per door — 2 to 3 hours of labor total. Skipping jambs is the most common &quot;corner cut&quot; in low-quote shops. It looks fine on day one. By month 6, you have visible edge lines and the early stages of vinyl lifting.
          </p>
          <p className="leading-relaxed">
            The same logic applies to wrapping around emblems, under handles, into bumper recesses, and into wheel wells. Each detail is a 15 to 30 minute decision that the shop either invests in or skips.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Red flag:</strong> Ask explicitly: &quot;Are you wrapping into the door jambs?&quot; A shop that hesitates or says &quot;not necessary&quot; is telling you something important.
          </p>

          <figure className="my-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80"
                alt="Close-up detail work on a wrap"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-zinc-500">Door jambs separate the $3,000 quote from the $5,500 quote — and the 1-year wrap from the 5-year wrap.</figcaption>
          </figure>

          <h2 className="mt-12 text-2xl font-medium text-white">4. Labor rate and shop overhead</h2>
          <p className="leading-relaxed">
            A wrap installer in rural Ohio might bill $35 to $45 per hour. The same skill level in San Francisco or Los Angeles bills $80 to $120 per hour. That&apos;s not greed — it&apos;s rent. A shop in a major metro pays $8,000 to $15,000 a month in commercial rent that has to come from somewhere.
          </p>
          <p className="leading-relaxed">
            For a 40-hour install job, that&apos;s a $1,800 to $3,200 difference in labor alone, with zero difference in quality. Geographic price comparison only makes sense within the same metro.
          </p>

          <blockquote className="my-10 border-l-2 border-amber-400/50 pl-6">
            <p className="text-xl font-medium leading-relaxed text-white">
              &quot;The cheapest quote almost always means a corner is being cut you can&apos;t see. The most expensive isn&apos;t always the best — but it&apos;s usually safer.&quot;
            </p>
          </blockquote>

          <h2 className="mt-12 text-2xl font-medium text-white">5. Reputation premium</h2>
          <p className="leading-relaxed">
            Some shops have a 6-month waitlist, work with celebrities, and post on Instagram constantly. Their quotes are typically 30 to 50% above the regional average for the same materials and same depth of work. Is the extra money worth it?
          </p>
          <p className="leading-relaxed">
            Sometimes. A boutique shop usually offers:
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Better quality control.</strong> Higher per-job revenue means more time per car. Less rush.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Standing reputation.</strong> Easier warranty claims, longer business presence, better resale documentation.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">More forgiving on complex jobs.</strong> If something goes wrong with a $9,000 wrap, they&apos;ll likely make it right. Cheap shops often disappear or argue.
          </p>
          <p className="leading-relaxed">
            For a $50K+ vehicle or a complex install (color-shift, full body, PPF over wrap), the boutique premium often pays for itself. For a straightforward gloss black on a sedan, you can get equivalent quality from a solid mid-tier shop at 60% of the cost.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">What a fair quote looks like</h2>
          <p className="leading-relaxed">
            A legitimate, complete quote should include:
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Specific film brand and product code.</strong> Not just &quot;gloss black&quot; but &quot;3M 2080-G12 Gloss Black.&quot;
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Itemized labor.</strong> Prep hours, install hours, post-heat. Not just &quot;labor: $X.&quot;
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Clear scope.</strong> What&apos;s wrapped, what&apos;s not. Door jambs included or excluded. Mirrors and handles itemized.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Warranty terms.</strong> Material warranty (covered by manufacturer, typically 5-7 years) plus install warranty (covered by shop, typically 2-3 years).
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Expected timeline.</strong> Realistic, not rushed. 2 to 4 days for a full vehicle, depending on size.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Typical regional pricing benchmark</h2>
          <div className="my-6 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 backdrop-blur-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-zinc-500">
                  <th className="py-2 text-left text-xs uppercase tracking-wider font-medium">Vehicle</th>
                  <th className="py-2 text-right text-xs uppercase tracking-wider font-medium">Mid-tier</th>
                  <th className="py-2 text-right text-xs uppercase tracking-wider font-medium">Boutique</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Compact sedan</td>
                  <td className="py-2 text-right font-medium text-white">$3,200 – $4,200</td>
                  <td className="py-2 text-right font-medium text-white">$5,000 – $6,500</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Midsize sedan</td>
                  <td className="py-2 text-right font-medium text-white">$3,800 – $5,000</td>
                  <td className="py-2 text-right font-medium text-white">$5,800 – $7,500</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Compact SUV</td>
                  <td className="py-2 text-right font-medium text-white">$4,200 – $5,500</td>
                  <td className="py-2 text-right font-medium text-white">$6,500 – $8,500</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Full-size SUV / truck</td>
                  <td className="py-2 text-right font-medium text-white">$5,500 – $7,000</td>
                  <td className="py-2 text-right font-medium text-white">$8,000 – $10,500</td>
                </tr>
                <tr>
                  <td className="py-2 text-zinc-400">Exotic / complex</td>
                  <td className="py-2 text-right font-medium text-white">$6,500 – $8,500</td>
                  <td className="py-2 text-right font-medium text-white">$10,000 – $14,000+</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-3 text-xs text-zinc-500">Premium gloss cast film, full wrap, door jambs included. Add 30-50% for chrome/color-shift.</p>
          </div>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-amber-400/40 via-amber-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-amber-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-amber-300">Sanity-check any quote</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Compare quotes against the real math</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Pick your vehicle, finish, and complexity. Our free Wrap Cost Calculator gives you a realistic baseline you can compare any shop quote against — material costs, labor, margin, the whole breakdown.
              </p>
              <Link href="/wrap-cost-calculator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-amber-200 hover:to-amber-400">
                Open cost calculator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="my-10 rounded-2xl border border-rose-400/20 bg-rose-400/5 p-6 backdrop-blur-xl">
            <div className="mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-rose-300" />
              <p className="text-xs font-medium uppercase tracking-wider text-rose-300">Watch out for the underpriced quote</p>
            </div>
            <p className="text-sm leading-relaxed text-zinc-300">
              A quote that&apos;s 30%+ below comparable shops in your area is a warning sign, not a deal. Cheap quotes win bids by cutting prep, film grade, or door jambs — none of which you&apos;ll notice until the wrap fails. The cheap quote saved you $1,500 and cost you a 2-year wrap.
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Frequently asked questions</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Should I always get 3 quotes?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Yes — and ideally 4 to 5 if budget is sensitive. The price patterns become clear with more data. One outlier in either direction usually has a reason worth understanding.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Is paying half upfront normal?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Yes — 30 to 50% deposit is standard, especially because shops have to order material specifically for your job. Anything more than 60% upfront is unusual.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Can I negotiate a wrap quote?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Some, but less than you&apos;d think. Material and labor costs are real. The room for negotiation is usually in scope (smaller wrap, simpler design) rather than pure discount.</p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            Wrap quote variation is mostly real — different film, different prep, different labor rates, different reputations. The fair quote isn&apos;t the cheapest or the most expensive. It&apos;s the one where the shop tells you exactly what brand of film they&apos;re using, exactly what prep includes, exactly what scope covers, and stands behind a realistic warranty. Get those four things in writing and the price difference between two quotes becomes meaningful instead of mysterious.
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
