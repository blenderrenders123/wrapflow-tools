"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Ruler, Sparkles, Download, Copy } from "lucide-react";
import jsPDF from "jspdf";

const presets = {
  stockM3: { wheelWidth: 8, offset: 35, diameter: 18, tireWidth: 245, aspect: 40, clearance: 25, label: "Stock M3" },
  flush: { wheelWidth: 9.5, offset: 22, diameter: 19, tireWidth: 255, aspect: 35, clearance: 15, label: "Flush / Stanced" },
  wide: { wheelWidth: 10.5, offset: 12, diameter: 19, tireWidth: 285, aspect: 30, clearance: 8, label: "Wide Body" },
};

function fitmentStatus(poke: number, clearance: number) {
  const buffer = clearance - poke;
  if (buffer < 0) return { label: "EXTREME POKE", color: "text-red-400", bg: "bg-red-500/15", border: "border-red-400/40", desc: "Wheels rub. Re-spec needed." };
  if (buffer < 5) return { label: "AGGRESSIVE POKE", color: "text-orange-300", bg: "bg-orange-500/15", border: "border-orange-400/40", desc: "Tight tolerance. Might rub under load." };
  if (buffer < 15) return { label: "FLUSH", color: "text-cyan-300", bg: "bg-cyan-500/15", border: "border-cyan-400/40", desc: "Clean stance. Good for street." };
  if (buffer < 25) return { label: "MILD TUCK", color: "text-emerald-300", bg: "bg-emerald-500/15", border: "border-emerald-400/40", desc: "Safe fitment. Daily-friendly." };
  return { label: "DEEP TUCK", color: "text-zinc-400", bg: "bg-zinc-500/15", border: "border-zinc-400/40", desc: "Conservative. Lots of room." };
}

export default function WheelFitmentCalculator() {
  const [wheelWidth, setWheelWidth] = useState(8);
  const [offset, setOffset] = useState(35);
  const [diameter, setDiameter] = useState(18);
  const [tireWidth, setTireWidth] = useState(245);
  const [aspect, setAspect] = useState(40);
  const [clearance, setClearance] = useState(25);
  const [copied, setCopied] = useState(false);

  const calc = useMemo(() => {
    const wheelWidthMM = wheelWidth * 25.4;
    const backspacing = (wheelWidthMM / 2 + offset) / 25.4;
    const poke = Math.max(0, (wheelWidthMM / 2 - offset) - clearance);
    const status = fitmentStatus(poke, clearance);
    const tireDiameter = diameter * 25.4 + 2 * (tireWidth * aspect / 100);
    return { wheelWidthMM: wheelWidthMM.toFixed(0), backspacing: backspacing.toFixed(2), poke: poke.toFixed(1), tireDiameter: (tireDiameter / 25.4).toFixed(1), status };
  }, [wheelWidth, offset, clearance, diameter, tireWidth, aspect]);

  const loadPreset = (preset: keyof typeof presets) => {
    const p = presets[preset];
    setWheelWidth(p.wheelWidth); setOffset(p.offset); setDiameter(p.diameter);
    setTireWidth(p.tireWidth); setAspect(p.aspect); setClearance(p.clearance);
  };

  const specText = `WHEEL FITMENT SPEC\n\nWheel: ${diameter}x${wheelWidth} ET${offset}\nTire: ${tireWidth}/${aspect}R${diameter}\nBackspacing: ${calc.backspacing}"\nFender clearance: ${clearance}mm\n\nStatus: ${calc.status.label}\n${calc.status.desc}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(specText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePDF = () => {
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const W = 210;
    const date = new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
    const specNum = "FIT-" + Date.now().toString().slice(-6);

    // Header band
    doc.setFillColor(10, 10, 18); doc.rect(0, 0, W, 36, "F");
    doc.setFillColor(34, 211, 238); doc.rect(0, 36, W, 1.2, "F");
    doc.setTextColor(255, 255, 255); doc.setFontSize(20); doc.setFont("helvetica", "bold");
    doc.text("WrapFlow.tools", 15, 16);
    doc.setFontSize(9); doc.setFont("helvetica", "normal");
    doc.setTextColor(180, 180, 200);
    doc.text("WHEEL FITMENT SPEC SHEET", 15, 24);
    doc.setFontSize(8); doc.setTextColor(34, 211, 238);
    doc.text(specNum, W - 15, 16, { align: "right" });
    doc.setTextColor(180, 180, 200);
    doc.text(date, W - 15, 22, { align: "right" });

    // Title
    let y = 52;
    doc.setTextColor(20, 20, 30); doc.setFontSize(16); doc.setFont("helvetica", "bold");
    doc.text("Fitment Analysis", 15, y);
    y += 8;
    doc.setFontSize(9); doc.setFont("helvetica", "normal"); doc.setTextColor(100, 100, 120);
    doc.text("Wheel and tire spec breakdown with clearance analysis.", 15, y);
    y += 12;

    // Wheel spec block
    doc.setFillColor(248, 250, 252); doc.roundedRect(15, y, W - 30, 30, 2, 2, "F");
    doc.setTextColor(34, 211, 238); doc.setFontSize(8); doc.setFont("helvetica", "bold");
    doc.text("WHEEL SPEC", 20, y + 7);
    doc.setTextColor(20, 20, 30); doc.setFontSize(22); doc.setFont("helvetica", "bold");
    doc.text(`${diameter}" × ${wheelWidth}" ET${offset}`, 20, y + 20);
    doc.setFontSize(9); doc.setFont("helvetica", "normal"); doc.setTextColor(100, 100, 120);
    doc.text(`Tire: ${tireWidth}/${aspect}R${diameter}`, 20, y + 27);
    y += 38;

    // Specs table
    const rows: [string, string][] = [
      ["Wheel diameter", `${diameter} in`],
      ["Wheel width", `${wheelWidth} in (${calc.wheelWidthMM} mm)`],
      ["Offset (ET)", `${offset} mm`],
      ["Backspacing", `${calc.backspacing} in`],
      ["Tire size", `${tireWidth}/${aspect}R${diameter}`],
      ["Tire overall diameter", `${calc.tireDiameter} in`],
      ["Fender clearance", `${clearance} mm`],
      ["Calculated poke", `${calc.poke} mm`],
    ];

    doc.setFontSize(10); doc.setFont("helvetica", "bold"); doc.setTextColor(20, 20, 30);
    doc.text("Specifications", 15, y); y += 6;
    rows.forEach(([k, v]) => {
      doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor(80, 80, 100);
      doc.text(k, 18, y);
      doc.setFont("helvetica", "bold"); doc.setTextColor(20, 20, 30);
      doc.text(v, W - 18, y, { align: "right" });
      doc.setDrawColor(220, 220, 230); doc.setLineDashPattern([0.5, 0.8], 0);
      doc.line(18 + doc.getTextWidth(k) + 2, y - 0.8, W - 18 - doc.getTextWidth(v) - 2, y - 0.8);
      y += 6;
    });
    y += 6;

    // Status card
    doc.setFillColor(34, 211, 238); doc.roundedRect(15, y, W - 30, 22, 2, 2, "F");
    doc.setTextColor(10, 10, 18); doc.setFontSize(8); doc.setFont("helvetica", "bold");
    doc.text("STATUS", 20, y + 7);
    doc.setFontSize(14);
    doc.text(calc.status.label, 20, y + 15);
    doc.setFontSize(9); doc.setFont("helvetica", "normal");
    doc.text(calc.status.desc, W - 20, y + 13, { align: "right" });
    y += 30;

    // Notes
    doc.setFontSize(9); doc.setFont("helvetica", "bold"); doc.setTextColor(20, 20, 30);
    doc.text("Installer Notes", 15, y); y += 5;
    doc.setFontSize(8); doc.setFont("helvetica", "normal"); doc.setTextColor(100, 100, 120);
    const notes = [
      "Always verify clearance with a physical test fitment before final order.",
      "Suspension compression may reduce static clearance by 10-15mm.",
      "Tire stretch affects effective wheel width and final fitment.",
    ];
    notes.forEach((n) => { doc.text("• " + n, 18, y); y += 5; });

    // Footer
    doc.setDrawColor(220, 220, 230); doc.setLineDashPattern([], 0); doc.line(15, 280, W - 15, 280);
    doc.setTextColor(150, 150, 170); doc.setFontSize(8);
    doc.text("Generated by WrapFlow.tools — wrapflow.site", 15, 286);
    doc.text("Free precision tools for the wrap industry", W - 15, 286, { align: "right" });

    doc.save(`fitment-spec-${specNum}.pdf`);
  };

  // Visual diagram math
  const visualPoke = (wheelWidth * 25.4 / 2 - offset);

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
            <Sparkles className="h-3 w-3" /> Fitment
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Wheel Fitment <span className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-600 bg-clip-text text-transparent">Calculator</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
            Visualize offset, poke, and fender clearance before the wheels arrive.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="mb-6 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-zinc-500">Presets:</span>
          {Object.entries(presets).map(([k, p]) => (
            <button key={k} onClick={() => loadPreset(k as keyof typeof presets)} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200">
              {p.label}
            </button>
          ))}
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* Diagram + sliders */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl sm:p-8">

            <div className="mb-6 rounded-xl bg-gradient-to-b from-zinc-900/40 to-zinc-900/80 p-4">
              <svg viewBox="0 0 600 200" className="mx-auto w-full max-w-xl">
                {/* Hub centerline */}
                <line x1="300" y1="40" x2="300" y2="180" stroke="rgba(255,255,255,0.15)" strokeDasharray="4 4" />
                <text x="300" y="32" fill="rgba(255,255,255,0.5)" fontSize="9" textAnchor="middle">HUB CENTERLINE</text>
                {/* Fender curve */}
                <path d={`M ${300 + clearance * 3.5} 60 Q ${300 + clearance * 3.5 + 30} 110, ${300 + clearance * 3.5 + 50} 170`} fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                <text x={300 + clearance * 3.5 + 60} y="100" fill="rgba(255,255,255,0.4)" fontSize="8">FENDER</text>
                {/* Wheel */}
                <rect x={300 - offset * 1.5} y="75" width={wheelWidth * 8} height="50" rx="3" fill="url(#wheelGrad)" stroke="rgba(34,211,238,0.6)" strokeWidth="1.5" />
                <defs>
                  <linearGradient id="wheelGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#155e75" />
                    <stop offset="50%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#155e75" />
                  </linearGradient>
                </defs>
                {/* Outer wheel edge marker */}
                <line x1={300 + (wheelWidth * 25.4 / 2 - offset) * 2} y1="65" x2={300 + (wheelWidth * 25.4 / 2 - offset) * 2} y2="135" stroke="#22d3ee" strokeWidth="1.5" />
                <text x={300 + (wheelWidth * 25.4 / 2 - offset) * 2} y="58" fill="#22d3ee" fontSize="9" textAnchor="middle">OUTER EDGE</text>
                {/* Rubbing zone */}
                {visualPoke > clearance && (
                  <rect x={300 + clearance * 3.5} y="75" width={Math.max(0, (visualPoke - clearance) * 3.5)} height="50" fill="rgba(239,68,68,0.4)" stroke="rgba(239,68,68,0.8)" strokeDasharray="3 3" />
                )}
              </svg>
            </div>

            <div className="space-y-5">
              <Slider label="Wheel width" value={wheelWidth} unit="in" min={6} max={13} step={0.5} onChange={setWheelWidth} hint="Common: 7-9 stock, 9-11 stanced, 11+ wide body" />
              <Slider label="Offset (ET)" value={offset} unit="mm" min={-20} max={60} step={1} onChange={setOffset} hint="Lower = more poke. ET35 stock, ET20 flush, ET0 wide" />
              <Slider label="Wheel diameter" value={diameter} unit="in" min={15} max={22} step={1} onChange={setDiameter} hint="Stock 17-18, sport 19, large 20+" />
              <Slider label="Tire width" value={tireWidth} unit="mm" min={185} max={325} step={5} onChange={setTireWidth} hint="225-265 daily, 275+ aggressive" />
              <Slider label="Tire aspect" value={aspect} unit="%" min={25} max={55} step={5} onChange={setAspect} hint="Lower = thinner sidewall. 35-45 typical" />
              <Slider label="Fender clearance" value={clearance} unit="mm" min={0} max={50} step={1} onChange={setClearance} hint="How much room to the fender edge" />
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="h-fit rounded-2xl bg-gradient-to-br from-cyan-400/40 via-cyan-400/10 to-white/10 p-px lg:sticky lg:top-28">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/80">Fitment</p>
              <motion.div key={calc.status.label} className="mt-3 text-3xl font-medium tracking-tight text-white">
                {diameter}×{wheelWidth} ET{offset}
              </motion.div>
              <p className="mt-1 text-xs text-zinc-500">{tireWidth}/{aspect}R{diameter}</p>

              <div className={"mt-5 rounded-xl border p-3 " + calc.status.bg + " " + calc.status.border}>
                <p className={"text-xs font-bold uppercase tracking-wider " + calc.status.color}>{calc.status.label}</p>
                <p className="mt-1 text-xs text-zinc-300">{calc.status.desc}</p>
              </div>

              <div className="my-5 h-px bg-white/10" />

              <div className="space-y-3 text-sm">
                <Row label="Backspacing" value={`${calc.backspacing}"`} />
                <Row label="Poke" value={`${calc.poke} mm`} />
                <Row label="Tire diameter" value={`${calc.tireDiameter}"`} />
                <Row label="Clearance" value={`${clearance} mm`} />
              </div>

              <div className="mt-5 space-y-2">
                <button onClick={handlePDF} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-cyan-300 to-cyan-500 px-4 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-cyan-200 hover:to-cyan-400 active:scale-[0.98]">
                  <Download className="h-4 w-4" /> Download PDF
                </button>
                <button onClick={handleCopy} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:bg-white/[0.08]">
                  <Copy className="h-4 w-4" /> {copied ? "Copied!" : "Copy as text"}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function Slider({ label, value, unit, min, max, step, onChange, hint }: { label: string; value: number; unit: string; min: number; max: number; step: number; onChange: (v: number) => void; hint: string }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wider text-zinc-300">{label}</span>
        <span className="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-0.5 text-sm font-medium text-cyan-200">{value} {unit}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-cyan-400" />
      <p className="mt-1 text-[10px] text-zinc-500">{hint}</p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-zinc-400">{label}</span>
      <span className="font-medium text-white">{value}</span>
    </div>
  );
}