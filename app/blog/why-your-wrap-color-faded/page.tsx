import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Why did your wrap color fade? Real causes and how to slow it down",
  description: "Wrap looking dull or color-shifted after a year or two? Here are the 5 actual causes of premature fading — UV, sealant choice, heat cycles, pollutants, and color — plus how to slow each one down.",
  openGraph: {
    title: "Why did your wrap color fade?",
    description: "The real reasons wraps lose their color early — and how to slow the fade.",
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
              <Calendar className="h-3 w-3" /> June 1, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 8 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Why did your wrap <span className="bg-gradient-to-r from-rose-200 via-amber-200 to-rose-200 bg-clip-text text-transparent">color fade?</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            That deep red is looking a little orange. The black is going gray. The blue has a chalky cast in direct sun. Premature wrap fading is rarely random — it&apos;s the result of 5 specific factors stacking up. Here&apos;s exactly what&apos;s happening and what you can still do about it.
          </p>
        </div>

        <figure className="mb-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80"
              alt="A car parked in direct sunlight"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <figcaption className="mt-2 text-center text-xs text-zinc-500">Most fade damage happens in the first 18 months. After that the rate slows — but the color is already gone.</figcaption>
        </figure>

        <div className="mb-10 rounded-2xl border border-rose-400/20 bg-rose-400/5 p-6 backdrop-blur-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-rose-300">Key takeaways</p>
          <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
            <li>• UV is the #1 cause of fade — even on cloudy days</li>
            <li>• Carnauba wax and oil-based products accelerate fade dramatically</li>
            <li>• Red, orange, and yellow pigments fade fastest; blacks and grays slowest</li>
            <li>• Heat cycling (hot day, cold night) stresses the pigment layer</li>
            <li>• Industrial fallout deposits chemicals that bleach colors over time</li>
          </ul>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">1. UV exposure (the main villain)</h2>
          <p className="leading-relaxed">
            Sunlight contains ultraviolet radiation, and UV breaks down the chemical bonds in pigments. Modern automotive vinyl has UV stabilizers built in, but they have a finite lifespan — typically 5 to 7 years of normal exposure. Park outside in direct sun all day, every day, and you can cut that protective window in half.
          </p>
          <p className="leading-relaxed">
            The fade isn&apos;t uniform either. The roof, hood, and trunk lid fade fastest because they face the sun directly. The lower side panels often look untouched after years because they&apos;re vertical and shaded. If your wrap&apos;s top surfaces look different from the sides, UV is the cause.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">How to slow it:</strong> Park in shade, in a garage, or under a cover whenever possible. Even a few hours of shade per day can extend pigment life by years. UV-blocking sealants made for vinyl add another layer of protection.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">2. The wrong sealant or wax</h2>
          <p className="leading-relaxed">
            This is the single most common mistake by well-meaning wrap owners. Traditional car wax — carnauba, petroleum-based polishes, anything with solvents — can stain matte and satin finishes, dissolve the surface layer of gloss films, and leave a residue that actually attracts UV damage. Wax that looks like it&apos;s &quot;protecting&quot; the wrap is sometimes destroying it.
          </p>
          <p className="leading-relaxed">
            Wrap-safe sealants are specifically formulated to bond to vinyl without solvents. They form a thin protective layer that reflects UV and resists water spots without breaking down the film underneath.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">How to slow it:</strong> Throw out any product that doesn&apos;t explicitly say &quot;safe for vinyl wraps&quot; or &quot;safe for PPF.&quot; Apply a wrap-safe sealant every 4 to 6 months.
          </p>

          <figure className="my-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1200&q=80"
                alt="Hand applying product to a car panel"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-zinc-500">The wrong sealant can age a wrap faster than no sealant at all.</figcaption>
          </figure>

          <h2 className="mt-12 text-2xl font-medium text-white">3. Heat cycling stress</h2>
          <p className="leading-relaxed">
            Every time your car heats up in the sun and cools down at night, the vinyl expands and contracts slightly. The pigment layer is the most fragile part of that sandwich, and after thousands of cycles, microscopic stress fractures develop. Light scatters through those fractures and the color reads as duller.
          </p>
          <p className="leading-relaxed">
            This is why wraps in places like Phoenix or Las Vegas, where daily temperature swings of 30 to 40 degrees are normal, often fade faster than wraps in milder climates — even when total UV hours are similar.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">How to slow it:</strong> Garage parking again. Even better, parking under a shade cloth that lets some heat dissipate but blocks direct sun. The goal is to reduce the swing, not eliminate it.
          </p>

          <blockquote className="my-10 border-l-2 border-rose-400/50 pl-6">
            <p className="text-xl font-medium leading-relaxed text-white">
              &quot;A wrap parked outdoors in a hot, sunny climate ages roughly 2x faster than the same wrap garage-kept. That&apos;s years off the lifespan from parking alone.&quot;
            </p>
          </blockquote>

          <h2 className="mt-12 text-2xl font-medium text-white">4. Industrial fallout and pollutants</h2>
          <p className="leading-relaxed">
            If you live or park near a highway, an industrial area, a port, or a busy parking structure, your wrap is constantly catching airborne particles — brake dust (iron), tire compounds, soot, and microscopic chemical pollutants. These embed in the surface and slowly oxidize the pigment underneath.
          </p>
          <p className="leading-relaxed">
            The fade pattern from fallout is distinctive: small spots and patches rather than uniform dulling, often most visible on horizontal surfaces. Run your hand over the wrap on a clean car — if it feels gritty even after a wash, fallout is sitting on the surface.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">How to slow it:</strong> Decontamination wash twice a year using an iron remover and wrap-safe clay alternative. Removes embedded contaminants that regular soap can&apos;t touch.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">5. The color you picked</h2>
          <p className="leading-relaxed">
            Not all pigments are created equal. Reds, oranges, and yellows are organic-based pigments — beautiful, vibrant, and chemically less stable under UV. Blacks, grays, and whites use carbon and titanium oxide compounds that are much more stable. A red wrap and a black wrap installed on the same day, same car, same climate, will fade at noticeably different rates.
          </p>
          <p className="leading-relaxed">
            This isn&apos;t a defect — it&apos;s physics. Manufacturers know this, which is why premium red films cost more (they use better stabilizers) and why some film series only come in stable color families.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">If you&apos;re still choosing:</strong> If maximum longevity matters and you have flexibility on color, lean toward neutrals. If you want red or orange, invest in the premium cast film tier — the extra cost buys real years.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Fade timeline by scenario</h2>
          <div className="my-6 rounded-2xl border border-rose-400/20 bg-rose-400/5 p-6 backdrop-blur-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-zinc-500">
                  <th className="py-2 text-left text-xs uppercase tracking-wider font-medium">Scenario</th>
                  <th className="py-2 text-right text-xs uppercase tracking-wider font-medium">Visible fade starts</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Black/gray, garage-kept, mild climate</td>
                  <td className="py-2 text-right font-medium text-white">5 – 7 years</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Black/gray, daily driver, outdoor parking</td>
                  <td className="py-2 text-right font-medium text-white">3 – 4 years</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Red/orange, garage-kept, mild climate</td>
                  <td className="py-2 text-right font-medium text-white">3 – 5 years</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 text-zinc-400">Red/orange, outdoor, hot climate</td>
                  <td className="py-2 text-right font-medium text-white">12 – 24 months</td>
                </tr>
                <tr>
                  <td className="py-2 text-zinc-400">Any color, oil-based wax applied regularly</td>
                  <td className="py-2 text-right font-medium text-white">Cut these times in half</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-rose-400/40 via-rose-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-rose-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-rose-300">Forecast your wrap&apos;s real lifespan</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">See how long your wrap should actually last</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Plug in your climate, parking, usage, and film type. Our Wrap Lifespan Predictor gives you a realistic year-by-year forecast — color fade included — based on industry data.
              </p>
              <Link href="/wrap-lifespan-predictor" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-rose-300 to-rose-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-rose-200 hover:to-rose-400">
                Open lifespan predictor <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Can faded color be reversed?</h2>
          <p className="leading-relaxed">
            Honest answer: mostly no. Once pigment has broken down, it&apos;s gone. A thorough decontamination wash and a fresh wrap-safe sealant can restore some surface brightness — sometimes 10 to 15% — by removing embedded contaminants and adding optical clarity. But the underlying color shift is permanent.
          </p>
          <p className="leading-relaxed">
            The hard truth: if a wrap has noticeable fade, the right move is usually to plan the next install. The good news is that you now know the five factors, and you can set up the new wrap to last twice as long.
          </p>

          <div className="my-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 backdrop-blur-xl">
            <div className="mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-300" />
              <p className="text-xs font-medium uppercase tracking-wider text-amber-300">If your wrap is still under warranty</p>
            </div>
            <p className="text-sm leading-relaxed text-zinc-300">
              Premium films carry fade warranties of 5 to 7 years for cast vinyl. If your wrap is fading noticeably inside that window and you haven&apos;t abused it, contact your installer. Document with photos in different lighting. Some manufacturers will replace film at no material cost if their stabilizers failed early.
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Frequently asked questions</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Does ceramic coating prevent wrap fade?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">A wrap-safe ceramic coating adds a thin UV-blocking layer that genuinely slows fade — but only by 20 to 30%. Don&apos;t expect miracles, but it&apos;s worth the few hundred dollars on an expensive wrap.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Why is only my hood faded?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Horizontal surfaces face the most direct UV. Hood, roof, and trunk fade first. The sides often look fresh by comparison. Uneven fade is normal and expected.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Is calendered film worse for fade?</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Yes, significantly. Calendered films use cheaper UV stabilizers and thinner pigment layers. Expect 2 to 3 years of usable color, vs. 5 to 7 for premium cast film.</p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            Wrap fade comes from UV, sealant mistakes, heat cycling, fallout, and pigment chemistry. You can&apos;t eliminate any of them, but you can dramatically slow all five. Garage parking, wrap-safe sealants, and twice-yearly decontamination washes are the high-leverage moves. Get those right and the same film that fades at 18 months in a worst-case scenario will look fresh past year five.
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
