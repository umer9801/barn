import { AnimatePresence, motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Phone, X } from "lucide-react";
import { CONTACT, IMG } from "@/lib/site-data";

const LINKS = [
  { label: "HOME", to: "/", img: IMG.softServe },
  { label: "ABOUT", to: "/about", img: IMG.barn },
  { label: "MENU", to: "/menu", img: IMG.burger },
  { label: "CONTACT", to: "/contact", img: IMG.milkshake },
];

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-charcoal/60 backdrop-blur-sm"
          />
          
          {/* Drawer */}
          <motion.div
            className="grain fixed right-0 top-0 z-[70] h-full w-[85vw] max-w-sm overflow-y-auto bg-tomato text-cream shadow-2xl sm:w-96"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="pointer-events-none absolute -left-16 top-20 h-64 w-64 rounded-full bg-sunny/30 blur-3xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="relative z-10 flex items-center justify-between border-b border-cream/20 px-6 py-5">
              <span className="font-display text-xs leading-none font-bold tracking-[0.2em]">
                KEMPTVILLE
                <br />
                DAIRY BARN
              </span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-full border-2 border-cream/40 p-2 transition-colors hover:border-cream hover:bg-cream/10"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="relative z-10 space-y-2 px-4 py-6">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={l.to}
                    onClick={onClose}
                    className="group flex items-center gap-3 rounded-xl border-2 border-transparent bg-cream/5 p-3 backdrop-blur-sm transition-all hover:border-cream/30 hover:bg-cream/10 active:scale-95"
                  >
                    <img
                      src={l.img}
                      alt=""
                      loading="lazy"
                      className="size-12 shrink-0 rounded-lg object-cover"
                    />
                    <span className="font-display text-xl font-bold tracking-wide">
                      {l.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="relative z-10 space-y-3 px-4 pb-6">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center justify-center gap-2 rounded-xl bg-cream px-5 py-3.5 font-display text-sm font-bold tracking-[0.2em] text-tomato transition-transform active:scale-95"
              >
                <Phone className="size-4" /> CALL NOW
              </a>
              <p className="text-center text-xs opacity-70">
                {CONTACT.phone}
              </p>
              <p className="text-center text-xs opacity-50">
                Open Daily • 11 AM - 9 PM
              </p>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
