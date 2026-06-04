import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator, Snowflake } from "lucide-react";

export const metadata: Metadata = {
  title: "Winter wrap care: surviving salt, snow & cold",
  description: "Winter is the harshest season on vehicle wraps. Road salt, freezing temps, and heat shock can age a wrap years in months. Here's how to protect your wrap through winter — wash routine, parking, and emergency response.",
  openGraph: {
    title: "Winter wrap care: salt, snow & cold survival guide",
    description: "Protect your vehicle wrap through the harshest months of the year.",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-teal-400/20 blur-[120px]" />
        <div className="absolute top-[600px] right-[5%] h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[120px]" />
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
            <span className="rounded-full border border-teal-400/30 bg-teal-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-teal-300">
              Seasonal care
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> June 3, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 7 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Winter wrap care: <span className="bg-gradient-to-r from-teal-200 via-cyan-200 to-teal-200 bg-clip-text text-transparent">salt, snow &amp; cold</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            Winter is brutal on vehicle wraps. Road salt eats edges, freezing temps make vinyl brittle, and heat shock from warm garage to cold outdoors causes invisible micro-cracking. A wrap that would last 5 years in California can be done in 3 winters in Michigan. Here&apos;s how to fight back.
          </p>
        </div>

        <figure className="mb-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1551522435-a13afa10f103?w=1200&q=80"
              alt="A car covered in snow"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <figcaption className="mt-2 text-center text-xs text-zinc-500">The real damage isn&apos;t snow — it&apos;s the salt-laden slush underneath it.</figcaption>
        </figure>

        <div className="mb-10 rounded-2xl border border-teal-400/20 bg-teal-400/5 p-6 backdrop-blur-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-teal-300">Winter survival checklist</p>
          <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
            <li>• Wash more often, not less — every 7 to 10 days in salty regions</li>
            <li>• Use lukewarm water, never hot, never freezing</li>
            <li>• Never garage-park a wet, salt-covered car</li>
            <li>• Dry door edges and jambs thoroughly to prevent ice damage</li>
            <li>• Move slowly during pressure washing — cold makes vinyl less forgiving</li>
            <li>• Avoid drive-through brush washes (always), but especially in winter</li>
          </ul>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">Road salt: the number one wrap killer</h2>
          <p className="leading-relaxed">
            Road salt and de-icing chemicals (calcium chloride, magnesium chloride) are designed to be aggressive. They&apos;re sprayed on roads to melt ice — and they&apos;re extremely effective at finding their way into every edge, seam, and door jamb of your car.
          </p>
          <p className="leading-relaxed">
            On bare paint, salt eventually causes rust. On vinyl wrap, it&apos;s worse: salt slowly degrades the adhesive bond between the vinyl and the paint underneath. The damage is invisible at first — but after a full winter, you&apos;ll see edges starting to lift, especially on the rocker panels, lower bumpers, and wheel arches.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">The fix:</strong> Wash more often in winter. The instinct is to wash less because it&apos;s cold and miserable — that&apos;s exactly wrong. Every additional day salt sits on your wrap is another day of damage. Aim for every 7 to 10 days at minimum during salting season.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Cold temperatures change vinyl behavior</h2>
          <p className="leading-relaxed">
            Vinyl wrap is engineered to be flexible at normal temperatures. Below about 40°F (4°C), it gets noticeably stiffer. Below freezing, it can become brittle enough to crack under stress that would be no problem in summer.
          </p>
          <p className="leading-relaxed">
            This matters for two reasons. First: closing a door hard, hitting a deep pothole, or running into a snowdrift can all transfer enough force to cause micro-cracks in the vinyl, especially at stress points like edges and corners. Second: any post-install adjustments (lifting edges, bubbles, small repairs) become much harder. The adhesive doesn&apos;t want to bond, and the film doesn&apos;t want to conform.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">The fix:</strong> Be more careful with your car in winter. Close doors gently. Avoid hard impacts. If you need a repair done, ideally wait until the car (and the shop) can warm up to at least 60°F before any work.
          </p>

          <figure className="my-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1200&q=80"
                alt="Hand washing a car"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-zinc-500">A heated bay is the gold standard for winter washes. Outdoor washing works if you stay above freezing.</figcaption>
          </figure>

          <h2 className="mt-12 text-2xl font-medium text-white">The garage-parking trap</h2>
          <p className="leading-relaxed">
            Most wrap owners park in heated garages in winter — which is mostly good. But there&apos;s a hidden problem: parking a wet, salt-covered car in a 65°F garage is one of the worst things you can do to a wrap.
          </p>
          <p className="leading-relaxed">
            Warm temperature accelerates chemical reactions. The salt that was harmlessly sitting on the surface in cold weather suddenly becomes highly reactive when it warms up. Salty water sitting in door jambs and panel gaps overnight, at room temperature, does in 8 hours what would take a week of outdoor exposure.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">The fix:</strong> If you garage-park, either (a) wash the car before parking, or (b) accept that you need to wash within 24 to 48 hours of pulling in salty. The worst pattern is salty-car-in-garage-for-three-days.
          </p>

          <blockquote className="my-10 border-l-2 border-teal-400/50 pl-6">
            <p className="text-xl font-medium leading-relaxed text-white">
              &quot;Heat plus salt plus time equals wrap damage. Remove any one of those and you&apos;re fine.&quot;
            </p>
          </blockquote>

          <h2 className="mt-12 text-2xl font-medium text-white">Heat shock and ice damage</h2>
          <p className="leading-relaxed">
            Two more winter-specific hazards:
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Heat shock</strong> happens when there&apos;s a huge temperature difference between the vinyl and the water hitting it. Hot water on a frozen wrap, or hot defrost air on iced-over panels, causes the vinyl to expand or contract too fast. Cracking can be the result.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Ice formation</strong> in door jambs, seams, and panel gaps is a physical problem. Water that gets trapped in these spots freezes, expands, and pushes the vinyl edges outward. Over a winter, this can cause permanent edge lifting that&apos;s impossible to fix.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">The fix:</strong> Use lukewarm water for winter washes — body temperature, roughly. Dry the car thoroughly after washing, paying special attention to door jambs, the trunk seal, and around emblems. A leaf blower works great for this.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Winter wash schedule by region</h2>
          <div className="my-6 rounded-2xl border border-teal-400/20 bg-teal-400/5 p-6 backdrop-blur-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-zinc-500">
                  <th className="py-2 text-left text-xs uppercase tracking-wider font-medium">Climate</th>
                  <th className="py-2 text-right text-xs uppercase tracking-wider font-medium">Wash frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Mild winter (rain, no salt)</td>
                  <td className="py-2 text-right font-medium text-white">Every 2 weeks</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Cold but dry (snow, no salt)</td>
                  <td className="py-2 text-right font-medium text-white">Every 2 weeks</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Salted roads, moderate use</td>
                  <td className="py-2 text-right font-medium text-white">Every 7 – 10 days</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Heavy salt + daily highway</td>
                  <td className="py-2 text-right font-medium text-white">Every 5 – 7 days</td>
                </tr>
                <tr>
                  <td className="py-2 text-zinc-400">Coastal winter (salt air + road salt)</td>
                  <td className="py-2 text-right font-medium text-white">Every 5 days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">The winter wash routine</h2>
          <p className="leading-relaxed">
            Same principles as a regular wash, with a few adjustments:
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">1.</strong> Use a heated bay if you can. Coin-op self-serve car wash with a wand works great, but stay 8+ inches from edges.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">2.</strong> Lukewarm water only. Hot water and freezing temperatures don&apos;t mix.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">3.</strong> Focus extra time on lower panels, wheel wells, and door jambs — where salt accumulates.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">4.</strong> Rinse thoroughly. Soap residue + cold air = streaks that are hard to remove later.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">5.</strong> Dry completely before parking. Door jambs and seals especially.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">6.</strong> If outside, never let water freeze on the car. Either dry it or keep it above freezing until evaporation finishes.
          </p>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-teal-400/40 via-teal-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-teal-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-teal-300">Personalize your routine</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Get a year-round care schedule built for your climate</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Enter your climate, parking, and usage. Our Wrap Care Schedule Generator builds a personalized year of wash dates, decon dates, and seasonal adjustments — calendar import included.
              </p>
              <Link href="/wrap-care-schedule-generator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-teal-300 to-teal-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-teal-200 hover:to-teal-400">
                Build my schedule <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="my-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6 backdrop-blur-xl">
            <div className="mb-3 flex items-center gap-2">
              <Snowflake className="h-5 w-5 text-cyan-300" />
              <p className="text-xs font-medium uppercase tracking-wider text-cyan-300">Emergency response</p>
            </div>
            <p className="text-sm leading-relaxed text-zinc-300">
              If you drive through heavy salt slush, rinse the car within 24 hours — even a quick spray-down at home counts. The salt that just sits there for days is doing the real damage, not the salt that gets rinsed off the next morning.
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Frequently asked questions</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Can I use a snow brush on a wrapped car?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Use a soft-bristle brush or a foam-pad scraper — never anything with hard plastic edges. Most cheap snow brushes will scratch wraps and scuff matte/satin finishes specifically. Spend a few dollars more for a wrap-safe option.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Is touchless car wash safe in winter?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Touchless is significantly safer than brush washes, but the high-pressure jets can still lift edges. If you use them, request lower pressure and avoid the &quot;hot wax&quot; finishing cycle — many use products that aren&apos;t wrap-safe.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Should I apply sealant before winter?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Yes — a wrap-safe sealant applied in late fall creates a hydrophobic barrier that helps salt and slush wash off more easily. Reapply at the halfway point of winter for best results.</p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            Winter doesn&apos;t have to wreck your wrap — but it will if you ignore it. The owners who lose their wraps to winter are the ones who wash less, leave salt sitting, and park salty cars in warm garages. The owners whose wraps still look fresh in year 5 are the ones who wash <em>more</em> in winter, dry everything thoroughly, and treat road salt like the chemical attack it actually is. Do the boring stuff and the wrap rewards you.
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
