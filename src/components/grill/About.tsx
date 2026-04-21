import { motion } from "framer-motion";
import flames from "@/assets/hero-flames.jpg";

export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card border border-border"
        >
          <img src={flames} alt="Grill Baby kitchen flames" loading="lazy" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur px-4 py-2 text-xs uppercase tracking-widest border border-border">
              <span className="h-2 w-2 rounded-full bg-primary flicker" />
              Fired Up Since Day One
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary">The Story</span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 leading-[0.95] text-balance">
            BORN ON THE STREETS OF <span className="text-gradient-fire">PAROW.</span>
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Grill Baby started with one mission: bring real flame, real flavor, and real Cape Town
              soul to every plate. No frozen shortcuts. No fake hype. Just straight fire.
            </p>
            <p>
              From late-night Gatsbys after work, to Sunday family ribs, we've become the
              go-to spot in <span className="text-foreground font-semibold">Parow East</span> — feeding
              the community one stacked roll at a time.
            </p>
            <p className="text-foreground font-semibold">
              This is street food, elevated. This is Grill Baby.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { n: "10K+", l: "Plates Served" },
              { n: "163", l: "Reviews" },
              { n: "100%", l: "Flame Grilled" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-border bg-card/50 p-4 text-center">
                <div className="font-display text-3xl text-gradient-fire">{s.n}</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
