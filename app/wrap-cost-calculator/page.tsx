"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Calculator, Car, Wrench, Percent, DollarSign, Sparkles, Download, Copy } from "lucide-react";
import jsPDF from "jspdf";

type WrapType = "full" | "partial" | "accent";
type Complexity = "simple" | "moderate" | "complex";
type Finish = "gloss" | "satin" | "matte" | "chrome" | "ppf";

const wrapCoverage: Record<WrapType, { label: string; meters: number }> = {
  full: { label: "Full Wrap", meters: 18 },
  partial: { label: "Partial Wrap", meters: 10 },
  accent: { label: "Accent / Roof / Hood", meters: 4 },
};

const finishCost: Record<Finish, { label: string; perMeter: number }> = {
  gloss: { label: "Gloss Vinyl", perMeter: 22 },
  satin: { label: "Satin Vinyl", perMeter: 28 },
  matte: { label: "Matte Vinyl", perMeter: 28 },
  chrome: { label: "Chrome / Metallic", perMeter: 55 },
  ppf: { label: "PPF (Paint Protection)", perMeter: 70 },
};

const complexityMultiplier: Record<Complexity, { label: string; factor: number; hours: number }> = {
  simple: { label: "Simple (sedan, coupe)", factor: 1.0, hours: 14 },
  moderate: { label: "Moderate (SUV, hatch)", factor: 1.25, hours: 20 },
  complex: { label: "Complex (truck, exotic)", factor: 1.5, hours: 28 },
};

export default function WrapCostCalculator() {
  const [wrapType, setWrapType] = useState<WrapType>("full");
  const [finish, setFinish] = useState<Finish>("gloss");
  const [complexity, setComplexity] = useState<Complexity>("simple");
  const [laborRate, setLaborRate] = useState(45);
  const [margin, setMargin] = useState(30);
  const [clientName, setClientName] = useState("");
  const [vehicleInfo, setVehicleInfo] = useState("");
  const [shopName, setShopName] = useState("");
  const [copied, setCopied] = useState(false);

  const calc = useMemo(() => {
    const meters = wrapCoverage[wrapType].meters * complexityMultiplier[complexity].factor;
    const materialCost = meters * finishCost[finish].perMeter;
    const laborHours = complexityMultiplier[complexity].hours * (wrapType === "full" ? 1 : wrapType === "partial" ? 0.6 : 0.3);
    const laborCost = laborHours * laborRate;
    const subtotal = materialCost + laborCost;
    const marginAmount = subtotal * (margin / 100);
    const total = subtotal + marginAmount;
    return {
      meters: meters.toFixed(1),
      materialCost: materialCost.toFixed(0),
      laborHours: laborHours.toFixed(1),
      laborCost: laborCost.toFixed(0),
      subtotal: subtotal.toFixed(0),
      marginAmount: marginAmount.toFixed(0),
      total: total.toFixed(0),
    };
  }, [wrapType, finish, complexity, laborRate, margin]);

  const handleCopy = () => {
    const txt = `WRAP QUOTE\n\n${shopName ? shopName + "\n" : ""}${clientName ? "Client: " + clientName + "\n" : ""}${vehicleInfo ? "Vehicle: " + vehicleInfo + "\n" : ""}\n${wrapCoverage[wrapType].label}\n${finishCost[finish].label}\n${complexityMultiplier[complexity].label}\n\nMaterial (${calc.meters}m): $${calc.materialCost}\nLabor (${calc.laborHours} hrs @ $${laborRate}): $${calc.laborCost}\nSubtotal: $${calc.subtotal}\nMargin (${margin}%): +$${calc.marginAmount}\n\nTOTAL: $${calc.total}`;
    navigator.clipboard.writeText(txt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePDF = () => {
  const doc = new jsPDF();
  const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const quoteNum = `WF-${Date.now().toString().slice(-6)}`;
  const validUntil = new Date(Date.now() + 14 * 86400000).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  // ===== HEADER BAND =====
  doc.setFillColor(10, 10, 18);
  doc.rect(0, 0, 210, 50, "F");

  // Amber accent stripe
  doc.setFillColor(251, 191, 36);
  doc.rect(0, 50, 210, 1.5, "F");

  // Logo mark (rounded amber square)
  doc.setFillColor(251, 191, 36);
  doc.roundedRect(20, 18, 14, 14, 2, 2, "F");
  doc.setTextColor(10, 10, 18);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("W", 27, 27, { align: "center" });

  // Shop / brand
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(shopName || "WrapFlow.Tools", 40, 26);

  doc.setTextColor(180, 180, 190);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.text("Professional Vehicle Wrap Estimate", 40, 32);

  // Quote meta (right side)
  doc.setTextColor(251, 191, 36);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("QUOTE #", 190, 20, { align: "right" });
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(quoteNum, 190, 25.5, { align: "right" });

  doc.setTextColor(180, 180, 190);
  doc.setFontSize(8);
  doc.text(today, 190, 33, { align: "right" });

  // ===== CLIENT BLOCK =====
  let y = 68;
  doc.setFillColor(248, 248, 250);
  doc.roundedRect(15, y - 5, 180, 26, 2, 2, "F");

  doc.setTextColor(120, 120, 130);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("PREPARED FOR", 22, y + 1);

  doc.setTextColor(30, 30, 40);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text(clientName || "—", 22, y + 9);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(90, 90, 100);
  doc.text(vehicleInfo || "Vehicle TBD", 22, y + 16);

  doc.setTextColor(120, 120, 130);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("VALID UNTIL", 188, y + 1, { align: "right" });
  doc.setTextColor(30, 30, 40);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.text(validUntil, 188, y + 9, { align: "right" });

  // ===== JOB SPECIFICATIONS =====
  y = 110;
  doc.setTextColor(30, 30, 40);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Job Specifications", 20, y);

  // Underline accent
  doc.setDrawColor(251, 191, 36);
  doc.setLineWidth(0.8);
  doc.line(20, y + 1.5, 32, y + 1.5);

  y += 10;
  const specs: [string, string][] = [
    ["Wrap Type", wrapCoverage[wrapType].label],
    ["Vinyl Finish", finishCost[finish].label],
    ["Vehicle Complexity", complexityMultiplier[complexity].label],
    ["Material Coverage", `${calc.meters} linear meters`],
    ["Estimated Labor", `${calc.laborHours} hours`],
  ];

  specs.forEach(([k, v]) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(120, 120, 130);
    doc.text(k, 20, y);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(40, 40, 50);
    doc.text(v, 100, y);
    // Dotted leader line
    doc.setDrawColor(230, 230, 235);
    doc.setLineDashPattern([0.5, 0.8], 0);
    doc.line(20 + doc.getTextWidth(k) + 3, y - 1, 97, y - 1);
    doc.setLineDashPattern([], 0);
    y += 7;
  });

  // ===== COST BREAKDOWN =====
  y += 8;
  doc.setTextColor(30, 30, 40);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Cost Breakdown", 20, y);
  doc.setDrawColor(251, 191, 36);
  doc.setLineWidth(0.8);
  doc.line(20, y + 1.5, 32, y + 1.5);

  // Table header
  y += 10;
  doc.setFillColor(248, 248, 250);
  doc.rect(15, y - 4, 180, 8, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(120, 120, 130);
  doc.text("DESCRIPTION", 20, y + 1);
  doc.text("DETAILS", 100, y + 1);
  doc.text("AMOUNT", 188, y + 1, { align: "right" });

  // Rows
  y += 10;
  const rows: [string, string, string][] = [
    ["Material", `${calc.meters}m premium vinyl`, `$${calc.materialCost}`],
    ["Labor", `${calc.laborHours} hrs @ $${laborRate}/hr`, `$${calc.laborCost}`],
  ];

  rows.forEach(([k, s, v]) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(40, 40, 50);
    doc.text(k, 20, y);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(120, 120, 130);
    doc.text(s, 100, y);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(40, 40, 50);
    doc.text(v, 188, y, { align: "right" });
    y += 6;
    doc.setDrawColor(235, 235, 240);
    doc.setLineWidth(0.2);
    doc.line(15, y - 2, 195, y - 2);
    y += 4;
  });

  // Subtotal / margin
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(120, 120, 130);
  doc.text("Subtotal", 100, y);
  doc.text(`$${calc.subtotal}`, 188, y, { align: "right" });
  y += 6;
  doc.text(`Margin (${margin}%)`, 100, y);
  doc.setTextColor(180, 130, 30);
  doc.text(`+$${calc.marginAmount}`, 188, y, { align: "right" });

  // ===== TOTAL =====
  y += 10;
  doc.setFillColor(10, 10, 18);
  doc.roundedRect(15, y, 180, 22, 2, 2, "F");
  doc.setFillColor(251, 191, 36);
  doc.roundedRect(15, y, 4, 22, 2, 2, "F");

  doc.setTextColor(180, 180, 190);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text("TOTAL ESTIMATE", 25, y + 9);

  doc.setTextColor(251, 191, 36);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text(`$${calc.total}`, 188, y + 15, { align: "right" });

  doc.setTextColor(150, 150, 160);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.text("USD · taxes not included", 25, y + 15);

  // ===== TERMS =====
  y += 32;
  doc.setTextColor(30, 30, 40);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("Terms & Conditions", 20, y);

  y += 5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(120, 120, 130);
  const terms = [
    "1. This estimate is valid for 14 days from the issue date.",
    "2. Final price may vary based on in-person vehicle inspection.",
    "3. A 50% deposit is required to schedule the installation.",
    "4. Material and labor warranty per manufacturer specifications.",
  ];
  terms.forEach((t) => {
    doc.text(t, 20, y);
    y += 4;
  });

  // ===== FOOTER =====
  doc.setDrawColor(230, 230, 235);
  doc.setLineWidth(0.3);
  doc.line(15, 282, 195, 282);

  doc.setTextColor(150, 150, 160);
  doc.setFontSize(7);
  doc.text("Generated with WrapFlow.tools", 20, 288);
  doc.text("Questions? Reply to this quote.", 190, 288, { align: "right" });

  doc.save(`wrap-quote-${quoteNum}.pdf`);
};

  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-amber-400/20 blur-[120px]" />
        <div className="absolute top-[400px] right-[5%] h-[450px] w-[450px] rounded-full bg-amber-400/10 blur-[120px]" />
      </div>

      <header className="sticky top-4 z-50 mx-4 lg:mx-8">
        <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
          <Link href="/" className="group flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to tools
          </Link>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600">
              <Calculator className="h-3.5 w-3.5 text-zinc-900" strokeWidth={2.5} />
            </div>
            <span className="text-sm font-medium">Wrap Cost Calculator</span>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/5 px-3 py-1 text-xs text-amber-300 backdrop-blur-xl">
            <Sparkles className="h-3 w-3" />
            Estimator
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Wrap Cost <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">Calculator</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
            Quote any wrap job in seconds. Export client-ready PDF estimates with your shop&apos;s name.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl sm:p-8">

            {/* Quote details */}
            <div className="mb-8 grid gap-3 sm:grid-cols-3">
              <TextInput label="Shop name (for PDF)" value={shopName} onChange={setShopName} placeholder="Your Shop" />
              <TextInput label="Client" value={clientName} onChange={setClientName} placeholder="John Smith" />
              <TextInput label="Vehicle" value={vehicleInfo} onChange={setVehicleInfo} placeholder="2024 Tesla M3" />
            </div>

            <div className="mb-8">
              <Label icon={Car}>Wrap Type</Label>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {(Object.keys(wrapCoverage) as WrapType[]).map((key) => (
                  <Pill key={key} active={wrapType === key} onClick={() => setWrapType(key)}>{wrapCoverage[key].label}</Pill>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <Label icon={Sparkles}>Vinyl Finish</Label>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {(Object.keys(finishCost) as Finish[]).map((key) => (
                  <Pill key={key} active={finish === key} onClick={() => setFinish(key)}>{finishCost[key].label}</Pill>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <Label icon={Wrench}>Vehicle Complexity</Label>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
                {(Object.keys(complexityMultiplier) as Complexity[]).map((key) => (
                  <Pill key={key} active={complexity === key} onClick={() => setComplexity(key)}>{complexityMultiplier[key].label}</Pill>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <Label icon={DollarSign}>Labor Rate (per hour)</Label>
              <div className="mt-3 flex items-center gap-4">
                <input type="range" min={20} max={150} step={5} value={laborRate} onChange={(e) => setLaborRate(Number(e.target.value))} className="flex-1 accent-amber-400" />
                <span className="w-20 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-center text-sm font-medium text-amber-300">${laborRate}</span>
              </div>
            </div>

            <div>
              <Label icon={Percent}>Profit Margin</Label>
              <div className="mt-3 flex items-center gap-4">
                <input type="range" min={0} max={80} step={5} value={margin} onChange={(e) => setMargin(Number(e.target.value))} className="flex-1 accent-amber-400" />
                <span className="w-20 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-center text-sm font-medium text-amber-300">{margin}%</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="h-fit rounded-2xl bg-gradient-to-br from-amber-400/40 via-amber-400/10 to-white/10 p-px lg:sticky lg:top-28">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-300/80">Estimate</p>
              <h2 className="mt-1 text-sm text-zinc-400">Total quoted price</h2>

              <motion.div key={calc.total} initial={{ scale: 0.95, opacity: 0.5 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3 }} className="mt-3 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-5xl font-medium tracking-tight text-transparent">
                ${calc.total}
              </motion.div>

              <div className="my-6 h-px bg-white/10" />

              <div className="space-y-3 text-sm">
                <Row label="Material" sub={`${calc.meters}m vinyl`} value={`$${calc.materialCost}`} />
                <Row label="Labor" sub={`${calc.laborHours} hrs @ $${laborRate}`} value={`$${calc.laborCost}`} />
                <Row label="Subtotal" value={`$${calc.subtotal}`} muted />
                <Row label={`Margin (${margin}%)`} value={`+$${calc.marginAmount}`} accent />
              </div>

              <button onClick={handlePDF} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 px-4 py-3 text-sm font-medium text-zinc-900 transition hover:from-amber-200 hover:to-amber-400 active:scale-[0.98]">
                <Download className="h-4 w-4" />
                Download PDF Quote
              </button>
              <button onClick={handleCopy} className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:bg-white/[0.06] active:scale-[0.98]">
                <Copy className="h-4 w-4" />
                {copied ? "Copied!" : "Copy as text"}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function Label({ icon: Icon, children }: { icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
      <Icon className="h-3.5 w-3.5 text-amber-400/80" />
      {children}
    </div>
  );
}

function TextInput({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <div>
      <div className="mb-1.5 text-[10px] font-medium uppercase tracking-wider text-zinc-500">{label}</div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-white placeholder:text-zinc-600 focus:border-amber-400/40 focus:bg-white/[0.04] focus:outline-none"
      />
    </div>
  );
}

function Pill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className={"rounded-xl border px-3 py-2.5 text-xs font-medium transition active:scale-[0.97] " + (active ? "border-amber-400/40 bg-amber-400/10 text-amber-200 shadow-[0_0_20px_-8px_rgba(251,191,36,0.5)]" : "border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/20 hover:bg-white/[0.04] hover:text-zinc-200")}>
      {children}
    </button>
  );
}

function Row({ label, sub, value, muted, accent }: { label: string; sub?: string; value: string; muted?: boolean; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className={muted ? "text-zinc-500" : "text-zinc-300"}>{label}</div>
        {sub && <div className="text-xs text-zinc-500">{sub}</div>}
      </div>
      <div className={accent ? "font-medium text-amber-300" : muted ? "text-zinc-500" : "font-medium text-white"}>{value}</div>
    </div>
  );
}