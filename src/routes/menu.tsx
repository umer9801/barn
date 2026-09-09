import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useMemo } from "react";
import { PageShell } from "@/components/site/PageShell";
import { TextMenuSection } from "@/components/site/TextMenuSection";
import { IMG, MENU, CATEGORIES } from "@/lib/site-data";

const COLLAGE = [IMG.softServe, IMG.burger, IMG.poutine, IMG.milkshake, IMG.fries];

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
        </div>
      </section>
    </PageShell>
  );
}
