"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Ruler, Sparkles, Info, AlertTriangle, CheckCircle2 } from "lucide-react";

type Preset = { name: string; desc: string; values: { wheelWidth: number; offset: number; wheelDiameter: number; tireWidth: number; tireAspect: number; fenderClearance: number } };

const presets: Preset[] = [
  { name: "Stock M3", desc: "Factory BMW M3 setup", values: { wheelWidth: 8.5, offset: 40, wheelDiameter: 18, tireWidth: 245, tireAspect: 40, fenderClearance: 35 } },
  { name: "Flush / Stanced", desc: "Aggressive but legal", values: { wheelWidth: 9.5, offset: 22, wheelDiameter: 19, tireWidth: 255, tireAspect: 35, fenderClearance: 25 } },
  { name: "Wide Body", desc: "Track / show car", values: { wheelWidth: 11, offset: 5, wheelDiameter: 19, tireWidth: 285, tireAspect: 30, fenderClearance: 45 } },
];

export default function WheelFitmentCalculator() {
  const [wheelWidth, setWheelWidth] = useState(9);
  const [offset, setOffset] = useState(35);
  const [tireWidth, setTireWidth] = useState(255);
  const [tireAspect, setTireAspect] = useState(35);
  const [wheelDiameter, setWheelDiameter] = useState(19);
  const [fenderClearance, setFenderClearance] = useState(20);

  const applyPreset = (p: Preset) => {
    setWheelWidth(p.values.wheelWidth);
    setOffset(p.values.offset);
    setWheelDiameter(p.values.wheelDiameter);
    setTireWidth(p.values.tireWidth);
    setTireAspect(p.values.tireAspect);
    setFenderClearance(p.values.fenderClearance);
  };

  const calc = useMemo(() => {
    const wheelWidthMm = wheelWidth * 25.4;
    const backspacing = (wheelWidthMm / 2 + offset) / 25.4 + 0.5;
    const poke = wheelWidthMm / 2 - offset;
    const tireSidewall = (tireWidth * tireAspect) / 100;
    const overallDiameterIn = (wheelDiameter * 25.4 + tireSidewall * 2) / 25.4;

    let status: "tucked" | "flush" | "poke" | "extreme" = "flush";
    let statusDesc = "";
    if (poke < -5) {
      status = "tucked";
      statusDesc = "Wheel sits inside the fender. Conservative, lots of clearance.";
    } else if (poke <= 10) {
      status = "flush";
      statusDesc = "Wheel sits even with the fender. The clean OEM-plus look.";
    } else if (poke <= fenderClearance) {
      status = "poke";
      statusDesc = "Wheel pokes past the fender slightly. Aggressive but should clear.";
    } else {
      status = "extreme";
      statusDesc = "Wheel extends well past the fender. Will rub without modification.";
    }

    let warning = "";
    if (poke > fenderClearance) warning = "Wheel will hit fender. Needs rolling, spacers removed, or wider fenders.";
    else if (Math.abs(tireWidth - wheelWidthMm) > 30) warning = "Stretched tire. Tire is much narrower than rim. Check sidewall safety.";

    return {
      backspacing: backspacing.toFixed(2),
      poke: poke.toFixed(0),
      sidewall: tireSidewall.toFixed(0),
      overallDiameter: overallDiameterIn.toFixed(2),
      status,
      statusDesc,
      warning,
    };
  }, [wheelWidth, offset, tireWidth, tireAspect, wheelDiameter, fenderClearance]);

  const svgScale = 0.5;
  const wheelMmHalf = (wheelWidth * 25.4) / 2;
  const hubX = 200;
  const fenderX = hubX + fenderClearance * svgScale;
  const outerEdgeX = hubX + (wheelMmHalf - offset) * svgScale;
  const wheelDiameterPx = wheelDiameter * 25.4 * svgScale * 0.35;
  const tireDiameterPx = Number(calc.overallDiameter) * 25.4 * svgScale * 0.35;

  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[120px]" />
        <div className="absolute top-[400px] right-[5%] h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <header className="sticky top-4 z-50 mx-4 lg:mx-8">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
          <Link href="/" className="group flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to tools
          </Link>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-200 via-cyan-400 to-cyan-600">
              <Ruler className="h-3.5 w-3.5 text-zinc-900" strokeWidth={2.5} />
            </div>
            <span className="text-sm font-medium">Wheel Fitment Calculator</span>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-300 backdrop-blur-xl">
            <Sparkles className="h-3 w-3" />
            Fitment
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Wheel Fitment <span className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-600 bg-clip-text text-transparent">Calculator</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400 sm:text-base">
            Check if a wheel will fit your car before you buy. See poke, backspacing, and clearance issues in real time.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="mb-6 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-zinc-500">Try a preset:</span>
          {presets.map((p) => (
            <button key={p.name} onClick={() => applyPreset(p)} className="group rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200">
              {p.name}
              <span className="ml-1.5 text-zinc-500 group-hover:text-cyan-400/70">· {p.desc}</span>
            </button>
          ))}
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl sm:p-8">

            <SliderWithHelp label="Wheel Width" hint="How wide the rim is. Stock cars use 7 to 8.5 inches. Stanced builds use 9 to 11 inches." example="Stock = 8 in, aggressive = 10 in" value={wheelWidth} setValue={setWheelWidth} min={6} max={13} step={0.5} unit="in" />

            <SliderWithHelp label="Offset (ET)" hint="Where the mounting face sits. HIGH = wheel tucks INWARD. LOW = wheel POKES OUTWARD. Negative = wheel sticks way out." example="Stock BMW = ET35 to 45, stanced = ET10 to 20" value={offset} setValue={setOffset} min={-30} max={60} step={1} unit="mm" />

            <SliderWithHelp label="Wheel Diameter" hint="Rim size in inches. Bigger means lower profile tire required." example="Most cars: 17 to 19 in, trucks: 20 to 22 in" value={wheelDiameter} setValue={setWheelDiameter} min={15} max={24} step={1} unit="in" />

            <SliderWithHelp label="Tire Width" hint="Tire width in mm (first number on tire sidewall: 255/35R19)." example="Sports car = 245 to 285 mm" value={tireWidth} setValue={setTireWidth} min={185} max={325} step={5} unit="mm" />

            <SliderWithHelp label="Tire Aspect Ratio" hint="Sidewall height as percent of width. Lower means thinner sidewall and harsher ride." example="Sport = 30 to 40 percent, comfort = 50 to 60 percent" value={tireAspect} setValue={setTireAspect} min={25} max={70} step={5} unit="%" />

            <SliderWithHelp label="Fender Clearance" hint="Available space between the hub and where the fender lip ends. Measure with a ruler from hub face outward." example="Stock car = 25 to 35 mm" value={fenderClearance} setValue={setFenderClearance} min={0} max={60} step={2} unit="mm" />

            <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-[#04040a] p-4">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-cyan-300/80">Top-down view (looking down at the wheel)</p>
              <svg viewBox="0 0 400 260" className="w-full">
                <line x1={hubX} y1="20" x2={hubX} y2="240" stroke="rgba(34,211,238,0.5)" strokeWidth="1" strokeDasharray="3 3" />
                <text x={hubX} y={14} fill="rgba(34,211,238,0.9)" fontSize="9" textAnchor="middle" fontWeight="bold">HUB CENTER</text>

                <ellipse cx={hubX + (-offset) * svgScale} cy="130" rx={tireDiameterPx / 2} ry={tireDiameterPx / 2 + 10} fill="rgba(20,20,28,0.95)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

                <ellipse cx={hubX + (-offset) * svgScale} cy="130" rx={wheelDiameterPx / 2} ry={wheelDiameterPx / 2} fill="url(#wheelGrad)" stroke="rgba(34,211,238,0.6)" strokeWidth="1.5" />

                <path d={`M ${fenderX} 50 Q ${fenderX + 25} 130 ${fenderX} 210`} fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeDasharray="5 3" />
                <text x={fenderX + 30} y={130} fill="rgba(255,255,255,0.5)" fontSize="9" fontWeight="bold">FENDER</text>

                <line x1={outerEdgeX} y1="60" x2={outerEdgeX} y2="200" stroke="rgba(251,191,36,0.7)" strokeWidth="1" strokeDasharray="2 2" />
                <text x={outerEdgeX} y={50} fill="rgba(251,191,36,0.9)" fontSize="8" textAnchor="middle">OUTER EDGE</text>

                {Number(calc.poke) > fenderClearance && (
                  <>
                    <rect x={fenderX} y="65" width={outerEdgeX - fenderX} height="130" fill="rgba(239,68,68,0.18)" stroke="rgba(239,68,68,0.5)" strokeWidth="1" />
                    <text x={(fenderX + outerEdgeX) / 2} y={55} fill="rgba(239,68,68,1)" fontSize="9" textAnchor="middle" fontWeight="bold">RUBBING ZONE</text>
                  </>
                )}

                <line x1={hubX} y1="230" x2={outerEdgeX} y2="230" stroke="rgba(251,191,36,0.6)" strokeWidth="1" markerEnd="url(#arrow)" />
                <text x={(hubX + outerEdgeX) / 2} y={245} fill="rgba(251,191,36,0.9)" fontSize="8" textAnchor="middle">Poke: {calc.poke}mm</text>

                <defs>
                  <radialGradient id="wheelGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#1e1e28" />
                    <stop offset="70%" stopColor="#0a0a12" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.3" />
                  </radialGradient>
                  <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" fill="rgba(251,191,36,0.8)" />
                  </marker>
                </defs>
              </svg>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="h-fit rounded-2xl bg-gradient-to-br from-cyan-400/40 via-cyan-400/10 to-white/10 p-px lg:sticky lg:top-28">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/80">Fitment Result</p>

              <motion.div key={calc.status} initial={{ scale: 0.95, opacity: 0.5 }} animate={{ scale: 1, opacity: 1 }} className="mt-3 flex items-center gap-2">
                {calc.status === "extreme" ? <AlertTriangle className="h-5 w-5 text-red-400" /> : <CheckCircle2 className="h-5 w-5 text-emerald-400" />}
                <span className={
                  "text-lg font-medium capitalize " +
                  (calc.status === "flush" ? "text-emerald-300" :
                   calc.status === "tucked" ? "text-cyan-300" :
                   calc.status === "poke" ? "text-amber-300" :
                   "text-red-300")
                }>
                  {calc.status === "extreme" ? "Will Not Fit" : calc.status}
                </span>
              </motion.div>

              <p className="mt-2 text-xs leading-relaxed text-zinc-400">{calc.statusDesc}</p>

              {calc.warning && (
                <div className="mt-3 flex gap-2 rounded-lg border border-red-400/30 bg-red-500/10 p-3 text-xs leading-relaxed text-red-300">
                  <AlertTriangle className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>{calc.warning}</span>
                </div>
              )}

              <div className="my-5 h-px bg-white/10" />

              <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-zinc-500">Measurements</p>

              <div className="space-y-3 text-sm">
                <Row label="Backspacing" hint="Hub to inner rim edge" value={calc.backspacing + " in"} />
                <Row label="Poke" hint="How far wheel sticks past hub" value={calc.poke + " mm"} accent={Number(calc.poke) > fenderClearance} />
                <Row label="Tire sidewall" hint="Tire height from rim to road" value={calc.sidewall + " mm"} />
                <Row label="Overall diameter" hint="Full tire and wheel height" value={calc.overallDiameter + " in"} />
              </div>

              <div className="my-5 h-px bg-white/10" />

              <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-zinc-500">Spec Summary</p>
              <p className="rounded-lg border border-white/5 bg-white/[0.02] p-2.5 font-mono text-xs text-zinc-300">
                {wheelDiameter}x{wheelWidth} ET{offset}<br />
                {tireWidth}/{tireAspect}R{wheelDiameter}
              </p>

              <button
                onClick={() => {
                  const txt = "WHEEL FITMENT SPEC\n\nWheel: " + wheelDiameter + "x" + wheelWidth + " ET" + offset + "\nTire: " + tireWidth + "/" + tireAspect + "R" + wheelDiameter + "\n\nBackspacing: " + calc.backspacing + " in\nPoke: " + calc.poke + " mm\nOverall diameter: " + calc.overallDiameter + " in\n\nStatus: " + calc.status.toUpperCase() + "\n" + calc.statusDesc + (calc.warning ? "\n\nWARNING: " + calc.warning : "");
                  navigator.clipboard.writeText(txt);
                }}
                className="mt-5 w-full rounded-full bg-gradient-to-b from-cyan-300 to-cyan-500 px-4 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-cyan-200 hover:to-cyan-400 active:scale-[0.98]"
              >
                Copy fitment spec
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl sm:p-8">
          <div className="mb-5 flex items-center gap-2">
            <Info className="h-4 w-4 text-cyan-400" />
            <h3 className="text-lg font-medium text-white">Reading the diagram</h3>
          </div>
          <div className="grid gap-4 text-sm sm:grid-cols-3">
            <div>
              <p className="mb-1 font-medium text-cyan-300">Cyan dashed line</p>
              <p className="text-xs leading-relaxed text-zinc-400">The hub centerline. Where the wheel bolts onto your car.</p>
            </div>
            <div>
              <p className="mb-1 font-medium text-zinc-200">White dashed curve</p>
              <p className="text-xs leading-relaxed text-zinc-400">Your car&apos;s fender. The body panel above the wheel.</p>
            </div>
            <div>
              <p className="mb-1 font-medium text-red-300">Red zone</p>
              <p className="text-xs leading-relaxed text-zinc-400">Where the wheel will physically rub the fender. Bad.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

function SliderWithHelp({ label, hint, example, value, setValue, min, max, step, unit }: { label: string; hint: string; example: string; value: number; setValue: (v: number) => void; min: number; max: number; step: number; unit: string }) {
  return (
    <div className="mb-7">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wider text-zinc-300">{label}</span>
        <span className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-sm font-medium text-cyan-300">
          {value} {unit}
        </span>
      </div>
      <p className="mt-1 text-xs leading-relaxed text-zinc-500">{hint}</p>
      <p className="text-[11px] italic text-zinc-600">{example}</p>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => setValue(Number(e.target.value))} className="mt-2 w-full accent-cyan-400" />
    </div>
  );
}

function Row({ label, hint, value, accent }: { label: string; hint?: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="text-zinc-300">{label}</div>
        {hint && <div className="text-xs text-zinc-500">{hint}</div>}
      </div>
      <div className={accent ? "font-medium text-red-300" : "font-medium text-white"}>{value}</div>
    </div>
  );
}