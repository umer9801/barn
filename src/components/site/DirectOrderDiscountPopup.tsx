import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function DirectOrderDiscountPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds on first load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-md rounded-3xl bg-cream p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 hover:bg-tomato/10 transition-colors"
            >
              <X className="size-5 text-charcoal" />
            </button>

            {/* Content */}
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
                className="mb-4 inline-block text-5xl font-bold text-tomato"
              >
                25% OFF
              </motion.div>

              <h2 className="hero-type mb-3 text-3xl leading-tight text-charcoal">
                Order
                <br />
                <span className="text-tomato">Directly</span>
              </h2>

              <p className="mb-6 text-sm text-charcoal/70">
                Get 25% off on pizza when you order directly with us!
              </p>

              <p className="mb-6 text-xs text-charcoal/60">
                Limited time offer — Order now and save big!
              </p>

              {/* Contact info */}
              <div className="mb-6 rounded-2xl bg-tomato/10 p-4">
                <p className="text-sm font-bold text-tomato mb-1">📞 Order Now</p>
                <a
                  href="tel:+16137161606"
                  className="text-lg font-bold text-charcoal hover:text-tomato transition-colors"
                >
                  +1 613-716-1606
                </a>
              </div>

              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-full rounded-full bg-charcoal px-6 py-3 font-display font-bold tracking-[0.1em] text-cream transition-all duration-300 hover:bg-tomato"
              >
                MAYBE LATER
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
