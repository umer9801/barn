import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { useState } from "react";

const ITEMS = [
  {
    q: "Do you have soft serve?",
    a: "Every day we're open. Vanilla, chocolate, twist, dipped, sprinkled — plus sundaes and cones in one very generous size.",
  },
  {
    q: "Do you serve burgers?",
    a: "Hamburgers, cheeseburgers and our double-smashed Classic Barn Burger, all cooked to order on the flat-top.",
  },
  {
    q: "Do you have poutine?",
    a: "Fresh cut fries, squeaky curds and real gravy. Load it up with bacon and green onion if you're serious.",
  },
  {
    q: "Do you offer shakes?",
    a: "Thick hand-spun milkshakes and real fruit smoothies, plus ice cold cans from the bucket.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y-2 divide-charcoal/15 border-y-2 border-charcoal/15">
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-7 text-left"
            >
              <span className="hero-type text-[6.5vw] leading-none sm:text-[3.2vw] lg:text-[2.2vw]">
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 135 : 0 }}
                transition={{ duration: 0.35 }}
                className="shrink-0 rounded-full border-2 border-charcoal p-2"
              >
                <Plus className="size-5" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-8 text-lg text-muted-foreground">{item.a}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
