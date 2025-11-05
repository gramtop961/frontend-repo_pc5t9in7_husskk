import { Castle, BookOpen, Cog, Gamepad2 } from "lucide-react";

const tabs = [
  { key: "survival", label: "Survival / Building", icon: Castle },
  { key: "roleplay", label: "Roleplay / Story", icon: BookOpen },
  { key: "redstone", label: "Redstone / Technical", icon: Cog },
  { key: "minigame", label: "Minigame / Adventure", icon: Gamepad2 },
];

export default function CategoryTabs({ value, onChange }) {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {tabs.map(({ key, label, icon: Icon }) => {
          const active = value === key;
          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              className={`group inline-flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/40 ${
                active
                  ? "border-emerald-600 bg-emerald-600 text-white shadow"
                  : "border-slate-200 bg-white text-slate-700 hover:border-emerald-400 hover:text-emerald-700 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200"
              }`}
            >
              <Icon className={`h-4 w-4 ${active ? "scale-110" : "opacity-80"}`} />
              <span className="truncate">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
