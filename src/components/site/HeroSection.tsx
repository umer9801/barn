import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { IMG } from "@/lib/site-data";
import { MagneticButton } from "./MagneticButton";

const float = (delay: number, distance = 18) => ({
  animate: { y: [0, -distance, 0] },
  transition: { duration: 6 + delay, repeat: Infinity, ease: "easeInOut" as const, delay },
});

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const coneY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const typeY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-cream pt-28 pb-16"
    >
      {/* abstract red shapes */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute -top-32 -left-32 size-[42rem] rounded-full bg-tomato/90"
      />
      <div className="pointer-events-none absolute top-1/3 -right-24 size-[26rem] rounded-[45%_55%_60%_40%] bg-sunny/70" />

      {/* giant background type */}
      <motion.span
        aria-hidden
        style={{ y: typeY }}
        className="hero-type pointer-events-none absolute inset-x-0 top-1/4 z-0 text-center text-[30vw] leading-[0.75] text-charcoal/[0.06] select-none"
      >
        DAIRY
        <br />
        BARN
      </motion.span>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-charcoal/20 px-4 py-2 font-display text-[10px] font-bold tracking-[0.3em]"
          >
            KEMPTVILLE, ONTARIO · ROADSIDE SINCE FOREVER
          </motion.p>

          <h1 className="hero-type text-[12vw] leading-[0.88] sm:text-[9vw] lg:text-[5.2vw]">
            {["SCOOPS OF", "HAPPINESS,", "ONE CONE", "AT A TIME."].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {i === 3 ? <span className="text-cream drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">{line}</span> : line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-7 max-w-lg space-y-3"
          >
            <p className="text-lg font-display font-bold italic text-charcoal/90 border-l-4 border-tomato pl-4">
              "Where every meal is made fresh, and every visit feels like home."
            </p>
            <p className="text-base leading-relaxed text-muted-foreground pl-4">
              Fresh soft serve, loaded poutine, juicy burgers, and all your roadside favourites.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <MagneticButton to="/menu">
              Explore menu <ArrowUpRight className="size-4" />
            </MagneticButton>
            <MagneticButton to="/contact" variant="outline">
              Find us <ArrowRight className="size-4" />
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div style={{ y: coneY }} className="relative mx-auto w-full max-w-[30rem]">
          <motion.img
            src={IMG.softServe}
            alt="Rainbow swirl soft serve ice cream cone"
            width={1200}
            height={1600}
            className="relative z-10 w-full rounded-[3rem] object-cover shadow-[0_60px_80px_-50px_rgba(0,0,0,0.6)]"
            initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.img
            {...float(0.4)}
            src={IMG.fries}
            alt=""
            loading="lazy"
            className="absolute -top-6 -left-8 z-20 size-28 rounded-3xl object-cover shadow-xl sm:size-36"
          />
          <motion.img
            {...float(1.2, 24)}
            src={IMG.sundae}
            alt=""
            loading="lazy"
            className="absolute -right-4 -bottom-8 z-20 size-28 rounded-full object-cover shadow-xl sm:size-40"
          />
          <motion.div
            {...float(0.8, 14)}
            className="absolute top-1/2 -left-10 z-20 hidden rounded-full bg-tomato px-5 py-3 font-display text-xs font-bold tracking-[0.2em] text-cream sm:block"
          >
            FRESH DAILY
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
