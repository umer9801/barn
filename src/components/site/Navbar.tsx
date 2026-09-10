import { Link, useRouterState } from "@tanstack/react-router";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { CONTACT } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const LINKS = [
  { label: "HOME", to: "/" },
  { label: "ABOUT", to: "/about" },
  { label: "MENU", to: "/menu" },
  { label: "CONTACT", to: "/contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 60));

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
        <motion.div
          layout
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "pointer-events-auto mx-auto flex items-center justify-between transition-all duration-500",
            scrolled
              ? "max-w-5xl rounded-full border border-charcoal/10 bg-cream/85 px-4 py-3 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:px-6"
              : "max-w-7xl bg-transparent px-2 py-3 sm:px-4",
          )}
        >
          <Link to="/" className="flex items-center gap-3">
            <div className="rounded-xl bg-cream p-2 shadow-sm">
              <img src={logo} alt="Kemptville Dairy Barn" className="h-10 w-auto sm:h-12" />
            </div>
            <span className="font-display text-[11px] leading-[0.95] font-bold tracking-[0.2em] sm:text-xs">
              KEMPTVILLE
              <br />
              <span className="text-tomato">DAIRY BARN</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group relative font-display text-xs font-bold tracking-[0.22em]"
              >
                {l.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[2px] bg-tomato transition-all duration-300 group-hover:w-full",
                    pathname === l.to ? "w-full" : "w-0",
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={CONTACT.phoneHref}
              className="hidden items-center gap-2 rounded-full bg-tomato px-5 py-3 font-display text-[11px] font-bold tracking-[0.2em] text-cream transition-colors hover:bg-barn sm:flex"
            >
              <Phone className="size-4" /> CALL NOW
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="rounded-full border-2 border-charcoal/20 bg-cream/70 p-3 backdrop-blur md:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </motion.div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />

      {/* Mobile sticky call CTA */}
      <a
        href={CONTACT.phoneHref}
        className="fixed right-4 bottom-5 z-40 flex items-center gap-2 rounded-full bg-tomato px-5 py-4 font-display text-xs font-bold tracking-[0.2em] text-cream shadow-[0_16px_40px_-16px_rgba(0,0,0,0.6)] md:hidden"
      >
        <Phone className="size-4" /> CALL
      </a>
    </>
  );
}
