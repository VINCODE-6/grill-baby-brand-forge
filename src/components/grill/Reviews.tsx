import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Tariq M.", text: "The Masala Steak Gatsby is a religious experience. Cape Town legend status confirmed.", rating: 5 },
  { name: "Lerato K.", text: "Fast service, food is fire (literally). The ribs fall off the bone. Coming back weekly.", rating: 5 },
  { name: "James V.", text: "Best Gatsby in Parow, hands down. The Full House feeds two easily. Pure value.", rating: 4 },
  { name: "Ayesha P.", text: "Tokyo Drift pizza is unreal. Smoky, garlicky, chargrilled crust. 10/10.", rating: 5 },
];

export const Reviews = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-24 md:py-32 bg-secondary/30 border-y border-border overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Loved By Locals</span>
            <h2 className="font-display text-5xl md:text-6xl mt-4 leading-[0.95]">
              CAPE TOWN <span className="text-gradient-fire">APPROVED.</span>
            </h2>
            <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-border bg-gradient-card p-5 shadow-card">
              <div className="text-center">
                <div className="font-display text-5xl text-gold">3.5</div>
                <div className="flex justify-center mt-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className={`h-3.5 w-3.5 ${s <= 4 ? "fill-gold text-gold" : "text-muted"}`} />
                  ))}
                </div>
              </div>
              <div className="border-l border-border pl-4">
                <div className="font-semibold">Google Reviews</div>
                <div className="text-sm text-muted-foreground">163 reviews</div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-3xl border border-border bg-gradient-card p-8 md:p-10 shadow-card"
              >
                <Quote className="h-10 w-10 text-primary/30 mb-4" />
                <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 text-balance">
                  "{reviews[i].text}"
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{reviews[i].name}</div>
                    <div className="flex mt-1">
                      {Array.from({ length: reviews[i].rating }).map((_, k) => (
                        <Star key={k} className="h-3.5 w-3.5 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    {reviews.map((_, k) => (
                      <button
                        key={k}
                        onClick={() => setI(k)}
                        className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-1.5 bg-border"}`}
                        aria-label={`Review ${k + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
