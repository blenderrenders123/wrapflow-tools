import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Wheel offset explained: the 3 numbers every buyer needs to know",
  description: "Offset, backspacing, bolt pattern — what each one actually means, how they affect fitment, and how to read a wheel spec without guessing. A plain-English guide for anyone buying aftermarket wheels.",
  openGraph: {
    title: "Wheel offset explained",
    description: "Plain-English guide to wheel offset, backspacing, and fitment numbers.",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[120px]" />
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
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-cyan-300">
              Wheel guide
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> June 4, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 8 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Wheel offset <span className="bg-gradient-to-r from-cyan-200 via-amber-200 to-cyan-200 bg-clip-text text-transparent">explained</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            You found wheels you love. The size is right. The price is right. Then someone in a forum casually mentions &quot;the offset won&apos;t work&quot; and suddenly you&apos;re lost in negative numbers, backspacing diagrams, and angry stance arguments. Here&apos;s what each of these numbers actually means — in plain English, without the jargon.
          </p>
        </div>

        <figure className="mb-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
              alt="A car with custom aftermarket wheels"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <figcaption className="mt-2 text-center text-xs text-zinc-500">Wheels that fit your car aren&apos;t the same as wheels that look right on your car. The difference is offset.</figcaption>
        </figure>

        <div className="mb-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6 backdrop-blur-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-cyan-300">Key takeaways</p>
          <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
            <li>• Offset is the distance from wheel center to mounting surface, in millimeters</li>
            <li>• Higher positive offset = wheel sits deeper inside the fender</li>
            <li>• Lower (or negative) offset = wheel sticks out from the fender (&quot;poke&quot;)</li>
            <li>• Backspacing is just offset expressed differently — they describe the same thing</li>
            <li>• Match the bolt pattern and hub size first; then sweat the offset</li>
          </ul>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">What offset actually means</h2>
          <p className="leading-relaxed">
            Picture a wheel from the side. The centerline runs straight through the middle. Now find the mounting surface — the part that bolts against your car&apos;s hub. The distance between that mounting surface and the centerline is the offset, measured in millimeters.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Positive offset</strong> means the mounting surface is closer to the outside of the wheel (toward the street). The wheel sits deeper inside the fender, hiding more of the wheel face.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Negative offset</strong> means the mounting surface is closer to the inside (toward the car). The wheel sticks out — what enthusiasts call &quot;poke.&quot;
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Zero offset</strong> means the mounting surface is exactly at the centerline. Wheels sit perfectly flush.
          </p>
          <p className="leading-relaxed">
            Most modern front-wheel drive cars run +35 to +45 offset. Performance cars and trucks often run lower (+15 to +25). Lifted trucks frequently run negative offset (-12 to -44). Stance enthusiasts intentionally go even more negative for the &quot;hellaflush&quot; look — at the cost of fender liner contact and tire wear.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Backspacing is the same idea, different language</h2>
          <p className="leading-relaxed">
            Backspacing is the distance from the back edge of the wheel to the mounting surface, measured in inches (not mm). It tells you the same thing as offset — just from a different reference point.
          </p>
          <p className="leading-relaxed">
            European and Asian manufacturers prefer offset. American truck and 4×4 culture often uses backspacing. Many forums switch between the two casually, which is where confusion starts. Just remember: <strong className="text-white">they&apos;re measuring the same thing.</strong> Online conversion tools handle the math.
          </p>

          <figure className="my-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=80"
                alt="Close-up of an aftermarket wheel"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-zinc-500">The numbers stamped on the back of every wheel tell you exactly what it&apos;ll do on your car.</figcaption>
          </figure>

          <h2 className="mt-12 text-2xl font-medium text-white">Bolt pattern: get this right first</h2>
          <p className="leading-relaxed">
            Before you obsess over offset, confirm the wheel will even bolt on. Bolt pattern is written like &quot;5×114.3&quot; — five lugs in a circle 114.3mm wide. If your car is 5×112 and the wheel is 5×114.3, no amount of spacers will make it work safely.
          </p>
          <p className="leading-relaxed">
            Common patterns include 5×114.3 (most Japanese cars), 5×112 (most German cars), 5×120 (BMW, classic Range Rover), 5×100 (older VWs, Subarus, Toyota Corolla), 6×139.7 (Toyota trucks, common 6-lug). Always verify your specific year/model.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Hub bore (or centerbore): the part everyone forgets</h2>
          <p className="leading-relaxed">
            The centerbore is the hole in the middle of the wheel that fits over the car&apos;s hub. Most aftermarket wheels have a larger centerbore than needed, and use plastic hub rings to fill the gap. OEM wheels are usually a perfect press-fit (hub-centric).
          </p>
          <p className="leading-relaxed">
            A wheel that&apos;s lug-centric (centered only by the lug bolts) instead of hub-centric will work, but can cause noticeable vibration over 50mph until properly aligned. Always check this number — it&apos;s the most overlooked spec.
          </p>

          <blockquote className="my-10 border-l-2 border-cyan-400/50 pl-6">
            <p className="text-xl font-medium leading-relaxed text-white">
              &quot;A 5-minute spec check before ordering wheels saves a 5-day return ordeal afterward. Offset, bolt pattern, hub bore — every time, no exceptions.&quot;
            </p>
          </blockquote>

          <h2 className="mt-12 text-2xl font-medium text-white">What happens when offset is wrong</h2>
          <p className="leading-relaxed">
            Going too low (too much poke):
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Rubbing on fenders</strong> — at full lock, on big bumps, or with a passenger. Causes paint damage to your fenders, tire damage to your tires, and is illegal in many regions if the tire extends past the bodywork.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Increased steering effort</strong> — wider effective track changes how the car feels.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Wheel bearing wear</strong> — the further the wheel sits from the bearing, the more leverage on it. Bearings designed for OEM offset wear faster with low-offset wheels.
          </p>
          <p className="leading-relaxed">
            Going too high (too tucked):
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Caliper or strut contact</strong> — the inside of the wheel hits the suspension. This is the worst-case scenario and causes immediate damage.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Looks visually wrong</strong> — wheels disappear into the fenders. Not dangerous, but not what you wanted.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Common stock offsets by car type</h2>
          <div className="my-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6 backdrop-blur-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-zinc-500">
                  <th className="py-2 text-left text-xs uppercase tracking-wider font-medium">Vehicle category</th>
                  <th className="py-2 text-right text-xs uppercase tracking-wider font-medium">Typical OEM offset</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">FWD compact (Civic, Corolla)</td>
                  <td className="py-2 text-right font-medium text-white">+40 to +50</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">RWD sport sedan (BMW 3, M3)</td>
                  <td className="py-2 text-right font-medium text-white">+30 to +40</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">EV (Tesla Model 3, Model Y)</td>
                  <td className="py-2 text-right font-medium text-white">+35 to +45</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Performance car (Porsche 911)</td>
                  <td className="py-2 text-right font-medium text-white">+45 to +60</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Stock truck (F-150, Tacoma)</td>
                  <td className="py-2 text-right font-medium text-white">0 to +30</td>
                </tr>
                <tr>
                  <td className="py-2 text-zinc-400">Lifted truck</td>
                  <td className="py-2 text-right font-medium text-white">-12 to -44</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">How to find the right offset for your build</h2>
          <p className="leading-relaxed">
            <strong className="text-white">If you want a stock look:</strong> Stay within 5mm of OEM. Almost nobody will notice the difference and it&apos;ll fit guaranteed.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">If you want subtle aggressive:</strong> Reduce OEM by 10 to 15mm. So a Model 3 at +40 OEM becomes +25 to +30 aftermarket. Fills the fender but no rubbing.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">If you want flush or poke:</strong> Reduce by 20 to 35mm. Now you&apos;re in territory that may require fender rolling, camber adjustment, or careful tire sizing.
          </p>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-cyan-400/40 via-cyan-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-cyan-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-cyan-300">Skip the guesswork</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Visualize fitment before you buy</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Our free Wheel Fitment Calculator shows you exactly where any offset/backspacing combination will sit relative to your fender. Compare options side by side before you spend $2,000 on wheels that might rub.
              </p>
              <Link href="/wheel-fitment-calculator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-cyan-300 to-cyan-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-cyan-200 hover:to-cyan-400">
                Open fitment calculator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="my-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 backdrop-blur-xl">
            <div className="mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-300" />
              <p className="text-xs font-medium uppercase tracking-wider text-amber-300">A word on spacers</p>
            </div>
            <p className="text-sm leading-relaxed text-zinc-300">
              Spacers can fix &quot;too tucked&quot; but cannot fix &quot;too poke.&quot; And cheap spacers fail dangerously — wheels can come off. If you need spacers, buy hub-centric ones from reputable brands (Eibach, H&amp;R, KW). Skip Amazon no-names.
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Frequently asked questions</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Will lower offset hurt my MPG or handling?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Slightly, in extreme cases. A 15-20mm offset reduction is usually imperceptible. Beyond 30mm, expect noticeable steering effort change and possibly tire wear adjustments.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Can I run different offsets front vs rear?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Yes, this is common on RWD cars where the rear fenders are wider. Just make sure both sides of the same axle match — never mismatch left vs right.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Is poke illegal?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">In many regions, tires that extend past the bodywork are technically not road-legal. Enforcement varies wildly. Heavy poke is also harder to insure if you have a claim.</p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            Offset is just one number describing where the wheel sits in the fender. Lower offset = more poke; higher offset = more tucked. Match the bolt pattern and hub bore first, then choose your offset based on the look you&apos;re after — staying within reasonable limits of OEM unless you&apos;re ready to roll fenders. The numbers are simple once you stop overthinking them.
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
