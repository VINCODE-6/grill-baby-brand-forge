import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame } from "lucide-react";
import gatsby from "@/assets/food-gatsby.jpg";
import pizza from "@/assets/food-pizza.jpg";
import ribs from "@/assets/food-ribs.jpg";
import steak from "@/assets/food-steak.jpg";
import fullhouse from "@/assets/food-fullhouse.jpg";
import salad from "@/assets/food-salad.jpg";
import { cn } from "@/lib/utils";

type Category = "All" | "Pizza" | "Gatsbys" | "Steaks" | "Sides";

const items = [
  { name: "Pizza Tokyo Drift", desc: "Drifting flavors of garlic, chilli and smoked mozzarella on a wood-fired base.", price: "R145", img: pizza, cat: "Pizza", hot: true },
  { name: "Masala Steak Gatsby", desc: "Iconic Cape masala steak loaded into a foot-long roll with crispy chips.", price: "R165", img: gatsby, cat: "Gatsbys", hot: true },
  { name: "Chargrilled Rump Gatsby", desc: "Flame-grilled rump strips, melted cheese, signature peri sauce.", price: "R175", img: gatsby, cat: "Gatsbys" },
  { name: "Masala Ribs & Chips", desc: "Sticky-glazed ribs, fall-off-the-bone, with golden chips.", price: "R155", img: ribs, cat: "Steaks", hot: true },
  { name: "Steak Full House Gatsby", desc: "The legend. Steak, eggs, cheese, polony, chips. All in.", price: "R185", img: fullhouse, cat: "Gatsbys" },
  { name: "Chargrilled Rump Steak", desc: "300g prime rump, herb butter, char marks for days.", price: "R195", img: steak, cat: "Steaks" },
  { name: "Coleslaw & Green Salad", desc: "Crisp, fresh, made daily. The cool to the fire.", price: "R55", img: salad, cat: "Sides" },
];

const cats: Category[] = ["All", "Pizza", "Gatsbys", "Steaks", "Sides"];

export const Menu = () => {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <section id="menu" className="relative py-24 md:py-32">
      <div className="container">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary"
          >
            <Flame className="h-3.5 w-3.5 flicker" /> The Menu
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl mt-4 text-balance"
          >
            BUILT FOR <span className="text-gradient-fire">FLAVOR</span>
          </motion.h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Every plate fired over open flame. Pick your weapon.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm uppercase tracking-wider transition-all",
                  active === c
                    ? "bg-gradient-fire text-primary-foreground shadow-ember"
                    : "border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.article
                layout
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-card border border-border hover:border-primary/40 shadow-card transition-all hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    width={896}
                    height={672}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  {item.hot && (
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-gradient-fire px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow-ember">
                      <Flame className="h-3 w-3" /> Hot
                    </span>
                  )}
                  <span className="absolute top-3 right-3 rounded-full bg-background/80 backdrop-blur px-3 py-1 text-sm font-bold text-gold border border-gold/30">
                    {item.price}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl tracking-wide">{item.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  <a
                    href="#order"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-glow transition-colors"
                  >
                    Order Now <span aria-hidden>→</span>
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
