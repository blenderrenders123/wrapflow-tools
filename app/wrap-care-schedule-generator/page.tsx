"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft,
  CalendarDays,
  Sparkles,
  Download,
  Copy,
  Car,
  Sun,
  Home,
  Droplets,
  Layers,
  CalendarPlus,
} from "lucide-react";
import jsPDF from "jspdf";

type Climate = "temperate" | "hot-dry" | "hot-humid" | "cold-snowy" | "coastal";
type Usage = "daily" | "weekend" | "garage";
type WrapType = "cast" | "calendered" | "ppf";
type Parking = "garage" | "covered" | "street";
type WashPref = "weekly" | "biweekly" | "monthly";

type Task = {
  date: Date;
  title: string;
  category: "wash" | "inspect" | "decon" | "seal" | "milestone";
  notes: string;
};

const climateLabels: Record<Climate, string> = {
  temperate: "Temperate",
  "hot-dry": "Hot & Dry",
  "hot-humid": "Hot & Humid",
  "cold-snowy": "Cold & Snowy",
  coastal: "Coastal",
};

const usageLabels: Record<Usage, string> = {
  daily: "Daily Driver",
  weekend: "Weekend",
  garage: "Show Car",
};

const wrapLabels: Record<WrapType, string> = {
  cast: "Cast Vinyl",
  calendered: "Calendered",
  ppf: "PPF",
};

const parkingLabels: Record<Parking, string> = {
  garage: "Garage",
  covered: "Covered",
  street: "Street",
};

const washLabels: Record<WashPref, string> = {
  weekly: "Weekly",
  biweekly: "Biweekly",
  monthly: "Monthly",
};

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function formatDate(d: Date): string {
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function formatICSDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}${m}${day}`;
}

function generateSchedule(
  installDate: Date,
  climate: Climate,
  usage: Usage,
  wrapType: WrapType,
  parking: Parking,
  washPref: WashPref
): Task[] {
  const tasks: Task[] = [];

  let washInterval = washPref === "weekly" ? 7 : washPref === "biweekly" ? 14 : 30;
  if (usage === "daily" && washInterval > 14) washInterval = 14;
  if (usage === "garage") washInterval = Math.max(washInterval, 21);
  if (climate === "coastal" || climate === "cold-snowy") washInterval = Math.min(washInterval, 10);

  const inspectInterval = climate === "hot-dry" || climate === "coastal" ? 21 : 30;

  let deconInterval = 90;
  if (parking === "street") deconInterval -= 15;
  if (climate === "hot-humid" || climate === "coastal") deconInterval -= 15;

  const lifespanYears = wrapType === "ppf" ? 8 : wrapType === "cast" ? 6 : 3;
  const horizonDays = Math.min(365, lifespanYears * 365);

  tasks.push({
    date: addDays(installDate, 7),
    title: "First wash window opens",
    category: "milestone",
    notes:
      "Avoid washing for the first 7 days post-install. Adhesive is still curing during this period.",
  });

  for (let d = washInterval; d <= horizonDays; d += washInterval) {
    tasks.push({
      date: addDays(installDate, d),
      title: "Hand wash",
      category: "wash",
      notes:
        "pH-neutral soap, two-bucket method. No automatic brush car washes. Keep pressure washers 6+ inches from edges.",
    });
  }

  for (let d = inspectInterval; d <= horizonDays; d += inspectInterval) {
    tasks.push({
      date: addDays(installDate, d),
      title: "Edge inspection",
      category: "inspect",
      notes:
        "Check edges, door jambs, and around emblems for lifting. Address with heat and pressure immediately.",
    });
  }

  for (let d = deconInterval; d <= horizonDays; d += deconInterval) {
    tasks.push({
      date: addDays(installDate, d),
      title: "Decontamination wash",
      category: "decon",
      notes:
        "Iron remover and wrap-safe clay. Removes embedded contaminants standard washes leave behind.",
    });
  }

  for (let d = 180; d <= horizonDays; d += 180) {
    tasks.push({
      date: addDays(installDate, d),
      title: "Apply wrap-safe sealant",
      category: "seal",
      notes:
        "Use sealants labeled safe for vinyl or PPF. Avoid carnauba wax and petroleum-based products.",
    });
  }

  tasks.push({
    date: addDays(installDate, 365),
    title: "1-Year checkup",
    category: "milestone",
    notes: "Full inspection. Document any issues with photos. Consider a professional detail.",
  });

  return tasks.sort((a, b) => a.date.getTime() - b.date.getTime());
}

const categoryStyles: Record<Task["category"], string> = {
  wash: "border-teal-400/40 bg-teal-400/10 text-teal-200",
  inspect: "border-cyan-400/40 bg-cyan-400/10 text-cyan-200",
  decon: "border-violet-400/40 bg-violet-400/10 text-violet-200",
  seal: "border-amber-400/40 bg-amber-400/10 text-amber-200",
  milestone: "border-rose-400/40 bg-rose-400/10 text-rose-200",
};

export default function WrapCareScheduleGenerator() {
  const today = new Date().toISOString().split("T")[0];

  const [installDate, setInstallDate] = useState<string>(today);
  const [climate, setClimate] = useState<Climate>("temperate");
  const [usage, setUsage] = useState<Usage>("daily");
  const [wrapType, setWrapType] = useState<WrapType>("cast");
  const [parking, setParking] = useState<Parking>("garage");
  const [washPref, setWashPref] = useState<WashPref>("biweekly");
  const [clientName, setClientName] = useState("");
  const [vehicleInfo, setVehicleInfo] = useState("");
  const [shopName, setShopName] = useState("");
  const [copied, setCopied] = useState(false);

  const schedule = useMemo(() => {
    const d = new Date(installDate);
    if (isNaN(d.getTime())) return [];
    return generateSchedule(d, climate, usage, wrapType, parking, washPref);
  }, [installDate, climate, usage, wrapType, parking, washPref]);

  const nextTasks = schedule.slice(0, 12);

  const handleCopy = () => {
    const lines: string[] = [];
    lines.push("WRAP CARE SCHEDULE");
    if (shopName) lines.push(shopName);
    if (clientName) lines.push(`Client: ${clientName}`);
    if (vehicleInfo) lines.push(`Vehicle: ${vehicleInfo}`);
    lines.push("");
    lines.push(`Install: ${formatDate(new Date(installDate))}`);
    lines.push(`Wrap: ${wrapLabels[wrapType]}`);
    lines.push(`Climate: ${climateLabels[climate]}`);
    lines.push(`Usage: ${usageLabels[usage]}`);
    lines.push(`Parking: ${parkingLabels[parking]}`);
    lines.push(`Wash: ${washLabels[washPref]}`);
    lines.push("");
    lines.push("UPCOMING TASKS");
    nextTasks.forEach((t) => {
      lines.push(`${formatDate(t.date)} — ${t.title}`);
      lines.push(`  ${t.notes}`);
    });
    navigator.clipboard.writeText(lines.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePDF = () => {
    const doc = new jsPDF();
    const todayStr = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const scheduleNum = `WF-${Date.now().toString().slice(-6)}`;

    doc.setFillColor(10, 10, 18);
    doc.rect(0, 0, 210, 50, "F");

    doc.setFillColor(45, 212, 191);
    doc.rect(0, 50, 210, 1.5, "F");

    doc.setFillColor(45, 212, 191);
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
    doc.text("Personalized Wrap Care Schedule", 40, 32);

    doc.setTextColor(45, 212, 191);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text("SCHEDULE #", 190, 20, { align: "right" });
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(scheduleNum, 190, 25.5, { align: "right" });

    doc.setTextColor(180, 180, 190);
    doc.setFontSize(8);
    doc.text(todayStr, 190, 33, { align: "right" });

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
    doc.text("INSTALL DATE", 188, y + 1, { align: "right" });
    doc.setTextColor(30, 30, 40);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.text(formatDate(new Date(installDate)), 188, y + 9, { align: "right" });

    y = 110;
    doc.setTextColor(30, 30, 40);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("Setup", 20, y);

    doc.setDrawColor(45, 212, 191);
    doc.setLineWidth(0.8);
    doc.line(20, y + 1.5, 32, y + 1.5);

    y += 10;
    const specs: [string, string][] = [
      ["Wrap Type", wrapLabels[wrapType]],
      ["Climate", climateLabels[climate]],
      ["Usage", usageLabels[usage]],
      ["Parking", parkingLabels[parking]],
      ["Wash Preference", washLabels[washPref]],
    ];

    specs.forEach(([k, v]) => {
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

    y += 6;
    doc.setTextColor(30, 30, 40);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("Upcoming Tasks", 20, y);
    doc.setDrawColor(45, 212, 191);
    doc.setLineWidth(0.8);
    doc.line(20, y + 1.5, 32, y + 1.5);

    y += 10;
    doc.setFillColor(248, 248, 250);
    doc.rect(15, y - 4, 180, 8, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 130);
    doc.text("DATE", 20, y + 1);
    doc.text("TASK", 60, y + 1);

    y += 10;

    nextTasks.forEach((t) => {
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.5);
      doc.setTextColor(40, 40, 50);
      doc.text(formatDate(t.date), 20, y);
      doc.setFont("helvetica", "bold");
      doc.text(t.title, 60, y);

      y += 4;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(120, 120, 130);
      const noteLines = doc.splitTextToSize(t.notes, 130);
      noteLines.forEach((line: string) => {
        if (y > 280) {
          doc.addPage();
          y = 20;
        }
        doc.text(line, 60, y);
        y += 3.5;
      });

      doc.setDrawColor(235, 235, 240);
      doc.setLineWidth(0.2);
      doc.line(15, y + 1, 195, y + 1);
      y += 5;
    });

    if (y > 220) {
      doc.addPage();
      y = 20;
    }
    y += 6;
    doc.setTextColor(30, 30, 40);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("Care Checklist", 20, y);
    doc.setDrawColor(45, 212, 191);
    doc.setLineWidth(0.8);
    doc.line(20, y + 1.5, 32, y + 1.5);

    y += 9;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(20, 140, 110);
    doc.text("DO", 20, y);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(80, 80, 90);
    [
      "Hand wash with pH-neutral soap (two-bucket method)",
      "Dry with clean microfiber towels",
      "Park in shade or garage when possible",
      "Address lifting edges immediately with heat",
      "Use wrap-safe sealants only",
      "Remove bird droppings, sap, bugs within 24 hours",
    ].forEach((line) => {
      doc.text(`-  ${line}`, 22, y);
      y += 4.5;
    });

    y += 3;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(180, 50, 80);
    doc.text("DON'T", 20, y);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(80, 80, 90);
    [
      "Use automatic brush car washes",
      "Pressure wash close to edges (under 6 inches)",
      "Apply carnauba wax or petroleum products",
      "Use abrasive cloths, brushes, or sponges",
      "Park under sap-dropping trees long-term",
      "Ignore lifting edges - they spread fast",
    ].forEach((line) => {
      doc.text(`-  ${line}`, 22, y);
      y += 4.5;
    });

    doc.setDrawColor(230, 230, 235);
    doc.setLineWidth(0.3);
    doc.line(15, 282, 195, 282);
    doc.setTextColor(150, 150, 160);
    doc.setFontSize(7);
    doc.text("Generated with WrapFlow.tools", 20, 288);
    doc.text("Schedule is a guideline - defer to installer & manufacturer specs.", 190, 288, {
      align: "right",
    });

    doc.save(`wrap-care-schedule-${scheduleNum}.pdf`);
  };

  const handleICS = () => {
    const pad = (n: number) => String(n).padStart(2, "0");
    const now = new Date();
    const stamp = `${now.getUTCFullYear()}${pad(now.getUTCMonth() + 1)}${pad(now.getUTCDate())}T${pad(now.getUTCHours())}${pad(now.getUTCMinutes())}${pad(now.getUTCSeconds())}Z`;

    const lines: string[] = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//WrapFlow.tools//Wrap Care Schedule//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
    ];

    schedule.forEach((t, i) => {
      const dt = formatICSDate(t.date);
      const dtEnd = formatICSDate(addDays(t.date, 1));
      lines.push("BEGIN:VEVENT");
      lines.push(`UID:wrapflow-${stamp}-${i}@wrapflow.tools`);
      lines.push(`DTSTAMP:${stamp}`);
      lines.push(`DTSTART;VALUE=DATE:${dt}`);
      lines.push(`DTEND;VALUE=DATE:${dtEnd}`);
      lines.push(`SUMMARY:${t.title}`);
      lines.push(`DESCRIPTION:${t.notes.replace(/\n/g, "\\n")}`);
      lines.push("END:VEVENT");
    });

    lines.push("END:VCALENDAR");

    const blob = new Blob([lines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "wrap-care-schedule.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-teal-400/20 blur-[120px]" />
        <div className="absolute top-[400px] right-[5%] h-[450px] w-[450px] rounded-full bg-teal-400/10 blur-[120px]" />
      </div>

      <header className="sticky top-4 z-50 mx-4 lg:mx-8">
        <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
          <Link href="/" className="group flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to tools
          </Link>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-teal-200 via-teal-400 to-teal-600">
              <CalendarDays className="h-3.5 w-3.5 text-zinc-900" strokeWidth={2.5} />
            </div>
            <span className="text-sm font-medium">Care Schedule Generator</span>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/5 px-3 py-1 text-xs text-teal-300 backdrop-blur-xl">
            <Sparkles className="h-3 w-3" />
            Scheduler
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Wrap Care <span className="bg-gradient-to-r from-teal-200 via-teal-400 to-teal-600 bg-clip-text text-transparent">Schedule</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
            Personalized wash, inspection, and decontamination dates. Export as PDF or import directly into your calendar.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl sm:p-8">

            <div className="mb-8 grid gap-3 sm:grid-cols-3">
              <TextInput label="Shop name (PDF)" value={shopName} onChange={setShopName} placeholder="Your Shop" />
              <TextInput label="Client" value={clientName} onChange={setClientName} placeholder="John Smith" />
              <TextInput label="Vehicle" value={vehicleInfo} onChange={setVehicleInfo} placeholder="2024 Tesla M3" />
            </div>

            <div className="mb-8">
              <Label icon={CalendarDays}>Install Date</Label>
              <input
                type="date"
                value={installDate}
                onChange={(e) => setInstallDate(e.target.value)}
                className="mt-3 w-full rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5 text-sm text-white focus:border-teal-400/40 focus:bg-white/[0.04] focus:outline-none [color-scheme:dark]"
              />
            </div>

            <div className="mb-8">
              <Label icon={Layers}>Wrap Type</Label>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {(Object.keys(wrapLabels) as WrapType[]).map((key) => (
                  <Pill key={key} active={wrapType === key} onClick={() => setWrapType(key)}>{wrapLabels[key]}</Pill>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <Label icon={Sun}>Climate</Label>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {(Object.keys(climateLabels) as Climate[]).map((key) => (
                  <Pill key={key} active={climate === key} onClick={() => setClimate(key)}>{climateLabels[key]}</Pill>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <Label icon={Car}>Usage</Label>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {(Object.keys(usageLabels) as Usage[]).map((key) => (
                  <Pill key={key} active={usage === key} onClick={() => setUsage(key)}>{usageLabels[key]}</Pill>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <Label icon={Home}>Parking</Label>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {(Object.keys(parkingLabels) as Parking[]).map((key) => (
                  <Pill key={key} active={parking === key} onClick={() => setParking(key)}>{parkingLabels[key]}</Pill>
                ))}
              </div>
            </div>

            <div>
              <Label icon={Droplets}>Wash Frequency</Label>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {(Object.keys(washLabels) as WashPref[]).map((key) => (
                  <Pill key={key} active={washPref === key} onClick={() => setWashPref(key)}>{washLabels[key]}</Pill>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="h-fit rounded-2xl bg-gradient-to-br from-teal-400/40 via-teal-400/10 to-white/10 p-px lg:sticky lg:top-28">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-300/80">Schedule</p>
              <h2 className="mt-1 text-sm text-zinc-400">Tasks generated</h2>

              <motion.div key={schedule.length} initial={{ scale: 0.95, opacity: 0.5 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3 }} className="mt-3 bg-gradient-to-r from-teal-200 via-teal-400 to-teal-500 bg-clip-text text-5xl font-medium tracking-tight text-transparent">
                {schedule.length}
              </motion.div>

              <div className="my-6 h-px bg-white/10" />

              <div className="space-y-3 text-sm">
                <Row label="Washes" value={String(schedule.filter((t) => t.category === "wash").length)} />
                <Row label="Inspections" value={String(schedule.filter((t) => t.category === "inspect").length)} />
                <Row label="Decontamination" value={String(schedule.filter((t) => t.category === "decon").length)} />
                <Row label="Sealant" value={String(schedule.filter((t) => t.category === "seal").length)} muted />
                <Row label="Milestones" value={String(schedule.filter((t) => t.category === "milestone").length)} accent />
              </div>

              <button onClick={handlePDF} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-teal-300 to-teal-500 px-4 py-3 text-sm font-medium text-zinc-900 transition hover:from-teal-200 hover:to-teal-400 active:scale-[0.98]">
                <Download className="h-4 w-4" />
                Download PDF
              </button>
              <button onClick={handleICS} className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2.5 text-sm font-medium text-teal-200 transition hover:bg-teal-400/15 active:scale-[0.98]">
                <CalendarPlus className="h-4 w-4" />
                Add to Calendar (.ics)
              </button>
              <button onClick={handleCopy} className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:bg-white/[0.06] active:scale-[0.98]">
                <Copy className="h-4 w-4" />
                {copied ? "Copied!" : "Copy as text"}
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl sm:p-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-medium text-white">Next 12 tasks</h2>
            <span className="text-xs text-zinc-500">{schedule.length} total over the year</span>
          </div>

          <div className="space-y-2">
            {nextTasks.map((t, i) => (
              <div key={i} className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:flex-row sm:items-start">
                <div className="sm:w-32 sm:shrink-0">
                  <div className="text-xs uppercase tracking-wider text-zinc-500">{t.date.toLocaleDateString("en-US", { month: "short" })}</div>
                  <div className="text-lg font-medium text-white">{t.date.toLocaleDateString("en-US", { day: "numeric" })}</div>
                  <div className="text-xs text-zinc-500">{t.date.getFullYear()}</div>
                </div>
                <div className="flex-1">
                  <div className="mb-1.5 flex flex-wrap items-center gap-2">
                    <span className={`inline-block rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${categoryStyles[t.category]}`}>
                      {t.category}
                    </span>
                    <span className="text-sm font-medium text-white">{t.title}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-zinc-400">{t.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300/80">Do</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              {[
                "Hand wash with pH-neutral soap (two-bucket method)",
                "Dry with clean microfiber towels",
                "Park in shade or garage when possible",
                "Address lifting edges immediately with heat",
                "Use wrap-safe sealants only",
                "Remove bird droppings, sap, bugs within 24 hours",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-emerald-400">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-rose-300/80">Don&apos;t</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              {[
                "Use automatic brush car washes",
                "Pressure wash close to edges (<6 inches)",
                "Apply carnauba wax or petroleum products",
                "Use abrasive cloths, brushes, or sponges",
                "Park under sap-dropping trees long-term",
                "Ignore lifting edges - they spread fast",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-rose-400">−</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-zinc-500">
          Schedule is a general guideline based on industry best practices. Always defer to your installer&apos;s specific care instructions and the film manufacturer&apos;s technical data sheet.
        </p>
      </section>
    </main>
  );
}

function Label({ icon: Icon, children }: { icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
      <Icon className="h-3.5 w-3.5 text-teal-400/80" />
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
        className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-white placeholder:text-zinc-600 focus:border-teal-400/40 focus:bg-white/[0.04] focus:outline-none"
      />
    </div>
  );
}

function Pill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className={"rounded-xl border px-3 py-2.5 text-xs font-medium transition active:scale-[0.97] " + (active ? "border-teal-400/40 bg-teal-400/10 text-teal-200 shadow-[0_0_20px_-8px_rgba(45,212,191,0.5)]" : "border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/20 hover:bg-white/[0.04] hover:text-zinc-200")}>
      {children}
    </button>
  );
}

function Row({ label, value, muted, accent }: { label: string; value: string; muted?: boolean; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <div className={muted ? "text-zinc-500" : "text-zinc-300"}>{label}</div>
      <div className={accent ? "font-medium text-teal-300" : muted ? "text-zinc-500" : "font-medium text-white"}>{value}</div>
    </div>
  );
}
