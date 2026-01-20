"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { MobileDrawer } from "./MobileDrawer";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="fixed top-6 left-0 w-full flex justify-center z-50 px-4">
        <nav className="w-full max-w-7xl glass-panel bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 rounded-full shadow-lg dark:shadow-blue-900/10 px-6 py-3 flex items-center justify-between transition-all duration-300 backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-md flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">
              <span className="material-symbols-outlined text-lg">hub</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">
              Intellibus
              <span className="text-blue-600 dark:text-blue-400">Academy</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
            {["About", "Hackathon", "Academy", "Contact"].map((item) => {
              const href = item === "About" ? "/" : `/${item.toLowerCase()}`;
              const isActive = pathname === href;
              return (
                <Link
                  key={item}
                  href={href}
                  className={cn(
                    "nav-link px-4 py-2 rounded-full transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50",
                    isActive
                      ? "bg-blue-500/10 dark:bg-white/10 text-blue-600 dark:text-white shadow-inner font-semibold"
                      : "hover:text-primary dark:hover:text-white",
                  )}
                >
                  {item}
                </Link>
              );
            })}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle
              id="theme-toggle"
              className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
            />
            <Link
              href="#"
              className="btn-glow relative overflow-hidden bg-primary hover:bg-blue-600 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-0.5 outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
            >
              Apply Now
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              aria-label="Open menu"
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setIsDrawerOpen(true)}
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
          </div>
        </nav>
      </div>
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
