import React from "react";
import Link from "next/link";

interface TrackCardProps {
  title: string;
  subtitle: string;
  icon: string;
  highlights: string[];
}

function TrackCard({ title, subtitle, icon, highlights }: TrackCardProps) {
  return (
    <div className="pop-card group p-5 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 hover:border-blue-500/50 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h4>
          <p className="text-xs font-mono text-slate-500 mt-1 dark:text-slate-500 group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors">
            {subtitle}
          </p>
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
            <div className="overflow-hidden">
              <div className="pt-4 mt-2 border-t border-dashed border-slate-200 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1">
                  Highlights
                </p>
                <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-1">
                      <span className="w-1 h-1 bg-blue-500 rounded-full"></span>{" "}
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Tracks() {
  const tracks = [
    {
      title: "Frontend Engineering",
      subtitle: "React • Next.js • WebGL",
      icon: "code",
      highlights: ["Advanced State Mgmt", "Perf. Optimization"],
    },
    {
      title: "Backend Engineering",
      subtitle: "Go • Rust • Microservices",
      icon: "dns",
      highlights: ["Distributed Systems", "Event-Driven Arch"],
    },
    {
      title: "Full-Stack Engineering",
      subtitle: "Node.js • GraphQL • Docker",
      icon: "layers",
      highlights: ["E2E Testing", "System Design"],
    },
    {
      title: "Data Engineering",
      subtitle: "Spark • Kafka • Snowflake",
      icon: "analytics",
      highlights: ["Real-time Processing", "Data Lakehouse"],
    },
    {
      title: "UI/UX Design",
      subtitle: "Figma • Systems • Research",
      icon: "palette",
      highlights: ["Interactive Prototypes", "User Testing"],
    },
    {
      title: "Cloud Architecture",
      subtitle: "AWS • K8s • Terraform",
      icon: "cloud",
      highlights: ["Multi-Cloud Strategy", "IaC Patterns"],
    },
  ];

  return (
    <section className="relative z-10 py-20 bg-slate-100 dark:bg-[#050a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Software Engineering Tracks
            </h2>
            <p className="font-mono text-sm text-slate-500 dark:text-slate-400">
              /academy/software_tracks
            </p>
          </div>
          <Link
            href="#"
            className="hidden sm:flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline group outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded"
          >
            View Documentation{" "}
            <span className="material-symbols-outlined text-sm ml-1 group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 perspective-1000">
          {tracks.map((track, index) => (
            <TrackCard key={index} {...track} />
          ))}
        </div>
      </div>
    </section>
  );
}
