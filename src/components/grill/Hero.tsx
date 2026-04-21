import { motion } from "framer-motion";
import { Flame, ArrowRight, MapPin } from "lucide-react";
import heroFlames from "@/assets/hero-flames.jpg";
import { Embers } from "./Embers";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroFlames}
          alt="Flame grill embers"
          className="h-full w-full object-cover opacity-60"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
      </div>

      <Embers count={25} />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-8 backdrop-blur-sm"
        >
          <Flame className="h-3.5 w-3.5 text-primary flicker" />
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Parow • Cape Town</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-balance"
        >
          CAPE TOWN'S <br />
          <span className="text-gradient-fire">BOLDEST</span> <br />
          GRILLED FOOD
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground text-balance"
        >
          Gatsbys, pizzas, ribs, steaks and flame-grilled favorites
          <span className="text-foreground"> made to hit hard.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#order"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-fire px-8 py-4 font-semibold text-primary-foreground shadow-fire hover:scale-105 transition-transform"
          >
            Order Delivery <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#order"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur-sm px-8 py-4 font-semibold hover:bg-card/80 transition-colors"
          >
            Order Collection
          </a>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full px-6 py-4 font-semibold text-foreground/80 hover:text-primary transition-colors"
          >
            View Menu →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex items-center justify-center gap-8 text-xs uppercase tracking-widest text-muted-foreground"
        >
          <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-primary" /> Parow East</span>
          <span className="hidden sm:flex items-center gap-2"><Flame className="h-3.5 w-3.5 text-primary" /> Open Daily</span>
          <span className="flex items-center gap-2"><span className="text-gold">★ 3.5</span> 163 Reviews</span>
        </motion.div>
      </div>
    </section>
  );
};
