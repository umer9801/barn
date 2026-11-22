import { motion } from "motion/react";
import { X, Phone } from "lucide-react";
import { useState } from "react";

export function DirectOrderDiscountBanner() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-fresh relative overflow-hidden border-b-4 border-fresh/50"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-4 sm:px-8 sm:py-5 flex items-center justify-between gap-4">
        {/* Left content */}
        <div className="flex-1 flex items-center gap-3 sm:gap-4">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
            className="text-3xl sm:text-4xl font-black text-cream whitespace-nowrap"
          >
            25% OFF
          </motion.div>
          
          <div className="hidden sm:block h-10 w-0.5 bg-cream/30" />
          
          <div className="hidden sm:block flex-1">
            <p className="text-sm font-bold text-cream/90">
              Order Directly & Save!
            </p>
            <p className="text-xs text-cream/70">
              Call now for instant discount
            </p>
          </div>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+16137161606"
            className="grain hidden sm:flex items-center gap-2 rounded-full bg-cream px-6 py-3 font-display font-bold text-sm tracking-[0.1em] text-fresh hover:scale-105 transition-transform duration-300 shadow-lg whitespace-nowrap"
          >
            <Phone className="size-4" />
            CALL NOW
          </a>

          {/* Mobile button */}
          <a
            href="tel:+16137161606"
            className="sm:hidden rounded-full bg-cream p-3 hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <Phone className="size-5 text-fresh" />
          </a>

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-cream/20 rounded-full transition-colors"
          >
            <X className="size-5 text-cream" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
