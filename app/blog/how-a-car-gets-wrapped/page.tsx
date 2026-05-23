import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator, PlayCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "How a car gets wrapped: the full process (step by step)",
  description: "A complete visual walkthrough of the vehicle wrap process — prep, install, post-heat, and reassembly — with video and photos. What really happens in the shop.",
  openGraph: {
    title: "How a car gets wrapped: the full process",
    description: "Step-by-step visual guide to the vehicle wrap process, with video and photos.",
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
              Guide
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> May 23, 2026
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 8 min read
            </span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            How a car gets wrapped: <span className="bg-gradient-to-r from-cyan-200 via-amber-200 to-cyan-200 bg-clip-text text-transparent">the full process</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            Wrapping a car looks like magic in timelapse videos, but it&apos;s a careful, multi-stage process that takes professionals days. Here&apos;s exactly what happens from the moment a car rolls into the bay to when it drives out transformed.
          </p>
        </div>

        {/* HERO IMAGE - replace src with your Unsplash image URL */}
        <figure className="mb-12">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&q=80"
              alt="Car in a professional wrap shop bay"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <figcaption className="mt-2 text-center text-xs text-zinc-500">A vehicle prepped and ready for wrap installation.</figcaption>
        </figure>

        <div className="space-y-6 text-zinc-300">

          {/* VIDEO EMBED - replace VIDEO_ID with a real YouTube video ID */}
          <div className="my-8">
            <div className="mb-3 flex items-center gap-2">
              <PlayCircle className="h-5 w-5 text-cyan-300" />
              <p className="text-sm font-medium text-white">Watch the full process</p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/uFDYkQTmqa0"
                title="Car wrap process video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="mt-2 text-center text-xs text-zinc-500">Full wrap walkthrough. Credit: original creator on YouTube.</p>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Step 1: Inspection &amp; consultation</h2>
          <p className="leading-relaxed">
            Before anything touches the car, the installer inspects the paint. Existing scratches, rust, dents, and chipped paint all affect how the wrap goes on — and whether it&apos;ll stick at all. The client picks a finish, and the shop confirms the vehicle&apos;s condition is wrap-ready.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Step 2: Deep cleaning &amp; decontamination</h2>
          <p className="leading-relaxed">
            This is the single most important step, and the one beginners rush. The entire vehicle is washed, clay-barred to remove embedded contaminants, and wiped down with isopropyl alcohol. Any wax, grease, or residue left behind means the vinyl bonds to the contaminant instead of the paint — and lifts within weeks.
          </p>

          {/* IMAGE - replace src with your Unsplash image URL */}
          <figure className="my-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1200&q=80"
                alt="Detailer cleaning and prepping a car surface"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-zinc-500">Surface prep determines whether a wrap lasts years or fails in weeks.</figcaption>
          </figure>

          <h2 className="mt-12 text-2xl font-medium text-white">Step 3: Disassembly</h2>
          <p className="leading-relaxed">
            Professionals remove badges, door handles, light housings, and trim wherever possible. This lets the vinyl wrap cleanly around and under edges instead of being cut around obstacles. It&apos;s the difference between a factory-looking result and an obvious amateur job.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Step 4: Measuring &amp; planning the panels</h2>
          <p className="leading-relaxed">
            The installer measures each panel and plans how the film will be cut and laid. Directional finishes like carbon fiber or color-shift have to run the same way across the whole car, which affects how much material is needed. Getting this wrong means running short mid-job or visible mismatches.
          </p>

          {/* CTA to material estimator */}
          <div className="my-12 rounded-2xl bg-gradient-to-br from-cyan-400/40 via-cyan-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-cyan-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-cyan-300">Free tool</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Planning a wrap? Estimate the vinyl first.</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Our free Vinyl Material Estimator calculates linear meters by panel with the right waste factor for your finish. Know exactly how much film to order before you start.
              </p>
              <Link href="/vinyl-material-estimator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-cyan-300 to-cyan-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-cyan-200 hover:to-cyan-400">
                Open material estimator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Step 5: The install</h2>
          <p className="leading-relaxed">
            This is the part everyone pictures. The film is laid onto each panel, squeegeed to push out air, and worked around curves with heat. Large panels like roofs and hoods often need two installers working together. Tight areas — mirrors, bumpers, recesses — are the slowest and most skill-intensive parts.
          </p>

          {/* IMAGE - replace src with your Unsplash image URL */}
          <figure className="my-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80"
                alt="Vinyl film being applied to a car panel"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-zinc-500">Film is worked across each panel with squeegees and heat.</figcaption>
          </figure>

          <h2 className="mt-12 text-2xl font-medium text-white">Step 6: Post-heating</h2>
          <p className="leading-relaxed">
            Every stretched area and edge is heated to its activation temperature so the vinyl &quot;forgets&quot; its original flat shape and stays put. Skip this and the film slowly pulls back over the following days — the number one cause of edges lifting on a fresh wrap.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">Step 7: Reassembly &amp; quality check</h2>
          <p className="leading-relaxed">
            Trim, badges, and handles go back on. The installer does a final inspection in good lighting, checking for bubbles, lifted edges, and missed spots. Good shops let the car sit for a 24-hour quality check before handing it back, catching any issues before the client ever sees them.
          </p>

          <h2 className="mt-12 text-2xl font-medium text-white">How long does the whole thing take?</h2>
          <p className="leading-relaxed">
            A full wrap is typically <strong className="text-white">2-5 days</strong> end to end — not the few hours that timelapse videos suggest. Prep alone can take most of a day. The install is 20-35 hours of skilled work, plus disassembly, post-heat, and reassembly on top.
          </p>

          {/* CTA to timeline estimator */}
          <div className="my-12 rounded-2xl bg-gradient-to-br from-amber-400/40 via-amber-400/10 to-white/10 p-px">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 sm:p-8">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-amber-300" />
                <p className="text-xs font-medium uppercase tracking-wider text-amber-300">Free tool</p>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white">Estimate a full job timeline</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Our free Job Timeline Estimator breaks any wrap into phases and gives you a realistic completion date based on your crew size. Plan it before the car arrives.
              </p>
              <Link href="/job-timeline-estimator" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-amber-200 hover:to-amber-400">
                Open timeline estimator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-medium text-white">Bottom line</h2>
          <p className="leading-relaxed">
            A professional wrap is far more than &quot;sticking vinyl on a car.&quot; It&apos;s prep, planning, skilled install, and finishing — each stage affecting whether the wrap looks factory-fresh and lasts years, or bubbles and peels in weeks.
          </p>
          <p className="leading-relaxed">
            Now you know what you&apos;re paying for when you see a wrap quote — and why the cheapest option that skips prep and post-heat is rarely the best deal.
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