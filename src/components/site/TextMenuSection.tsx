import { motion } from "motion/react";
import type { MenuItem, MenuCategory } from "@/lib/site-data";

interface TextMenuSectionProps {
  category: MenuCategory;
  items: MenuItem[];
}

export function TextMenuSection({ category, items }: TextMenuSectionProps) {
  if (items.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="hero-type mb-6 border-b-4 border-tomato pb-3 text-5xl text-tomato"
      >
        {category}
      </motion.h2>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ x: 8, transition: { duration: 0.2 } }}
            className="group border-b border-charcoal/10 pb-4 transition-all hover:border-tomato/30"
          >
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold text-charcoal transition-colors group-hover:text-tomato">
                {item.name}
              </h3>
              {item.desc && (
                <p className="mt-1 text-base leading-relaxed text-charcoal/70">
                  {item.desc}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
