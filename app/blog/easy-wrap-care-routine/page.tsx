import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator, Sparkles, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Your new wrap, made simple: the easy care routine",
  description: "Just got a vehicle wrap? Here's a friendly, no-stress guide to keeping it looking new for years — what to do, what to skip, and how often.",
  openGraph: {
    title: "Your new wrap, made simple",
    description: "An easy care routine that doubles your wrap's life. No special skills needed.",
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
              Care guide
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> May 31, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 6 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Your new wrap, <span className="bg-gradient-to-r from-teal-200 via-cyan-200 to-teal-200 bg-clip-text text-transparent">made simple</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            You just dropped serious money on a wrap, and now you&apos;re wondering how to take care of it without messing it up. Good news: it&apos;s actually pretty easy. Here&apos;s everything you need to know in one friendly read — no detailing degree required.
          </p>
        </div>

        {/* HERO IMAGE */}
        <figure className="mb-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80"
              alt="A freshly washed wrapped car"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <figcaption className="mt-2 text-center text-xs text-zinc-500">A well-cared-for wrap still looks fresh at year 5. Most failures are care mistakes.</figcaption>
        </figure>

        {/* KEY TAKEAWAYS */}
        <div className="mb-10 rounded-2xl border border-teal-400/20 bg-teal-400/5 p-6 backdrop-blur-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-teal-300">The 30-second version</p>
          <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
            <li>• Don&apos;t wash for the first 7 days after install</li>
            <li>• Hand wash with pH-neutral soap, never automatic brush washes</li>
            <li>• Hit it with a quick edge inspection once a month</li>
            <li>• Park in shade or garage whenever possible</li>
            <li>• Address bird droppings and sap within 24 hours, always</li>
          </ul>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">Week one: do nothing</h2>
          <p className="leading-relaxed">
            This is the hardest rule for excited new wrap owners. Don&apos;t wash the car. Don&apos;t even spray it with water. The vinyl adhesive needs about 7 days to fully bond, and water during that window can sneak under the edges and prevent proper curing.
          </p>
          <p className="leading-relaxed">
            If you absolutely have to get something off (bird poop, tree sap), use a damp microfiber and gently dab it. Don&apos;t scrub. Don&apos;t use a pressure washer. Just dab and wait for the wash window to open.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">The wash that won&apos;t hurt your wrap</h2>
          <p className="leading-relaxed">
            Once you&apos;re past day 7, here&apos;s the no-stress wash routine:
          </p>

          <p className="leading-relaxed">
            <strong className="text-white">Step 1:</strong> Park in shade or wait for the car to cool down. Don&apos;t wash a hot car — water dries too fast and leaves spots.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Step 2:</strong> Rinse with a regular garden hose. Just rinse — don&apos;t blast the edges with a pressure washer.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Step 3:</strong> Use two buckets — one with soapy water, one with clean water. Wash mitt goes in soapy bucket, lifts dirt off, then rinses in the clean bucket before going back to soap. This stops you from dragging dirt all over the car.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Step 4:</strong> Use a pH-neutral car soap. Look for &quot;wrap safe&quot; on the label. Most regular car soaps are fine, but stay away from dish soap, degreasers, and anything labeled &quot;wax-included.&quot;
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Step 5:</strong> Rinse, then dry with clean microfiber towels. Air drying leaves water spots.
          </p>

          {/* PULL QUOTE */}
          <blockquote className="my-10 border-l-2 border-teal-400/50 pl-6">
            <p className="text-xl font-medium leading-relaxed text-white">
              &quot;The two-bucket method takes 10 minutes to learn and adds years to your wrap. Best ROI in detailing.&quot;
            </p>
          </blockquote>

          <figure className="my-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1200&q=80"
                alt="Hand washing a car with a microfiber towel"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-zinc-500">Hand washing isn&apos;t fancy. It&apos;s just gentle, which is exactly what wraps need.</figcaption>
          </figure>

          <h2 className="mt-12 text-2xl font-medium text-white">The one thing that kills wraps fastest</h2>
          <p className="leading-relaxed">
            Automatic brush car washes. Those rotating brush machines scratch the surface, peel at edges, and force water into seams at pressures the wrap was never designed for. One wash through a brush tunnel can take a year off the life of your wrap.
          </p>
          <p className="leading-relaxed">
            Touchless washes are technically safer, but the high-pressure jets still risk lifting edges. Honestly, just hand wash. It takes 30 minutes and your wrap will last twice as long.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">The monthly 60-second check</h2>
          <p className="leading-relaxed">
            Once a month, do a quick walk around the car and look at the edges. Specifically:
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Door edges and door jambs.</strong> The vinyl wraps around these and is the first place to lift.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Around emblems, badges, and trim.</strong> Edges here see daily sun and stress.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Mirror caps and door handles.</strong> Tight curves that need re-checking.
          </p>
          <p className="leading-relaxed">
            If you spot a tiny lift, address it immediately with a heat gun (low setting) and firm pressure. If you don&apos;t have a heat gun, a hair dryer works — and call your installer before it spreads.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">The 24-hour rule</h2>
          <p className="leading-relaxed">
            Bird droppings, tree sap, dead bugs, gas spills — all these are mildly acidic and can stain or etch the vinyl if left too long. The rule: remove within 24 hours. The longer it sits, especially in the sun, the higher the chance of a permanent mark.
          </p>
          <p className="leading-relaxed">
            Soak the spot with warm soapy water for a few minutes, then gently wipe with microfiber. Don&apos;t scrape. Patience beats elbow grease here.
          </p>

          {/* DO/DON'T BOXES */}
          <div className="my-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 backdrop-blur-xl">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-emerald-300">Yes please</p>
              <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
                <li>• Hand wash every 2 weeks</li>
                <li>• pH-neutral soap, two buckets</li>
                <li>• Microfiber towels only</li>
                <li>• Park in shade when possible</li>
                <li>• Address spots within 24 hours</li>
                <li>• Apply wrap-safe sealant twice a year</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-rose-400/20 bg-rose-400/5 p-6 backdrop-blur-xl">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-rose-300">Hard no</p>
              <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
                <li>• Brush-style automatic washes</li>
                <li>• Pressure washing edges (&lt;6 inches)</li>
                <li>• Carnauba wax or oil-based products</li>
                <li>• Polishing compounds</li>
                <li>• Scraping at stuck-on dirt</li>
                <li>• Parking under sap-dropping trees</li>
              </ul>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">The twice-a-year deep clean</h2>
          <p className="leading-relaxed">
            Every 6 months, do a more thorough clean called a &quot;decontamination wash.&quot; This removes embedded contaminants that regular soap leaves behind — iron particles from brake dust, road tar, fallout, all the invisible stuff that dulls a wrap over time.
          </p>
          <p className="leading-relaxed">
            Pick up an iron remover spray (search for &quot;iron fallout remover&quot;) and a wrap-safe clay alternative. Spray, wait a few minutes, rinse. Then follow up with a wrap-safe sealant for protection. The whole process adds maybe 30 minutes to your normal wash, and your wrap will look noticeably brighter afterward.
          </p>

          {/* CTA */}
          <div className="my-12 rounded-2xl bg-gradient-to-br from-teal-400/40 via-teal-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-teal-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-teal-300">Make it automatic</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Get your personal care schedule</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Enter your install date, climate, and parking situation. We&apos;ll generate a personalized year-long schedule of washes, inspections, and deep cleans — and you can even import it straight to your calendar so you never forget.
              </p>
              <Link href="/wrap-care-schedule-generator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-teal-300 to-teal-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-teal-200 hover:to-teal-400">
                Build your schedule <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* WARM TIP */}
          <div className="my-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 backdrop-blur-xl">
            <div className="mb-3 flex items-center gap-2">
              <Heart className="h-5 w-5 text-amber-300" />
              <p className="text-xs font-medium uppercase tracking-wider text-amber-300">A gentle reminder</p>
            </div>
            <p className="text-sm leading-relaxed text-zinc-300">
              Your wrap is more durable than you think. You don&apos;t have to baby it — just don&apos;t put it through situations it was never built for. A normal life with normal driving is totally fine. Highway drives, rain, parking lots, road trips — your wrap will handle all of it without complaint.
            </p>
          </div>

          {/* FAQ */}
          <h2 className="mt-12 text-2xl font-medium text-white">Common questions</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Can I wash my wrap in winter?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Yes — actually, more often in winter. Road salt is brutal on wrap edges. Just make sure the water and the car are above freezing, and dry the edges thoroughly so water doesn&apos;t freeze in seams.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Can I wax a wrap?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Not traditional carnauba wax — it can stain the vinyl. Use a sealant specifically labeled &quot;wrap safe&quot; or &quot;safe for vinyl.&quot; Same protective effect, no risk.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">My wrap got a small scratch — can I fix it?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">If it&apos;s on the surface, a heat gun on low can sometimes help the vinyl &quot;heal.&quot; If it&apos;s cut all the way through, you&apos;ll need a patch from your installer. Either way, don&apos;t try to polish it out.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">How often should I wash?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Every 2 weeks for daily drivers, monthly for weekend cars. More often if you live near the coast or in a snow climate. Less often is fine too — dirt itself isn&apos;t the enemy, contaminants left on for weeks are.</p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            Caring for a wrap isn&apos;t about being precious — it&apos;s about being a little intentional. A 30-minute hand wash every couple weeks, a quick edge check once a month, and a deep clean twice a year. That&apos;s it. Do those things and your wrap will look great for years. Skip them and you&apos;ll be back at the shop sooner than you&apos;d like. Easy choice.
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
