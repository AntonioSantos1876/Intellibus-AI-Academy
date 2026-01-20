import React from "react";
import Link from "next/link";

export function HackathonBanner() {
  return (
    <section className="relative z-10 py-10 px-4">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative border border-slate-200 dark:border-white/10 shadow-2xl group">
        <div className="absolute inset-0 bg-slate-900 transition-transform duration-1000 group-hover:scale-105">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-900/40 via-slate-900 to-slate-950"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        </div>

        <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-green-500/20 text-green-400 border border-green-500/30 animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>{" "}
                Registration Open
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wide text-orange-400">
                Registration Closes Soon
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Intellibus AI{" "}
              <span className="text-blue-400">Hackathon 2026</span>
            </h2>
            <p className="text-lg text-slate-300 mb-4 font-medium tracking-wide font-display">
              Build the next era of intelligent business and AI.
            </p>
            <p className="text-slate-400 text-base mb-8 max-w-lg leading-relaxed">
              48 hours. 500+ Engineers. $50k in prizes. Join the most rigorous
              technical challenge of the year.
            </p>
            <div className="flex items-center gap-4">
              <button className="btn-glow bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg shadow-blue-600/20 flex items-center gap-2 min-h-[48px] outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50">
                Register Team{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-lg font-semibold transition-colors font-mono text-sm hover:border-white/30 min-h-[48px] outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50">
                Read_Docs
              </button>
            </div>
            <p className="mt-6 text-[10px] text-slate-400 border-t border-slate-700/50 pt-4 inline-block">
              Certain assessments may require identity verification, camera
              access, or screen monitoring. See Terms for details.
            </p>
          </div>
          <div className="relative w-full max-w-xs aspect-square bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center p-8 animate-float hover:border-blue-400/30 transition-colors">
            <div className="text-center">
              <span className="block text-7xl font-bold text-white tracking-tighter">
                24
              </span>
              <span className="block text-sm font-bold tracking-[0.3em] uppercase text-blue-300 mt-2">
                April
              </span>
            </div>
            <div className="absolute bottom-4 right-4 text-white/20">
              <span className="material-symbols-outlined">turn_right</span>
            </div>
            <div className="absolute top-4 left-4 text-white/20">
              <span className="material-symbols-outlined">crop_free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
