import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Is PPF worth it? Real damage costs vs real protection",
  description: "Paint protection film costs $1,500 to $9,000. What does it actually save you? A real cost breakdown of paint repairs, headlight replacement, and resale value vs. the PPF investment.",
  openGraph: {
    title: "Is PPF worth it? The real math",
    description: "What PPF actually saves vs. what it costs — the real ROI breakdown.",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-orange-400/20 blur-[120px]" />
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
            <span className="rounded-full border border-orange-400/30 bg-orange-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-orange-300">
              Buyer&apos;s guide
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> June 3, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 8 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Is PPF <span className="bg-gradient-to-r from-orange-200 via-amber-200 to-orange-200 bg-clip-text text-transparent">worth it?</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            A full-body PPF install costs more than some used cars. Even a partial front package runs $1,500 to $2,500. So is paint protection film actually worth the money, or is it just expensive peace of mind? The honest answer comes from running the real numbers — what damage actually costs vs. what PPF prevents.
          </p>
        </div>

        <figure className="mb-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
              alt="A premium car with paint protection film"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <figcaption className="mt-2 text-center text-xs text-zinc-500">PPF math works for some cars and not others. The deciding factor isn&apos;t the car — it&apos;s how you drive.</figcaption>
        </figure>

        <div className="mb-10 rounded-2xl border border-orange-400/20 bg-orange-400/5 p-6 backdrop-blur-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-orange-300">The short answer</p>
          <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
            <li>• Partial front PPF ($1,500–2,500) typically pays back in 2-4 years for daily drivers</li>
            <li>• Full body PPF ($5,000–9,000) only makes sense on $80K+ cars or long-term keepers</li>
            <li>• Highway commuters see fastest ROI — they take the most damage</li>
            <li>• City-only short trips? PPF is harder to justify on pure economics</li>
            <li>• Resale value impact alone often covers PPF cost on premium vehicles</li>
          </ul>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">What unprotected paint actually costs</h2>
          <p className="leading-relaxed">
            People underestimate paint repair costs because they only think about catastrophic damage — accidents, vandalism. The real cost is the slow drip of small repairs that add up over 5 to 7 years of ownership.
          </p>

          <h3 className="mt-8 text-xl font-medium text-white">Rock chip touch-up: $150 to $400</h3>
          <p className="leading-relaxed">
            A few small chips on the hood, fender, or bumper. Body shop blends color, polishes, clear-coats. Looks decent but never quite invisible. Most cars need this 2 to 3 times in the first 5 years of highway driving. Total cost over ownership: $300 to $1,200.
          </p>

          <h3 className="mt-8 text-xl font-medium text-white">Full bumper respray: $800 to $1,800</h3>
          <p className="leading-relaxed">
            When enough chips, scrapes, and parking dings accumulate that touch-ups aren&apos;t enough. The front bumper is the most common candidate. Quality work gets you close to factory paint match but rarely identical.
          </p>

          <h3 className="mt-8 text-xl font-medium text-white">Hood repaint: $1,200 to $2,500</h3>
          <p className="leading-relaxed">
            Common after 3 to 5 years on a daily highway driver. The hood takes the worst of the rock chips, and once the surface is heavily damaged, paint correction can&apos;t save it. Repainting requires precise color matching, blending into adjacent panels, and 2-3 days in the shop.
          </p>

          <h3 className="mt-8 text-xl font-medium text-white">Headlight replacement: $400 to $1,800 (each)</h3>
          <p className="leading-relaxed">
            Modern LED and projector headlights are absurdly expensive. They pit, yellow, and crack from UV and debris over time. Many cars need at least one headlight replacement by year 5 if unprotected. PPF on headlights prevents this almost entirely.
          </p>

          <figure className="my-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80"
                alt="A car with visible paint chips and weathering"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-zinc-500">Five years of unprotected driving. The damage isn&apos;t catastrophic — it&apos;s constant, small, and expensive to fix.</figcaption>
          </figure>

          <h2 className="mt-12 text-2xl font-medium text-white">The resale value angle</h2>
          <p className="leading-relaxed">
            This is the factor most buyers ignore until they try to sell. A car with chipped hood paint, yellowed headlights, and a hazy bumper looks &quot;tired&quot; — and a tired-looking car sells for thousands less than the same model with crisp paint.
          </p>
          <p className="leading-relaxed">
            On premium vehicles ($60K+), the resale gap between a well-protected and unprotected example is typically 4 to 8% of value. On a $80K car, that&apos;s $3,200 to $6,400 — which alone covers full body PPF on most vehicles.
          </p>
          <p className="leading-relaxed">
            For cars under $40K, the absolute dollar difference is smaller but still real — typically $1,000 to $2,500 at resale.
          </p>

          <blockquote className="my-10 border-l-2 border-orange-400/50 pl-6">
            <p className="text-xl font-medium leading-relaxed text-white">
              &quot;The wrong question is &apos;Can I afford PPF?&apos; The right question is &apos;What does NOT having PPF actually cost me over 5 years?&apos;&quot;
            </p>
          </blockquote>

          <h2 className="mt-12 text-2xl font-medium text-white">The 5-year payback math</h2>
          <p className="leading-relaxed">
            Here&apos;s a realistic 5-year comparison for a daily highway driver, $50K vehicle:
          </p>

          <div className="my-6 rounded-2xl border border-orange-400/20 bg-orange-400/5 p-6 backdrop-blur-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-zinc-500">
                  <th className="py-2 text-left text-xs uppercase tracking-wider font-medium">Without PPF</th>
                  <th className="py-2 text-right text-xs uppercase tracking-wider font-medium">5-year cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Rock chip touch-ups (×2)</td>
                  <td className="py-2 text-right font-medium text-white">$500</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Bumper respray</td>
                  <td className="py-2 text-right font-medium text-white">$1,200</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Headlight polish or replace (×1)</td>
                  <td className="py-2 text-right font-medium text-white">$600</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Resale value reduction</td>
                  <td className="py-2 text-right font-medium text-white">$1,800</td>
                </tr>
                <tr className="border-b border-white/15 border-t border-white/15">
                  <td className="py-2 font-medium text-white">Total damage cost</td>
                  <td className="py-2 text-right font-medium text-white">$4,100</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium text-orange-300">Partial front PPF instead</td>
                  <td className="py-2 text-right font-medium text-orange-300">$2,000</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-3 text-xs text-zinc-500">Net savings: ~$2,100 over 5 years. Plus a car that looks new at resale.</p>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">When PPF doesn&apos;t make economic sense</h2>
          <p className="leading-relaxed">
            Honest answer time. PPF math gets weaker in these situations:
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Lease for 2 to 3 years.</strong> You won&apos;t see resale value, and most leases include some wear-and-tear allowance. Only worth it if you have a high-impact driving profile.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Older vehicle, low residual value.</strong> A 10-year-old daily driver depreciated to $8K doesn&apos;t make sense to protect with $3K of PPF. The math just doesn&apos;t work.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">City-only short trips, garage-kept.</strong> If you drive 3 miles to work and park in a covered garage, your damage exposure is minimal. Save your money.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">You&apos;ll trade in within 2 years.</strong> PPF takes time to pay back. If you&apos;re not keeping the car at least 3-4 years, the ROI breaks down.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">When PPF is a no-brainer</h2>
          <p className="leading-relaxed">
            <strong className="text-white">Highway commuter, 30+ minutes daily.</strong> The damage rate is high enough that protection pays back fast.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Premium vehicle ($60K+).</strong> Resale gap alone justifies the investment, before you count the damage prevention.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Long-term keeper, 7+ years.</strong> Every year of ownership compounds the value. PPF on a forever-car nearly always pays back.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Rare or hard-to-match paint.</strong> Color-shift, matte, special-order colors — these are nearly impossible to repair invisibly. Protection is the only realistic option.
          </p>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-orange-400/40 via-orange-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-orange-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-orange-300">See your real coverage</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Map out exactly what to protect</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Pick the zones you actually need on a visual car map and see the total coverage plus cost estimate. Free PPF Coverage Visualizer with instant pricing — no signup.
              </p>
              <Link href="/ppf-coverage-visualizer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-orange-300 to-orange-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-orange-200 hover:to-orange-400">
                Open PPF visualizer <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="my-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 backdrop-blur-xl">
            <div className="mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-300" />
              <p className="text-xs font-medium uppercase tracking-wider text-amber-300">Don&apos;t skip the install quality</p>
            </div>
            <p className="text-sm leading-relaxed text-zinc-300">
              Cheap PPF installation can hurt rather than help — visible edges, lifting after 6 months, trapped air bubbles. Spend the extra few hundred for a quality installer. A premium film badly installed is worse than no PPF at all.
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Frequently asked questions</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Will insurance cover PPF damage?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Most comprehensive policies will replace PPF after a covered event (accident, vandalism). Check with your insurer and document the install with photos and the original invoice.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Can I get PPF on a used car?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Yes, and it&apos;s often a great move. The paint needs to be in good condition first — any pre-existing chips or scratches get sealed under the film. Some installers offer paint correction before the install.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Does PPF affect my warranty?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">No — properly installed PPF is removable and doesn&apos;t affect manufacturer paint warranty. Some dealers even offer it as a factory add-on at delivery.</p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            PPF math is genuinely good for daily-driving highway commuters with vehicles worth $40K+, especially if you keep your cars 5+ years. The damage you&apos;re preventing isn&apos;t one big event — it&apos;s the slow accumulation of small repairs and resale erosion that adds up to thousands. Run the numbers on your specific situation. For most people in that category, partial front PPF is the highest-ROI investment you can make in your car.
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
