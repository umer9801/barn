import { motion } from "motion/react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  variant?: "cream" | "tomato" | "sunny" | "fresh";
  delay?: number;
}

const variants = {
  cream: "bg-warm text-charcoal border-charcoal/10",
  tomato: "bg-tomato text-cream border-cream/10",
  sunny: "bg-sunny text-cocoa border-cocoa/10",
  fresh: "bg-fresh text-cream border-cream/10",
};

export function ContentCard({ 
  icon, 
  title, 
  description, 
  variant = "cream",
  delay = 0 
}: ContentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={cn(
        "grain group relative overflow-hidden rounded-3xl border-2 p-8 transition-shadow duration-300 hover:shadow-xl",
        variants[variant]
      )}
    >
      {icon && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="mb-6"
        >
          {icon}
        </motion.div>
      )}
      
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.15 }}
        className="hero-type mb-4 text-3xl leading-tight"
      >
        {title}
      </motion.h3>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.25 }}
        className="leading-relaxed opacity-90"
      >
        {description}
      </motion.p>

      <div className="absolute -right-8 -top-8 size-32 rounded-full bg-current opacity-[0.03] transition-transform duration-500 group-hover:scale-150" />
    </motion.div>
  );
}
