import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, Clock, MapPin, Navigation, Phone } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { ContactCard } from "@/components/site/ContactCard";
import { FAQ } from "@/components/site/FAQ";
import { ImageReveal } from "@/components/site/ImageReveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { MagneticButton } from "@/components/site/MagneticButton";
import { CONTACT, IMG } from "@/lib/site-data";
import contactImage from "@/assets/home2.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Come Say Hello — Kemptville Dairy Barn" },
      {
        name: "description",
        content:
          "Find Kemptville Dairy Barn at 312 King Street, Kemptville, ON. Open 7 days, 11AM–9PM. Call +1 613-716-1606.",
      },
      { property: "og:title", content: "Come Say Hello — Kemptville Dairy Barn" },
      {
        property: "og:description",
        content: "Hours, directions and everything else you need before the detour.",
      },
    ],
  }),
  component: Contact,
});

const FIELDS = [
  { label: "YOUR NAME", type: "text", placeholder: "Jamie from down the road" },
  { label: "YOUR EMAIL", type: "email", placeholder: "you@email.com" },
  { label: "WHAT'S ON YOUR MIND?", type: "textarea", placeholder: "Tell us everything…" },
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <section className="grain relative overflow-hidden bg-cream px-5 pt-36 pb-14 sm:px-8">
        <div className="pointer-events-none absolute -right-24 top-24 size-[26rem] rounded-[45%_55%_60%_40%] bg-sunny/40" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* IMAGE SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] lg:aspect-[4/5]"
            >
              <img
                src={contactImage}
                alt="Kemptville Dairy Barn roadside food stand"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              
              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0, rotate: -12 }}
                animate={{ scale: 1, rotate: -6 }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                className="grain absolute left-6 bottom-6 rounded-2xl bg-tomato px-6 py-3 shadow-xl"
              >
                <p className="font-display text-sm font-bold tracking-[0.2em] text-charcoal">
                  OPEN DAILY
                </p>
              </motion.div>
            </motion.div>

            {/* CONTENT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="font-display text-sm font-bold tracking-[0.3em] text-tomato"
              >
                GET IN TOUCH
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="hero-type mt-4 text-[12vw] leading-[0.9] text-charcoal sm:text-6xl lg:text-7xl"
              >
                COME SAY
                <br />
                <span className="text-tomato">HELLO.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 space-y-6 text-lg leading-relaxed text-charcoal/80"
              >
                <p>
                  Find us at <strong>{CONTACT.street}, {CONTACT.city}</strong>. 
                  We're open 7 days a week, ready to serve you soft serve, 
                  burgers, and all your roadside favourites.
                </p>
                <p>
                  Call us at <strong>{CONTACT.phone}</strong> or stop by — 
                  we're always happy to see you at the barn.
                </p>
                <p className="font-display font-bold text-tomato">
                  {CONTACT.days} · {CONTACT.hours}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-10 flex gap-4"
              >
                <a
                  href={CONTACT.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-tomato px-6 py-4 font-display text-sm font-bold tracking-[0.2em] text-cream transition-colors hover:bg-barn"
                >
                  <Navigation className="size-4" /> GET DIRECTIONS
                </a>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-tomato px-6 py-4 font-display text-sm font-bold tracking-[0.2em] text-tomato transition-colors hover:bg-tomato hover:text-cream"
                >
                  <Phone className="size-4" /> CALL NOW
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 pb-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
          <ContactCard
            icon={MapPin}
            label="LOCATION"
            lines={[CONTACT.street, CONTACT.city, `${CONTACT.country} ${CONTACT.postal}`]}
            href={CONTACT.googleMapsLink}
            tone="tomato"
          />
          <ContactCard
            icon={Phone}
            label="PHONE"
            lines={[CONTACT.phone]}
            href={CONTACT.phoneHref}
            tone="sunny"
          />
          <ContactCard icon={Clock} label="HOURS" lines={[CONTACT.days, CONTACT.hours]} />
        </div>
      </section>

      {/* MAP */}
      <section className="px-5 pb-24 sm:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-sunny/25">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(var(--fresh) 1px, transparent 1px), linear-gradient(90deg, var(--fresh) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="absolute top-1/3 left-0 h-14 w-full -rotate-6 bg-cream/70" />
          <div className="absolute top-1/2 left-1/4 h-full w-10 rotate-12 bg-cream/60" />

          <div className="relative z-10 grid gap-10 p-8 sm:p-14 lg:grid-cols-2 lg:items-center">
            <div className="relative flex min-h-[16rem] items-center justify-center">
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="grain flex items-center gap-3 rounded-full bg-tomato px-6 py-4 text-cream shadow-[0_24px_40px_-20px_rgba(0,0,0,0.6)]">
                  <MapPin className="size-6" />
                  <span className="font-display text-sm font-bold tracking-[0.2em]">
                    KEMPTVILLE DAIRY BARN
                  </span>
                </div>
                <span className="absolute -bottom-6 left-1/2 size-3 -translate-x-1/2 rounded-full bg-charcoal/25 blur-[2px]" />
              </motion.div>
            </div>

            <div>
              <h2 className="hero-type text-[10vw] leading-[0.88] sm:text-[5vw] lg:text-[3.4vw]">
                YOU&rsquo;RE NOT FAR
                <br />
                FROM YOUR NEXT
                <br />
                <span className="text-tomato">ICE CREAM.</span>
              </h2>
              <a
                href={CONTACT.googleMapsLink}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-charcoal px-7 py-4 font-display text-sm font-bold tracking-[0.2em] text-cream transition-colors hover:bg-tomato"
              >
                <Navigation className="size-4" /> GET DIRECTIONS
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="grain bg-warm px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Say something" lines={["DROP US", "A LINE."]} />
          <form
            className="mt-14 space-y-12"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            {FIELDS.map((f) => (
              <label key={f.label} className="block">
                <span className="font-display text-xs font-bold tracking-[0.3em] opacity-60">
                  {f.label}
                </span>
                {f.type === "textarea" ? (
                  <textarea
                    rows={2}
                    placeholder={f.placeholder}
                    className="mt-3 w-full resize-none border-b-2 border-charcoal/25 bg-transparent pb-3 font-display text-[7vw] leading-tight outline-none transition-colors placeholder:text-charcoal/20 focus:border-tomato sm:text-[2.4rem]"
                  />
                ) : (
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    className="mt-3 w-full border-b-2 border-charcoal/25 bg-transparent pb-3 font-display text-[7vw] leading-tight outline-none transition-colors placeholder:text-charcoal/20 focus:border-tomato sm:text-[2.4rem]"
                  />
                )}
              </label>
            ))}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-4 rounded-full bg-tomato px-10 py-6 font-display text-lg font-bold tracking-[0.2em] text-cream transition-colors hover:bg-barn"
            >
              {sent ? "THANKS!" : "SEND IT"}
              <ArrowRight className="size-6 transition-transform duration-300 group-hover:translate-x-2" />
            </motion.button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Quick answers" lines={["GOOD", "QUESTIONS."]} />
          <div className="mt-12">
            <FAQ />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
