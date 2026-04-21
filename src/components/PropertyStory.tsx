import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ProgressiveImage } from './ProgressiveImage';

export function PropertyStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section id="properties" ref={containerRef} className="min-h-[90vh] flex flex-col lg:flex-row bg-white relative overflow-hidden">
      <div className="w-full lg:w-[55%] h-[50vh] lg:h-auto overflow-hidden relative">
        <motion.div style={{ y, height: '130%', width: '100%' }} className="absolute -top-[15%]">
          <ProgressiveImage
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6e9gqVFGOQ8quVhyAvn5x-BQNfPQdIbACgJoCStpOiI7QbEb7H9Rfl76QdisdGWl3Vgt4JLZlDr07-zkVMPVDjkm8uqeYJv5YmDQTCXjiX26bfySmsr_C35XQKIoBFG-LAfx63FRBq0rkJSYRAE0HNZQbCuAY2x9u1vJhFQhnztn00_OnDKejo3fFmvMYUJLZL2Bj9wa1ZFFsMUZg6VET7k9GtYrsRN8dooHXbE-Y8zPAg6bLiG8dAuQ4R4VEnabXWKMY3ukL72-q"
            alt="Luxury Interior"
            className="w-full h-full"
          />
        </motion.div>
      </div>
      
      <div className="w-full lg:w-[45%] flex flex-col justify-center px-8 lg:px-16 py-20">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 40 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="h-[1px] bg-accent mb-6"
        />
        
        <motion.p
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-body text-[10px] text-accent uppercase tracking-[0.4em] mb-4"
        >
          THE PROPERTY
        </motion.p>
        
        <h2 className="font-display text-[40px] md:text-[56px] text-primary italic leading-[1.1] mb-6">
          {"Crafted For Those\nWho Demand The Finest".split('\n').map((line, i) => (
            <motion.span
              key={i}
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.7 }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h2>
        
        <motion.p
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-body text-[16px] text-muted leading-[1.8] mb-10 max-w-md"
        >
          Every detail of this residence has been meticulously curated to offer an unparalleled living experience. Featuring panoramic views and uncompromising quality.
        </motion.p>

        <motion.a
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="group text-accent font-body text-[13px] tracking-widest w-fit overflow-hidden"
          href="#"
        >
          <span className="relative inline-block pb-1 border-b border-transparent group-hover:border-accent transition-colors duration-300">
            View Full Details →
          </span>
        </motion.a>
      </div>
    </section>
  );
}
