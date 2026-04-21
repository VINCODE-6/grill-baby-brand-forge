import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame } from "lucide-react";

export const StickyOrder = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#order"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-fire px-6 py-4 font-semibold text-primary-foreground shadow-fire hover:scale-105 transition-transform"
        >
          <Flame className="h-5 w-5 flicker" />
          Order Now
        </motion.a>
      )}
    </AnimatePresence>
  );
};
