import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Navbar() {
  const { scrollY } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.85)']
  );

  const textColor = useTransform(
    scrollY,
    [0, 80],
    ['#FFFFFF', '#1A1A1A']
  );

  const borderColor = useTransform(
    scrollY,
    [0, 80],
    ['rgba(201, 169, 110, 0)', 'rgba(201, 169, 110, 1)']
  );

  const blur = useTransform(
    scrollY,
    [0, 80],
    ['blur(0px)', 'blur(12px)']
  );

  return (
    <motion.nav
      style={{ 
        backgroundColor, 
        borderBottomColor: borderColor, 
        borderBottomWidth: 1, 
        borderBottomStyle: 'solid',
        backdropFilter: blur,
        WebkitBackdropFilter: blur
      }}
      className="fixed top-0 left-0 w-full z-50 transition-[background-color] duration-300"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 h-20 flex items-center justify-between">
        <motion.div style={{ color: textColor }} className="font-display text-[28px] italic">
          {siteConfig.name}
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              style={{ color: textColor }}
              className="font-body text-[13px] uppercase tracking-widest hover:text-accent transition-colors"
            >
              {link.title}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:block">
          <motion.a
            href="#contact"
            whileHover={{ backgroundColor: '#C9A96E', color: '#FFFFFF' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="border border-accent text-accent font-body text-[13px] uppercase tracking-widest px-6 py-3 transition-colors inline-block"
          >
            {siteConfig.hero.cta}
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <motion.div style={{ color: textColor }}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-white px-6 w-full absolute top-20 left-0 flex flex-col gap-6 items-start py-0 border-b border-accent/20 shadow-xl"
        style={{ paddingBottom: isMobileMenuOpen ? '2rem' : '0', paddingTop: isMobileMenuOpen ? '2rem' : '0' }}
      >
        {siteConfig.nav.map((link) => (
          <a
            key={link.title}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-body text-[13px] text-primary uppercase tracking-widest"
          >
            {link.title}
          </a>
        ))}
        <a 
          href="#contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="border border-accent text-accent font-body text-[13px] uppercase tracking-widest px-6 py-3 w-full text-center"
        >
          {siteConfig.hero.cta}
        </a>
      </motion.div>
    </motion.nav>
  );
}
