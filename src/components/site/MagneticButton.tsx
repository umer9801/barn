import { motion, useMotionValue, useSpring } from "motion/react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "cream" | "sunny";
  className?: string;
};

const styles = {
  solid: "bg-tomato text-cream hover:bg-barn",
  outline: "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream",
  cream: "bg-cream text-charcoal hover:bg-sunny",
  sunny: "bg-sunny text-cocoa hover:bg-golden",
};

export function MagneticButton({
  children,
  to,
  href,
  onClick,
  variant = "solid",
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.3);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <span className="font-display text-sm font-bold tracking-[0.18em] uppercase sm:text-base">
      {children}
    </span>
  );

  const classes = cn(
    "inline-flex items-center gap-3 rounded-full px-7 py-4 transition-colors duration-300",
    styles[variant],
    className,
  );

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="inline-block"
      whileTap={{ scale: 0.96 }}
    >
      {to ? (
        <Link to={to} className={classes} onClick={onClick}>
          {inner}
        </Link>
      ) : (
        <a href={href ?? "#"} className={classes} onClick={onClick}>
          {inner}
        </a>
      )}
    </motion.div>
  );
}
