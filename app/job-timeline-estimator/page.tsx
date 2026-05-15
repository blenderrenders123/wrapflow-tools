"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Clock, Sparkles, Plus, Trash2, Copy, Calendar } from "lucide-react";

type Task = {
  id: string;
  name: string;
  hours: number;
  category: "prep" | "install" | "finish";
};

const taskPresets: Record<string, Task[]> = {
  fullWrap: [
    { id: "1", name: "Vehicle wash & decontamination", hours: 2, category: "prep" },
    { id: "2", name: "Disassembly (door handles, badges)", hours: 1.5, category: "prep" },
    { id: "3", name: "Surface prep with IPA", hours: 1, category: "prep" },
    { id: "4", name: "Hood wrap", hours: 2.5, category: "install" },
    { id: "5", name: "Roof wrap", hours: 2, category: "install" },
    { id: "6", name: "Front bumper", hours: 3, category: "install" },
    { id: "7", name: "Doors (4x)", hours: 6, category: "install" },
    { id: "8", name: "Rear bumper", hours: 2.5, category: "install" },
    { id: "9", name: "Quarter panels", hours: 3, category: "install" },
    { id: "10", name: "Reassembly", hours: 1.5, category: "finish" },
    { id: "11", name: "Final inspection & detail", hours: 1, category: "finish" },
  ],
  partialWrap: [
    { id: "1", name: "Vehicle wash & decontamination", hours: 1.5, category: "prep" },
    { id: "2", name: "Surface prep with IPA", hours: 0.5, category: "prep" },
    { id: "3", name: "Hood wrap", hours: 2.5, category: "install" },
    { id: "4", name: "Roof wrap", hours: 2, category: "install" },
    { id: "5", name: "Mirrors", hours: 1, category: "install" },
    { id: "6", name: "Final inspection", hours: 0.5, category: "finish" },
  ],
  ppfFront: [
    { id: "1", name: "Wash & clay bar", hours: 2, category: "prep" },
    { id: "2", name: "IPA wipe down", hours: 0.5, category: "prep" },
    { id: "3", name: "Full hood PPF", hours: 3, category: "install" },
    { id: "4", name: "Front bumper PPF", hours: 4, category: "install" },
    { id: "5", name: "Fender PPF (2x)", hours: 2, category: "install" },
    { id: "6", name: "Mirror caps", hours: 1, category: "install" },
    { id: "7", name: "Inspection & cure check", hours: 0.5, category: "finish" },
  ],
};

const categoryColors = {
  prep: "from-amber-400 to-amber-600",
  install: "from-cyan-400 to-cyan-600",
  finish: "from-emerald-400 to-emerald-600",
};

const categoryLabels = {
  prep: "Prep",
  install: "Install",
  finish: "Finish",
};

export default function JobTimelineEstimator() {
  const [tasks, setTasks] = useState<Task[]>(taskPresets.fullWrap);
  const [techCount, setTechCount] = useState(1);
  const [bufferPct, setBufferPct] = useState(15);
  const [copied, setCopied] = useState(false);

  const calc = useMemo(() => {
    const totalHours = tasks.reduce((sum, t) => sum + t.hours, 0);
    const adjustedHours = (totalHours / techCount) * (1 + bufferPct / 100);
    const workDays = Math.ceil(adjustedHours / 8);
    const prepHours = tasks.filter((t) => t.category === "prep").reduce((s, t) => s + t.hours, 0);
    const installHours = tasks.filter((t) => t.category === "install").reduce((s, t) => s + t.hours, 0);
    const finishHours = tasks.filter((t) => t.category === "finish").reduce((s, t) => s + t.hours, 0);

    return {
      totalHours: totalHours.toFixed(1),
      adjustedHours: adjustedHours.toFixed(1),
      workDays,
      prepHours: prepHours.toFixed(1),
      installHours: installHours.toFixed(1),
      finishHours: finishHours.toFixed(1),
      bufferAmount: (adjustedHours - totalHours / techCount).toFixed(1),
    };
  }, [tasks, techCount, bufferPct]);

  const loadPreset = (preset: keyof typeof taskPresets) => {
    setTasks(taskPresets[preset].map((t) => ({ ...t, id: t.id + Date.now() })));
  };

  const updateTask = (id: string, field: keyof Task, value: string | number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, [field]: value } : t)));
  };

  const addTask = () => {
    setTasks([...tasks, { id: Date.now().toString(), name: "New task", hours: 1, category: "install" }]);
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleCopy = () => {
    const txt = "JOB TIMELINE ESTIMATE\n\n" + tasks.map((t) => `[${categoryLabels[t.category]}] ${t.name}: ${t.hours}h`).join("\n") + `\n\nTotal hours: ${calc.totalHours}h\nWith ${techCount} tech(s) + ${bufferPct}% buffer: ${calc.adjustedHours}h\nEstimated work days: ${calc.workDays}`;
    navigator.clipboard.writeText(txt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // For Gantt-style timeline
  const maxHours = Math.max(...tasks.map((t) => t.hours), 1);

  return (
    <main className="relative min-h-screen bg-[#06060a] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[10%] h-[500px] w-[500px] rounded-full bg-violet-400/20 blur-[120px]" />
        <div className="absolute top-[400px] right-[5%] h-[450px] w-[450px] rounded-full bg-violet-400/10 blur-[120px]" />
      </div>

      <header className="sticky top-4 z-50 mx-4 lg:mx-8">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
          <Link href="/" className="group flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to tools
          </Link>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-200 via-violet-400 to-violet-600">
              <Clock className="h-3.5 w-3.5 text-zinc-900" strokeWidth={2.5} />
            </div>
            <span className="text-sm font-medium">Job Timeline Estimator</span>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/5 px-3 py-1 text-xs text-violet-300 backdrop-blur-xl">
            <Sparkles className="h-3 w-3" />
            Planner
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Job Timeline <span className="bg-gradient-to-r from-violet-200 via-violet-400 to-violet-600 bg-clip-text text-transparent">Estimator</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
            Plan every step of a wrap or PPF job. Know exactly how long it takes before the car arrives.
          </p>
        </motion.div>

        {/* Preset buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="mb-6 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-zinc-500">Load preset:</span>
          <button onClick={() => loadPreset("fullWrap")} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300 transition hover:border-violet-400/40 hover:bg-violet-400/10 hover:text-violet-200">Full Wrap</button>
          <button onClick={() => loadPreset("partialWrap")} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300 transition hover:border-violet-400/40 hover:bg-violet-400/10 hover:text-violet-200">Partial Wrap</button>
          <button onClick={() => loadPreset("ppfFront")} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300 transition hover:border-violet-400/40 hover:bg-violet-400/10 hover:text-violet-200">PPF Front End</button>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* Timeline */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl sm:p-8">

            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-300">Job Tasks</p>
              <button onClick={addTask} className="inline-flex items-center gap-1 rounded-full border border-violet-400/30 bg-violet-400/10 px-2.5 py-1 text-xs font-medium text-violet-200 transition hover:bg-violet-400/15">
                <Plus className="h-3 w-3" /> Add task
              </button>
            </div>

            {/* Task list with timeline bars */}
            <div className="space-y-2">
              {tasks.map((task) => (
                <div key={task.id} className="group rounded-xl border border-white/10 bg-white/[0.02] p-3 transition hover:bg-white/[0.04]">
                  <div className="grid grid-cols-[80px_1fr_80px_36px] items-center gap-3">
                    <select value={task.category} onChange={(e) => updateTask(task.id, "category", e.target.value as Task["category"])} className="rounded-lg border border-white/10 bg-[#0a0a12] px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-300 focus:outline-none">
                      <option value="prep">Prep</option>
                      <option value="install">Install</option>
                      <option value="finish">Finish</option>
                    </select>
                    <input value={task.name} onChange={(e) => updateTask(task.id, "name", e.target.value)} className="rounded-lg bg-transparent px-2 py-1.5 text-sm text-white focus:bg-white/[0.04] focus:outline-none" />
                    <input type="number" step="0.5" value={task.hours} onChange={(e) => updateTask(task.id, "hours", Number(e.target.value))} className="rounded-lg bg-white/[0.02] px-2 py-1.5 text-center text-sm text-violet-200 focus:bg-white/[0.05] focus:outline-none" />
                    <button onClick={() => removeTask(task.id)} className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-red-500/10 hover:text-red-300">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* Timeline bar */}
                  <div className="mt-2 ml-[92px] mr-[124px] h-1.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(task.hours / maxHours) * 100}%` }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className={"h-full bg-gradient-to-r " + categoryColors[task.category]}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-[80px_1fr_80px_36px] gap-3 px-3 text-[10px] uppercase tracking-wider text-zinc-600">
              <span>Phase</span>
              <span>Task</span>
              <span className="text-center">Hours</span>
              <span></span>
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-3">
              <span className="text-[10px] uppercase tracking-wider text-zinc-500">Phases:</span>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="text-xs text-zinc-400">Prep ({calc.prepHours}h)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-cyan-400" />
                <span className="text-xs text-zinc-400">Install ({calc.installHours}h)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-xs text-zinc-400">Finish ({calc.finishHours}h)</span>
              </div>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="h-fit rounded-2xl bg-gradient-to-br from-violet-400/40 via-violet-400/10 to-white/10 p-px lg:sticky lg:top-28">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-300/80">Estimated</p>

              <motion.div key={calc.adjustedHours} initial={{ scale: 0.95, opacity: 0.5 }} animate={{ scale: 1, opacity: 1 }} className="mt-3 bg-gradient-to-r from-violet-200 via-violet-400 to-violet-500 bg-clip-text text-5xl font-medium tracking-tight text-transparent">
                {calc.adjustedHours}h
              </motion.div>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-zinc-500">
                <Calendar className="h-3 w-3" />
                ≈ {calc.workDays} work {calc.workDays === 1 ? "day" : "days"}
              </p>

              <div className="my-5 h-px bg-white/10" />

              {/* Tech count slider */}
              <div className="mb-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-400">Technicians</span>
                  <span className="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1 text-sm font-medium text-violet-300">{techCount}</span>
                </div>
                <input type="range" min={1} max={4} step={1} value={techCount} onChange={(e) => setTechCount(Number(e.target.value))} className="w-full accent-violet-400" />
                <div className="mt-1 flex justify-between text-[10px] text-zinc-600">
                  <span>Solo</span><span>2</span><span>3</span><span>Team</span>
                </div>
              </div>

              {/* Buffer slider */}
              <div className="mb-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-400">Buffer time</span>
                  <span className="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1 text-sm font-medium text-violet-300">{bufferPct}%</span>
                </div>
                <input type="range" min={0} max={50} step={5} value={bufferPct} onChange={(e) => setBufferPct(Number(e.target.value))} className="w-full accent-violet-400" />
                <p className="mt-1 text-[10px] text-zinc-600">For unexpected issues</p>
              </div>

              <div className="my-5 h-px bg-white/10" />

              <div className="space-y-3 text-sm">
                <Row label="Raw total" value={calc.totalHours + "h"} />
                <Row label="With buffer" value={"+" + calc.bufferAmount + "h"} accent />
                <Row label="Tasks" value={tasks.length.toString()} />
              </div>

              <button onClick={handleCopy} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-violet-300 to-violet-500 px-4 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-violet-200 hover:to-violet-400 active:scale-[0.98]">
                <Copy className="h-4 w-4" />
                {copied ? "Copied!" : "Copy schedule"}
              </button>
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
      <span className={accent ? "font-medium text-violet-300" : "font-medium text-white"}>{value}</span>
    </div>
  );
}