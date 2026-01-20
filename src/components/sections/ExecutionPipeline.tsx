import React from "react";

export function ExecutionPipeline() {
  return (
    <section className="relative z-10 py-24 bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-16">
          Execution Pipeline
        </h2>
        <div className="relative flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[20px] left-0 w-full h-[2px] bg-slate-200 dark:bg-slate-800 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent w-1/2 animate-flow"></div>
          </div>

          {/* Steps */}
          <div className="relative z-10 flex flex-col items-center mb-8 md:mb-0 group">
            <div className="w-12 h-12 bg-white dark:bg-[#020617] border border-blue-200 dark:border-blue-900/50 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 font-mono text-sm mb-4 shadow-lg shadow-blue-500/10 group-hover:scale-110 group-hover:border-blue-500 transition-all duration-300">
              01
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-blue-500 transition-colors">
              Apply
            </h3>
            <p className="font-mono text-xs text-slate-500 mt-1">
              submit_application()
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center mb-8 md:mb-0 group">
            <div className="w-12 h-12 bg-slate-100 dark:bg-[#111625] border border-slate-300 dark:border-slate-700 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 font-mono text-sm mb-4 shadow-sm group-hover:bg-white dark:group-hover:bg-[#020617] group-hover:border-blue-500 group-hover:text-blue-500 transition-all duration-300 delay-100">
              02
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-blue-500 transition-colors delay-100">
              Challenge
            </h3>
            <p className="font-mono text-xs text-slate-500 mt-1">
              pass_tech_screen()
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center mb-8 md:mb-0 group">
            <div className="w-12 h-12 bg-slate-100 dark:bg-[#111625] border border-slate-300 dark:border-slate-700 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 font-mono text-sm mb-4 shadow-sm group-hover:bg-white dark:group-hover:bg-[#020617] group-hover:border-blue-500 group-hover:text-blue-500 transition-all duration-300 delay-200">
              03
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-blue-500 transition-colors delay-200">
              Build
            </h3>
            <p className="font-mono text-xs text-slate-500 mt-1">
              execute_curriculum()
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center group">
            <div className="w-12 h-12 bg-slate-100 dark:bg-[#111625] border border-slate-300 dark:border-slate-700 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 font-mono text-sm mb-4 shadow-sm group-hover:bg-white dark:group-hover:bg-[#020617] group-hover:border-blue-500 group-hover:text-blue-500 transition-all duration-300 delay-300">
              04
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-blue-500 transition-colors delay-300">
              Deploy
            </h3>
            <p className="font-mono text-xs text-slate-500 mt-1">
              career_launch()
            </p>
          </div>
        </div>
        <p className="text-xs text-slate-400 dark:text-slate-600 italic mt-12">
          * Progression is performance-based and instructor-reviewed
        </p>
      </div>
    </section>
  );
}
