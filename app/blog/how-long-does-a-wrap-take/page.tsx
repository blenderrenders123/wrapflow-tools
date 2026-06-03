import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "How long does a wrap really take? A day-by-day timeline",
  description: "The real timeline for a vehicle wrap install — from drop-off to drive-away. Hour-by-hour breakdown for partial, full, and complex wraps, plus what slows the job down.",
  openGraph: {
    title: "How long does a wrap really take?",
    description: "Day-by-day breakdown of a real wrap install timeline.",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-violet-400/20 blur-[120px]" />
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
            <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-violet-300">
              Planning
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> June 2, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 7 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            How long does a wrap <span className="bg-gradient-to-r from-violet-200 via-amber-200 to-violet-200 bg-clip-text text-transparent">really take?</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            &quot;Drop it off Monday, pick it up Wednesday&quot; is what most shops say. Whether that&apos;s accurate depends on the vehicle, the wrap, and a handful of factors most customers don&apos;t think about. Here&apos;s the real timeline — broken down by stage so you can plan around it.
          </p>
        </div>

        <figure className="mb-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
              alt="A car in a wrap shop bay"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <figcaption className="mt-2 text-center text-xs text-zinc-500">A full wrap is typically 2 to 4 working days. Anyone promising same-day is cutting corners.</figcaption>
        </figure>

        <div className="mb-10 rounded-2xl border border-violet-400/20 bg-violet-400/5 p-6 backdrop-blur-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-violet-300">Quick numbers</p>
          <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
            <li>• Partial front wrap: 1 to 2 days</li>
            <li>• Full wrap (sedan, mild complexity): 2 to 3 days</li>
            <li>• Full wrap (SUV or truck): 3 to 4 days</li>
            <li>• Full wrap (exotic / complex bodywork): 4 to 5+ days</li>
            <li>• Color-shift or chrome finishes: add 30 to 50% to any timeline</li>
          </ul>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">Stage 1: Prep day (4 to 8 hours)</h2>
          <p className="leading-relaxed">
            This is where most shops cut corners and where most premature wrap failures begin. A proper prep day involves:
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Detail wash</strong> — Full exterior decontamination with iron remover, clay, and IPA wipe-down on every panel. Removes road tar, embedded contaminants, and any wax or sealant the previous owner applied.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Partial disassembly</strong> — Mirrors, badges, door handles, and trim pieces often come off so the vinyl can wrap underneath them rather than over the edges. This is the single biggest difference between a wrap that lasts 5 years and one that peels at 18 months.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Surface inspection</strong> — Rock chips, scratches, and clear coat damage are documented and either repaired (in the case of dents) or noted in the contract. Wrapping over damage hides it but doesn&apos;t fix it.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Stage 2: Install (1 to 3 days)</h2>
          <p className="leading-relaxed">
            This is the visible work — vinyl actually going on the car. The installer typically works panel by panel, starting with the hardest curves (bumpers, mirrors) and moving to the flat panels (hood, roof, doors).
          </p>
          <p className="leading-relaxed">
            A skilled installer working alone covers roughly 4 to 6 panels per 8-hour day on a typical sedan. Two installers can knock out a full wrap in 1.5 to 2 days, but solo work is the norm for shops doing premium installs — too many cooks risks the finish.
          </p>
          <p className="leading-relaxed">
            What takes the most time:
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Door jambs and edges.</strong> Wrapping into door jambs adds 30 to 45 minutes per door. Skipping it saves time but leaves a clear edge line and shorter lifespan.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Complex curves.</strong> Side mirrors, fender flares, and bumper recesses are where install hours pile up. A modern sports car can have a mirror cap that takes 90 minutes to wrap properly.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Compound panels.</strong> Hoods with character lines or unique design elements (e.g., scoops, vents) take 2-3x longer than a flat hood.
          </p>

          <figure className="my-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80"
                alt="Detailed work on a wrapped vehicle"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-zinc-500">Door jambs and edges separate a 2-year wrap from a 7-year wrap. They&apos;re also where most install time goes.</figcaption>
          </figure>

          <h2 className="mt-12 text-2xl font-medium text-white">Stage 3: Post-heat &amp; cure (2 to 4 hours)</h2>
          <p className="leading-relaxed">
            After the last panel is on, the installer goes back over every edge, seam, and tight curve with a heat gun. This step locks the vinyl&apos;s adhesive memory so it doesn&apos;t try to pull back later. Skipping it is the #1 reason wraps lift at the 90-day mark.
          </p>
          <p className="leading-relaxed">
            Post-heating a full vehicle takes 2 to 4 hours of careful work. Many shops do this the morning after the install, after the adhesive has had overnight to settle.
          </p>

          <blockquote className="my-10 border-l-2 border-violet-400/50 pl-6">
            <p className="text-xl font-medium leading-relaxed text-white">
              &quot;A shop that wraps your full car in 6 hours skipped at least three steps that matter. Time is the price of a wrap that lasts.&quot;
            </p>
          </blockquote>

          <h2 className="mt-12 text-2xl font-medium text-white">Stage 4: Reassembly &amp; inspection (1 to 2 hours)</h2>
          <p className="leading-relaxed">
            All the trim, badges, mirrors, and handles that came off during prep go back on. Then a thorough inspection — both installer and you, ideally — checking edges, seams, alignment of body lines, and any small bubbles or imperfections.
          </p>
          <p className="leading-relaxed">
            Small bubbles under 1mm typically work themselves out within a week. Anything larger should be addressed before you leave the shop.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Real timelines by vehicle type</h2>
          <div className="my-6 rounded-2xl border border-violet-400/20 bg-violet-400/5 p-6 backdrop-blur-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-zinc-500">
                  <th className="py-2 text-left text-xs uppercase tracking-wider font-medium">Vehicle</th>
                  <th className="py-2 text-right text-xs uppercase tracking-wider font-medium">Full wrap</th>
                  <th className="py-2 text-right text-xs uppercase tracking-wider font-medium">Partial</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Compact sedan (e.g., Civic)</td>
                  <td className="py-2 text-right font-medium text-white">2 days</td>
                  <td className="py-2 text-right font-medium text-white">1 day</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Midsize sedan (e.g., Tesla M3)</td>
                  <td className="py-2 text-right font-medium text-white">2 – 3 days</td>
                  <td className="py-2 text-right font-medium text-white">1 day</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">SUV (e.g., RAV4, X5)</td>
                  <td className="py-2 text-right font-medium text-white">3 days</td>
                  <td className="py-2 text-right font-medium text-white">1 – 2 days</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Truck (e.g., F-150, RAM)</td>
                  <td className="py-2 text-right font-medium text-white">3 – 4 days</td>
                  <td className="py-2 text-right font-medium text-white">1 – 2 days</td>
                </tr>
                <tr>
                  <td className="py-2 text-zinc-400">Exotic / complex curves</td>
                  <td className="py-2 text-right font-medium text-white">4 – 6 days</td>
                  <td className="py-2 text-right font-medium text-white">2 days</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-3 text-xs text-zinc-500">Add 30 to 50% for chrome, color-shift, or PPF on top of vinyl.</p>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">What makes a job run longer</h2>
          <p className="leading-relaxed">
            <strong className="text-white">Color-shift and chrome finishes.</strong> These films are stiffer and less forgiving than standard gloss or satin. Every panel takes longer.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Aftermarket bodywork.</strong> Custom front splitters, fender flares, or non-OEM panels often have inconsistent shapes that require more cutting and trimming.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Pre-existing paint damage.</strong> If the prep day reveals rust, deep scratches, or peeling clear coat, the installer should pause and discuss options before continuing. This can add a day.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Add-ons mid-job.</strong> &quot;Can you also do the door jambs?&quot; or &quot;Let&apos;s add PPF on the hood too&quot; can each add 4 to 8 hours.
          </p>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-violet-400/40 via-violet-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-violet-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-violet-300">Plan your install</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Get a step-by-step timeline for your job</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Pick your vehicle, wrap type, and finish. Our free Job Timeline Estimator breaks it down hour by hour — perfect for planning the shop schedule or knowing when your car&apos;s actually ready.
              </p>
              <Link href="/job-timeline-estimator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-violet-300 to-violet-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-violet-200 hover:to-violet-400">
                Open timeline estimator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="my-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 backdrop-blur-xl">
            <div className="mb-3 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-amber-300" />
              <p className="text-xs font-medium uppercase tracking-wider text-amber-300">For shop owners</p>
            </div>
            <p className="text-sm leading-relaxed text-zinc-300">
              If you&apos;re consistently quoting 2 days and taking 3, you have a planning problem, not an install problem. Use the timeline estimator as a quoting checklist — input the same numbers you quote the customer and see if the math actually fits.
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Frequently asked questions</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Can a wrap be done in one day?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">A partial front (bumper, hood, fenders) — yes, easily. A full wrap in one day means corners got cut. Walk away from any shop promising same-day full vehicle installs.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">When can I drive my car after a wrap?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Immediately after pickup. Driving doesn&apos;t affect cure. Just avoid washing for 7 days and avoid automatic car washes forever.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Do I need to leave my keys with the shop?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Yes — the shop needs to move the vehicle between bays, position it for different angles, and sometimes start it to access certain panels. A good shop documents the mileage on intake and return.</p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            A full vehicle wrap done properly is 2 to 4 days of work. Anything faster usually means skipped prep, no door jambs, or rushed edges — all of which show up as failures within the first year. If you&apos;re a shop, quote the real number. If you&apos;re a customer, pick the shop that does too. Time is the difference between a wrap that lasts and a wrap that lifts.
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
