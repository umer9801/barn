import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  icon: LucideIcon;
  label: string;
  lines: string[];
  href?: string;
  tone?: "cream" | "tomato" | "sunny";
  className?: string;
};

const tones = {
  cream: "bg-warm text-charcoal",
  tomato: "bg-tomato text-cream",
  sunny: "bg-sunny text-cocoa",
};

export function ContactCard({ icon: Icon, label, lines, href, tone = "cream", className }: Props) {
  const Wrapper = href ? "a" : "div";
  const linkProps = href ? { href, ...(href.startsWith('http') ? { target: "_blank", rel: "noreferrer" } : {}) } : {};
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className={cn("grain rounded-[2rem] p-8", tones[tone], className)}
    >
      <Wrapper {...linkProps} className="relative z-10 block">
        <div className="flex items-center gap-3">
          <Icon className="size-5" />
          <span className="font-display text-[11px] font-bold tracking-[0.3em]">{label}</span>
        </div>
        <p className="hero-type mt-8 text-[7vw] leading-[0.95] sm:text-[3vw] lg:text-[2rem]">
          {lines.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </p>
      </Wrapper>
    </motion.div>
  );
}
