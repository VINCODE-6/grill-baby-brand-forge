import { useEffect, useState } from "react";
import { Flame, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#why", label: "Why Us" },
  { href: "#about", label: "About" },
  { href: "#location", label: "Location" },
  { href: "#order", label: "Order" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-fire shadow-ember">
            <Flame className="h-5 w-5 text-primary-foreground flicker" />
          </span>
          <span className="font-display text-2xl tracking-wider">
            GRILL <span className="text-gradient-fire">BABY</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:0870770429"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-fire px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-ember hover:scale-105 transition-transform"
        >
          Order Now
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="container flex flex-col gap-4 py-6">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base uppercase tracking-widest text-muted-foreground hover:text-primary">
                  {l.label}
                </a>
              ))}
              <a href="tel:0870770429" className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-fire px-5 py-3 font-semibold text-primary-foreground">
                Call to Order
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
