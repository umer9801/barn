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
          active ? "scale-100 opacity-100" : "scale-105 opacity-80",
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
    </motion.div>
  );
}
