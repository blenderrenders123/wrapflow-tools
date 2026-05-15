"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Layers, Sparkles, Plus, Trash2, Copy } from "lucide-react";

type Finish = "gloss" | "satin" | "matte" | "chrome" | "ppf";
type RollSize = 15 | 25 | 50;

const finishInfo: Record<Finish, { label: string; waste: number; pricePerMeter: number }> = {
  gloss: { label: "Gloss Vinyl", waste: 10, pricePerMeter: 22 },
  satin: { label: "Satin Vinyl", waste: 12, pricePerMeter: 28 },
  matte: { label: "Matte Vinyl", waste: 12, pricePerMeter: 28 },
  chrome: { label: "Chrome / Metallic", waste: 20, pricePerMeter: 55 },
  ppf: { label: "PPF (Paint Protection)", waste: 15, pricePerMeter: 70 },
};

type Panel = {
  id: string;
  name: string;
  length: number; // meters
  width: number;  // meters
};

const presetPanels: Panel[] = [
  { id: "1", name: "Hood", length: 1.8, width: 1.5 },
  { id: "2", name: "Roof", length: 1.6, width: 1.4 },
  { id: "3", name: "Trunk", length: 1.3, width: 1.4 },
  { id: "4", name: "Front Bumper", length: 1.8, width: 0.6 },
  { id: "5", name: "Rear Bumper", length: 1.8, width: 0.6 },
];

export default function VinylMaterialEstimator() {
  const [finish, setFinish] = useState<Finish>("gloss");
  const [rollSize, setRollSize] = useState<RollSize>(25);
  const [panels, setPanels] = useState<Panel[]>(presetPanels);
  const [copied, setCopied] = useState(false);

  const calc = useMemo(() => {
    const totalArea = panels.reduce((sum, p) => sum + p.length * p.width, 0);
    const wasteFactor = 1 + finishInfo[finish].waste / 100;
    const linearMetersNeeded = (totalArea / 1.52) * wasteFactor; // 1.52m is standard vinyl roll width
    const rollsNeeded = Math.ceil(linearMetersNeeded / rollSize);
    const totalRollMeters = rollsNeeded * rollSize;
    const leftover = totalRollMeters - linearMetersNeeded;
    const leftoverPct = (leftover / totalRollMeters) * 100;
    const materialCost = linearMetersNeeded * finishInfo[finish].pricePerMeter;

    return {
      totalArea: totalArea.toFixed(2),
      linearMetersNeeded: linearMetersNeeded.toFixed(1),
      rollsNeeded,
      totalRollMeters,
      leftover: leftover.toFixed(1),
      leftoverPct: leftoverPct.toFixed(0),
      materialCost: materialCost.toFixed(0),
    };
  }, [panels, finish, rollSize]);

  const addPanel = () => {
    setPanels([...panels, { id: Date.now().toString(), name: "New Panel", length: 1.0, width: 1.0 }]);
  };

  const updatePanel = (id: string, field: keyof Panel, value: string | number) => {
    setPanels(panels.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  };

  const removePanel = (id: string) => {
    setPanels(panels.filter((p) => p.id !== id));
  };

  const handleCopy = () => {
    const txt = "VINYL MATERIAL ESTIMATE\n\n" + finishInfo[finish].label + "\nRoll size: " + rollSize + "m\n\nPanels:\n" + panels.map((p) => "  - " + p.name + ": " + p.length + "m x " + p.width + "m").join("\n") + "\n\nTotal area: " + calc.totalArea + " m²\nLinear meters needed: " + calc.linearMetersNeeded + "m (with " + finishInfo[finish].waste + "% waste)\nRolls needed: " + calc.rollsNeeded + " x " + rollSize + "m = " + calc.totalRollMeters + "m\nLeftover: " + calc.leftover + "m (" + calc.leftoverPct + "%)\n\nMaterial cost: $" + calc.materialCost;
    navigator.clipboard.writeText(txt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to tools
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-xs text-emerald-300 backdrop-blur-xl">
            <Sparkles className="h-3 w-3" />
            Material
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Vinyl Material <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600 bg-clip-text text-transparent">Estimator</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
            Calculate exactly how many meters of vinyl you need per panel. Avoid running short mid-install.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl sm:p-8">

            {/* Finish */}
            <div className="mb-6">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-300">Vinyl Finish</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {(Object.keys(finishInfo) as Finish[]).map((key) => (
                  <button key={key} onClick={() => setFinish(key)} className={"rounded-xl border px-3 py-2.5 text-xs font-medium transition active:scale-[0.97] " + (finish === key ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200" : "border-white/10 bg-white/[0.02] text-zinc-400 hover:bg-white/[0.04]")}>
                    {finishInfo[key].label}
                    <div className="mt-0.5 text-[9px] text-zinc-500">+{finishInfo[key].waste}% waste</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Roll size */}
            <div className="mb-8">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-300">Roll Size</p>
              <div className="grid grid-cols-3 gap-2">
                {([15, 25, 50] as RollSize[]).map((size) => (
                  <button key={size} onClick={() => setRollSize(size)} className={"rounded-xl border px-3 py-2.5 text-sm font-medium transition active:scale-[0.97] " + (rollSize === size ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200" : "border-white/10 bg-white/[0.02] text-zinc-400 hover:bg-white/[0.04]")}>
                    {size}m
                  </button>
                ))}
              </div>
            </div>

            {/* Panels */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-300">Panels</p>
                <button onClick={addPanel} className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-200 transition hover:bg-emerald-400/15">
                  <Plus className="h-3 w-3" />
                  Add panel
                </button>
              </div>

              <div className="space-y-2">
                {panels.map((panel) => (
                  <div key={panel.id} className="grid grid-cols-[1fr_80px_80px_36px] items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-2">
                    <input value={panel.name} onChange={(e) => updatePanel(panel.id, "name", e.target.value)} className="rounded-lg bg-transparent px-2 py-1.5 text-sm text-white placeholder:text-zinc-600 focus:bg-white/[0.04] focus:outline-none" placeholder="Panel name" />
                    <input type="number" step="0.1" value={panel.length} onChange={(e) => updatePanel(panel.id, "length", Number(e.target.value))} className="rounded-lg bg-white/[0.02] px-2 py-1.5 text-center text-sm text-emerald-200 focus:bg-white/[0.05] focus:outline-none" />
                    <input type="number" step="0.1" value={panel.width} onChange={(e) => updatePanel(panel.id, "width", Number(e.target.value))} className="rounded-lg bg-white/[0.02] px-2 py-1.5 text-center text-sm text-emerald-200 focus:bg-white/[0.05] focus:outline-none" />
                    <button onClick={() => removePanel(panel.id)} className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-red-500/10 hover:text-red-300">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-2 grid grid-cols-[1fr_80px_80px_36px] gap-2 px-2 text-[10px] uppercase tracking-wider text-zinc-600">
                <span>Name</span>
                <span className="text-center">Length (m)</span>
                <span className="text-center">Width (m)</span>
                <span></span>
              </div>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="h-fit rounded-2xl bg-gradient-to-br from-emerald-400/40 via-emerald-400/10 to-white/10 p-px lg:sticky lg:top-28">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300/80">Material Needed</p>

              <motion.div key={calc.linearMetersNeeded} initial={{ scale: 0.95, opacity: 0.5 }} animate={{ scale: 1, opacity: 1 }} className="mt-3 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-500 bg-clip-text text-5xl font-medium tracking-tight text-transparent">
                {calc.linearMetersNeeded}m
              </motion.div>
              <p className="text-xs text-zinc-500">linear meters of vinyl (1.52m wide)</p>

              <div className="my-5 h-px bg-white/10" />

              <div className="space-y-3 text-sm">
                <Row label="Total panel area" value={calc.totalArea + " m²"} />
                <Row label="Waste factor" sub={finishInfo[finish].label} value={"+" + finishInfo[finish].waste + "%"} />
                <Row label="Rolls needed" sub={"buy this many " + rollSize + "m rolls"} value={calc.rollsNeeded + " ×"} accent />
              </div>

              <div className="my-5 h-px bg-white/10" />

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">After install</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-zinc-300">Leftover</span>
                  <span className="text-sm font-medium text-emerald-300">{calc.leftover}m ({calc.leftoverPct}%)</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-zinc-300">Material cost</span>
                  <span className="text-sm font-medium text-white">${calc.materialCost}</span>
                </div>
              </div>

              <button onClick={handleCopy} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-emerald-300 to-emerald-500 px-4 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-emerald-200 hover:to-emerald-400 active:scale-[0.98]">
                <Copy className="h-4 w-4" />
                {copied ? "Copied!" : "Copy estimate"}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function Row({ label, sub, value, accent }: { label: string; sub?: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="text-zinc-300">{label}</div>
        {sub && <div className="text-xs text-zinc-500">{sub}</div>}
      </div>
      <div className={accent ? "font-medium text-emerald-300" : "font-medium text-white"}>{value}</div>
    </div>
  );
}