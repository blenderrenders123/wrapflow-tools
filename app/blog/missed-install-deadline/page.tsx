import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Clock as ClockIcon, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "I promised a wrap in 2 days and it took 5. Here's the fix.",
  description: "Why wrap shops blow past install deadlines, how to estimate job time accurately, and a free timeline tool that plans every phase before the car arrives.",
  openGraph: {
    title: "I missed my wrap install deadline — here's why",
    description: "The real reasons wrap jobs run over schedule and how to plan timelines that actually hold.",
  },
};

export default function BlogPost() {
  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-violet-400/20 blur-[120px]" />
        <div className="absolute top-[600px] right-[5%] h-[450px] w-[450px] rounded-full bg-red-400/10 blur-[120px]" />
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
              Workflow
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> May 20, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 6 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            &quot;I promised a wrap in 2 days. <span className="bg-gradient-to-r from-violet-200 via-red-300 to-violet-200 bg-clip-text text-transparent">It took 5.&quot;</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            The client showed up to collect their car. It wasn&apos;t done. Now you&apos;re the shop that misses deadlines — and in this industry, reputation travels fast. Here&apos;s why wrap jobs blow past schedule and how to plan timelines that hold.
          </p>
        </div>

        <div className="mb-10 rounded-2xl border border-red-400/20 bg-red-400/5 p-6 backdrop-blur-xl">
          <div className="mb-3 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-red-300" />
            <p className="text-xs font-medium uppercase tracking-wider text-red-300">Where the time actually goes</p>
          </div>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-2 text-zinc-400">Prep & cleaning (underestimated)</td>
                <td className="py-2 text-right font-medium text-white">4 – 8 hrs</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-2 text-zinc-400">Disassembly (badges, handles, trim)</td>
                <td className="py-2 text-right font-medium text-white">2 – 5 hrs</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-2 text-zinc-400">Actual install</td>
                <td className="py-2 text-right font-medium text-white">20 – 35 hrs</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-2 text-zinc-400">Reassembly & post-heat</td>
                <td className="py-2 text-right font-medium text-white">3 – 6 hrs</td>
              </tr>
              <tr>
                <td className="py-2 text-zinc-400">The redo nobody plans for</td>
                <td className="py-2 text-right font-medium text-white">2 – 8 hrs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-6 text-zinc-300">

          <h2 className="mt-12 text-2xl font-medium text-white">Why wrap timelines blow up</h2>
          <p className="leading-relaxed">
            Almost every missed deadline traces back to one of these four causes. Usually the first one.
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">1. You quoted install time, not total time</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                The wrap itself takes 25 hours. But prep, disassembly, reassembly, and post-heating add 12-20 hours on top. New shops quote the install number and forget the rest.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">2. No buffer for surprises</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Bad paint underneath. A panel that won&apos;t cooperate. Vinyl that lifts and needs redoing. Every job has at least one surprise. If your schedule has zero slack, one surprise blows the whole deadline.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">3. Solo work on a two-person job</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Large panels (roofs, hoods, full sides) are dramatically faster with two installers. Doing them solo can double the time and increase the redo risk.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
              <h3 className="text-base font-medium text-white">4. Stacking jobs back-to-back</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Booking the next car the moment one finishes leaves no room for overflow. When job 1 runs late, job 2 starts late, and the delay cascades through your whole week.
              </p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">The phases people forget to schedule</h2>
          <p className="leading-relaxed">
            A wrap isn&apos;t one task — it&apos;s a chain of phases, each with its own time cost:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Prep:</strong> wash, decontaminate, clay, IPA wipe-down. Skipping this causes failures, so it can&apos;t be rushed.</li>
            <li className="list-disc"><strong className="text-white">Disassembly:</strong> removing badges, handles, lights, trim for tucked edges. Adds hours but makes a cleaner result.</li>
            <li className="list-disc"><strong className="text-white">Install:</strong> the actual wrapping, panel by panel.</li>
            <li className="list-disc"><strong className="text-white">Post-heat:</strong> heat-setting every edge and recess so the wrap holds. Non-negotiable.</li>
            <li className="list-disc"><strong className="text-white">Reassembly & QC:</strong> putting trim back, final inspection, fixing small lifts.</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">How to build a timeline that holds</h2>
          <p className="leading-relaxed">
            Veteran shops follow a simple rule: <strong className="text-white">estimate every phase, sum it, then add a 20% buffer.</strong> If the math says 3 days, you tell the client 4. You either finish early (hero) or on time (professional). You never finish late.
          </p>
          <p className="leading-relaxed">
            The buffer isn&apos;t padding — it&apos;s the statistical reality that something always takes longer than planned. Pricing it in upfront is the difference between a shop that&apos;s reliable and one that isn&apos;t.
          </p>

          <div className="my-12 rounded-2xl bg-gradient-to-br from-violet-400/40 via-violet-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-violet-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-violet-300">Plan it before the car arrives</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Map every phase in 60 seconds</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Our free Job Timeline Estimator breaks the job into prep, install, and finish phases, accounts for your team size, and adds a buffer automatically. Get a realistic completion date you can actually promise.
              </p>
              <Link href="/job-timeline-estimator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-violet-300 to-violet-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-violet-200 hover:to-violet-400">
                Open timeline estimator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">When you&apos;re already running late</h2>
          <p className="leading-relaxed">
            If a job is slipping and the deadline is real, here&apos;s how to handle it like a pro:
          </p>
          <ul className="space-y-2 pl-6 leading-relaxed">
            <li className="list-disc"><strong className="text-white">Call the client early, not late.</strong> The moment you know you&apos;ll miss, tell them. A heads-up 24 hours out is forgivable. A no-show surprise is not.</li>
            <li className="list-disc"><strong className="text-white">Never rush the post-heat.</strong> A wrap delivered a day late is fine. A wrap that peels in 2 months because you skipped heat-setting is a disaster.</li>
            <li className="list-disc"><strong className="text-white">Offer a small goodwill gesture.</strong> Free ceramic top-coat, a discount on the next job, anything that signals you value their patience.</li>
            <li className="list-disc"><strong className="text-white">Don&apos;t book the next car</strong> until this one is genuinely close to done.</li>
          </ul>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            Missing deadlines isn&apos;t a speed problem — it&apos;s a planning problem. Estimate every phase, account for your crew size, add a buffer, and quote the padded number. Shops that do this build a reputation for reliability, which in the wrap world is worth more than being the cheapest or the fastest.
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