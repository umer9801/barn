import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  index: string;
  title: string;
  image: string;
  className?: string;
};

export function FoodCategoryCard({ index, title, image, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10 }}
      className={cn("group relative overflow-hidden rounded-3xl bg-charcoal", className)}
    >
      <Link to="/menu" className="block h-full w-full">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-85 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
        <div className="relative z-10 flex h-full flex-col justify-between p-6 text-cream">
          <span className="font-display text-xs tracking-[0.3em] opacity-80">{index}</span>
          <div className="flex items-end justify-between gap-4">
            <h3 className="hero-type max-w-[75%] text-[9vw] leading-[0.85] sm:text-[4vw] lg:text-[2.6vw] transition-transform duration-500 group-hover:-translate-y-1">
              {title}
            </h3>
            <span className="rounded-full border-2 border-cream/70 p-3 transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight className="size-5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
