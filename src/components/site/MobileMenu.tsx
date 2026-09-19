import { AnimatePresence, motion } from "motion/react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Phone, X } from "lucide-react";
import { CONTACT, IMG } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "HOME", to: "/", img: IMG.softServe },
  { label: "ABOUT", to: "/about", img: IMG.barn },
  { label: "MENU", to: "/menu", img: IMG.burger },
  { label: "CONTACT", to: "/contact", img: IMG.milkshake },
];

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  
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
            className="grain fixed right-0 top-0 z-[70] h-full w-[85vw] max-w-sm overflow-y-auto bg-cream text-charcoal shadow-2xl sm:w-96"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="pointer-events-none absolute -left-16 top-20 h-64 w-64 rounded-full bg-tomato/20 blur-3xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="relative z-10 flex items-center justify-between border-b-2 border-charcoal/10 px-5 py-4 bg-warm">
              <span className="font-display text-[10px] leading-none font-bold tracking-[0.2em] text-charcoal">
                KEMPTVILLE
                <br />
                <span className="text-tomato">DAIRY BARN</span>
              </span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-full bg-charcoal/10 p-2 transition-colors hover:bg-charcoal/20"
              >
                <X className="size-4" />
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
                    className={cn(
                      "group flex items-center gap-3 rounded-2xl border-2 p-4 transition-all active:scale-95",
                      pathname === l.to
                        ? "bg-tomato border-tomato text-cream"
                        : "bg-warm border-charcoal/10 hover:border-tomato hover:bg-sunny/30"
                    )}
                  >
                    <div className={cn(
                      "size-12 shrink-0 rounded-xl overflow-hidden ring-2",
                      pathname === l.to ? "ring-cream/50" : "ring-charcoal/10"
                    )}>
                      <img
                        src={l.img}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className={cn(
                      "font-display text-base font-bold tracking-wide transition-colors",
                      pathname === l.to ? "text-cream" : "text-charcoal group-hover:text-tomato"
                    )}>
                      {l.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="relative z-10 space-y-3 px-4 pb-6">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center justify-center gap-2 rounded-2xl bg-tomato px-5 py-4 font-display text-sm font-bold tracking-[0.2em] text-cream shadow-lg transition-transform active:scale-95"
              >
                <Phone className="size-4" /> CALL NOW
              </a>
              <div className="rounded-xl bg-warm p-4 text-center border-2 border-charcoal/10">
                <p className="font-display text-xs font-bold text-charcoal mb-1">
                  {CONTACT.phone}
                </p>
                <p className="text-[10px] text-charcoal/60">
                  Open Daily • 11 AM - 9 PM
                </p>
              </div>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
