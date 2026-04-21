import { motion } from "framer-motion";
import { Bike, ShoppingBag, MessageCircle } from "lucide-react";
import { Embers } from "./Embers";

const opts = [
  { icon: Bike, title: "Order Delivery", desc: "Hot, fast, brought to your door.", cta: "Start Order", href: "tel:0870770429" },
  { icon: ShoppingBag, title: "Order Collection", desc: "Skip the queue. Pick up ready.", cta: "Collect Now", href: "tel:0870770429" },
  { icon: MessageCircle, title: "WhatsApp Order", desc: "Quick chat. Quick fire.", cta: "Open WhatsApp", href: "https://wa.me/27870770429" },
];

export const Order = () => {
  return (
    <section id="order" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-fire opacity-[0.06]" />
      <Embers count={15} />

      <div className="container relative">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Order Now</span>
          <h2 className="font-display text-5xl md:text-7xl mt-4 text-balance">
            HUNGRY? <span className="text-gradient-fire">LET'S GO.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Three easy ways to get Grill Baby in your hands.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {opts.map((o, i) => (
            <motion.a
              key={o.title}
              href={o.href}
              target={o.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-8 hover:border-primary/40 hover:-translate-y-2 transition-all shadow-card"
            >
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-fire shadow-ember">
                  <o.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-display text-3xl">{o.title}</h3>
                <p className="mt-2 text-muted-foreground">{o.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-primary font-semibold group-hover:text-primary-glow">
                  {o.cta} <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
