import React from "react";
import Link from "next/link";

export function ContactCta() {
  return (
    <section className="relative z-10 py-16 px-4">
      <div className="max-w-4xl mx-auto glass-panel bg-white/50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 rounded-2xl p-8 md:p-12 text-center backdrop-blur-md shadow-lg">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Contact Intellibus AI Academy
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-1 max-w-xl mx-auto">
          For invited candidates, institutional partners, and verified inquiries
          only.
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-500 mb-8 max-w-xl mx-auto italic">
          We respond to verified inquiries within 2–5 business days.
        </p>
        <Link
          href="/contact"
          className="btn-glow inline-flex items-center justify-center px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold transition-all hover:scale-105 min-h-[48px] outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
