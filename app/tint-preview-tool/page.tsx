"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Eye, Sparkles, Download, Sun, Moon } from "lucide-react";

type VehicleType = "sedan" | "suv" | "truck" | "coupe";
type CarColor = "black" | "white" | "silver" | "red" | "blue";

const vehicles: Record<VehicleType, { label: string }> = {
  sedan: { label: "Sedan" },
  suv: { label: "SUV" },
  truck: { label: "Truck" },
  coupe: { label: "Coupe" },
};

const carColors: Record<CarColor, { label: string; body: string; accent: string }> = {
  black: { label: "Black", body: "#1a1a1f", accent: "#2a2a30" },
  white: { label: "White", body: "#e8e8ec", accent: "#c8c8cc" },
  silver: { label: "Silver", body: "#9ca3af", accent: "#6b7280" },
  red: { label: "Red", body: "#991b1b", accent: "#7f1d1d" },
  blue: { label: "Blue", body: "#1e3a8a", accent: "#172554" },
};

// VLT % → opacity for window glass
function vltToOpacity(vlt: number) {
  return (100 - vlt) / 100;
}

function vltLabel(vlt: number) {
  if (vlt >= 70) return "Factory";
  if (vlt >= 50) return "Light";
  if (vlt >= 35) return "Medium";
  if (vlt >= 20) return "Dark";
  if (vlt >= 5) return "Limo";
  return "Blackout";
}

export default function TintPreviewTool() {
  const [vehicle, setVehicle] = useState<VehicleType>("sedan");
  const [color, setColor] = useState<CarColor>("black");
  const [vlt, setVlt] = useState(35);
  const [lighting, setLighting] = useState<"day" | "night">("day");
  const [compareMode, setCompareMode] = useState(false);

  const tintOpacity = vltToOpacity(vlt);
  const carBody = carColors[color].body;
  const carAccent = carColors[color].accent;

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
              <Eye className="h-3.5 w-3.5 text-zinc-900" strokeWidth={2.5} />
            </div>
            <span className="text-sm font-medium">Tint Preview Tool</span>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/5 px-3 py-1 text-xs text-violet-300 backdrop-blur-xl">
            <Sparkles className="h-3 w-3" />
            Visualizer
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Tint Preview <span className="bg-gradient-to-r from-violet-200 via-violet-400 to-violet-600 bg-clip-text text-transparent">Tool</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
            Drag the slider. See exactly how dark 35% looks before the film hits the glass.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* Car preview */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl sm:p-8">

            {/* Lighting toggle + compare toggle */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1">
                <button onClick={() => setLighting("day")} className={"flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition " + (lighting === "day" ? "bg-amber-400/20 text-amber-200" : "text-zinc-400 hover:text-white")}>
                  <Sun className="h-3.5 w-3.5" /> Day
                </button>
                <button onClick={() => setLighting("night")} className={"flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition " + (lighting === "night" ? "bg-violet-400/20 text-violet-200" : "text-zinc-400 hover:text-white")}>
                  <Moon className="h-3.5 w-3.5" /> Night
                </button>
              </div>

              <button onClick={() => setCompareMode(!compareMode)} className={"rounded-full border px-3 py-1.5 text-xs font-medium transition " + (compareMode ? "border-violet-400/40 bg-violet-400/10 text-violet-200" : "border-white/10 bg-white/[0.04] text-zinc-400 hover:text-white")}>
                {compareMode ? "Hide compare" : "Compare before/after"}
              </button>
            </div>

            {/* Car SVG */}
            <div className={"relative overflow-hidden rounded-2xl p-6 transition-colors duration-500 " + (lighting === "day" ? "bg-gradient-to-b from-sky-200/15 via-zinc-700/30 to-zinc-900" : "bg-gradient-to-b from-indigo-950/60 via-zinc-950 to-black")}>
              {/* Ambient light spots */}
              {lighting === "day" && <div className="pointer-events-none absolute top-0 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-amber-300/20 blur-2xl" />}
              {lighting === "night" && <div className="pointer-events-none absolute bottom-0 left-1/2 h-24 w-72 -translate-x-1/2 rounded-full bg-violet-400/15 blur-2xl" />}

              {compareMode ? (
                <div className="grid grid-cols-2 gap-3 relative z-10">
                  <div>
                    <p className="mb-2 text-center text-[10px] font-medium uppercase tracking-wider text-zinc-500">Factory (70%)</p>
                    <CarSVG vehicle={vehicle} body={carBody} accent={carAccent} tintOpacity={vltToOpacity(70)} lighting={lighting} />
                  </div>
                  <div>
                    <p className="mb-2 text-center text-[10px] font-medium uppercase tracking-wider text-violet-300">After ({vlt}%)</p>
                    <CarSVG vehicle={vehicle} body={carBody} accent={carAccent} tintOpacity={tintOpacity} lighting={lighting} />
                  </div>
                </div>
              ) : (
                <div className="relative z-10">
                  <CarSVG vehicle={vehicle} body={carBody} accent={carAccent} tintOpacity={tintOpacity} lighting={lighting} />
                </div>
              )}
            </div>

            {/* VLT Slider */}
            <div className="mt-8">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-300">VLT % (Visible Light Transmission)</p>
                  <p className="mt-1 text-[11px] text-zinc-500">Lower number means darker tint</p>
                </div>
                <div className="text-right">
                  <span className="bg-gradient-to-r from-violet-200 to-violet-400 bg-clip-text text-3xl font-medium tracking-tight text-transparent">{vlt}%</span>
                  <p className="text-[11px] text-violet-300/80">{vltLabel(vlt)}</p>
                </div>
              </div>
              <input type="range" min={5} max={70} step={5} value={vlt} onChange={(e) => setVlt(Number(e.target.value))} className="w-full accent-violet-400" />
              <div className="mt-2 flex justify-between text-[10px] text-zinc-600">
                <span>5% Limo</span>
                <span>20% Dark</span>
                <span>35% Medium</span>
                <span>50% Light</span>
                <span>70% Factory</span>
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="h-fit rounded-2xl bg-gradient-to-br from-violet-400/40 via-violet-400/10 to-white/10 p-px lg:sticky lg:top-28">
            <div className="rounded-2xl bg-[#0a0a12]/80 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">

              {/* Vehicle */}
              <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-zinc-500">Vehicle Type</p>
              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(vehicles) as VehicleType[]).map((key) => (
                  <button key={key} onClick={() => setVehicle(key)} className={"rounded-xl border px-3 py-2 text-xs font-medium transition active:scale-[0.97] " + (vehicle === key ? "border-violet-400/40 bg-violet-400/10 text-violet-200" : "border-white/10 bg-white/[0.02] text-zinc-400 hover:bg-white/[0.04]")}>
                    {vehicles[key].label}
                  </button>
                ))}
              </div>

              <div className="my-5 h-px bg-white/10" />

              {/* Color */}
              <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-zinc-500">Body Color</p>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(carColors) as CarColor[]).map((key) => (
                  <button key={key} onClick={() => setColor(key)} title={carColors[key].label} className={"h-9 w-9 rounded-full border-2 transition active:scale-95 " + (color === key ? "border-violet-400 ring-2 ring-violet-400/30" : "border-white/20 hover:border-white/40")} style={{ backgroundColor: carColors[key].body }} />
                ))}
              </div>

              <div className="my-5 h-px bg-white/10" />

              {/* Tint info */}
              <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-zinc-500">Tint Details</p>
              <div className="space-y-2 text-sm">
                <Row label="VLT" value={vlt + "%"} />
                <Row label="Shade" value={vltLabel(vlt)} />
                <Row label="Light blocked" value={(100 - vlt) + "%"} />
              </div>

              <div className="my-5 h-px bg-white/10" />

              <p className="text-[11px] leading-relaxed text-zinc-500">
                <strong className="text-zinc-300">Legal tip:</strong> Most US states require 35–70% VLT on front windows. Check local laws before installing.
              </p>

              <button
                onClick={() => {
                  const txt = "TINT SPEC\n\nVehicle: " + vehicles[vehicle].label + "\nColor: " + carColors[color].label + "\nVLT: " + vlt + "% (" + vltLabel(vlt) + ")\nLight blocked: " + (100 - vlt) + "%";
                  navigator.clipboard.writeText(txt);
                }}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-violet-300 to-violet-500 px-4 py-2.5 text-sm font-medium text-zinc-900 transition hover:from-violet-200 hover:to-violet-400 active:scale-[0.98]"
              >
                <Download className="h-4 w-4" />
                Copy spec
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function CarSVG({ vehicle, body, accent, tintOpacity, lighting }: { vehicle: VehicleType; body: string; accent: string; tintOpacity: number; lighting: "day" | "night" }) {
  const tintColor = lighting === "night" ? "0,0,0" : "10,10,20";
  const interiorColor = lighting === "night" ? "#0a0a14" : "#2a2a35";

  // Different car body shapes
  if (vehicle === "sedan") {
    return (
      <svg viewBox="0 0 400 180" className="w-full">
        <defs>
          <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} />
            <stop offset="50%" stopColor={body} />
            <stop offset="100%" stopColor={accent} />
          </linearGradient>
        </defs>
        {/* Body */}
        <path d="M 30 140 L 60 90 Q 100 60 200 55 Q 300 60 340 90 L 370 140 Z" fill="url(#bodyGrad)" stroke="rgba(0,0,0,0.3)" strokeWidth="1" />
        {/* Window area (interior) */}
        <path d="M 75 95 Q 110 70 200 65 Q 290 70 325 95 L 300 105 Q 200 95 100 105 Z" fill={interiorColor} />
        {/* Tinted windows overlay */}
        <path d="M 75 95 Q 110 70 200 65 Q 290 70 325 95 L 300 105 Q 200 95 100 105 Z" fill={`rgba(${tintColor},${tintOpacity})`} />
        {/* Glass reflection */}
        <path d="M 90 90 Q 130 75 200 72" fill="none" stroke={`rgba(255,255,255,${0.15 * (1 - tintOpacity)})`} strokeWidth="1.5" />
        {/* Wheels */}
        <circle cx="100" cy="145" r="22" fill="#0a0a12" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <circle cx="100" cy="145" r="12" fill="#1a1a25" />
        <circle cx="300" cy="145" r="22" fill="#0a0a12" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <circle cx="300" cy="145" r="12" fill="#1a1a25" />
        {/* Headlights / taillights */}
        <ellipse cx="358" cy="115" rx="8" ry="4" fill={lighting === "night" ? "#fef3c7" : "rgba(255,255,255,0.6)"} opacity={lighting === "night" ? 0.95 : 0.7} />
        <ellipse cx="42" cy="115" rx="6" ry="4" fill={lighting === "night" ? "#dc2626" : "rgba(180,30,30,0.7)"} opacity={lighting === "night" ? 0.9 : 0.6} />
        {/* Ground shadow */}
        <ellipse cx="200" cy="170" rx="170" ry="6" fill="rgba(0,0,0,0.3)" />
      </svg>
    );
  }

  if (vehicle === "suv") {
    return (
      <svg viewBox="0 0 400 180" className="w-full">
        <defs>
          <linearGradient id="bodyGrad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} />
            <stop offset="50%" stopColor={body} />
            <stop offset="100%" stopColor={accent} />
          </linearGradient>
        </defs>
        <path d="M 30 145 L 50 80 Q 90 55 200 50 Q 310 55 350 80 L 370 145 Z" fill="url(#bodyGrad2)" stroke="rgba(0,0,0,0.3)" strokeWidth="1" />
        <path d="M 65 90 Q 100 65 200 60 Q 300 65 335 90 L 320 110 Q 200 100 80 110 Z" fill={interiorColor} />
        <path d="M 65 90 Q 100 65 200 60 Q 300 65 335 90 L 320 110 Q 200 100 80 110 Z" fill={`rgba(${tintColor},${tintOpacity})`} />
        <path d="M 80 85 Q 130 70 200 67" fill="none" stroke={`rgba(255,255,255,${0.15 * (1 - tintOpacity)})`} strokeWidth="1.5" />
        <circle cx="100" cy="150" r="24" fill="#0a0a12" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <circle cx="100" cy="150" r="13" fill="#1a1a25" />
        <circle cx="300" cy="150" r="24" fill="#0a0a12" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <circle cx="300" cy="150" r="13" fill="#1a1a25" />
        <ellipse cx="358" cy="120" rx="8" ry="4" fill={lighting === "night" ? "#fef3c7" : "rgba(255,255,255,0.6)"} opacity={lighting === "night" ? 0.95 : 0.7} />
        <ellipse cx="42" cy="120" rx="6" ry="4" fill={lighting === "night" ? "#dc2626" : "rgba(180,30,30,0.7)"} opacity={lighting === "night" ? 0.9 : 0.6} />
        <ellipse cx="200" cy="172" rx="170" ry="6" fill="rgba(0,0,0,0.3)" />
      </svg>
    );
  }

  if (vehicle === "truck") {
    return (
      <svg viewBox="0 0 400 180" className="w-full">
        <defs>
          <linearGradient id="bodyGrad3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} />
            <stop offset="50%" stopColor={body} />
            <stop offset="100%" stopColor={accent} />
          </linearGradient>
        </defs>
        {/* Cab */}
        <path d="M 30 145 L 50 85 Q 80 60 160 55 L 175 90 L 175 145 Z" fill="url(#bodyGrad3)" stroke="rgba(0,0,0,0.3)" strokeWidth="1" />
        {/* Bed */}
        <path d="M 175 100 L 175 145 L 370 145 L 370 100 Z" fill="url(#bodyGrad3)" stroke="rgba(0,0,0,0.3)" strokeWidth="1" />
        {/* Cab window */}
        <path d="M 60 95 Q 90 70 155 65 L 168 95 L 80 100 Z" fill={interiorColor} />
        <path d="M 60 95 Q 90 70 155 65 L 168 95 L 80 100 Z" fill={`rgba(${tintColor},${tintOpacity})`} />
        <circle cx="95" cy="150" r="22" fill="#0a0a12" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <circle cx="95" cy="150" r="12" fill="#1a1a25" />
        <circle cx="310" cy="150" r="22" fill="#0a0a12" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <circle cx="310" cy="150" r="12" fill="#1a1a25" />
        <ellipse cx="358" cy="120" rx="8" ry="4" fill={lighting === "night" ? "#fef3c7" : "rgba(255,255,255,0.6)"} opacity={lighting === "night" ? 0.95 : 0.7} />
        <ellipse cx="42" cy="120" rx="6" ry="4" fill={lighting === "night" ? "#dc2626" : "rgba(180,30,30,0.7)"} opacity={lighting === "night" ? 0.9 : 0.6} />
        <ellipse cx="200" cy="172" rx="170" ry="6" fill="rgba(0,0,0,0.3)" />
      </svg>
    );
  }

  // coupe
  return (
    <svg viewBox="0 0 400 180" className="w-full">
      <defs>
        <linearGradient id="bodyGrad4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} />
          <stop offset="50%" stopColor={body} />
          <stop offset="100%" stopColor={accent} />
        </linearGradient>
      </defs>
      <path d="M 25 145 L 70 95 Q 130 65 200 60 Q 280 65 335 100 L 375 145 Z" fill="url(#bodyGrad4)" stroke="rgba(0,0,0,0.3)" strokeWidth="1" />
      <path d="M 85 105 Q 140 75 200 70 Q 270 75 320 105 L 295 115 Q 200 105 110 115 Z" fill={interiorColor} />
      <path d="M 85 105 Q 140 75 200 70 Q 270 75 320 105 L 295 115 Q 200 105 110 115 Z" fill={`rgba(${tintColor},${tintOpacity})`} />
      <path d="M 100 100 Q 150 80 200 77" fill="none" stroke={`rgba(255,255,255,${0.15 * (1 - tintOpacity)})`} strokeWidth="1.5" />
      <circle cx="100" cy="148" r="24" fill="#0a0a12" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <circle cx="100" cy="148" r="13" fill="#1a1a25" />
      <circle cx="305" cy="148" r="24" fill="#0a0a12" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <circle cx="305" cy="148" r="13" fill="#1a1a25" />
      <ellipse cx="360" cy="120" rx="8" ry="4" fill={lighting === "night" ? "#fef3c7" : "rgba(255,255,255,0.6)"} opacity={lighting === "night" ? 0.95 : 0.7} />
      <ellipse cx="40" cy="120" rx="6" ry="4" fill={lighting === "night" ? "#dc2626" : "rgba(180,30,30,0.7)"} opacity={lighting === "night" ? 0.9 : 0.6} />
      <ellipse cx="200" cy="172" rx="170" ry="6" fill="rgba(0,0,0,0.3)" />
    </svg>
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