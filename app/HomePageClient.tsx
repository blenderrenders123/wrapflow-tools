"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, type Variants } from "motion/react";
import { Calculator, Ruler, Clock, Layers, ArrowRight, Gauge, ShieldCheck, MousePointerClick, Settings, Download, Plus, Minus, Star } from "lucide-react";

const tools = [
  {
    slug: "wrap-cost-calculator",
    title: "Wrap Cost Calculator",
    description: "Quote full or partial wraps in seconds. Factor in material, labor, complexity, and margin.",
    icon: Calculator,
    tag: "Estimator",
    gradient: "from-amber-200 via-amber-400 to-amber-600",
    gradientBorder: "from-amber-400/50 via-amber-400/5 to-white/10",
    glow: "bg-amber-400/25",
    textGradient: "from-amber-200 to-amber-400",
    tagColor: "text-amber-300",
    arrowColor: "text-amber-400",
  },
  {
    slug: "wheel-fitment-calculator",
    title: "Wheel Fitment Calculator",
    description: "Visualize offset, backspacing, and poke. Confirm clearance before the wheels arrive.",
    icon: Ruler,
    tag: "Fitment",
    gradient: "from-cyan-200 via-cyan-400 to-cyan-600",
    gradientBorder: "from-cyan-400/50 via-cyan-400/5 to-white/10",
    glow: "bg-cyan-400/22",
    textGradient: "from-cyan-200 to-cyan-400",
    tagColor: "text-cyan-300",
    arrowColor: "text-cyan-400",
  },
  {
    slug: "job-timeline-estimator",
    title: "Job Timeline Estimator",
    description: "Plan every step of the install. Know exactly how long the job takes before the car arrives.",
    icon: Clock,
    tag: "Planner",
    gradient: "from-violet-200 via-violet-400 to-violet-600",
    gradientBorder: "from-violet-400/50 via-violet-400/5 to-white/10",
    glow: "bg-violet-400/22",
    textGradient: "from-violet-200 to-violet-400",
    tagColor: "text-violet-300",
    arrowColor: "text-violet-400",
  },
  {
    slug: "vinyl-material-estimator",
    title: "Vinyl Material Estimator",
    description: "Calculate linear meters by panel, with waste-factor presets for gloss, satin, matte, and PPF.",
    icon: Layers,
    tag: "Material",
    gradient: "from-emerald-200 via-emerald-400 to-emerald-600",
    gradientBorder: "from-emerald-400/50 via-emerald-400/5 to-white/10",
    glow: "bg-emerald-400/22",
    textGradient: "from-emerald-200 to-emerald-400",
    tagColor: "text-emerald-300",
    arrowColor: "text-emerald-400",
  },
];

const howItWorks = [
  { icon: MousePointerClick, title: "Pick your tool", desc: "Choose from 4 specialized calculators built for installers.", color: "from-amber-400 to-amber-600" },
  { icon: Settings, title: "Adjust inputs", desc: "Drag sliders, pick presets, customize for your exact job.", color: "from-cyan-400 to-cyan-600" },
  { icon: Download, title: "Export or share", desc: "Copy as text or download a client-ready PDF instantly.", color: "from-violet-400 to-violet-600" },
];

const faqs = [
  { q: "Is this really free?", a: "Yes, completely free. No signup, no credit card, no hidden fees. The tools run entirely in your browser." },
  { q: "Do you store my data?", a: "No. Everything happens locally in your browser. We don't have a database, servers for your data, or any tracking on calculations." },
  { q: "Can I use this on mobile or iPad?", a: "Yes. The site is fully responsive — works great on phones and tablets, which is perfect for use in the shop bay." },
  { q: "Are the calculations accurate?", a: "The math is solid, but estimates depend on your inputs. Always verify with a physical inspection for production quotes." },
  { q: "Can you add a tool I need?", a: "Yes — please tell us. Use the contact page to suggest tools. If 5 shops ask for the same thing, we'll build it next." },
  { q: "How do you make money if it's free?", a: "We don't yet. The plan is to add a Pro tier later with branded PDF exports and saved quotes. The free tools stay free forever." },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeUpFast: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const LogoMark = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="-60 -50 120 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M -50 0 C -50 -45, -10 -45, 0 0 C 10 45, 50 45, 50 0" fill="none" stroke="#0a0a12" strokeWidth="8" strokeLinecap="round" />
    <circle cx="-50" cy="0" r="6" fill="#0a0a12" />
    <circle cx="50" cy="0" r="6" fill="#0a0a12" />
  </svg>
);

export default function HomePageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const id = anchor.getAttribute("href")?.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById("main-nav");
      if (!nav) return;
      if (window.scrollY > 50) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-amber-400/25 blur-[120px]" />
        <div className="absolute top-[200px] right-[5%] h-[450px] w-[450px] rounded-full bg-cyan-400/20 blur-[120px]" />
        <div className="absolute top-[700px] left-0 h-[400px] w-[400px] rounded-full bg-violet-400/18 blur-[120px]" />
        <div className="absolute top-[1100px] right-[20%] h-[400px] w-[400px] rounded-full bg-emerald-400/15 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      </div>

      <motion.header initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: "easeOut" }} className="sticky top-4 z-50 mx-4 lg:mx-8">
        <nav id="main-nav" className="nav-transition mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
          <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-[1.02]">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
              <LogoMark />
            </div>
            <span className="text-[15px] font-medium">WrapFlow<span className="text-zinc-400">.tools</span></span>
          </Link>
          <ul className="hidden items-center gap-8 md:flex">
            {["Tools", "How", "FAQ"].map((item) => (
              <li key={item}>
                <a href={"#" + item.toLowerCase()} className="text-sm text-zinc-400 transition hover:text-white">
                  {item === "How" ? "How it works" : item}
                </a>
              </li>
            ))}
            <li>
              <Link href="/blog" className="text-sm text-zinc-400 transition hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-zinc-400 transition hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="rounded-full bg-gradient-to-br from-amber-400/60 via-cyan-400/30 to-violet-400/40 p-px">
            <a href="#tools" className="group inline-flex items-center gap-1.5 rounded-full bg-[#06060a]/85 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-xl">
              Launch tools <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </nav>
      </motion.header>

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 lg:px-8 lg:pt-28">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="mx-auto max-w-3xl text-center">
          <motion.div variants={fadeUpFast} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
            <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            Built for installers, by installers
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            Precision tools for the
            <span className="block bg-gradient-to-r from-amber-200 via-cyan-300 to-violet-300 bg-clip-text text-transparent" style={{ backgroundSize: "200% 100%", animation: "shimmer 8s ease-in-out infinite" }}>
              vehicle wrap industry
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-base text-zinc-400 sm:text-lg">
            Quote faster. Spec smarter. Install with confidence. A curated suite of calculators and visualizers — no signups, no fluff.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="rounded-full bg-gradient-to-b from-amber-200 to-amber-600 p-px shadow-[0_0_40px_-8px_rgba(251,191,36,0.5)]">
              <a href="#tools" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 px-6 py-3 text-sm font-medium text-zinc-900">
                Explore the toolkit <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href="#how" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
              How it works
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUp} className="mx-auto mt-16 grid max-w-xl grid-cols-3 gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
            <Stat icon={Gauge} value="4" label="Free tools" color="text-amber-400" />
            <Stat icon={ShieldCheck} value="No API" label="Offline-ready" color="text-cyan-400" divided />
            <Stat icon={Star} value="$0" label="Forever free" color="text-violet-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} className="mb-12 text-center">
          <motion.p variants={fadeUp} className="bg-gradient-to-r from-amber-400 via-cyan-400 to-violet-400 bg-clip-text text-xs font-medium uppercase tracking-[0.25em] text-transparent">
            How it works
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-2 text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Three steps. That&apos;s it.
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="grid gap-6 md:grid-cols-3">
          {howItWorks.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.title} variants={fadeUp} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <div className={"mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br " + step.color}>
                  <Icon className="h-5 w-5 text-zinc-900" strokeWidth={2} />
                </div>
                <div className="absolute right-5 top-5 text-xl font-medium text-white/10">0{i + 1}</div>
                <h3 className="text-lg font-medium text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* TOOL CARDS */}
      <section id="tools" className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <motion.div variants={fadeUp}>
            <p className="bg-gradient-to-r from-amber-400 via-cyan-400 to-violet-400 bg-clip-text text-xs font-medium uppercase tracking-[0.25em] text-transparent">The toolkit</p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight text-white sm:text-4xl">Four tools. Zero friction.</h2>
          </motion.div>
          <motion.p variants={fadeUp} className="max-w-md text-sm text-zinc-400">Each tool runs entirely in your browser.</motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerContainer} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <motion.div key={tool.slug} variants={fadeUp} whileHover={{ y: -4 }} transition={{ duration: 0.3, ease: "easeOut" }} className={"rounded-2xl bg-gradient-to-br p-px " + tool.gradientBorder}>
                <Link href={"/" + tool.slug} className="group relative block overflow-hidden rounded-2xl bg-[#0a0a12]/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl sm:p-7">
                  <div className={"pointer-events-none absolute -top-16 -right-10 h-44 w-44 rounded-full blur-3xl opacity-60 transition-opacity duration-500 group-hover:opacity-100 " + tool.glow} />
                  <div className="relative flex items-start justify-between gap-4">
                    <div className={"rounded-xl bg-gradient-to-br p-px transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110 " + tool.gradient}>
                      <div className="flex h-10 w-10 items-center justify-center rounded-[11px] bg-[#0a0a12]/85">
                        <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                      </div>
                    </div>
                    <span className={"rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider backdrop-blur-xl " + tool.tagColor}>{tool.tag}</span>
                  </div>
                  <h3 className="relative mt-6 text-lg font-medium tracking-tight text-white">{tool.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-zinc-400">{tool.description}</p>
                  <div className="relative mt-6 inline-flex items-center gap-1.5 text-xs font-medium">
                    <span className={"bg-gradient-to-r bg-clip-text text-transparent " + tool.textGradient}>Open tool</span>
                    <ArrowRight className={"h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 " + tool.arrowColor} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* EARLY ACCESS */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} className="mb-12 text-center">
          <motion.p variants={fadeUp} className="bg-gradient-to-r from-amber-400 via-cyan-400 to-violet-400 bg-clip-text text-xs font-medium uppercase tracking-[0.25em] text-transparent">Early access</motion.p>
          <motion.h2 variants={fadeUp} className="mt-2 text-3xl font-medium tracking-tight text-white sm:text-4xl">Be one of the first</motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-xl text-sm text-zinc-400">WrapFlow.tools just launched. Try the toolkit and become a founding user — your feedback shapes what gets built next.</motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="grid gap-5 md:grid-cols-3">
          {[
            { title: "Your name here", desc: "Try the tools, tell us what works and what's missing. Real feedback gets real fixes." },
            { title: "Shape the roadmap", desc: "Suggest a tool. If 5 shops ask for the same thing, we'll build it next. No big company red tape." },
            { title: "Free forever", desc: "Founders who use it early lock in lifetime free access — even when Pro features launch later." },
          ].map((t) => (
            <motion.div key={t.title} variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <div className="mb-3 h-px w-10 bg-gradient-to-r from-amber-400 to-transparent" />
              <h3 className="text-base font-medium text-white">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{t.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} className="mb-10 text-center">
          <motion.p variants={fadeUp} className="bg-gradient-to-r from-amber-400 via-cyan-400 to-violet-400 bg-clip-text text-xs font-medium uppercase tracking-[0.25em] text-transparent">FAQ</motion.p>
          <motion.h2 variants={fadeUp} className="mt-2 text-3xl font-medium tracking-tight text-white sm:text-4xl">Common questions</motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={fadeUpFast} className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-xl">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/[0.03]">
                <span className="text-sm font-medium text-white">{faq.q}</span>
                {openFaq === i ? <Minus className="h-4 w-4 flex-shrink-0 text-zinc-400" /> : <Plus className="h-4 w-4 flex-shrink-0 text-zinc-400" />}
              </button>
              <motion.div initial={false} animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }} transition={{ duration: 0.25, ease: "easeOut" }} className="overflow-hidden">
                <p className="px-5 pb-4 text-sm leading-relaxed text-zinc-400">{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer id="about" className="border-t border-white/5 bg-[#04040a]/80 backdrop-blur-xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <motion.div variants={fadeUp} className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Link href="/" className="group flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <LogoMark />
                </div>
                <span className="text-sm font-medium">WrapFlow<span className="text-zinc-400">.tools</span></span>
              </Link>
              <p className="mt-3 max-w-xs text-xs text-zinc-500">Precision calculators for wrap, tint, and PPF pros.</p>
            </div>
            <nav>
              <ul className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
                {tools.map((t) => (
                  <li key={t.slug}>
                    <Link href={"/" + t.slug} className="inline-block text-zinc-400 transition hover:translate-x-0.5 hover:text-white">{t.title}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/blog" className="inline-block text-zinc-400 transition hover:translate-x-0.5 hover:text-white">Blog</Link>
                </li>
                <li>
                  <Link href="/contact" className="inline-block text-zinc-400 transition hover:translate-x-0.5 hover:text-white">Contact</Link>
                </li>
              </ul>
            </nav>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center">
            <p>© 2026 WrapFlow.tools — All rights reserved.</p>
            <p>Built for the shop floor.</p>
          </motion.div>
        </motion.div>
      </footer>
    </main>
  );
}

function Stat({ icon: Icon, value, label, color, divided }: { icon: React.ComponentType<{ className?: string }>; value: string; label: string; color: string; divided?: boolean }) {
  return (
    <div className={"flex flex-col items-center gap-1 " + (divided ? "border-x border-white/5" : "")}>
      <Icon className={"mb-1 h-4 w-4 " + color} />
      <span className="bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-lg font-medium text-transparent">{value}</span>
      <span className="text-xs text-zinc-500">{label}</span>
    </div>
  );
}