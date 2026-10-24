import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  lines: string[];
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, lines, className, align = "left" }: Props) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow ? (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-5 font-display text-xs font-bold tracking-[0.35em] uppercase opacity-60"
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <h2 className="hero-type text-[13vw] leading-[0.85] sm:text-[9vw] lg:text-[6.5vw]">
        {lines.map((line, i) => (
          <span key={line} className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h2>
    </div>
  );
}
