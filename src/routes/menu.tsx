import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useMemo } from "react";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { TextMenuSection } from "@/components/site/TextMenuSection";
import { IMG, MENU, CATEGORIES, CONTACT } from "@/lib/site-data";
import img7 from "@/assets/7.jpeg";
import img8 from "@/assets/8.jpeg";
import img9 from "@/assets/9.jpeg";
import img10 from "@/assets/10.jpeg";
import img11 from "@/assets/11.jpeg";
import img12 from "@/assets/12.jpeg";
import img13 from "@/assets/13.jpeg";
import img14 from "@/assets/14.jpeg";
import img15 from "@/assets/15.jpeg";
import img16 from "@/assets/16.jpeg";
import img17 from "@/assets/17.jpeg";

const COLLAGE = [
  IMG.softServe, 
  IMG.burger, 
  img7,
  IMG.poutine, 
  img8,
  IMG.milkshake, 
  img9,
  IMG.fries,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17
];

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "The Menu — Kemptville Dairy Barn" },
      {
        name: "description",
        content:
          "Soft serve, sundaes, milkshakes, smoothies, burgers, hot dogs, loaded poutine and fresh cut fries. See what you're craving.",
      },
      { property: "og:title", content: "What Are You Craving? — Kemptville Dairy Barn" },
      {
        property: "og:description",
        content: "Ice cream, burgers, poutine, fries, shakes and cold drinks at the barn.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const menuByCategory = useMemo(() => {
    return CATEGORIES.map((category) => ({
      category,
      items: MENU.filter((item) => item.category === category),
    }));
  }, []);

  return (
    <PageShell>
      <section className="grain relative overflow-hidden bg-cream px-5 pt-36 pb-14 sm:px-8">
        <div className="pointer-events-none absolute -left-32 top-10 size-[28rem] rounded-full bg-tomato/85" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <h1 className="hero-type text-[16vw] leading-[0.82] lg:text-[9.5vw]">
            {["WHAT ARE YOU", "CRAVING?"].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <a
              href={CONTACT.doordashLink}
              target="_blank"
              rel="noopener noreferrer"
              className="grain group inline-flex items-center gap-3 rounded-full bg-tomato px-8 py-4 font-display text-sm font-bold tracking-[0.2em] text-cream shadow-xl transition-all duration-300 hover:scale-105 hover:bg-barn"
            >
              <ShoppingBag className="size-5" />
              ORDER WITH DOORDASH
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {COLLAGE.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt=""
                loading="lazy"
                initial={{ opacity: 0, scale: 0.85, rotate: i % 2 ? 6 : -6 }}
                animate={{ opacity: 1, scale: 1, y: [0, i % 2 ? -14 : 12, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: i * 0.08 },
                  y: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
                }}
                className="size-24 rounded-3xl object-cover shadow-xl sm:size-40"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warm px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-5xl">
          {menuByCategory.map(({ category, items }) => (
            <TextMenuSection key={category} category={category} items={items} />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center rounded-3xl border-2 border-tomato/30 bg-cream p-10"
          >
            <h3 className="hero-type mb-6 text-[8vw] leading-tight text-charcoal sm:text-4xl">
              READY TO
              <br />
              <span className="text-tomato">ORDER?</span>
            </h3>
            <p className="mb-8 text-lg text-charcoal/70">
              Get your favorites delivered straight to your door
            </p>
            <a
              href={CONTACT.doordashLink}
              target="_blank"
              rel="noopener noreferrer"
              className="grain group inline-flex items-center gap-3 rounded-full bg-tomato px-10 py-5 font-display text-base font-bold tracking-[0.2em] text-cream shadow-xl transition-all duration-300 hover:scale-105 hover:bg-barn"
            >
              <ShoppingBag className="size-6" />
              ORDER NOW WITH DOORDASH
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
