import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 bg-slate-100 dark:bg-black border-t border-slate-200 dark:border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="w-8 h-8 bg-slate-200 dark:bg-white/10 mb-6 rounded animate-pulse"></div>
            <div className="font-mono text-xs text-slate-500 dark:text-slate-500 space-y-2">
              <p className="typing-effect">
                &gt; Initializing future engineers.
              </p>
              <p className="typing-effect delay-1000 opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards]">
                &gt; Loading curriculum...
              </p>
              <p className="typing-effect delay-2000 text-green-500 opacity-0 animate-[fadeIn_0.5s_ease-out_2s_forwards]">
                &gt; Ready.
              </p>
            </div>
            <div className="flex gap-4 mt-6 text-slate-400 dark:text-slate-600">
              <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary transition-colors hover:scale-125">
                public
              </span>
              <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary transition-colors hover:scale-125">
                code
              </span>
              <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary transition-colors hover:scale-125">
                terminal
              </span>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-6">
              Platform
            </h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link
                  className="hover:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-sm"
                  href="#"
                >
                  Curriculum
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-sm"
                  href="#"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-sm"
                  href="#"
                >
                  Mentorship
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-6">
              Ecosystem
            </h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link
                  className="hover:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-sm"
                  href="/hackathon"
                >
                  Hackathons
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-sm"
                  href="#"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-sm"
                  href="#"
                >
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-6">
              Legal
            </h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link
                  className="hover:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-sm"
                  href="#"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-sm"
                  href="#"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 dark:text-slate-600">
          <p>© 2026 Intellibus AI Academy.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>System Status: Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
