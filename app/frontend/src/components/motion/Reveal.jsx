import { motion } from "framer-motion";

export const easeOutExpo = [0.16, 1, 0.3, 1];

export function LineMask({ children, delay = 0, className = "" }) {
  return (
    <span className={`mask-reveal ${className}`}>
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.05, ease: easeOutExpo, delay }}
        className="inline-block will-change-transform"
      >
        {children}
      </motion.span>
    </span>
  );
}

export function FadeUp({ children, delay = 0, y = 24, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease: easeOutExpo, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ChapterHead({ number, title, kicker }) {
  return (
    <div className="flex items-baseline gap-6 md:gap-10">
      <span className="font-mono text-xs md:text-sm text-muted-foreground">— {number}</span>
      <div>
        {kicker && <p className="mono-label">{kicker}</p>}
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight mt-2">{title}</h2>
      </div>
    </div>
  );
}

