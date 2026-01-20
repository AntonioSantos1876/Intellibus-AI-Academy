import React from "react";
import Link from "next/link";

export function Hero() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-xs font-bold tracking-wider mb-8 uppercase animate-float">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        Cohort Beta • Applications Open
      </div>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl text-slate-900 dark:text-white drop-shadow-sm">
        Forge the Future of <br />
        <span className="text-gradient relative inline-block pb-1">
          Intelligent Systems
          <span className="absolute inset-0 bg-blue-400/20 blur-xl opacity-50 animate-pulse-slow"></span>
        </span>
      </h1>
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
        Rigorous, proctored, and instructor-led training for elite engineering
        talent. Join a curated community of architects building the next era of
        AI.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full sm:w-auto">
        <Link
          href="#"
          className="btn-glow group relative w-full sm:w-auto px-8 py-3.5 bg-blue-600 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-500 font-semibold transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 overflow-hidden min-h-[48px] outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
        >
          View Engineering Tracks
          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform duration-300">
            arrow_forward
          </span>
          <div className="absolute inset-0 rounded-lg ring-2 ring-white/20 group-hover:ring-white/40 transition-all"></div>
        </Link>
        <Link
          href="#"
          className="group w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10 font-semibold transition-all flex items-center justify-center hover:scale-[1.02] min-h-[48px] outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
        >
          Review Syllabus
        </Link>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-500 mb-16 max-w-lg mx-auto leading-relaxed">
        Students enter through the Hackathon. Instructors are invite-only.
        Administrative access is internal.
      </p>
    </div>
  );
}
