import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Why your wrap lifted in 6 months (and how to predict it next time)",
  description: "The 6 real reasons vehicle wraps fail early — bad prep, low-grade vinyl, sharp edges, premature washing, climate, and installer error — with how to avoid each one.",
  openGraph: {
    title: "Why your wrap lifted in 6 months",
    description: "The real reasons wraps fail early — and how to predict lifespan before you commit.",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-rose-400/20 blur-[120px]" />
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
            <span className="rounded-full border border-rose-400/30 bg-rose-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-rose-300">
              Troubleshooting
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> May 30, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 8 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Why your wrap lifted in <span className="bg-gradient-to-r from-rose-200 via-amber-200 to-rose-200 bg-clip-text text-transparent">6 months</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            A premium wrap should last 5 to 7 years. If yours started peeling at the edges before the first birthday, something went wrong before the vinyl ever touched the paint. Here are the six real causes — and how to predict lifespan before you commit to the next one.
          </p>
        </div>

        {/* HERO IMAGE */}
        <figure className="mb-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80"
              alt="A wrapped car under inspection"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <figcaption className="mt-2 text-center text-xs text-zinc-500">Edge lifting almost always starts within 90 days. You just don&apos;t notice until it spreads.</figcaption>
        </figure>

        {/* KEY TAKEAWAYS */}
        <div className="mb-10 rounded-2xl border border-rose-400/20 bg-rose-400/5 p-6 backdrop-blur-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-rose-300">Key takeaways</p>
          <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
            <li>• Most early failures trace back to prep, not the vinyl itself</li>
            <li>• Calendered film on a daily driver in a hot climate is a 12-month wrap, not a 5-year one</li>
            <li>• Washing too soon after install ruins the adhesive cure</li>
            <li>• Sharp edges, recesses, and door jambs need post-heat or they will lift</li>
            <li>• Climate + parking + film grade together determine real lifespan</li>
          </ul>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">1. The surface wasn&apos;t actually clean</h2>
          <p className="leading-relaxed">
            This is the number one cause of premature failure, and it&apos;s invisible at the time of install. A quick rinse and a wipe-down isn&apos;t cleaning — it&apos;s smearing. Real prep means a full pH-neutral wash, an IPA wipe-down of every panel, and a thorough decontamination of any residual wax, silicone, or tar. Any of those contaminants left behind become a barrier between the adhesive and the paint.
          </p>
          <p className="leading-relaxed">
            If the installer didn&apos;t need at least 60 to 90 minutes of pure prep time before unrolling the vinyl, the prep probably wasn&apos;t enough. The wrap will look perfect for weeks. Then a corner lifts after the first hot day, and once one corner goes, the rest follows.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">2. Calendered film was used where cast film belonged</h2>
          <p className="leading-relaxed">
            Calendered vinyl is cheaper, thicker, and stiffer. It works fine on flat fleet panels and signs. It does not work long-term on curved automotive surfaces. It wants to return to flat — and on a curved fender or mirror cap, that means it&apos;s constantly trying to pull itself off.
          </p>
          <p className="leading-relaxed">
            Cast vinyl is thinner, more conformable, and engineered to stay where you put it on complex curves. If your wrap quote came in suspiciously cheap, ask which film was used. A full vehicle in calendered film might last 18 to 24 months in mild climates. Cast film on the same car can hit 5 to 7 years.
          </p>

          <figure className="my-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80"
                alt="Close-up of vinyl wrap material on a vehicle panel"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-zinc-500">Cast film conforms. Calendered film resists. On curves, that difference shows up in months, not years.</figcaption>
          </figure>

          <h2 className="mt-12 text-2xl font-medium text-white">3. Edges weren&apos;t post-heated</h2>
          <p className="leading-relaxed">
            Every wrap edge — door jambs, around emblems, under mirrors, into body lines — needs heat applied after the install. This locks the adhesive memory so the vinyl doesn&apos;t try to pull back. Skipping post-heat is the single fastest way to guarantee edge lifting at 6 months.
          </p>
          <p className="leading-relaxed">
            A proper installer spends as much time on edges as on flat panels. If your wrap install was done in 6 hours flat for a full car, edges were almost certainly rushed.
          </p>

          {/* PULL QUOTE */}
          <blockquote className="my-10 border-l-2 border-rose-400/50 pl-6">
            <p className="text-xl font-medium leading-relaxed text-white">
              &quot;Every premature failure I&apos;ve diagnosed in the last decade comes back to one of three things: prep, film grade, or rushed edges.&quot;
            </p>
          </blockquote>

          <h2 className="mt-12 text-2xl font-medium text-white">4. The car got washed too soon</h2>
          <p className="leading-relaxed">
            Vinyl adhesive needs about 7 days to fully cure after install. Wash the car day three with a pressure washer and you&apos;ve just blasted water into edges that haven&apos;t bonded yet. That water sits there. The adhesive never seals. Months later, you&apos;ll see lifting in those exact spots — and have no idea why.
          </p>
          <p className="leading-relaxed">
            Rule: no wash for 7 days. No automatic brush washes ever. No pressure washer within 6 inches of any edge for the life of the wrap.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">5. Climate punished the install</h2>
          <p className="leading-relaxed">
            A wrap in coastal Florida lives a different life than the same wrap in Oregon. UV intensity, salt air, temperature swings, and road salt in winter climates all aggressively age vinyl. A 5-year rated film in a coastal hot climate might realistically deliver 3 years.
          </p>
          <p className="leading-relaxed">
            This isn&apos;t a defect — it&apos;s physics. The film grade you choose has to match the environment, not just the warranty card.
          </p>

          <figure className="my-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80"
                alt="A car parked in direct sunlight"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-zinc-500">Direct sun all day, every day, cuts wrap life by 30 to 50% regardless of film grade.</figcaption>
          </figure>

          <h2 className="mt-12 text-2xl font-medium text-white">6. The wrong vehicle for the wrap</h2>
          <p className="leading-relaxed">
            Some vehicles are just harder on wraps. Bumpers with sharp recesses, deep body lines, complex spoilers, and aggressive front-end designs put more stress on the film. Trucks with constant payload flex, daily drivers parked outside all day, and weekend track cars that get aggressively hot all eat through wraps faster.
          </p>
          <p className="leading-relaxed">
            A garage-kept show car will outlast a daily-driven, street-parked, pressure-washed-every-Sunday version of the same vehicle by years.
          </p>

          {/* LIFESPAN TABLE */}
          <h2 className="mt-12 text-2xl font-medium text-white">Realistic lifespan by scenario</h2>
          <div className="my-6 rounded-2xl border border-rose-400/20 bg-rose-400/5 p-6 backdrop-blur-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-zinc-500">
                  <th className="py-2 text-left text-xs uppercase tracking-wider font-medium">Scenario</th>
                  <th className="py-2 text-right text-xs uppercase tracking-wider font-medium">Real lifespan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Cast film, garage-kept, mild climate</td>
                  <td className="py-2 text-right font-medium text-white">6 – 8 years</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Cast film, daily driver, mild climate</td>
                  <td className="py-2 text-right font-medium text-white">4 – 6 years</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Cast film, daily driver, hot or coastal climate</td>
                  <td className="py-2 text-right font-medium text-white">3 – 4 years</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Calendered film, daily driver, mild climate</td>
                  <td className="py-2 text-right font-medium text-white">2 – 3 years</td>
                </tr>
                <tr>
                  <td className="py-2 text-zinc-400">Calendered film, hot or coastal, street-parked</td>
                  <td className="py-2 text-right font-medium text-white">12 – 18 months</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <div className="my-12 rounded-2xl bg-gradient-to-br from-rose-400/40 via-rose-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-rose-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-rose-300">Before you commit</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Predict your wrap&apos;s real lifespan</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Plug in your climate, usage, parking, and film type. Our free Wrap Lifespan Predictor gives you a realistic year-by-year forecast based on industry data — not the warranty card.
              </p>
              <Link href="/wrap-lifespan-predictor" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-rose-300 to-rose-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-rose-200 hover:to-rose-400">
                Open lifespan predictor <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* WARNING BOX */}
          <div className="my-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 backdrop-blur-xl">
            <div className="mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-300" />
              <p className="text-xs font-medium uppercase tracking-wider text-amber-300">If your wrap is already lifting</p>
            </div>
            <p className="text-sm leading-relaxed text-zinc-300">
              Don&apos;t wait. A lifting edge spreads fast — heat and pressure can re-bond it in the first few weeks, but once dirt and moisture get under the film, it&apos;s done. Get back to your installer immediately and ask for a warranty inspection.
            </p>
          </div>

          {/* FAQ */}
          <h2 className="mt-12 text-2xl font-medium text-white">Frequently asked questions</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Is wrap lifting covered under warranty?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Usually yes, if it happens within the warranty period and isn&apos;t caused by abuse (pressure washing, automatic car washes, accidents). The catch: the warranty often covers material only, not labor to redo the install.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Can a lifted wrap be fixed without redoing it?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">If caught very early (within weeks), heat and pressure can re-bond a lifted edge. Once contaminants get under the film, the section needs to be cut out and repatched, or the panel needs to be redone.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">How do I know if my installer used cast or calendered film?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Ask for the exact brand and product code on the invoice. 3M 2080, Avery SW900, Hexis Skintac, and KPMF are cast. If the spec sheet says &quot;monomeric&quot; or &quot;polymeric&quot; without &quot;cast,&quot; it&apos;s calendered.</p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            Wraps don&apos;t fail at random. Prep, film grade, edges, washing, climate, and vehicle choice each move the lifespan dial. Get them all right and you&apos;re looking at 5 to 7 years. Get any two wrong and you&apos;re paying for a redo in 18 months. The good news: every factor is something you can control — or at least predict — before you commit.
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
