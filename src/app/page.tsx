import { Hero } from "@/components/sections/Hero";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { ChooseYourPath } from "@/components/sections/ChooseYourPath";
import { Tracks } from "@/components/sections/Tracks";
import { ExecutionPipeline } from "@/components/sections/ExecutionPipeline";
import { HackathonBanner } from "@/components/sections/HackathonBanner";
import { ContactCta } from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <>
      <main className="relative z-10 pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <Hero />
        <TrustSignals />
      </main>

      <section className="relative z-10 py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
            Intellibus AI Academy is a cohort-based, instructor-governed
            platform dedicated to mastering real-world systems. We move beyond
            tutorials to focus on high-fidelity engineering excellence and
            architectural rigor.
          </p>
        </div>
      </section>

      <ChooseYourPath />
      <Tracks />
      <ExecutionPipeline />
      <HackathonBanner />
      <ContactCta />
    </>
  );
}
