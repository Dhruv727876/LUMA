import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useCountUp } from '../hooks/useCountUp';

function AnimatedStat({ value, suffix, label, delay }: { value: number, suffix: string, label: string, delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useCountUp(value, 2500, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col items-center justify-center text-center px-4"
    >
      <h3 className="font-display text-[64px] md:text-[80px] text-accent font-bold leading-none mb-4">
        {suffix === '+' && suffix}{count}{suffix !== '+' && suffix}
      </h3>
      <p className="font-body text-[12px] text-white/50 uppercase tracking-widest max-w-[160px] mx-auto">
        {label}
      </p>
    </motion.div>
  );
}

export function MarketStats() {
  const stats = [
    { value: 34, suffix: "%", label: "Property Value Appreciation" },
    { value: 12, suffix: " Days", label: "Avg Time On Market" },
    { value: 89, suffix: "%", label: "Sold Above Asking Price" },
    { value: 500, suffix: "+", label: "Happy Homeowners" },
  ];

  return (
    <section className="w-full bg-dark-section py-28 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col items-center">
        <h2 className="font-display text-[48px] md:text-[64px] text-white italic text-center mb-24">
          {"The Numbers Speak\nFor Themselves".split('\n').map((line, i) => (
            <motion.span
              key={i}
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-y-16 lg:gap-y-0 divide-y lg:divide-y-0 lg:divide-x divide-accent/30">
          {stats.map((stat, i) => (
            <AnimatedStat
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 0.15 + 0.3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
