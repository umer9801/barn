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
      <div className="grain bg-fresh text-cream">
        <Marquee items={MARQUEE} duration={34} />
      </div>
      <div className="grain border-y-2 border-charcoal/10 bg-sunny text-cocoa">
        <Marquee items={MARQUEE} duration={40} reverse />
      </div>

      <StorySection />

      {/* CONTENT CARDS - WHY VISIT US */}
      <section className="bg-warm px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading 
            eyebrow="Why families love us" 
            lines={["A TRADITION", "WORTH KEEPING."]} 
          />
          
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ContentCard
              icon={<Sparkles className="size-10 text-fresh" strokeWidth={2.5} />}
              title="FRESH DAILY"
              description={`"Everything made fresh, every single day. You can taste the difference." — That's our promise.`}
              variant="cream"
              delay={0}
            />
            
            <ContentCard
              icon={<Users className="size-10 text-cream" strokeWidth={2.5} />}
              title="GENERATIONS GATHER"
              description={`"I brought my kids here. Now they bring theirs." — Where memories become traditions.`}
              variant="fresh"
              delay={0.08}
            />
            
            <ContentCard
              icon={<Clock className="size-10 text-cocoa" strokeWidth={2.5} />}
              title="ALWAYS OPEN"
              description={`"When the craving hits, we're here." — 7 days a week, 11 AM to 9 PM. Rain or shine.`}
              variant="sunny"
              delay={0.16}
            />
            
            <ContentCard
              icon={<MapPin className="size-10 text-cream" strokeWidth={2.5} />}
              title="EASY TO FIND"
              description={`"Right where it's always been." — King Street, Kemptville. Your roadside tradition.`}
              variant="tomato"
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
            WHERE MEMORIES
            <br />
            BECOME TRADITIONS.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-charcoal/80"
          >
            <p className="italic border-l-4 border-fresh pl-6 text-xl">
              "For generations, Dairy Barn & Grill has been more than just a place to enjoy great food—
              it has been a part of the community, a keeper of memories."
            </p>
            <p>
              For many families, this is where childhood memories began: sharing a meal, 
              enjoying a favourite ice cream, and spending time together. Parents who grew up 
              coming here have now brought their children and grandchildren, creating a tradition 
              that continues from one generation to the next.
            </p>
            <p className="italic border-l-4 border-tomato pl-6">
              "We take great pride in preserving the values that made us a beloved tradition—
              quality food, delicious ice cream, friendly service, and a commitment to the highest 
              standards of care."
            </p>
            <p>
              Through the years, times may have changed, but our passion for serving our community 
              has remained the same. Dairy Barn & Grill is where great food meets cherished memories, 
              and where every generation has a story to share.
            </p>
            <p className="font-display text-xl text-fresh">
              Thank you for being part of our story—and for helping us keep the tradition alive.
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
              THE DIFFERENCE YOU'LL TASTE
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
              className="rounded-3xl bg-cream p-8 border-2 border-fresh/20"
            >
              <div className="mb-4 inline-block rounded-full bg-fresh px-4 py-2">
                <span className="font-display text-xs font-bold tracking-[0.2em] text-cream">01</span>
              </div>
              <h3 className="hero-type mb-4 text-3xl text-charcoal">
                REAL INGREDIENTS
              </h3>
              <p className="leading-relaxed text-charcoal/80 mb-4">
                "No frozen patties. No premade sauces."
              </p>
              <p className="leading-relaxed text-charcoal/70">
                Everything from our burgers to our milkshakes starts with real, quality ingredients. 
                You can taste the difference in every bite—because quality isn't optional here.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl bg-cream p-8 border-2 border-tomato/20"
            >
              <div className="mb-4 inline-block rounded-full bg-tomato px-4 py-2">
                <span className="font-display text-xs font-bold tracking-[0.2em] text-cream">02</span>
              </div>
              <h3 className="hero-type mb-4 text-3xl text-charcoal">
                MADE TO ORDER
              </h3>
              <p className="leading-relaxed text-charcoal/80 mb-4">
                "Your burger hits the grill when you ask for it."
              </p>
              <p className="leading-relaxed text-charcoal/70">
                We don't make anything until you order it. Your shake gets blended fresh. 
                Your fries hit the fryer hot. That's how we keep everything perfect, every time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl bg-cream p-8 border-2 border-cocoa/20"
            >
              <div className="mb-4 inline-block rounded-full bg-cocoa px-4 py-2">
                <span className="font-display text-xs font-bold tracking-[0.2em] text-cream">03</span>
              </div>
              <h3 className="hero-type mb-4 text-3xl text-charcoal">
                LOCALLY LOVED
              </h3>
              <p className="leading-relaxed text-charcoal/80 mb-4">
                "Over 40 years of serving Kemptville families."
              </p>
              <p className="leading-relaxed text-charcoal/70">
                Generations have grown up coming here. That kind of trust isn't given—
                it's earned, one meal at a time, one family at a time.
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
              className="font-display text-sm font-bold tracking-[0.3em] text-fresh"
            >
              WHAT OUR COMMUNITY SAYS
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-type mt-6 text-[10vw] leading-[0.9] text-charcoal sm:text-6xl lg:text-7xl"
            >
              STORIES FROM
              <br />
              OUR FAMILY.
            </motion.h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grain rounded-3xl border-2 border-fresh/30 bg-warm p-8"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl text-sunny">★</span>
                ))}
              </div>
              <p className="mb-6 text-lg leading-relaxed text-charcoal/90 italic">
                "Best soft serve in the region! My kids literally beg me to come here every weekend. 
                The loaded poutine is unreal too—I can't resist it myself!"
              </p>
              <p className="font-display text-sm font-bold tracking-wider text-fresh">
                — Sarah M., Kemptville
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grain rounded-3xl border-2 border-tomato/30 bg-warm p-8"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl text-sunny">★</span>
                ))}
              </div>
              <p className="mb-6 text-lg leading-relaxed text-charcoal/90 italic">
                "A Kemptville tradition! I've been coming since I was a kid, and now I bring my own children. 
                The burgers are always fresh and the vibe is unbeatable. This place feels like home."
              </p>
              <p className="font-display text-sm font-bold tracking-wider text-tomato">
                — Mike T., Local Family
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grain rounded-3xl border-2 border-cocoa/30 bg-warm p-8"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl text-sunny">★</span>
                ))}
              </div>
              <p className="mb-6 text-lg leading-relaxed text-charcoal/90 italic">
                "Perfect summer stop! Fresh food, genuinely friendly service, and the prices are incredibly fair. 
                The milkshakes are thick, cold, and absolutely worth the drive."
              </p>
              <p className="font-display text-sm font-bold tracking-wider text-cocoa">
                — Jessica L., Regular Customer
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
            eyebrow="Explore our menu" 
            lines={["WHAT WE DO", "BEST."]} 
          />
          
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ContentCard
              title="ICE CREAM & SHAKES"
              description={`"Soft serve swirled high, thick milkshakes you need a spoon for." — The reason families drive from miles away.`}
              variant="sunny"
              delay={0}
            />
            
            <ContentCard
              title="BURGERS & DOGS"
              description={`"Smashed patties, melted cheese, grilled to perfection." — Classic roadside done right, every single time.`}
              variant="fresh"
              delay={0.08}
            />
            
            <ContentCard
              title="POUTINE & FRIES"
              description={`"Fresh-cut fries, double fried to golden perfection." — Add gravy and curds for the ultimate loaded experience.`}
              variant="tomato"
              delay={0.16}
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
