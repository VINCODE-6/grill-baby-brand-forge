import { motion } from "framer-motion";
import { Flame, Zap, Sandwich, Leaf, Wallet } from "lucide-react";

const features = [
  { icon: Flame, title: "Flame Grilled Flavor", desc: "Real fire, real char, real flavor. No shortcuts." },
  { icon: Zap, title: "Fast Takeaway", desc: "In and out — fired up and ready when you arrive." },
  { icon: Sandwich, title: "Legendary Gatsbys", desc: "Cape Town's heaviest hitters, stacked sky high." },
  { icon: Leaf, title: "Fresh Ingredients", desc: "Daily prep. Local produce. Quality you taste." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Premium plates from R100 — R200. Real value." },
];

export const WhyUs = () => {
  return (
    <section id="why" className="relative py-24 md:py-32 bg-secondary/30 border-y border-border">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
            <Flame className="h-3.5 w-3.5 flicker" /> Why Grill Baby
          </span>
          <h2 className="font-display text-5xl md:text-7xl mt-4 text-balance">
            WE DON'T DO <span className="text-gradient-fire">BORING.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-card border border-border p-6 hover:border-primary/40 transition-all"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-fire shadow-ember mb-4">
                  <f.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl tracking-wide">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
