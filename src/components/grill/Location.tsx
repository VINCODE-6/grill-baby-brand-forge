import { motion } from "framer-motion";
import { MapPin, Phone, Navigation, Clock } from "lucide-react";

export const Location = () => {
  return (
    <section id="location" className="relative py-24 md:py-32">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Find Us</span>
          <h2 className="font-display text-5xl md:text-7xl mt-4">
            COME GET <span className="text-gradient-fire">FIRED UP</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-border shadow-card aspect-[4/3] lg:aspect-auto"
          >
            <iframe
              title="Grill Baby Parow location"
              src="https://www.google.com/maps?q=262+Voortrekker+Rd,+Parow+East,+Cape+Town,+7501&output=embed"
              className="h-full w-full grayscale-[0.4] contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border bg-gradient-card p-8 md:p-10 shadow-card"
          >
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-fire shadow-ember">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Address</div>
                  <div className="mt-1 font-display text-2xl">Grill Baby Parow</div>
                  <div className="text-muted-foreground">262 Voortrekker Rd, Parow East, Cape Town, 7501</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-fire shadow-ember">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Call</div>
                  <a href="tel:0870770429" className="mt-1 block font-display text-2xl hover:text-primary transition-colors">
                    087 077 0429
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-fire shadow-ember">
                  <Clock className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Hours</div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-semibold text-emerald-400">Open Now</span>
                    <span className="text-muted-foreground">— closes 9 PM</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href="tel:0870770429"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-fire px-6 py-3.5 font-semibold text-primary-foreground shadow-ember hover:scale-[1.02] transition-transform"
                >
                  <Phone className="h-4 w-4" /> Click to Call
                </a>
                <a
                  href="https://maps.google.com/?q=262+Voortrekker+Rd,+Parow+East,+Cape+Town"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card hover:border-primary/50 px-6 py-3.5 font-semibold transition-colors"
                >
                  <Navigation className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
