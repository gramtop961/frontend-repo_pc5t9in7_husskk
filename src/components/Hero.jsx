import { Gamepad2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="mx-auto max-w-5xl px-6 pt-14 pb-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
          <Gamepad2 className="h-6 w-6" />
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100">
          Minecraft Prompt Studio
        </h1>
        <p className="mt-3 md:mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Pick a playstyle and get a rich, ready-to-use scenario for your next world. 
          Survival challenges, epic roleplay arcs, redstone projects, and custom minigames — all in one place.
        </p>
      </div>
    </section>
  );
}
