"use client";

import * as React from "react";
import { useTheme } from "next-themes";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
  id?: string;
}

export function ThemeToggle({ className, showLabel, id }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    // If system, we need to know what system is to toggle to the opposite?
    // Or just simple cycle: light -> dark -> light?
    // The prototype logic:
    // if (html.classList.contains('dark')) { remove dark, set localstorage light } else { add dark, set localstorage dark }
    // next-themes handles this.
    // If current is system, resolve system.
    // But simplest for toggle button is:
    // if resolvedTheme === 'dark' -> setTheme('light') else setTheme('dark')

    // next-themes provides resolvedTheme
    // But we need to access it.
    // Let's assume we just want to flip.

    // Actually, explicit toggle implementation:
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    // Better way with next-themes:
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  // To avoid hydration mismatch, render a placeholder or null
  // But for a toggle, we usually want to show the correct icon.
  // We can render a skeleton or just `null` until mounted.
  if (!mounted) {
    return (
      <button id={id} aria-label="Toggle Theme" className={className} disabled>
        <span className="material-symbols-outlined text-xl">dark_mode</span>
      </button>
    );
  }

  return (
    <button
      id={id}
      aria-label="Toggle Theme"
      className={className}
      onClick={toggleTheme}
    >
      {showLabel && (
        <span className="text-xs font-semibold mr-2">Toggle Theme</span>
      )}
      {theme === "dark" ? (
        <span className="material-symbols-outlined text-xl">light_mode</span>
      ) : (
        <span className="material-symbols-outlined text-xl">dark_mode</span>
      )}
    </button>
  );
}
