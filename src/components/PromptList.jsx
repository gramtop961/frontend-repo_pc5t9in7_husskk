import { useState } from "react";
import { Copy, Check } from "lucide-react";

function useClipboard() {
  const [copied, setCopied] = useState(false);
  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      // fallback
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  };
  return { copied, copy };
}

const PROMPTS = {
  survival: [
    {
      title: "The Sky‑Fallen Fortress",
      body:
        "Start a new world and build a self‑sustaining base high in the sky. Hoist animals, crops, and infrastructure into a floating stronghold. Only touch the ground for resources that truly can't be generated aloft (special structures, monuments).",
      bullets: [
        "Must farm every renewable resource in the sky",
        "Design safe mob‑free sky bridges and docks",
        "Create elegant item elevators and water lifts",
      ],
    },
  ],
  roleplay: [
    {
      title: "The Sunken World",
      body:
        "Sea levels have swallowed the land. Only mountaintops and plateaus break the surface. Find the last three surviving villages and connect them with a colossal underwater tunnel network while scavenging drowned ruins for technology and lore.",
      bullets: [
        "Establish bubble‑column transit and glass domes",
        "Curate a relic museum from ocean ruins",
        "Bridge villages into a single aquatic nation",
      ],
    },
  ],
  redstone: [
    {
      title: "The Automated Trading Post",
      body:
        "Engineer a hall that takes raw inputs (logs, cobble), auto‑processes them, routes to the correct villager, and dispenses the final goods (emerald blocks, enchanted books) with zero manual trades.",
      bullets: [
        "Item sorting + bulk smelting + crafting stations",
        "Auto zombify/cure for best prices",
        "Fail‑safe jam detectors and maintenance bays",
      ],
    },
  ],
  minigame: [
    {
      title: "Sky Joust: Elytra Arena",
      body:
        "Two teams duel mid‑air across floating rings. Score by flying through enemy gates or tagging opponents with snowballs/arrow hits while navigating boosters and wind streams.",
      bullets: [
        "Redstone scoreboards and timed power‑ups",
        "Ring checkpoints with particle beacons",
        "Spectator platforms and instant respawn pads",
      ],
    },
  ],
};

export default function PromptList({ category }) {
  const { copied, copy } = useClipboard();
  const items = PROMPTS[category] || [];

  return (
    <div className="mx-auto max-w-5xl px-6 mt-8 grid gap-6 sm:grid-cols-2">
      {items.map((p, idx) => (
        <article
          key={idx}
          className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:bg-slate-900 dark:border-slate-700"
        >
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            {p.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {p.body}
          </p>
          {p.bullets?.length ? (
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600 dark:text-slate-300 list-disc pl-5">
              {p.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          ) : null}

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Copy and paste into your world notes or server rules
            </span>
            <button
              onClick={() =>
                copy(
                  `${p.title}\n\n${p.body}\n\nGoals:\n- ${p.bullets.join("\n- ")}`
                )
              }
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 active:scale-[0.99] dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-600" /> Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" /> Copy prompt
                </>
              )}
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
