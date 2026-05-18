import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "How long does a vehicle wrap actually last? (2026 guide)",
  description: "Real-world lifespan of vehicle wraps by brand, finish, and climate. When wraps fail, why, and how to extend their life. Plus when to replace vs repair.",
  openGraph: {
    title: "How long does a vehicle wrap last?",
    description: "Real lifespan numbers by brand, finish, and climate. Plus warning signs your wrap is failing.",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-emerald-400/20 blur-[120px]" />
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
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-emerald-300">
              Materials
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> May 18, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 7 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            How long does a <span className="bg-gradient-to-r from-emerald-200 via-cyan-300 to-amber-200 bg-clip-text text-transparent">vehicle wrap</span> actually last?
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            A quality vehicle wrap lasts <strong className="text-white">5 to 7 years</strong> outdoors, longer if garaged. But the real answer depends on three things: brand of vinyl, type of finish, and your climate. Here&apos;s what installers see in the field.
          </p>
        </div>

        <div className="mb-10 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 backdrop-blur-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-emerald-300">Lifespan by vinyl type</p>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Premium cast (3M, Avery, KPMF)</td>
                <td className="py-2 text-right font-medium text-white">5 – 7 years</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Premium cast (garaged vehicle)</td>
                <td className="py-2 text-right font-medium text-white">8 – 10 years</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Mid-grade cast vinyl</td>
                <td className="py-2 text-right font-medium text-white">3 – 5 years</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Calendered (cheap) vinyl</td>
                <td className="py-2 text-right font-medium text-white">1 – 3 years</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 text-zinc-400">Chrome finishes</td>
                <td className="py-2 text-right font-medium text-white">2 – 4 years</td>
              </tr>
              <tr>
                <td className="py-2 text-zinc-400">PPF (paint protection film)</td>
                <td className="py-2 text-right font-medium text-white">10+ years</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">What actually kills a wrap</h2>
          <p className="leading-relaxed">
            Wraps don&apos;t just &quot;wear out&quot; on a calendar. They die from specific environmental stresses, usually in a predictable order:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">UV exposure</strong> — the #1 killer. Vinyl loses flexibility as plasticizers break down under sunlight.</li>
            <li className="list-disc"><strong className="text-white">Heat cycling</strong> — going from cold mornings to hot afternoons stresses adhesive bonds.</li>
            <li className="list-disc"><strong className="text-white">Salt exposure</strong> — coastal cars and road-salt cars age 30-50% faster.</li>
            <li className="list-disc"><strong className="text-white">Chemical contact</strong> — gas spills, brake fluid, harsh degreasers all eat vinyl.</li>
            <li className="list-disc"><strong className="text-white">Mechanical damage</strong> — rock chips, scrapes, drive-through car washes, and abrasive sponges.</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">Lifespan by finish type</h2>
          <p className="leading-relaxed">
            Not all finishes age equally. Some look amazing on day one but degrade fast. Others are surprisingly durable.
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Gloss vinyl — 6 to 8 years</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">The most forgiving finish. The clear-coat-like top layer protects pigment underneath and self-cleans well. Holds color longest.</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Satin vinyl — 5 to 7 years</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Sweet spot between gloss durability and matte stealth. Slightly more sensitive to chemical contact than gloss.</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Matte vinyl — 4 to 6 years</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Beautiful but high-maintenance. Cannot be polished or buffed. Stains show easily. Avoid automatic car washes.</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">Chrome / color-shift — 2 to 4 years</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Stunning when fresh, fragile in real-world use. The metallic layer can crack with heat cycling and may lift at edges within 2 years.</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">PPF (clear protection film) — 10+ years</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Self-healing top coat. UV-stable. Designed to take rock chips and minor scratches. Most manufacturers warranty 10 years.</p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Climate matters more than you think</h2>
          <p className="leading-relaxed">
            The same wrap on the same car can last twice as long in Seattle as in Phoenix. UV intensity, average temperature, humidity, and storage all stack up.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Phoenix / Las Vegas / Texas:</strong> reduce expected lifespan by 30-40%. UV is brutal.<br/>
            <strong className="text-white">Pacific Northwest / Northeast:</strong> add 15-25% to expected lifespan. Cooler temps, less direct sun.<br/>
            <strong className="text-white">Coastal cities:</strong> reduce by 20% from salt air alone.<br/>
            <strong className="text-white">Garaged vehicles anywhere:</strong> add 30-50% across the board.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Warning signs your wrap is failing</h2>
          <p className="leading-relaxed">
            Wraps rarely fail overnight. They give you warning signs months in advance. If you spot these, plan for repair or replacement:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Edge lifting</strong> at door handles, mirrors, body lines</li>
            <li className="list-disc"><strong className="text-white">Color fading</strong>, especially on horizontal surfaces (hood, roof, trunk)</li>
            <li className="list-disc"><strong className="text-white">Cracking or webbing</strong> in chrome/metallic finishes</li>
            <li className="list-disc"><strong className="text-white">Adhesive transfer</strong> showing as discoloration when viewed at angles</li>
            <li className="list-disc"><strong className="text-white">Vinyl shrinking</strong> away from edges, exposing paint underneath</li>
            <li className="list-disc"><strong className="text-white">Hazing or chalking</strong> on the surface that won&apos;t wipe clean</li>
          </ul>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-emerald-400/40 via-emerald-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-emerald-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-emerald-300">Free tool</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Planning a re-wrap? Estimate the cost first.</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Calculate vinyl needed, rolls to buy, and material cost in seconds. Free, runs in your browser.
              </p>
              <Link href="/vinyl-material-estimator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-emerald-300 to-emerald-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-emerald-200 hover:to-emerald-400">
                Open material estimator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">How to make your wrap last longer</h2>
          <p className="leading-relaxed">
            Most owners can stretch a 5-year wrap into 7+ years with basic care:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Hand wash only</strong> with pH-neutral soap. Skip drive-through car washes.</li>
            <li className="list-disc"><strong className="text-white">Park in shade</strong> or garage whenever possible. UV is the enemy.</li>
            <li className="list-disc"><strong className="text-white">Spot-clean immediately</strong> — bird droppings, sap, and bug splatter eat into vinyl within 24 hours.</li>
            <li className="list-disc"><strong className="text-white">Apply ceramic coating</strong> for wraps (yes, this is a thing). Adds 1-2 years of life.</li>
            <li className="list-disc"><strong className="text-white">Avoid pressure washing</strong> within 6 inches of edges. Lifts vinyl fast.</li>
            <li className="list-disc"><strong className="text-white">Never wax matte finishes</strong>. Use products specifically labeled for matte vinyl.</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">Repair vs replace</h2>
          <p className="leading-relaxed">
            Most wraps fail one panel at a time, not all at once. The hood, roof, and front bumper usually die first because they take the most UV and rock damage.
          </p>
          <p className="leading-relaxed">
            <strong className="text-white">Repair makes sense</strong> when:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc">Only 1-2 panels are damaged</li>
            <li className="list-disc">The original wrap is under 4 years old</li>
            <li className="list-disc">Color matching is still possible (same vinyl batch available)</li>
          </ul>
          <p className="leading-relaxed">
            <strong className="text-white">Replace the whole wrap</strong> when:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc">Multiple panels are failing</li>
            <li className="list-disc">The wrap is 5+ years old (other panels will fail soon anyway)</li>
            <li className="list-disc">The original color/batch is discontinued</li>
            <li className="list-disc">You want a different look</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            Budget for <strong className="text-white">5-7 years</strong> from a quality cast vinyl wrap. Add 2-3 years if you garage the car and stay on top of care. Cut that estimate by a third in hot, sunny climates.
          </p>
          <p className="leading-relaxed">
            And if you&apos;re a shop owner setting client expectations, share these numbers up front. The biggest complaint installers get is &quot;why is my wrap peeling at year 3?&quot; — when nobody told the client that&apos;s actually normal for matte or chrome.
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