import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  rounded?: string;
};

export function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  priority,
  rounded = "rounded-3xl",
}: Props) {
  return (
    <motion.div
      className={cn("relative overflow-hidden bg-muted", rounded, className)}
      initial={{ clipPath: "inset(12% 12% 12% 12% round 28px)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 28px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        initial={{ scale: 1.25 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </motion.div>
  );
}
