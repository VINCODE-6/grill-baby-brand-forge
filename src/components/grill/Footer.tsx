import { Flame, Instagram, Facebook, Twitter, Phone, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-secondary/40">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-fire shadow-ember">
                <Flame className="h-5 w-5 text-primary-foreground flicker" />
              </span>
              <span className="font-display text-2xl tracking-wider">
                GRILL <span className="text-gradient-fire">BABY</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Cape Town's boldest flame-grilled takeaway. Born in Parow, served with fire.
            </p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-wider">EXPLORE</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {["Menu", "Why Us", "About", "Location", "Order"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(" ", "")}`} className="hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-wider">CONTACT</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" /> 262 Voortrekker Rd, Parow East, Cape Town, 7501</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" /> <a href="tel:0870770429" className="hover:text-primary">087 077 0429</a></li>
              <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" /> Open Daily — closes 9 PM</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-wider">STAY HUNGRY</h4>
            <p className="mt-4 text-sm text-muted-foreground">Get drops, deals & flame-fresh updates.</p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:border-primary"
              />
              <button className="rounded-full bg-gradient-fire px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-ember hover:scale-105 transition-transform">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Grill Baby Parow. All rights reserved.</div>
          <div>Built with fire 🔥 in Cape Town</div>
        </div>
      </div>
    </footer>
  );
};
