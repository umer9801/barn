import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ImageReveal } from "@/components/site/ImageReveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import { Marquee } from "@/components/site/Marquee";
import { IMG } from "@/lib/site-data";
import aboutImage from "@/assets/about.jpg";
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.jpeg";
import homeImg from "@/assets/home.jpg";
import home2Img from "@/assets/home2.jpg";
import friesImg from "@/assets/fries.jpg";
import hotdogImg from "@/assets/hotdog.jpg";
import milkshakeImg from "@/assets/milkshake.jpg";

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
  { src: homeImg, rot: "-6deg" },
  { src: img2, rot: "4deg" },
  { src: img1, rot: "-3deg" },
  { src: aboutImage, rot: "5deg" },
  { src: img3, rot: "-4deg" },
  { src: img4, rot: "6deg" },
  { src: img5, rot: "-5deg" },
  { src: img6, rot: "3deg" },
  { src: home2Img, rot: "-7deg" },
  { src: friesImg, rot: "4deg" },
  { src: hotdogImg, rot: "-2deg" },
  { src: milkshakeImg, rot: "5deg" },
];

function About() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="grain relative overflow-hidden bg-cream px-5 pt-36 pb-16 sm:px-8">
        <div className="pointer-events-none absolute -top-24 right-0 size-[30rem] rounded-full bg-sunny/60" />
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
                src={aboutImage}
                alt="Red roadside dairy barn food stand at golden hour"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              
              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0, rotate: -12 }}
                animate={{ scale: 1, rotate: -6 }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                className="grain absolute left-6 bottom-6 rounded-2xl bg-fresh px-6 py-3 shadow-xl"
              >
                <p className="font-display text-sm font-bold tracking-[0.2em] text-cream">
                  EST. 1990
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
                className="font-display text-sm font-bold tracking-[0.3em] text-fresh"
              >
                OUR STORY
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="hero-type mt-4 text-[12vw] leading-[0.9] text-charcoal sm:text-6xl lg:text-7xl"
              >
                NOT JUST
                <br />
                A FOOD
                <br />
                <span className="text-fresh">STOP.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 space-y-6 text-lg leading-relaxed text-charcoal/80"
              >
                <p>
                  What started as a simple roadside stand has grown into something special — 
                  a place where summer memories are made, families gather, and the ice cream 
                  always tastes a little better.
                </p>
                <p>
                  For over 30 years, we've been serving Kemptville with fresh food, cold treats, 
                  and that warm feeling you only get at a real roadside dairy barn.
                </p>
                <p className="font-display font-bold text-fresh">
                  This is our story. This is your place.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-10"
              >
                <MagneticButton to="/menu" variant="tomato">
                  See Our Menu
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-cream px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-sm font-bold tracking-[0.3em] text-fresh"
            >
              A TRADITION SERVED FOR GENERATIONS
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-type mt-6 text-[10vw] leading-[0.9] text-charcoal sm:text-6xl lg:text-7xl"
            >
              MORE THAN
              <br />
              JUST A PLACE.
            </motion.h2>
          </div>

          {/* TRADITION CONTENT - IN SMALL SECTIONS */}
          <div className="mx-auto max-w-4xl space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border-2 border-fresh/20 bg-warm p-8 sm:p-10"
            >
              <p className="text-lg leading-relaxed text-charcoal/80 italic">
                "For generations, Dairy Barn & Grill has been more than just a place to enjoy 
                great food and delicious ice cream—it has been a part of the community."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border-2 border-tomato/20 bg-warm p-8 sm:p-10"
            >
              <h3 className="font-display text-xl font-bold mb-4 text-tomato">
                WHERE MEMORIES BEGIN
              </h3>
              <p className="text-lg leading-relaxed text-charcoal/80">
                For many families, Dairy Barn is where childhood memories began: sharing a meal, 
                enjoying a favourite ice cream, and spending time together. Parents who grew up 
                coming here have now brought their children and grandchildren, creating a tradition 
                that continues from one generation to the next.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl border-2 border-sunny/30 bg-warm p-8 sm:p-10"
            >
              <h3 className="font-display text-xl font-bold mb-4 text-cocoa">
                OUR VALUES
              </h3>
              <p className="text-lg leading-relaxed text-charcoal/80">
                We take great pride in preserving the values that have made Dairy Barn & Grill 
                a beloved local tradition—quality food, delicious ice cream, friendly service, 
                and a commitment to the highest standards of cleanliness and care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-3xl border-2 border-fresh/20 bg-warm p-8 sm:p-10"
            >
              <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
                Through the years, times may have changed, but our passion for serving our 
                community has remained the same. Dairy Barn & Grill is a place where great 
                food meets cherished memories, and where every generation has a story to share.
              </p>
              <p className="font-display text-xl font-bold text-fresh text-center py-4 border-t-2 border-fresh/30">
                "Thank you for being part of our story—and for helping us keep the tradition alive."
              </p>
            </motion.div>
          </div>

          {/* TIMELINE - JOURNEY */}
          <div className="mt-24">
            <SectionHeading eyebrow="Our Journey" lines={["THE LONG", "WAY ROUND."]} />
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
                  <span className="font-display text-2xl font-bold text-fresh">{t.year}</span>
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
        </div>
      </section>

      {/* STATEMENT */}
      <section className="grain relative overflow-hidden bg-fresh px-5 py-28 text-cream sm:px-8">
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
              <p className="hero-type text-[18vw] leading-[0.8] text-fresh sm:text-[7vw]">{s.n}</p>
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
          <span className="text-fresh">LEAVE HAPPY.</span>
        </h2>
        <div className="mt-10">
          <MagneticButton to="/menu">View the menu</MagneticButton>
        </div>
      </section>
    </PageShell>
  );
}
