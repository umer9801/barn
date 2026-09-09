import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ImageReveal } from "@/components/site/ImageReveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import { Marquee } from "@/components/site/Marquee";
import { IMG } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Kemptville Dairy Barn" },
      {
        name: "description",
        content:
          "From a small roadside stop to a Kemptville favourite. The story behind the soft serve, the poutine and the picnic tables.",
      },
      { property: "og:title", content: "Not Just A Food Stop — Kemptville Dairy Barn" },
      {
        property: "og:description",
        content: "The story behind Kemptville's favourite roadside dairy barn.",
      },
    ],
  }),
  component: About,
});

const TIMELINE = [
  { year: "1990s", title: "THE BEGINNING", text: "A small local roadside stop with one soft serve machine and a hand-painted sign." },
  { year: "TODAY", title: "A LOCAL FAVOURITE", text: "Picnic tables full every summer evening. Cones, curds and cold drinks all day long." },
  { year: "NEXT", title: "MORE FLAVOUR.", text: "New swirls, bigger burgers, and more reasons to take the long way home." },
];

const STATS = [
  { n: "1.8K+", label: "LOCAL FOLLOWERS" },
  { n: "100+", label: "MEMORIES SHARED" },
  { n: "10+", label: "FAVOURITE ITEMS" },
];

const POLAROIDS = [
  { src: IMG.people, rot: "-6deg" },
  { src: IMG.softServe, rot: "4deg" },
  { src: IMG.poutine, rot: "-3deg" },
  { src: IMG.barn, rot: "5deg" },
];

function About() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="grain relative overflow-hidden bg-cream px-5 pt-36 pb-16 sm:px-8">
        <div className="pointer-events-none absolute -top-24 right-0 size-[30rem] rounded-full bg-sunny/60" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <h1 className="hero-type text-[16vw] leading-[0.82] lg:text-[10vw]">
            {["NOT JUST", "A FOOD STOP."].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {i === 1 ? <span className="text-tomato">{line}</span> : line}
                </motion.span>
              </span>
            ))}
          </h1>
          <ImageReveal
            src={IMG.barn}
            alt="Red roadside dairy barn food stand at golden hour"
            className="mt-12 aspect-[16/9] w-full"
            priority
          />
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-cream px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Our story" lines={["THE LONG", "WAY ROUND."]} />
          <div className="mt-16 space-y-4">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-5 border-t-2 border-charcoal/15 pt-8 lg:grid-cols-[10rem_1fr_22rem]"
              >
                <span className="font-display text-2xl font-bold text-tomato">{t.year}</span>
                <h3 className="hero-type text-[10vw] leading-[0.85] sm:text-[5vw] lg:text-[3.4vw]">
                  {t.title}
                </h3>
                <p className="text-lg text-muted-foreground">{t.text}</p>
                {i < TIMELINE.length - 1 ? (
                  <span className="font-display text-3xl text-charcoal/25">↓</span>
                ) : null}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="grain relative overflow-hidden bg-tomato px-5 py-28 text-cream sm:px-8">
        <motion.img
          src={IMG.fries}
          alt=""
          loading="lazy"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-6 size-28 rounded-3xl object-cover sm:size-44"
        />
        <motion.img
          src={IMG.milkshake}
          alt=""
          loading="lazy"
          animate={{ y: [0, 22, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-4 size-24 rounded-full object-cover sm:size-40"
        />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="hero-type text-[15vw] leading-[0.82] lg:text-[9vw]">WE DON&rsquo;T DO</p>
          <p className="hero-type text-stroke-cream text-[19vw] leading-[0.82] lg:text-[12vw]">
            BORING FOOD.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-cream px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <p className="hero-type text-[18vw] leading-[0.8] text-tomato sm:text-[7vw]">{s.n}</p>
              <p className="mt-3 font-display text-xs font-bold tracking-[0.3em]">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COLLAGE */}
      <section className="overflow-hidden bg-warm px-5 py-24 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6">
          {POLAROIDS.map((p, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40, rotate: p.rot }}
              whileInView={{ opacity: 1, y: 0, rotate: p.rot }}
              whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="w-[45%] max-w-xs rounded-lg bg-cream p-3 pb-10 shadow-[0_24px_50px_-30px_rgba(0,0,0,0.6)] sm:w-64"
            >
              <img
                src={p.src}
                alt="Dairy barn memories"
                loading="lazy"
                className="aspect-square w-full rounded-sm object-cover"
              />
            </motion.figure>
          ))}
        </div>
      </section>

      <div className="grain bg-cocoa text-cream">
        <Marquee items={["FRESH", "LOCAL", "SUMMER READY", "ROADSIDE"]} duration={36} />
      </div>

      {/* CTA */}
      <section className="bg-cream px-5 py-28 text-center sm:px-8">
        <h2 className="hero-type text-[15vw] leading-[0.85] lg:text-[8vw]">
          COME HUNGRY.
          <br />
          <span className="text-tomato">LEAVE HAPPY.</span>
        </h2>
        <div className="mt-10">
          <MagneticButton to="/menu">View the menu</MagneticButton>
        </div>
      </section>
    </PageShell>
  );
}
