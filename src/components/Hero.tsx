import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden flex items-center justify-center">
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        initial={{ scale: 1.08 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Modern_villa_cropped.mp4" type="video/mp4" />
      </motion.video>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.65)]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] px-6 md:px-16 mt-32 flex flex-col items-start text-left">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-white/60 font-body text-[11px] tracking-[0.4em] uppercase mb-4"
        >
          {siteConfig.hero.subtitle}
        </motion.p>

        <div className="flex flex-col items-start mb-6">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-[56px] md:text-[100px] lg:text-[120px] font-display italic text-white leading-[1.05] tracking-tight"
            >
              {siteConfig.hero.title}
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-[56px] md:text-[100px] lg:text-[120px] font-display italic text-white leading-[1.05] tracking-tight"
            >
              {siteConfig.hero.titleItalic}
            </motion.h1>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="font-body text-[16px] text-white/50 mb-10 max-w-lg"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <motion.a
            href="#gallery"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-black h-[48px] px-8 font-body text-[13px] tracking-widest uppercase flex items-center justify-center cursor-pointer"
          >
            {siteConfig.hero.secondaryCta}
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-transparent border border-white text-white h-[48px] px-8 font-body text-[13px] tracking-widest uppercase flex items-center justify-center cursor-pointer"
          >
            {siteConfig.hero.cta}
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-[40px] bg-white opacity-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white h-1/2" />
        </motion.div>
        <p className="text-white font-body text-[10px] tracking-widest opacity-70">
          SCROLL
        </p>
      </div>
    </section>
  );
}
