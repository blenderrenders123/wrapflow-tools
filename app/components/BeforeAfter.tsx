"use client";

import Image from "next/image";
import { useState, useRef } from "react";

export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
  caption,
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
}) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPos(pct);
  };

  return (
    <figure className="my-8">
      <div
        ref={containerRef}
        className="relative aspect-[16/9] w-full select-none overflow-hidden rounded-2xl border border-white/10"
        onMouseDown={(e) => { dragging.current = true; move(e.clientX); }}
        onMouseMove={(e) => { if (dragging.current) move(e.clientX); }}
        onMouseUp={() => { dragging.current = false; }}
        onMouseLeave={() => { dragging.current = false; }}
        onTouchStart={(e) => move(e.touches[0].clientX)}
        onTouchMove={(e) => move(e.touches[0].clientX)}
      >
        {/* After image (full, underneath) */}
        <Image src={afterSrc} alt={afterLabel} fill className="object-cover" unoptimized />
        <span className="absolute bottom-3 right-3 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-md">
          {afterLabel}
        </span>

        {/* Before image (clipped to slider position) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <div className="relative h-full" style={{ width: containerRef.current?.offsetWidth ?? 1000 }}>
            <Image src={beforeSrc} alt={beforeLabel} fill className="object-cover" unoptimized />
          </div>
          <span className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-md">
            {beforeLabel}
          </span>
        </div>

        {/* Drag handle */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      {caption && <figcaption className="mt-2 text-center text-xs text-zinc-500">{caption}</figcaption>}
      <p className="mt-1 text-center text-[10px] uppercase tracking-wider text-zinc-600">Drag to compare</p>
    </figure>
  );
}