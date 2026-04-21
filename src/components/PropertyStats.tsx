import { motion } from 'framer-motion';

export function PropertyStats() {
  const stats = [
    { value: "4,200", label: "sq ft" },
    { value: "5", label: "Bedrooms" },
    { value: "4", label: "Bathrooms" },
    { value: "2025", label: "Ready Possession" },
    { value: "₹8.5 Cr", label: "Starting Price" },
  ];

  return (
    <section className="w-full bg-white py-10 border-y border-y-accent">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between divide-y md:divide-y-0 md:divide-x divide-accent/30">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-1 w-full text-center py-6 md:py-0 flex flex-col items-center justify-center"
          >
            <h3 className="font-display text-[48px] text-primary font-bold leading-none mb-2">
              {stat.value}
            </h3>
            <p className="font-body text-[11px] text-muted tracking-widest uppercase">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
