import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  n: string;
  name: string;
  price: string;
  blurb: string;
  image: string;
  active: boolean;
  onHover: () => void;
};

export function SignatureFoodCard({ n, name, price, blurb, image, active, onHover }: Props) {
  return (
    <motion.div
      onMouseEnter={onHover}
      onFocus={onHover}
      tabIndex={0}
      animate={{ flexGrow: active ? 3 : 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative min-w-[72vw] shrink-0 overflow-hidden rounded-[2rem] bg-charcoal sm:min-w-0 sm:shrink lg:min-w-[8rem]",
        "h-[62vh] outline-none",
        active ? "-ml-0 sm:-ml-4" : "sm:-ml-8",
      )}
      style={{ zIndex: active ? 20 : 10 }}
    >
      <img
        src={image}
        alt={name}
        loading="lazy"
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-all duration-[900ms]",
          active ? "scale-100 opacity-95" : "scale-110 opacity-50 grayscale-[35%]",
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
      <div className="relative z-10 flex h-full flex-col justify-between p-6 text-cream">
        <span className="font-display text-sm tracking-[0.3em]">{n}</span>
        <div>
          <h3 className="hero-type text-[8vw] leading-[0.85] sm:text-[3.4vw] lg:text-[2.4vw]">
            {name}
          </h3>
          <motion.div
            animate={{ opacity: active ? 1 : 0, y: active ? 0 : 14 }}
            transition={{ duration: 0.4 }}
            className="mt-3 flex items-center gap-4"
          >
            <span className="rounded-full bg-sunny px-4 py-2 font-display text-sm font-bold text-cocoa">
              {price}
            </span>
            <span className="text-sm opacity-80">{blurb}</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
