"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft,
  TrendingUp,
  Sparkles,
  Download,
  Copy,
  Ruler,
  Scissors,
  DollarSign,
  Calendar,
  Wrench,
  Clock,
  Percent,
} from "lucide-react";
import jsPDF from "jspdf";

type Tab = "waste" | "roi";

export default function VinylWasteRoiCalculator() {
  const [tab, setTab] = useState<Tab>("waste");

  // ---- Waste inputs ----
  const [rollWidth, setRollWidth] = useState(60); // inches
  const [rollLength, setRollLength] = useState(50); // yards (typical roll)
  const [rollCost, setRollCost] = useState(450); // $ per roll
  const [usedLength, setUsedLength] = useState(35); // yards of roll actually billed/used
  const [jobsPerMonth, setJobsPerMonth] = useState(8);

  // ---- ROI inputs ----
  const [equipCost, setEquipCost] = useState(3500);
  const [equipName, setEquipName] = useState("Plotter / Cutter");
  const [outsourceCostPerJob, setOutsourceCostPerJob] = useState(80);
  const [timeSavedHrs, setTimeSavedHrs] = useState(1.5);
  const [laborRate, setLaborRate] = useState(45);
  const [roiJobsPerMonth, setRoiJobsPerMonth] = useState(8);

  // ---- Branding / PDF meta ----
  const [shopName, setShopName] = useState("");
  const [copied, setCopied] = useState(false);

  // ---- Waste calcs ----
  const waste = useMemo(() => {
    const totalRollSqYd = (rollWidth / 36) * rollLength;
    const usedSqYd = (rollWidth / 36) * usedLength;
    const wasteSqYd = Math.max(0, totalRollSqYd - usedSqYd);
    const wastePct = totalRollSqYd > 0 ? (wasteSqYd / totalRollSqYd) * 100 : 0;
    const costPerSqYd = totalRollSqYd > 0 ? rollCost / totalRollSqYd : 0;
    const wasteCostPerRoll = wasteSqYd * costPerSqYd;
    const annualWasteCost = wasteCostPerRoll * jobsPerMonth * 12;

    // Savings if waste cut in half
    const halvedAnnual = annualWasteCost / 2;
    const savings = annualWasteCost - halvedAnnual;

    return {
      totalRollSqYd: totalRollSqYd.toFixed(1),
      usedSqYd: usedSqYd.toFixed(1),
      wasteSqYd: wasteSqYd.toFixed(1),
      wastePct: wastePct.toFixed(1),
      costPerSqYd: costPerSqYd.toFixed(2),
      wasteCostPerRoll: wasteCostPerRoll.toFixed(0),
      annualWasteCost: annualWasteCost.toFixed(0),
      savings: savings.toFixed(0),
    };
  }, [rollWidth, rollLength, rollCost, usedLength, jobsPerMonth]);

  // ---- ROI calcs ----
  const roi = useMemo(() => {
    const monthlyOutsource = outsourceCostPerJob * roiJobsPerMonth;
    const monthlyLaborSaved = timeSavedHrs * laborRate * roiJobsPerMonth;
    const monthlySavings = monthlyOutsource + monthlyLaborSaved;
    const paybackMonths = monthlySavings > 0 ? equipCost / monthlySavings : 999;
    const year1Net = monthlySavings * 12 - equipCost;
    const year3Net = monthlySavings * 36 - equipCost;
    const annualROIPct = equipCost > 0 ? ((monthlySavings * 12 - equipCost) / equipCost) * 100 : 0;

    return {
      monthlyOutsource: monthlyOutsource.toFixed(0),
      monthlyLaborSaved: monthlyLaborSaved.toFixed(0),
      monthlySavings: monthlySavings.toFixed(0),
      paybackMonths: paybackMonths > 99 ? "99+" : paybackMonths.toFixed(1),
      year1Net: year1Net.toFixed(0),
      year3Net: year3Net.toFixed(0),
      annualROIPct: annualROIPct.toFixed(0),
    };
  }, [equipCost, outsourceCostPerJob, timeSavedHrs, laborRate, roiJobsPerMonth]);

  const handleCopy = () => {
    let txt = "";
    if (tab === "waste") {
      txt = `VINYL WASTE REPORT\n${shopName ? shopName + "\n" : ""}\nRoll: ${rollWidth}" x ${rollLength}yd ($${rollCost})\nUsed: ${usedLength}yd (${waste.usedSqYd} sq yd)\nWasted: ${waste.wasteSqYd} sq yd (${waste.wastePct}%)\nWaste cost per roll: $${waste.wasteCostPerRoll}\nJobs/month: ${jobsPerMonth}\n\nANNUAL WASTE COST: $${waste.annualWasteCost}\nPotential savings (50% reduction): $${waste.savings}/yr`;
    } else {
      txt = `EQUIPMENT ROI REPORT\n${shopName ? shopName + "\n" : ""}\nEquipment: ${equipName}\nCost: $${equipCost}\nJobs/month: ${roiJobsPerMonth}\nOutsource cost saved: $${outsourceCostPerJob}/job\nTime saved: ${timeSavedHrs}hr/job @ $${laborRate}/hr\n\nMonthly savings: $${roi.monthlySavings}\nPayback: ${roi.paybackMonths} months\nYear 1 net: $${roi.year1Net}\nYear 3 net: $${roi.year3Net}\nAnnual ROI: ${roi.annualROIPct}%`;
    }
    navigator.clipboard.writeText(txt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePDF = () => {
    const doc = new jsPDF();
    const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    const reportNum = `WF-${Date.now().toString().slice(-6)}`;

    // HEADER
    doc.setFillColor(10, 10, 18);
    doc.rect(0, 0, 210, 50, "F");
    doc.setFillColor(250, 204, 21); // yellow-400
    doc.rect(0, 50, 210, 1.5, "F");

    doc.setFillColor(250, 204, 21);
    doc.roundedRect(20, 18, 14, 14, 2, 2, "F");
    doc.setTextColor(10, 10, 18);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("W", 27, 27, { align: "center" });

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text(shopName || "WrapFlow.Tools", 40, 26);
    doc.setTextColor(180, 180, 190);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.text(tab === "waste" ? "Vinyl Waste Analysis" : "Equipment ROI Analysis", 40, 32);

    doc.setTextColor(250, 204, 21);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text("REPORT #", 190, 20, { align: "right" });
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(reportNum, 190, 25.5, { align: "right" });
    doc.setTextColor(180, 180, 190);
    doc.setFontSize(8);
    doc.text(today, 190, 33, { align: "right" });

    let y = 70;

    if (tab === "waste") {
      // INPUTS BLOCK
      doc.setTextColor(30, 30, 40);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text("Inputs", 20, y);
      doc.setDrawColor(250, 204, 21);
      doc.setLineWidth(0.8);
      doc.line(20, y + 1.5, 32, y + 1.5);

      y += 10;
      const inputs: [string, string][] = [
        ["Roll Width", `${rollWidth} in`],
        ["Roll Length", `${rollLength} yd`],
        ["Roll Cost", `$${rollCost}`],
        ["Used Length", `${usedLength} yd`],
        ["Jobs / Month", `${jobsPerMonth}`],
      ];
      inputs.forEach(([k, v]) => {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.5);
        doc.setTextColor(120, 120, 130);
        doc.text(k, 20, y);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(40, 40, 50);
        doc.text(v, 100, y);
        doc.setDrawColor(230, 230, 235);
        doc.setLineDashPattern([0.5, 0.8], 0);
        doc.line(20 + doc.getTextWidth(k) + 3, y - 1, 97, y - 1);
        doc.setLineDashPattern([], 0);
        y += 7;
      });

      // RESULTS
      y += 6;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(30, 30, 40);
      doc.text("Waste Analysis", 20, y);
      doc.setDrawColor(250, 204, 21);
      doc.line(20, y + 1.5, 32, y + 1.5);

      y += 10;
      const results: [string, string][] = [
        ["Roll Area (sq yd)", waste.totalRollSqYd],
        ["Used (sq yd)", waste.usedSqYd],
        ["Wasted (sq yd)", waste.wasteSqYd],
        ["Waste %", `${waste.wastePct}%`],
        ["Cost / sq yd", `$${waste.costPerSqYd}`],
        ["Waste cost per roll", `$${waste.wasteCostPerRoll}`],
      ];
      results.forEach(([k, v]) => {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.5);
        doc.setTextColor(120, 120, 130);
        doc.text(k, 20, y);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(40, 40, 50);
        doc.text(v, 100, y);
        doc.setDrawColor(230, 230, 235);
        doc.setLineDashPattern([0.5, 0.8], 0);
        doc.line(20 + doc.getTextWidth(k) + 3, y - 1, 97, y - 1);
        doc.setLineDashPattern([], 0);
        y += 7;
      });

      // TOTAL CARD
      y += 6;
      doc.setFillColor(10, 10, 18);
      doc.roundedRect(15, y, 180, 28, 2, 2, "F");
      doc.setFillColor(250, 204, 21);
      doc.roundedRect(15, y, 4, 28, 2, 2, "F");
      doc.setTextColor(180, 180, 190);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.text("ANNUAL WASTE COST", 25, y + 9);
      doc.setTextColor(250, 204, 21);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.text(`$${waste.annualWasteCost}`, 188, y + 17, { align: "right" });
      doc.setTextColor(150, 150, 160);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.text(`Cut waste in half = $${waste.savings} saved/yr`, 25, y + 17);
    } else {
      // ROI INPUTS
      doc.setTextColor(30, 30, 40);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text("Inputs", 20, y);
      doc.setDrawColor(250, 204, 21);
      doc.setLineWidth(0.8);
      doc.line(20, y + 1.5, 32, y + 1.5);

      y += 10;
      const inputs: [string, string][] = [
        ["Equipment", equipName],
        ["Equipment Cost", `$${equipCost}`],
        ["Jobs / Month", `${roiJobsPerMonth}`],
        ["Outsource Cost / Job", `$${outsourceCostPerJob}`],
        ["Time Saved / Job", `${timeSavedHrs} hr`],
        ["Labor Rate", `$${laborRate}/hr`],
      ];
      inputs.forEach(([k, v]) => {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.5);
        doc.setTextColor(120, 120, 130);
        doc.text(k, 20, y);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(40, 40, 50);
        doc.text(v, 100, y);
        doc.setDrawColor(230, 230, 235);
        doc.setLineDashPattern([0.5, 0.8], 0);
        doc.line(20 + doc.getTextWidth(k) + 3, y - 1, 97, y - 1);
        doc.setLineDashPattern([], 0);
        y += 7;
      });

      // RESULTS
      y += 6;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(30, 30, 40);
      doc.text("ROI Analysis", 20, y);
      doc.setDrawColor(250, 204, 21);
      doc.line(20, y + 1.5, 32, y + 1.5);

      y += 10;
      const results: [string, string][] = [
        ["Monthly outsource saved", `$${roi.monthlyOutsource}`],
        ["Monthly labor saved", `$${roi.monthlyLaborSaved}`],
        ["Total monthly savings", `$${roi.monthlySavings}`],
        ["Payback period", `${roi.paybackMonths} months`],
        ["Year 1 net", `$${roi.year1Net}`],
        ["Year 3 net", `$${roi.year3Net}`],
      ];
      results.forEach(([k, v]) => {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.5);
        doc.setTextColor(120, 120, 130);
        doc.text(k, 20, y);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(40, 40, 50);
        doc.text(v, 100, y);
        doc.setDrawColor(230, 230, 235);
        doc.setLineDashPattern([0.5, 0.8], 0);
        doc.line(20 + doc.getTextWidth(k) + 3, y - 1, 97, y - 1);
        doc.setLineDashPattern([], 0);
        y += 7;
      });

      // TOTAL CARD
      y += 6;
      doc.setFillColor(10, 10, 18);
      doc.roundedRect(15, y, 180, 28, 2, 2, "F");
      doc.setFillColor(250, 204, 21);
      doc.roundedRect(15, y, 4, 28, 2, 2, "F");
      doc.setTextColor(180, 180, 190);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.text("ANNUAL ROI", 25, y + 9);
      doc.setTextColor(250, 204, 21);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.text(`${roi.annualROIPct}%`, 188, y + 17, { align: "right" });
      doc.setTextColor(150, 150, 160);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.text(`Payback in ${roi.paybackMonths} months`, 25, y + 17);
    }

    // FOOTER
    doc.setDrawColor(230, 230, 235);
    doc.setLineWidth(0.3);
    doc.line(15, 282, 195, 282);
    doc.setTextColor(150, 150, 160);
    doc.setFontSize(7);
    doc.text("Generated with WrapFlow.tools", 20, 288);
    doc.text("Estimates only. Actual results vary by shop.", 190, 288, { align: "right" });

    doc.save(`vinyl-${tab}-report-${reportNum}.pdf`);
  };

  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-yellow-400/20 blur-[120px]" />
        <div className="absolute top-[400px] right-[5%] h-[450px] w-[450px] rounded-full bg-yellow-400/10 blur-[120px]" />
      </div>

      <header className="sticky top-4 z-50 mx-4 lg:mx-8">
        <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
          <Link href="/" className="group flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to tools
          </Link>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600">
              <TrendingUp className="h-3.5 w-3.5 text-zinc-900" strokeWidth={2.5} />
            </div>
            <span className="text-sm font-medium">Waste & ROI Calculator</span>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/5 px-3 py-1 text-xs text-yellow-300 backdrop-blur-xl">
            <Sparkles className="h-3 w-3" />
            Profit Tools
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Vinyl Waste{" "}
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              & ROI
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
            See exactly how much money you&apos;re losing to vinyl scrap — and how fast new equipment pays for itself.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <div className="mx-auto mb-8 flex max-w-md rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-xl">
          <button
            onClick={() => setTab("waste")}
            className={"flex-1 rounded-full px-4 py-2 text-sm font-medium transition " + (tab === "waste" ? "bg-gradient-to-b from-yellow-300 to-yellow-500 text-zinc-900" : "text-zinc-400 hover:text-zinc-200")}
          >
            Waste Tracker
          </button>
          <button
            onClick={() => setTab("roi")}
            className={"flex-1 rounded-full px-4 py-2 text-sm font-medium transition " + (tab === "roi" ? "bg-gradient-to-b from-yellow-300 to-yellow-500 text-zinc-900" : "text-zinc-400 hover:text-zinc-200")}
          >
            Equipment ROI
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          <motion.div key={tab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl sm:p-8">
            <div className="mb-6 grid gap-3 sm:grid-cols-1">
              <TextInput label="Shop name (for PDF)" value={shopName} onChange={setShopName} placeholder="Your Shop" />
            </div>

            {tab === "waste" ? (
              <>
                <div className="mb-8">
                  <Label icon={Ruler}>Roll Width (inches)</Label>
                  <SliderRow value={rollWidth} setValue={setRollWidth} min={24} max={72} step={1} unit="″" />
                </div>
                <div className="mb-8">
                  <Label icon={Ruler}>Roll Length (yards)</Label>
                  <SliderRow value={rollLength} setValue={setRollLength} min={10} max={150} step={5} unit="yd" />
                </div>
                <div className="mb-8">
                  <Label icon={DollarSign}>Roll Cost</Label>
                  <SliderRow value={rollCost} setValue={setRollCost} min={100} max={2000} step={25} unit="$" prefix />
                </div>
                <div className="mb-8">
                  <Label icon={Scissors}>Vinyl Actually Used (yards)</Label>
                  <SliderRow value={usedLength} setValue={setUsedLength} min={1} max={rollLength} step={1} unit="yd" />
                </div>
                <div>
                  <Label icon={Calendar}>Jobs Per Month</Label>
                  <SliderRow value={jobsPerMonth} setValue={setJobsPerMonth} min={1} max={50} step={1} unit="" />
                </div>
              </>
            ) : (
              <>
                <div className="mb-6">
                  <Label icon={Wrench}>Equipment Type</Label>
                  <input
                    value={equipName}
                    onChange={(e) => setEquipName(e.target.value)}
                    placeholder="e.g. Plotter, Laminator"
                    className="mt-3 w-full rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-white placeholder:text-zinc-600 focus:border-yellow-400/40 focus:bg-white/[0.04] focus:outline-none"
                  />
                </div>
                <div className="mb-8">
                  <Label icon={DollarSign}>Equipment Cost</Label>
                  <SliderRow value={equipCost} setValue={setEquipCost} min={500} max={20000} step={250} unit="$" prefix />
                </div>
                <div className="mb-8">
                  <Label icon={Calendar}>Jobs Per Month</Label>
                  <SliderRow value={roiJobsPerMonth} setValue={setRoiJobsPerMonth} min={1} max={50} step={1} unit="" />
                </div>
                <div className="mb-8">
                  <Label icon={DollarSign}>Outsource Cost Per Job</Label>
                  <SliderRow value={outsourceCostPerJob} setValue={setOutsourceCostPerJob} min={0} max={500} step={5} unit="$" prefix />
                </div>
                <div className="mb-8">
                  <Label icon={Clock}>Time Saved Per Job (hours)</Label>
                  <SliderRow value={timeSavedHrs} setValue={setTimeSavedHrs} min={0} max={8} step={0.25} unit="hr" decimals={2} />
                </div>
                <div>
                  <Label icon={DollarSign}>Labor Rate (per hour)</Label>
                  <SliderRow value={laborRate} setValue={setLaborRate} min={15} max={150} step={5} unit="$" prefix />
                </div>
              </>
            )}
          </motion.div>

          {/* Sticky summary */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="h-fit rounded-2xl bg-gradient-to-br from-yellow-400/40 via-yellow-400/10 to-white/10 p-px lg:sticky lg:top-28">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
              {tab === "waste" ? (
                <>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-yellow-300/80">Waste</p>
                  <h2 className="mt-1 text-sm text-zinc-400">Annual cost of scrap</h2>
                  <motion.div key={waste.annualWasteCost} initial={{ scale: 0.95, opacity: 0.5 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3 }} className="mt-3 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 bg-clip-text text-5xl font-medium tracking-tight text-transparent">
                    ${waste.annualWasteCost}
                  </motion.div>
                  <div className="my-6 h-px bg-white/10" />
                  <div className="space-y-3 text-sm">
                    <Row label="Roll area" sub={`${rollWidth}″ × ${rollLength}yd`} value={`${waste.totalRollSqYd} sqyd`} />
                    <Row label="Used" sub={`${usedLength} yards`} value={`${waste.usedSqYd} sqyd`} />
                    <Row label="Wasted" value={`${waste.wasteSqYd} sqyd`} accent />
                    <Row label="Waste %" value={`${waste.wastePct}%`} muted />
                    <Row label="Per-roll loss" value={`$${waste.wasteCostPerRoll}`} muted />
                    <Row label="If cut in half" value={`$${waste.savings}/yr`} accent />
                  </div>
                </>
              ) : (
                <>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-yellow-300/80">ROI</p>
                  <h2 className="mt-1 text-sm text-zinc-400">Payback period</h2>
                  <motion.div key={roi.paybackMonths} initial={{ scale: 0.95, opacity: 0.5 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3 }} className="mt-3 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 bg-clip-text text-5xl font-medium tracking-tight text-transparent">
                    {roi.paybackMonths}<span className="text-2xl"> mo</span>
                  </motion.div>
                  <div className="my-6 h-px bg-white/10" />
                  <div className="space-y-3 text-sm">
                    <Row label="Monthly outsource saved" value={`$${roi.monthlyOutsource}`} />
                    <Row label="Monthly labor saved" value={`$${roi.monthlyLaborSaved}`} />
                    <Row label="Total monthly savings" value={`$${roi.monthlySavings}`} muted />
                    <Row label="Year 1 net" value={`$${roi.year1Net}`} accent />
                    <Row label="Year 3 net" value={`$${roi.year3Net}`} accent />
                    <Row label="Annual ROI" value={`${roi.annualROIPct}%`} accent />
                  </div>
                </>
              )}

              <button onClick={handlePDF} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500 px-4 py-3 text-sm font-medium text-zinc-900 transition hover:from-yellow-200 hover:to-yellow-400 active:scale-[0.98]">
                <Download className="h-4 w-4" />
                Download PDF Report
              </button>
              <button onClick={handleCopy} className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:bg-white/[0.06] active:scale-[0.98]">
                <Copy className="h-4 w-4" />
                {copied ? "Copied!" : "Copy as text"}
              </button>
            </div>
          </motion.div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-zinc-500">
          All figures are estimates. Actual waste and ROI depend on job mix, operator skill, material type, and shop workflow.
        </p>
      </section>
    </main>
  );
}

function Label({ icon: Icon, children }: { icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
      <Icon className="h-3.5 w-3.5 text-yellow-400/80" />
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
        className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-white placeholder:text-zinc-600 focus:border-yellow-400/40 focus:bg-white/[0.04] focus:outline-none"
      />
    </div>
  );
}

function SliderRow({
  value,
  setValue,
  min,
  max,
  step,
  unit,
  prefix,
  decimals,
}: {
  value: number;
  setValue: (n: number) => void;
  min: number;
  max: number;
  step: number;
  unit: string;
  prefix?: boolean;
  decimals?: number;
}) {
  const display = decimals ? value.toFixed(decimals) : value;
  const text = prefix ? `${unit}${display}` : `${display}${unit}`;
  return (
    <div className="mt-3 flex items-center gap-4">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="flex-1 accent-yellow-400"
      />
      <span className="w-24 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-center text-sm font-medium text-yellow-300">
        {text}
      </span>
    </div>
  );
}

function Row({
  label,
  sub,
  value,
  muted,
  accent,
}: {
  label: string;
  sub?: string;
  value: string;
  muted?: boolean;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className={muted ? "text-zinc-500" : "text-zinc-300"}>{label}</div>
        {sub && <div className="text-xs text-zinc-500">{sub}</div>}
      </div>
      <div className={accent ? "font-medium text-yellow-300" : muted ? "text-zinc-500" : "font-medium text-white"}>
        {value}
      </div>
    </div>
  );
}
