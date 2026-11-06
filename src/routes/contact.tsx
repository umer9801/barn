import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Clock, MapPin, Phone, ShoppingBag } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { ContentCard } from "@/components/site/ContentCard";
import { CONTACT } from "@/lib/site-data";
import img7 from "@/assets/7.jpeg";
import img8 from "@/assets/8.jpeg";
import img9 from "@/assets/9.jpeg";
import img10 from "@/assets/10.jpeg";
import img11 from "@/assets/11.jpeg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Order Now — Kemptville Dairy Barn" },
      {
        name: "description",
        content:
          "Order from Kemptville Dairy Barn through DoorDash. Get your favourite ice cream, burgers, pizza and poutine delivered!",
      },
      { property: "og:title", content: "Order Now — Kemptville Dairy Barn" },
      {
        property: "og:description",
        content: "Order through DoorDash and get your favourites delivered!",
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
  return (
    <PageShell>
      <section className="grain relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-cream px-5 py-24 sm:px-8">
        <div className="pointer-events-none absolute -right-24 top-24 size-[30rem] rounded-[45%_55%_60%_40%] bg-sunny/40" />
        <div className="pointer-events-none absolute -left-32 bottom-20 size-[25rem] rounded-full bg-tomato/20" />
        
        {/* Floating decorative images */}
        <motion.img
          src={img7}
          alt=""
          loading="lazy"
          animate={{ y: [0, -15, 0], rotate: [-3, 3, -3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 size-24 rounded-2xl object-cover shadow-lg sm:size-32 opacity-80"
        />
        <motion.img
          src={img8}
          alt=""
          loading="lazy"
          animate={{ y: [0, 18, 0], rotate: [4, -4, 4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 size-20 rounded-full object-cover shadow-lg sm:size-28 opacity-80"
        />
        <motion.img
          src={img9}
          alt=""
          loading="lazy"
          animate={{ y: [0, -12, 0], rotate: [2, -2, 2] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-10 size-28 rounded-3xl object-cover shadow-lg hidden lg:block opacity-80"
        />
        <motion.img
          src={img10}
          alt=""
          loading="lazy"
          animate={{ y: [0, 15, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-20 size-24 rounded-2xl object-cover shadow-lg hidden lg:block opacity-80"
        />
        
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-sm font-bold tracking-[0.3em] text-tomato"
          >
            ORDER NOW
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-type mt-6 text-[15vw] leading-[0.85] text-charcoal sm:text-[10vw] lg:text-[8vw]"
          >
            CRAVING
            <br />
            <span className="text-tomato">DELIVERED.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-charcoal/80 sm:text-2xl"
          >
            Get your favourite ice cream, burgers, pizza, poutine, 
            and everything else delivered right to your door.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 space-y-4"
          >
            <a
              href={CONTACT.doordashLink}
              target="_blank"
              rel="noopener noreferrer"
              className="grain group flex items-center justify-center gap-4 rounded-full bg-tomato px-12 py-6 font-display text-lg font-bold tracking-[0.2em] text-cream shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-barn sm:text-xl"
            >
              <ShoppingBag className="size-6" />
              ORDER WITH DOORDASH
              <ArrowRight className="size-6 transition-transform group-hover:translate-x-2" />
            </a>

            <a
              href={CONTACT.valleyEatsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="grain group flex items-center justify-center gap-4 rounded-full bg-fresh px-12 py-6 font-display text-lg font-bold tracking-[0.2em] text-cream shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-fresh/80 sm:text-xl"
            >
              <ShoppingBag className="size-6" />
              ORDER WITH VALLEY EATS
              <ArrowRight className="size-6 transition-transform group-hover:translate-x-2" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-charcoal/70"
          >
            <div className="flex items-center gap-2">
              <Clock className="size-5 text-fresh" />
              <span>{CONTACT.days} · {CONTACT.hours}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="size-5 text-fresh" />
              <a href={CONTACT.phoneHref} className="hover:text-tomato transition-colors">
                {CONTACT.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="size-5 text-fresh" />
              <span>{CONTACT.street}, {CONTACT.city}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU CAN ORDER */}
      <section className="bg-warm px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-sm font-bold tracking-[0.3em] text-tomato"
            >
              ON THE MENU
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-type mt-6 text-[10vw] leading-[0.9] text-charcoal sm:text-6xl lg:text-7xl"
            >
              EVERYTHING
              <br />
              YOU LOVE.
            </motion.h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ContentCard
              title="ICE CREAM"
              description="Soft serve, sundaes, thick milkshakes — the classics that never disappoint."
              variant="cream"
              delay={0}
            />
            <ContentCard
              title="BURGERS"
              description="Juicy, fresh, and grilled to perfection. Classic comfort food done right."
              variant="tomato"
              delay={0.08}
            />
            <ContentCard
              title="PIZZA"
              description="Cheese, pepperoni, all-dressed, Canadian — hot and delicious every time."
              variant="sunny"
              delay={0.16}
            />
            <ContentCard
              title="POUTINE"
              description="Loaded with gravy, curds, and toppings. A Canadian favourite."
              variant="cocoa"
              delay={0.24}
            />
            <ContentCard
              title="SANDWICHES & SUBS"
              description="Fresh ingredients, bold flavours, satisfying portions."
              variant="fresh"
              delay={0.32}
            />
            <ContentCard
              title="FRIES & DRINKS"
              description="Crispy fries, cold drinks, and all the sides you need."
              variant="tomato"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* FOOD GALLERY */}
      <section className="bg-cream px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hero-type text-[10vw] leading-[0.9] text-charcoal sm:text-5xl lg:text-6xl"
            >
              SEE WHAT'S
              <br />
              <span className="text-tomato">WAITING FOR YOU.</span>
            </motion.h3>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
            {[img7, img8, img9, img10, img11].map((imgSrc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.08, zIndex: 10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="aspect-square overflow-hidden rounded-2xl shadow-md"
              >
                <img
                  src={imgSrc}
                  alt={`Food from the barn ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
