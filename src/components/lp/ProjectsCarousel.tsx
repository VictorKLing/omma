"use client";
import React, { useState } from 'react';

type Slide = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function ProjectsCarousel({ slides }: { slides: Slide[] }) {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === slides.length - 1 ? 0 : i + 1));

  const s = slides[idx];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="relative h-[360px] sm:h-[420px]">
        <img src={s.imageUrl} alt={s.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="relative z-10 p-4 sm:p-6 md:p-8 flex h-full flex-col">
          <div className="mt-auto">
            <h4 className="text-xl sm:text-2xl font-semibold">{s.title}</h4>
            <p className="mt-2 text-sm sm:text-base text-white/85 max-w-3xl">{s.description}</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-3 flex items-center justify-between px-3 sm:px-4">
        <button onClick={prev} className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-black/40 ring-1 ring-white/20 hover:bg-black/60">‹</button>
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <span key={i} className={`h-1.5 rounded-full transition-all ${i === idx ? 'w-8 bg-amber-400' : 'w-3 bg-white/40'}`}></span>
          ))}
        </div>
        <button onClick={next} className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-black/40 ring-1 ring-white/20 hover:bg-black/60">›</button>
      </div>
    </div>
  );
}
