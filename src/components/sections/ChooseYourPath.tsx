import React from "react";
import Link from "next/link";

export function ChooseYourPath() {
  return (
    <section className="relative z-10 py-20 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Choose Your Path
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Select your role to access the appropriate portal.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-1000">
          {/* Student */}
          <div className="pop-card group relative bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 rounded-2xl p-6 shadow-sm overflow-hidden outline-none focus-within:ring-2 focus-within:ring-blue-500/50">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <span className="material-symbols-outlined">school</span>
            </div>
            <div className="absolute top-6 right-6 text-slate-200 dark:text-slate-700 transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-12">
              <span className="material-symbols-outlined text-6xl opacity-20">
                person
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Student
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
              Rigorous upskilling for elite engineers. Access advanced
              curriculum, hands-on labs, and certification exams.
            </p>
            <div className="mb-8 transform translate-y-0 group-hover:translate-y-1 transition-transform">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-mono">
                &lt;&gt; Requires Entrance Exam
              </span>
            </div>
            <Link
              href="/auth/student"
              className="flex items-center justify-between w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-white/5 text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300 min-h-[48px] outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
            >
              Join as Student
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Instructor */}
          <div className="pop-card group relative bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 rounded-2xl p-6 shadow-sm overflow-hidden outline-none focus-within:ring-2 focus-within:ring-blue-500/50">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
              <span className="material-symbols-outlined">
                cast_for_education
              </span>
            </div>
            <div className="absolute top-6 right-6 text-slate-200 dark:text-slate-700 transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-12">
              <span className="material-symbols-outlined text-6xl opacity-20">
                rss_feed
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Instructor
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
              Lead the next generation of AI architects. Manage cohorts, grade
              assessments, and design curriculum.
            </p>
            <div className="mb-8 transform translate-y-0 group-hover:translate-y-1 transition-transform">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 text-xs font-mono">
                <span className="material-symbols-outlined text-[10px]">
                  verified
                </span>{" "}
                Verified Experts Only
              </span>
            </div>
            <Link
              href="/auth/instructor"
              className="flex items-center justify-between w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-white/5 text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-500 transition-all duration-300 min-h-[48px] outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
            >
              Instructor Portal
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Admin */}
          <div className="pop-card group relative bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 rounded-2xl p-6 shadow-sm overflow-hidden outline-none focus-within:ring-2 focus-within:ring-blue-500/50">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700/50 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined">security</span>
            </div>
            <div className="absolute top-6 right-6 text-slate-200 dark:text-slate-700 transition-transform duration-500 group-hover:-translate-y-2">
              <span className="material-symbols-outlined text-6xl opacity-20">
                shield
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Admin
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
              Governance and oversight portal. Manage user access, audit logs,
              and platform compliance settings.
            </p>
            <div className="mb-8 transform translate-y-0 group-hover:translate-y-1 transition-transform">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-100 dark:bg-slate-700/40 text-slate-600 dark:text-slate-400 text-xs font-mono">
                <span className="material-symbols-outlined text-[10px]">
                  lock
                </span>{" "}
                Internal Access
              </span>
            </div>
            <Link
              href="/auth/admin"
              className="flex items-center justify-between w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-white/5 text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:bg-slate-800 group-hover:text-white group-hover:border-slate-700 transition-all duration-300 min-h-[48px] outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
            >
              Admin Login
              <span className="material-symbols-outlined text-sm">login</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
