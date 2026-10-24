import { motion } from "motion/react";
import { CATEGORIES } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type Props = {
  active: string;
  onChange: (c: string) => void;
};

export function MenuFilter({ active, onChange }: Props) {
  const all = ["ALL", ...CATEGORIES];
  return (
    <div className="sticky top-20 z-30 -mx-5 border-y-2 border-charcoal/10 bg-cream/85 px-5 py-3 backdrop-blur-xl sm:-mx-8 sm:px-8">
      <div className="no-scrollbar mx-auto flex max-w-7xl gap-2 overflow-x-auto">
        {all.map((c) => (
          <button
            key={c}
            onClick={() => onChange(c)}
            className={cn(
              "relative shrink-0 rounded-full px-5 py-3 font-display text-xs font-bold tracking-[0.2em] transition-colors",
              active === c ? "text-cream" : "text-charcoal hover:text-tomato",
            )}
          >
            {active === c ? (
              <motion.span
                layoutId="menu-pill"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                className="absolute inset-0 rounded-full bg-tomato"
              />
            ) : null}
            <span className="relative z-10">{c}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
