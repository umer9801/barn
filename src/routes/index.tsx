import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { HeroSection } from "@/components/site/HeroSection";
import { Marquee } from "@/components/site/Marquee";
import { StorySection } from "@/components/site/StorySection";
import { SignatureFoodCard } from "@/components/site/SignatureFoodCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ContentCard } from "@/components/site/ContentCard";
import { Clock, MapPin, Sparkles, Users } from "lucide-react";
import { IMG, SIGNATURES } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kemptville Dairy Barn — Soft Serve, Burgers & Poutine" },
      {
        name: "description",
        content:
          "Roadside soft serve, loaded poutine, juicy burgers and thick shakes in Kemptville, Ontario. Big flavour, zero boring.",
      },
      { property: "og:title", content: "Kemptville Dairy Barn — Ice Cream. Burgers. Good Times." },
      {
        property: "og:description",
        content: "Fresh soft serve, loaded poutine and roadside favourites in Kemptville, Ontario.",
      },
    ],
  }),
  component: Home,
});

const MARQUEE = ["ICE CREAM", "BURGERS", "POUTINE", "SHAKES", "FRIES", "HOT DOGS"];

function Home() {
  const [active, setActive] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["18%", "-18%"]);

  return (
    <PageShell>
      <HeroSection />

      {/* MARQUEE */}
      <div className="grain bg-tomato text-cream">
        <Marquee items={MARQUEE} duration={34} />
      </div>
      <div className="grain border-y-2 border-charcoal/10 bg-cream text-charcoal">
        <Marquee items={MARQUEE} duration={40} reverse />
      </div>

      <StorySection />

      {/* CONTENT CARDS - WHY VISIT US */}
      <section className="bg-warm px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading 
            eyebrow="Why visit us" 
            lines={["MORE THAN JUST", "GREAT FOOD."]} 
          />
          
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ContentCard
              icon={<Sparkles className="size-10 text-tomato" strokeWidth={2.5} />}
              title="FRESH DAILY"
              description="Everything made fresh every single day. From hand-cut fries to soft serve swirled on the spot."
              variant="cream"
              delay={0}
            />
            
            <ContentCard
              icon={<Users className="size-10 text-cream" strokeWidth={2.5} />}
              title="FAMILY FRIENDLY"
              description="A roadside classic where families gather, kids smile, and memories are made over ice cream cones."
              variant="tomato"
              delay={0.08}
            />
            
            <ContentCard
              icon={<Clock className="size-10 text-cocoa" strokeWidth={2.5} />}
              title="OPEN DAILY"
              description="We're here when the craving hits. Open 7 days a week from 11 AM to 9 PM all season long."
              variant="sunny"
              delay={0.16}
            />
            
            <ContentCard
              icon={<MapPin className="size-10 text-cream" strokeWidth={2.5} />}
              title="EASY TO FIND"
              description="Right on King Street in Kemptville. Pull up, park, and enjoy the best roadside eats around."
              variant="fresh"
              delay={0.24}
            />
          </div>
        </div>
      </section>

      {/* OUR PROMISE SECTION */}
      <section className="bg-cream px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-sm font-bold tracking-[0.3em] text-tomato"
          >
            OUR PROMISE
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-type mt-6 text-[10vw] leading-[0.9] text-charcoal sm:text-6xl lg:text-7xl"
          >
            NO SHORTCUTS.
            <br />
            JUST GREAT FOOD.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-charcoal/80"
          >
            <p>
              At Kemptville Dairy Barn, quality isn't optional. We hand-cut our fries every morning, 
              make our soft serve fresh throughout the day, and never compromise on ingredients. 
              Because when you pull up to our stand, you deserve the best.
            </p>
            <p>
              Whether it's your first visit or your hundredth, we promise the same thing every time: 
              food made with care, served with a smile, in a place that feels like home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="bg-sunny px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-sm font-bold tracking-[0.3em] text-cocoa"
            >
              THE DIFFERENCE
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-type mt-6 text-[10vw] leading-[0.9] text-cocoa sm:text-6xl lg:text-7xl"
            >
              WHY LOCALS
              <br />
              KEEP COMING BACK.
            </motion.h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-cream p-8"
            >
              <div className="mb-4 inline-block rounded-full bg-tomato px-4 py-2">
                <span className="font-display text-xs font-bold tracking-[0.2em] text-cream">01</span>
              </div>
              <h3 className="hero-type mb-4 text-3xl text-charcoal">
                REAL INGREDIENTS
              </h3>
              <p className="leading-relaxed text-charcoal/80">
                No frozen patties. No premade sauces. Everything from our burgers to our milkshakes 
                starts with real, quality ingredients. You can taste the difference in every bite.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl bg-cream p-8"
            >
              <div className="mb-4 inline-block rounded-full bg-tomato px-4 py-2">
                <span className="font-display text-xs font-bold tracking-[0.2em] text-cream">02</span>
              </div>
              <h3 className="hero-type mb-4 text-3xl text-charcoal">
                MADE TO ORDER
              </h3>
              <p className="leading-relaxed text-charcoal/80">
                We don't make anything until you order it. Your burger hits the grill when you ask for it. 
                Your shake gets blended fresh. That's how we keep everything hot, cold, and perfect.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl bg-cream p-8"
            >
              <div className="mb-4 inline-block rounded-full bg-tomato px-4 py-2">
                <span className="font-display text-xs font-bold tracking-[0.2em] text-cream">03</span>
              </div>
              <h3 className="hero-type mb-4 text-3xl text-charcoal">
                LOCALLY LOVED
              </h3>
              <p className="leading-relaxed text-charcoal/80">
                We've been part of Kemptville for over 40 years. Generations have grown up coming here. 
                That kind of trust isn't given — it's earned, one meal at a time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-cream px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-sm font-bold tracking-[0.3em] text-tomato"
            >
              CUSTOMER REVIEWS
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-type mt-6 text-[10vw] leading-[0.9] text-charcoal sm:text-6xl lg:text-7xl"
            >
              WHAT PEOPLE
              <br />
              ARE SAYING.
            </motion.h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grain rounded-3xl border-2 border-charcoal/10 bg-warm p-8"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-sunny">★</span>
                ))}
              </div>
              <p className="mb-6 text-lg leading-relaxed text-charcoal/90">
                "Best soft serve in the region! The kids beg to come here every weekend. 
                The loaded poutine is unreal too."
              </p>
              <p className="font-display text-sm font-bold tracking-wider text-tomato">
                — Sarah M.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grain rounded-3xl border-2 border-charcoal/10 bg-warm p-8"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-sunny">★</span>
                ))}
              </div>
              <p className="mb-6 text-lg leading-relaxed text-charcoal/90">
                "A Kemptville tradition! Been coming since I was a kid. The burgers are always 
                fresh and the vibe is unbeatable."
              </p>
              <p className="font-display text-sm font-bold tracking-wider text-tomato">
                — Mike T.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grain rounded-3xl border-2 border-charcoal/10 bg-warm p-8"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-sunny">★</span>
                ))}
              </div>
              <p className="mb-6 text-lg leading-relaxed text-charcoal/90">
                "Perfect summer stop! Fresh food, friendly service, and the prices are great. 
                Highly recommend the milkshakes."
              </p>
              <p className="font-display text-sm font-bold tracking-wider text-tomato">
                — Jessica L.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SIGNATURE ITEMS */}
      <section className="grain bg-charcoal px-5 py-24 text-cream sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Signature items" lines={["THE HEAVY", "HITTERS."]} />
          <div className="no-scrollbar mt-14 flex gap-4 overflow-x-auto pb-4 sm:gap-0 sm:overflow-visible sm:pl-8">
            {SIGNATURES.map((s, i) => (
              <SignatureFoodCard
                key={s.n}
                {...s}
                active={active === i}
                onHover={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FULL WIDTH PARALLAX */}
      <section ref={parallaxRef} className="relative flex min-h-[70svh] items-center justify-center overflow-hidden bg-cocoa px-5 py-20">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.img
            style={{ y: imgY }}
            src={IMG.barn}
            alt="Red roadside dairy barn ice cream stand"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-charcoal/40" />
        <motion.h2
          style={{ y: textY }}
          className="hero-type relative z-10 px-5 text-center text-[13vw] leading-[0.85] text-cream sm:px-8 lg:text-[8vw]"
        >
          GOOD FOOD
          <br />
          HITS DIFFERENT
          <br />
          OUT HERE.
        </motion.h2>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section className="bg-charcoal px-5 py-24 text-cream sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading 
            eyebrow="Our menu" 
            lines={["WHAT WE DO", "BEST."]} 
          />
          
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ContentCard
              title="ICE CREAM & SHAKES"
              description="Soft serve swirled high, thick milkshakes you need a spoon for, and sundaes loaded with everything good."
              variant="cream"
              delay={0}
            />
            
            <ContentCard
              title="BURGERS & DOGS"
              description="Smashed patties, melted cheese, grilled dogs with all the fixings. Classic roadside done right."
              variant="tomato"
              delay={0.08}
            />
            
            <ContentCard
              title="POUTINE & FRIES"
              description="Fresh-cut fries double fried to perfection. Add gravy and curds for the ultimate loaded poutine."
              variant="sunny"
              delay={0.16}
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
