"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Layers, Sparkles, Plus, Trash2, Copy, Download } from "lucide-react";
import jsPDF from "jspdf";

type Panel = { id: string; name: string; length: number; width: number };

const finishOptions = [
  { id: "gloss", label: "Gloss", waste: 10, costPerMeter: 35 },
  { id: "satin", label: "Satin", waste: 15, costPerMeter: 40 },
  { id: "matte", label: "Matte", waste: 12, costPerMeter: 38 },
  { id: "chrome", label: "Chrome", waste: 35, costPerMeter: 95 },
  { id: "ppf", label: "PPF", waste: 20, costPerMeter: 75 },
];

const defaultPanels: Panel[] = [
  { id: "1", name: "Hood", length: 1.7, width: 1.4 },
  { id: "2", name: "Roof", length: 1.5, width: 1.3 },
  { id: "3", name: "Trunk", length: 1.4, width: 1.3 },
  { id: "4", name: "Front bumper", length: 1.8, width: 0.6 },
  { id: "5", name: "Rear bumper", length: 1.8, width: 0.55 },
];

export default function VinylMaterialEstimator() {
  const [panels, setPanels] = useState<Panel[]>(defaultPanels);
  const [finishId, setFinishId] = useState("gloss");
  const [rollSize, setRollSize] = useState(25);
  const [copied, setCopied] = useState(false);

  const finish = finishOptions.find((f) => f.id === finishId)!;

  const calc = useMemo(() => {
    const totalArea = panels.reduce((s, p) => s + p.length * p.width, 0);
    const linearMeters = panels.reduce((s, p) => s + p.length, 0);
    const withWaste = linearMeters * (1 + finish.waste / 100);
    const rollsNeeded = Math.ceil(withWaste / rollSize);
    const leftover = (rollsNeeded * rollSize) - withWaste;
    const totalCost = withWaste * finish.costPerMeter;
    return {
      totalArea: totalArea.toFixed(2),
      linearMeters: linearMeters.toFixed(2),
      withWaste: withWaste.toFixed(2),
      rollsNeeded,
      leftover: leftover.toFixed(2),
      totalCost: totalCost.toFixed(0),
    };
  }, [panels, finish, rollSize]);

  const addPanel = () => setPanels([...panels, { id: Date.now().toString(), name: "New panel", length: 1, width: 1 }]);
  const removePanel = (id: string) => setPanels(panels.filter((p) => p.id !== id));
  const updatePanel = (id: string, field: keyof Panel, value: string | number) => {
    setPanels(panels.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  };

  const handleCopy = () => {
    const txt = "VINYL MATERIAL ESTIMATE\n\n" + panels.map((p) => `${p.name}: ${p.length}m × ${p.width}m = ${(p.length * p.width).toFixed(2)} m²`).join("\n") + `\n\nFinish: ${finish.label} (${finish.waste}% waste)\nLinear meters: ${calc.linearMeters}m\nWith waste: ${calc.withWaste}m\nRolls (${rollSize}m): ${calc.rollsNeeded}\nLeftover: ${calc.leftover}m\nEstimated cost: $${calc.totalCost}`;
    navigator.clipboard.writeText(txt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePDF = () => {
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const W = 210;
    const date = new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
    const matNum = "MAT-" + Date.now().toString().slice(-6);

    doc.setFillColor(10, 10, 18); doc.rect(0, 0, W, 36, "F");
    doc.setFillColor(52, 211, 153); doc.rect(0, 36, W, 1.2, "F");
    doc.setTextColor(255, 255, 255); doc.setFontSize(20); doc.setFont("helvetica", "bold");
    doc.text("WrapFlow.tools", 15, 16);
    doc.setFontSize(9); doc.setFont("helvetica", "normal");
    doc.setTextColor(180, 180, 200);
    doc.text("VINYL MATERIAL ORDER", 15, 24);
    doc.setFontSize(8); doc.setTextColor(52, 211, 153);
    doc.text(matNum, W - 15, 16, { align: "right" });
    doc.setTextColor(180, 180, 200);
    doc.text(date, W - 15, 22, { align: "right" });

    let y = 52;
    doc.setTextColor(20, 20, 30); doc.setFontSize(16); doc.setFont("helvetica", "bold");
    doc.text("Material Order", 15, y); y += 8;
    doc.setFontSize(9); doc.setFont("helvetica", "normal"); doc.setTextColor(100, 100, 120);
    doc.text("Panel-by-panel breakdown with waste factor applied.", 15, y); y += 12;

    // Summary block
    doc.setFillColor(248, 250, 252); doc.roundedRect(15, y, W - 30, 30, 2, 2, "F");
    doc.setTextColor(52, 211, 153); doc.setFontSize(8); doc.setFont("helvetica", "bold");
    doc.text("FINISH", 20, y + 7);
    doc.setTextColor(20, 20, 30); doc.setFontSize(22); doc.setFont("helvetica", "bold");
    doc.text(finish.label, 20, y + 20);
    doc.setFontSize(9); doc.setFont("helvetica", "normal"); doc.setTextColor(100, 100, 120);
    doc.text(`${finish.waste}% waste factor • $${finish.costPerMeter}/linear meter`, 20, y + 27);
    y += 38;

    // Panels list
    doc.setFontSize(10); doc.setFont("helvetica", "bold"); doc.setTextColor(20, 20, 30);
    doc.text("Panels", 15, y); y += 6;

    panels.forEach((p) => {
      if (y > 250) { doc.addPage(); y = 20; }
      const area = (p.length * p.width).toFixed(2);
      doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor(80, 80, 100);
      doc.text("• " + p.name, 18, y);
      doc.setTextColor(120, 120, 140);
      doc.text(`${p.length}m × ${p.width}m`, 100, y);
      doc.setFont("helvetica", "bold"); doc.setTextColor(20, 20, 30);
      doc.text(`${area} m²`, W - 18, y, { align: "right" });
      y += 6;
    });
    y += 4;

    // Totals
    const totals: [string, string][] = [
      ["Linear meters", `${calc.linearMeters} m`],
      ["With waste factor", `${calc.withWaste} m`],
      [`Rolls needed (${rollSize}m each)`, `${calc.rollsNeeded}`],
      ["Leftover after install", `${calc.leftover} m`],
    ];

    doc.setFontSize(10); doc.setFont("helvetica", "bold"); doc.setTextColor(20, 20, 30);
    doc.text("Totals", 15, y); y += 6;
    totals.forEach(([k, v]) => {
      doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor(80, 80, 100);
      doc.text(k, 18, y);
      doc.setFont("helvetica", "bold"); doc.setTextColor(20, 20, 30);
      doc.text(v, W - 18, y, { align: "right" });
      doc.setDrawColor(220, 220, 230); doc.setLineDashPattern([0.5, 0.8], 0);
      doc.line(18 + doc.getTextWidth(k) + 2, y - 0.8, W - 18 - doc.getTextWidth(v) - 2, y - 0.8);
      y += 6;
    });
    y += 6;

    // Cost
    doc.setFillColor(52, 211, 153); doc.roundedRect(15, y, W - 30, 22, 2, 2, "F");
    doc.setTextColor(10, 10, 18); doc.setFontSize(8); doc.setFont("helvetica", "bold");
    doc.text("ESTIMATED MATERIAL COST", 20, y + 7);
    doc.setFontSize(18);
    doc.text(`$${calc.totalCost}`, W - 20, y + 15, { align: "right" });

    doc.setDrawColor(220, 220, 230); doc.setLineDashPattern([], 0); doc.line(15, 280, W - 15, 280);
    doc.setTextColor(150, 150, 170); doc.setFontSize(8);
    doc.text("Generated by WrapFlow.tools — wrapflow.site", 15, 286);
    doc.text("Free precision tools for the wrap industry", W - 15, 286, { align: "right" });

    doc.save(`material-order-${matNum}.pdf`);
  };

  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-emerald-400/20 blur-[120px]" />
        <div className="absolute top-[400px] right-[5%] h-[450px] w-[450px] rounded-full bg-emerald-400/10 blur-[120px]" />
      </div>

      <header className="sticky top-4 z-50 mx-4 lg:mx-8">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
          <Link href="/" className="group flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" /> Back to tools
          </Link>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-200 via-emerald-400 to-emerald-600">
              <Layers className="h-3.5 w-3.5 text-zinc-900" strokeWidth={2.5} />
            </div>
            <span className="text-sm font-medium">Vinyl Material Estimator</span>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-xs text-emerald-300 backdrop-blur-xl">
            <Sparkles className="h-3 w-3" /> Material
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Vinyl Material <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600 bg-clip-text text-transparent">Estimator</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
            Calculate linear meters per panel. Pick your finish. Get rolls and cost.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl sm:p-8">

            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-300">Panels</p>
              <button onClick={addPanel} className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-200 transition hover:bg-emerald-400/15">
                <Plus className="h-3 w-3" /> Add panel
              </button>
            </div>

            <div className="space-y-2">
              {panels.map((p) => (
                <div key={p.id} className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                  <div className="grid grid-cols-[1fr_80px_80px_36px] items-center gap-3">
                    <input value={p.name} onChange={(e) => updatePanel(p.id, "name", e.target.value)} className="rounded-lg bg-transparent px-2 py-1.5 text-sm text-white focus:bg-white/[0.04] focus:outline-none" />
                    <input type="number" step="0.1" value={p.length} onChange={(e) => updatePanel(p.id, "length", Number(e.target.value))} className="rounded-lg bg-white/[0.02] px-2 py-1.5 text-center text-sm text-emerald-200 focus:bg-white/[0.05] focus:outline-none" />
                    <input type="number" step="0.1" value={p.width} onChange={(e) => updatePanel(p.id, "width", Number(e.target.value))} className="rounded-lg bg-white/[0.02] px-2 py-1.5 text-center text-sm text-emerald-200 focus:bg-white/[0.05] focus:outline-none" />
                    <button onClick={() => removePanel(p.id)} className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-red-500/10 hover:text-red-300">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 grid grid-cols-[1fr_80px_80px_36px] gap-3 px-3 text-[10px] uppercase tracking-wider text-zinc-600">
              <span>Panel name</span><span className="text-center">Length (m)</span><span className="text-center">Width (m)</span><span></span>
            </div>

            <div className="mt-6">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-300">Finish</p>
              <div className="flex flex-wrap gap-2">
                {finishOptions.map((f) => (
                  <button key={f.id} onClick={() => setFinishId(f.id)} className={"rounded-full border px-3 py-1.5 text-xs font-medium transition " + (finishId === f.id ? "border-emerald-400/40 bg-emerald-400/15 text-emerald-200" : "border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white")}>
                    {f.label} <span className="ml-1 text-[10px] opacity-60">+{f.waste}%</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wider text-zinc-300">Roll size</span>
                <span className="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1 text-sm font-medium text-emerald-300">{rollSize} m</span>
              </div>
              <input type="range" min={15} max={50} step={5} value={rollSize} onChange={(e) => setRollSize(Number(e.target.value))} className="w-full accent-emerald-400" />
              <div className="mt-1 flex justify-between text-[10px] text-zinc-600"><span>15m</span><span>25m</span><span>50m</span></div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="h-fit rounded-2xl bg-gradient-to-br from-emerald-400/40 via-emerald-400/10 to-white/10 p-px lg:sticky lg:top-28">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300/80">Material cost</p>
              <motion.div key={calc.totalCost} initial={{ scale: 0.95, opacity: 0.5 }} animate={{ scale: 1, opacity: 1 }} className="mt-3 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-500 bg-clip-text text-5xl font-medium tracking-tight text-transparent">
                ${calc.totalCost}
              </motion.div>
              <p className="mt-1 text-xs text-zinc-500">{finish.label} • {finish.waste}% waste</p>

              <div className="my-5 h-px bg-white/10" />

              <div className="space-y-3 text-sm">
                <Row label="Total area" value={`${calc.totalArea} m²`} />
                <Row label="Linear meters" value={`${calc.linearMeters} m`} />
                <Row label="With waste" value={`${calc.withWaste} m`} />
                <Row label="Rolls needed" value={calc.rollsNeeded.toString()} accent />
                <Row label="Leftover" value={`${calc.leftover} m`} />
              </div>

              <div className="mt-5 space-y-2">
                <button onClick={handlePDF} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-emerald-300 to-emerald-500 px-4 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-emerald-200 hover:to-emerald-400 active:scale-[0.98]">
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

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-zinc-400">{label}</span>
      <span className={accent ? "font-medium text-emerald-300" : "font-medium text-white"}>{value}</span>
    </div>
  );
}