"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Focus trap logic
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
        if (e.key === "Tab") {
          const focusableElements = drawerRef.current?.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
          );
          if (focusableElements && focusableElements.length > 0) {
            const first = focusableElements[0] as HTMLElement;
            const last = focusableElements[
              focusableElements.length - 1
            ] as HTMLElement;

            if (e.shiftKey) {
              if (document.activeElement === first) {
                e.preventDefault();
                last.focus();
              }
            } else {
              if (document.activeElement === last) {
                e.preventDefault();
                first.focus();
              }
            }
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      // Focus close button on open
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 100);

      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  return (
    <div
      aria-hidden={!isOpen}
      className={cn(
        "fixed inset-0 z-[60] pointer-events-none transition-visibility duration-300",
        // We use pointer-events to handle interaction, but opacity needs to handle valid visibility
        isOpen ? "pointer-events-auto" : "pointer-events-none",
      )}
      id="mobile-drawer"
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-in-out",
          isOpen ? "opacity-100" : "opacity-0",
        )}
        id="drawer-backdrop"
        onClick={onClose}
      />

      {/* Content */}
      <div
        ref={drawerRef}
        id="mobile-drawer-content"
        className={cn(
          "absolute right-0 top-0 h-full w-[85%] max-w-sm glass-panel bg-white/90 dark:bg-slate-900/90 border-l border-slate-200 dark:border-white/10 shadow-2xl p-6 flex flex-col pointer-events-auto overflow-y-auto transition-transform duration-300 cubic-bezier(0.4, 0, 0.2, 1)",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-md flex items-center justify-center text-white font-bold">
              <span className="material-symbols-outlined text-lg">hub</span>
            </div>
            <span className="text-lg font-semibold">Intellibus</span>
          </div>
          <button
            ref={closeBtnRef}
            aria-label="Close menu"
            className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 min-w-[44px] min-h-[44px] outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 flex items-center justify-center"
            onClick={onClose}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          {["About", "Hackathon", "Academy", "Contact"].map((item) => {
            const href = item === "About" ? "/" : `/${item.toLowerCase()}`;
            const isActive = pathname === href;
            return (
              <Link
                key={item}
                href={href}
                className={cn(
                  "px-4 py-3 text-lg font-medium rounded-xl transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50",
                  isActive
                    ? "bg-blue-500/10 dark:bg-white/10 text-blue-600 dark:text-white font-semibold"
                    : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800",
                )}
              >
                {item}
              </Link>
            );
          })}
        </div>

        <div className="mt-auto flex flex-col gap-4 border-t border-slate-200 dark:border-white/10 pt-6">
          <div className="flex items-center justify-between px-2">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Appearance
            </span>
            <ThemeToggle
              id="mobile-theme-toggle"
              showLabel={true}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center gap-2 px-4 hover:ring-2 ring-blue-500/50 transition-all min-w-[44px] min-h-[44px] outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
            />
          </div>
          <Link
            href="#"
            className="btn-glow w-full bg-primary hover:bg-blue-600 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 px-6 py-3.5 rounded-xl text-center font-semibold transition-all shadow-lg min-h-[48px] flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
