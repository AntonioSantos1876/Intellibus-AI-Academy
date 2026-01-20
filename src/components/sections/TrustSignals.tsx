import React from "react";

export function TrustSignals() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 border-t border-slate-200 dark:border-white/5 pt-12 w-full max-w-4xl">
      <div className="flex flex-col items-center gap-2 group cursor-default">
        <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 group-hover:text-blue-400 transition-all duration-300">
          verified_user
        </span>
        <h3 className="font-bold text-sm uppercase tracking-wider text-slate-900 dark:text-slate-200">
          Proctored Exams
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-500">
          Strictly monitored skill verification
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 group cursor-default">
        <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 group-hover:text-blue-400 transition-all duration-300">
          school
        </span>
        <h3 className="font-bold text-sm uppercase tracking-wider text-slate-900 dark:text-slate-200">
          Instructor-Led
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-500">
          Direct mentorship from architects
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 group cursor-default">
        <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 group-hover:text-blue-400 transition-all duration-300">
          admin_panel_settings
        </span>
        <h3 className="font-bold text-sm uppercase tracking-wider text-slate-900 dark:text-slate-200">
          Governed Access
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-500">
          Enterprise-grade compliance
        </p>
      </div>
    </div>
  );
}
