import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Properties', href: '#properties' },
    { name: 'Story', href: '#story' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Neighborhood', href: '#neighbourhood' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ), 
      href: '#', 
      label: 'Instagram' 
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      ), 
      href: '#', 
      label: 'Twitter' 
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ), 
      href: '#', 
      label: 'LinkedIn' 
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ), 
      href: '#', 
      label: 'Github' 
    },
  ];

  return (
    <footer className="relative w-full bg-[#030303] overflow-hidden">
      {/* Immersive Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[500px] bg-gradient-radial from-[#C9A96E]/10 to-transparent opacity-30 blur-[120px] pointer-events-none" />
      
      {/* Large Watermark */}
      <div className="absolute -bottom-20 -left-20 text-white/[0.02] font-display text-[26vw] leading-none select-none pointer-events-none italic tracking-tighter">
        LUMA
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 pt-32 pb-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Brand Identity Column */}
          <div className="lg:col-span-5 flex flex-col items-start gap-10">
            <div>
              <h2 className="font-display italic text-[56px] text-white leading-none mb-6 tracking-tight flex items-baseline gap-2">
                LUMA
                <span className="w-2 h-2 rounded-full bg-[#C9A96E] animate-pulse" />
              </h2>
              <p className="font-body text-[16px] text-white/40 leading-relaxed max-w-sm">
                Redefining the horizon of luxury living through architectural vision and environmental harmony. 
                Your journey to the summit starts here.
              </p>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -4, backgroundColor: 'rgba(201, 169, 110, 0.1)', color: '#C9A96E', borderColor: 'rgba(201, 169, 110, 0.5)' }}
                  className="w-12 h-12 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center text-white/40 transition-all duration-500 ease-out"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-start-7 lg:col-span-3">
            <h3 className="font-body text-[12px] text-[#C9A96E] tracking-[0.6em] uppercase mb-10 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#C9A96E]/30" />
              Navigation
            </h3>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="font-body text-[15px] text-white/50 hover:text-white transition-colors duration-500 flex items-center group gap-2"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-[#C9A96E] transition-all duration-500" />
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mt-1 ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Location Column */}
          <div className="lg:col-span-3">
            <h3 className="font-body text-[12px] text-[#C9A96E] tracking-[0.6em] uppercase mb-10 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#C9A96E]/30" />
              Heritage HQ
            </h3>
            <div className="space-y-8">
              <div>
                <p className="font-body text-[15px] text-white/80 leading-relaxed">
                  The Crystal Spire, Penthouse 88<br />
                  Elite District, Dubai Marina<br />
                  United Arab Emirates
                </p>
              </div>
              <div>
                <a 
                  href="mailto:contact@luma-estate.com"
                  className="font-display italic text-[24px] text-white hover:text-[#C9A96E] transition-colors duration-500"
                >
                  contact@luma-estate.com
                </a>
                <p className="font-body text-[13px] text-white/40 mt-2 tracking-[0.1em]">
                  PRIVATE LINE: +971 4 888 0000
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Footer Divider */}
        <div className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mt-32 mb-12" />

        {/* Legal & Credits Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8">
            <p className="font-body text-[11px] text-white/30 tracking-[0.2em] uppercase">
              © 2026 Designed and developed by Dhruv
            </p>
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-4 py-2"
          >
            <span className="font-body text-[11px] text-white/30 group-hover:text-accent tracking-[0.4em] uppercase transition-all">Back to Top</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all duration-500">
              <ArrowUpRight size={16} className="text-white/40 group-hover:text-accent transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500" />
            </div>
          </button>

          <p className="font-body text-[11px] text-white/30 tracking-[0.3em] uppercase order-first md:order-last">
            powered by HRILAX
          </p>
        </div>
      </div>
      
      {/* Visual Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />
    </footer>
  );
}
