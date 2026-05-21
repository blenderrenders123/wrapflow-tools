import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "My client says my wrap quote is too high. How to respond.",
  description: "How to defend a fair wrap quote without dropping your price, why clients push back, and a free calculator that shows clients exactly what they're paying for.",
  openGraph: {
    title: "\"Your wrap quote is too high\" — how to respond",
    description: "How to defend your pricing with a transparent breakdown instead of caving on price.",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-amber-400/20 blur-[120px]" />
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
            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-amber-300">
              Business
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> May 21, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 6 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            &quot;Your quote is <span className="bg-gradient-to-r from-amber-200 via-cyan-300 to-amber-200 bg-clip-text text-transparent">too high.&quot;</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            Every wrap shop hears it. The client got a cheaper number down the road, or just expected wraps to cost less. The wrong move is to immediately drop your price. The right move is to show them what they&apos;re actually paying for.
          </p>
        </div>

        <div className="mb-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 backdrop-blur-xl">
          <div className="mb-3 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-300" />
            <p className="text-xs font-medium uppercase tracking-wider text-amber-300">Don&apos;t do this</p>
          </div>
          <p className="text-sm leading-relaxed text-zinc-300">
            The instant you drop your price because someone pushed back, you&apos;ve told them two things: your original quote was padded, and you&apos;ll cave under pressure. You also just cut your own margin on a job that was probably priced correctly to begin with.
          </p>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">Why clients think wraps are cheap</h2>
          <p className="leading-relaxed">
            Most pushback isn&apos;t about your price being wrong — it&apos;s about the client not understanding what goes into a wrap. They see a roll of vinyl and think &quot;stickers.&quot; They don&apos;t see:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc">30-45 hours of skilled labor</li>
            <li className="list-disc">$800-1,500 in premium cast film</li>
            <li className="list-disc">Years of training to install without creases or lifting</li>
            <li className="list-disc">Shop overhead, insurance, and warranty risk</li>
            <li className="list-disc">The cost of redoing a panel if anything goes wrong</li>
          </ul>
          <p className="leading-relaxed">
            Your job isn&apos;t to argue. It&apos;s to make the invisible visible.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">The transparent breakdown response</h2>
          <p className="leading-relaxed">
            Instead of defending a single big number, break it into parts. A client who sees &quot;$4,500&quot; flinches. A client who sees where every dollar goes understands.
          </p>

          <div className="my-6 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 backdrop-blur-xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-amber-300">What the client should see</p>
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-2 text-zinc-400">Premium cast vinyl (3M/Avery)</td>
                  <td className="py-2 text-right font-medium text-white">$1,150</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 text-zinc-400">Professional install (35 hrs)</td>
                  <td className="py-2 text-right font-medium text-white">$2,100</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 text-zinc-400">Disassembly & reassembly</td>
                  <td className="py-2 text-right font-medium text-white">$400</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 text-zinc-400">Materials & shop supplies</td>
                  <td className="py-2 text-right font-medium text-white">$350</td>
                </tr>
                <tr>
                  <td className="py-2 text-zinc-400">2-year workmanship warranty</td>
                  <td className="py-2 text-right font-medium text-white">included</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed">
            Suddenly the number isn&apos;t arbitrary. It&apos;s itemized, justified, and obviously the work of a professional — not a guy with a roll of vinyl in his garage.
          </p>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-amber-400/40 via-amber-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-amber-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-amber-300">Make the breakdown for them</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Generate an itemized PDF quote</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Our free Wrap Cost Calculator builds a clean, itemized quote you can hand the client — material, labor, complexity, and margin all shown clearly. A professional breakdown closes the &quot;too expensive&quot; conversation fast.
              </p>
              <Link href="/wrap-cost-calculator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-amber-200 hover:to-amber-400">
                Open the calculator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">How to handle the cheaper competitor</h2>
          <p className="leading-relaxed">
            When a client says &quot;the shop down the road quoted $2,500,&quot; don&apos;t trash the competitor. Ask questions instead:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">&quot;What film are they using?&quot;</strong> — cheaper shops often use calendered vinyl that lasts 2-3 years instead of cast that lasts 5-7.</li>
            <li className="list-disc"><strong className="text-white">&quot;Do they include disassembly?&quot;</strong> — many low quotes wrap around badges and trim, which looks amateur and fails fast.</li>
            <li className="list-disc"><strong className="text-white">&quot;What&apos;s their warranty?&quot;</strong> — a price with no warranty isn&apos;t a deal, it&apos;s a gamble.</li>
            <li className="list-disc"><strong className="text-white">&quot;Can you see their previous work?&quot;</strong> — let the quality gap speak for itself.</li>
          </ul>
          <p className="leading-relaxed">
            You&apos;re not competing on price. You&apos;re competing on what the client actually gets.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">When it&apos;s OK to adjust</h2>
          <p className="leading-relaxed">
            Holding your price doesn&apos;t mean being inflexible. There are honest ways to land a budget-conscious client without slashing margin:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Reduce scope:</strong> partial wrap instead of full, skip the jambs, leave the roof factory.</li>
            <li className="list-disc"><strong className="text-white">Offer a different finish:</strong> gloss instead of chrome cuts material cost significantly.</li>
            <li className="list-disc"><strong className="text-white">Payment plans:</strong> split into two payments rather than discounting.</li>
            <li className="list-disc"><strong className="text-white">Off-peak scheduling:</strong> a small discount for booking during your slow week costs you nothing.</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            &quot;Too expensive&quot; usually means &quot;I don&apos;t understand the value yet.&quot; Your answer is transparency, not a discount. Show the breakdown, explain the film and labor, and let the professionalism of an itemized quote do the selling.
          </p>
          <p className="leading-relaxed">
            The clients who leave over price were never going to be good clients. The ones who stay because you educated them become referrals.
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