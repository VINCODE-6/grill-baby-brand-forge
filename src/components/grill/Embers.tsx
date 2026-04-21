import { useMemo } from "react";

export const Embers = ({ count = 20 }: { count?: number }) => {
  const embers = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 4 + Math.random() * 4,
        size: 2 + Math.random() * 4,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {embers.map((e) => (
        <span
          key={e.id}
          className="ember-rise absolute bottom-0 rounded-full bg-primary"
          style={{
            left: `${e.left}%`,
            width: e.size,
            height: e.size,
            animationDelay: `${e.delay}s`,
            animationDuration: `${e.duration}s`,
            boxShadow: "0 0 8px hsl(var(--primary)), 0 0 16px hsl(var(--ember))",
          }}
        />
      ))}
    </div>
  );
};
