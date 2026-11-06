import { motion, AnimatePresence } from "motion/react";
import { X, Pizza, ShoppingBag, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/site-data";

export function PizzaDiscountPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup first time after 3 seconds
    const initialTimer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    // Then show popup every 40 seconds
    const intervalTimer = setInterval(() => {
      setIsOpen(true);
    }, 40000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[100] bg-charcoal/60 backdrop-blur-sm"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed left-1/2 top-1/2 z-[101] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-cream shadow-2xl sm:w-full"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-charcoal/10 p-2 transition-colors hover:bg-charcoal/20"
              aria-label="Close popup"
            >
              <X className="size-5" />
            </button>

            {/* Header with pizza icon */}
            <div className="grain relative bg-tomato px-6 py-8 text-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-cream shadow-lg"
              >
                <Pizza className="size-10 text-tomato" strokeWidth={2.5} />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="hero-type text-5xl text-cream"
              >
                40% OFF
                <br />
                PIZZA!
              </motion.h2>
            </div>

            {/* Content */}
            <div className="px-6 py-8">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-2 text-center text-lg font-display font-bold text-charcoal"
              >
                Special Offer Just for You!
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-6 text-center leading-relaxed text-charcoal/80"
              >
                Get <strong className="text-fresh">40% discount</strong> on all pizza orders 
                when you order through Valley Eats today!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-3"
              >
                <a
                  href={CONTACT.valleyEatsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClose}
                  className="grain group flex w-full items-center justify-center gap-3 rounded-full bg-fresh px-8 py-4 font-display text-sm font-bold tracking-[0.2em] text-cream shadow-lg transition-all duration-300 hover:scale-105 hover:bg-fresh/80"
                >
                  <ShoppingBag className="size-5" />
                  ORDER ON VALLEY EATS (40% OFF)
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href={CONTACT.doordashLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClose}
                  className="grain group flex w-full items-center justify-center gap-3 rounded-full border-2 border-fresh px-8 py-4 font-display text-sm font-bold tracking-[0.2em] text-fresh shadow-lg transition-all duration-300 hover:scale-105 hover:bg-fresh hover:text-cream"
                >
                  <ShoppingBag className="size-5" />
                  ORDER ON DOORDASH
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </a>

                <button
                  onClick={handleClose}
                  className="w-full rounded-full border-2 border-charcoal/20 bg-transparent px-8 py-3 font-display text-sm font-bold tracking-[0.2em] text-charcoal/70 transition-colors hover:border-charcoal/40 hover:text-charcoal"
                >
                  MAYBE LATER
                </button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-4 text-center text-xs text-charcoal/50"
              >
                Limited time offer. Valid on Valley Eats orders only.
              </motion.p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
