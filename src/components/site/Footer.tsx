import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { CONTACT } from "@/lib/site-data";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-barn text-cream">
      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-24 pb-10 sm:px-8">
        <h2 className="hero-type text-[17vw] leading-[0.82] lg:text-[11vw]">
          {["SEE YOU", "AT THE BARN."].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h2>

        <div className="mt-16 grid gap-10 border-t border-cream/20 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6 inline-block rounded-xl bg-cream p-3 shadow-md">
              <img src={logo} alt="Kemptville Dairy Barn" className="h-16 w-auto" />
            </div>
            <p className="font-display text-[11px] tracking-[0.3em] opacity-60">NAVIGATE</p>
            <ul className="mt-4 space-y-2 font-display text-xl">
              {[
                { label: "HOME", to: "/" },
                { label: "ABOUT", to: "/about" },
                { label: "MENU", to: "/menu" },
                { label: "CONTACT", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-opacity hover:opacity-60">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-[11px] tracking-[0.3em] opacity-60">FIND US</p>
            <p className="mt-4 flex gap-2 text-lg leading-snug">
              <MapPin className="mt-1 size-5 shrink-0" />
              <span>
                {CONTACT.street}
                <br />
                {CONTACT.city}
                <br />
                {CONTACT.country} {CONTACT.postal}
              </span>
            </p>
          </div>

          <div>
            <p className="font-display text-[11px] tracking-[0.3em] opacity-60">CALL</p>
            <a
              href={CONTACT.phoneHref}
              className="mt-4 flex items-center gap-2 font-display text-2xl transition-opacity hover:opacity-60"
            >
              <Phone className="size-5" />
              {CONTACT.phone}
            </a>
            <p className="mt-4 text-sm opacity-70">
              {CONTACT.days} · {CONTACT.hours}
            </p>
          </div>

          <div>
            <p className="font-display text-[11px] tracking-[0.3em] opacity-60">FOLLOW</p>
            <div className="mt-4 flex gap-3">
              {[Instagram, Facebook].map((Icon, i) => (
                <span
                  key={i}
                  className="rounded-full border border-cream/30 p-3 transition-colors hover:bg-cream hover:text-barn"
                >
                  <Icon className="size-5" />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream/20 pt-6 text-xs tracking-wide opacity-70 sm:flex-row">
          <p>© 2026 Kemptville Dairy Barn.</p>
          <p>Made for good food and good times.</p>
        </div>
      </div>

      <span
        aria-hidden
        className="hero-type pointer-events-none absolute -bottom-[6vw] left-1/2 -translate-x-1/2 text-[46vw] leading-none text-cream/10 select-none"
      >
        KDB
      </span>
    </footer>
  );
}
