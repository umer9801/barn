import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { useState } from "react";
import type { MenuItem } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const tones: Record<MenuItem["tone"], string> = {
  cream: "bg-warm text-charcoal",
  tomato: "bg-tomato text-cream",
  sunny: "bg-sunny text-cocoa",
  cocoa: "bg-cocoa text-cream",
  fresh: "bg-fresh text-cream",
};

const spans: Record<MenuItem["size"], string> = {
  full: "sm:col-span-2 lg:col-span-3",
  wide: "sm:col-span-2",
  tall: "sm:row-span-2",
  square: "",
};

export function MenuItemCard({ item }: { item: MenuItem }) {
  const [fav, setFav] = useState(false);
  const horizontal = item.size === "full" || item.size === "wide";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className={cn(
        "grain group relative overflow-hidden rounded-[2rem]",
        tones[item.tone],
        spans[item.size],
      )}
    >
      <div className={cn("relative z-10 flex h-full flex-col", horizontal && "sm:flex-row")}>
        <div
          className={cn(
            "relative overflow-hidden",
            horizontal ? "sm:w-1/2" : "",
            item.size === "tall" ? "aspect-[4/5]" : "aspect-[4/3]",
            horizontal && "sm:aspect-auto sm:min-h-[22rem]",
          )}
        >
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:rotate-2"
          />
        </div>

        <div className={cn("flex flex-1 flex-col justify-between p-7", horizontal && "sm:p-10")}>
          <div>
            <span className="font-display text-[10px] tracking-[0.3em] opacity-70">
              {item.category}
            </span>
            <h3
              className={cn(
                "hero-type mt-4 leading-[0.9]",
                horizontal ? "text-[9vw] sm:text-[3.4vw] lg:text-[2.6rem]" : "text-[8vw] sm:text-[2rem]",
              )}
            >
              {item.name}
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-80">{item.desc}</p>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <motion.span
              whileHover={{ scale: 1.08 }}
              className="font-display text-3xl font-bold tracking-tight"
            >
              {item.price}
            </motion.span>
            <button
              onClick={() => setFav((f) => !f)}
              className={cn(
                "flex items-center gap-2 rounded-full border-2 px-4 py-2 font-display text-[10px] font-bold tracking-[0.2em] transition-colors",
                fav ? "border-current bg-current/10" : "border-current/40 hover:border-current",
              )}
            >
              <Heart className={cn("size-4", fav && "fill-current")} />
              {fav ? "FAVOURITED" : "ADD TO FAVOURITES"}
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
