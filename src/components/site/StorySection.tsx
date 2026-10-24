import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { IMG } from "@/lib/site-data";
import { ImageReveal } from "./ImageReveal";

const BADGES = ["FRESH", "LOCAL FAVOURITE", "SUMMER READY"];

export function StorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-cream px-5 py-24 sm:px-8 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div style={{ y }} className="relative">
          <ImageReveal
            src={IMG.people}
            alt="Friends holding ice cream cones at a roadside stand"
            className="aspect-[4/5] w-full"
          />
          <div className="spin-slow absolute -right-4 -bottom-10 size-32 sm:-right-10 sm:size-40">
            <svg viewBox="0 0 200 200" className="size-full">
              <defs>
                <path
                  id="circlePath"
                  d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"
                  fill="none"
                />
              </defs>
              <circle cx="100" cy="100" r="92" className="fill-tomato" />
              <text className="fill-cream font-display text-[19px] tracking-[0.28em]">
                <textPath href="#circlePath">
                  SERVING GOOD TIMES · SERVING GOOD TIMES ·
                </textPath>
              </text>
            </svg>
          </div>
        </motion.div>

        <div>
          <p className="font-display text-xs tracking-[0.35em] opacity-60 uppercase">
            Since roadside stops are about more than food
          </p>
          <div className="relative mt-6">
            <span className="hero-type absolute -top-10 -left-3 text-[9rem] leading-none text-tomato/15 select-none">
              &ldquo;
            </span>
            <h2 className="hero-type relative text-[14vw] leading-[0.85] sm:text-[8vw] lg:text-[5.5vw]">
              MADE FOR
              <br />
              THE DETOUR.
            </h2>
          </div>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            Kemptville Dairy Barn is where road trips, summer afternoons and serious cravings
            meet. Pull over, order too much, sit at a picnic table and let the ice cream melt a
            little.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {BADGES.map((b, i) => (
              <motion.span
                key={b}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                animate={{ y: [0, -6, 0] }}
                className="rounded-full border-2 border-charcoal px-5 py-2 font-display text-xs font-bold tracking-[0.2em]"
              >
                {b}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
