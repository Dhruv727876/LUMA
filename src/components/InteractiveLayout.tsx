import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  {
    id: '01',
    title: 'The Great Hall',
    description: 'A 24-foot ceiling masterpiece with hand-carved marble accents and panoramic floor-to-ceiling vistas.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
    details: ['Marble Floors', '24ft Ceilings', 'Custom Lighting']
  },
  {
    id: '02',
    title: 'Celestial Suite',
    description: 'The primary suite features a private terrace, a midnight spa, and a bespoke dressing chamber.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
    details: ['Private Terrace', 'Spa Bathroom', 'Electric Shutters']
  },
  {
    id: '03',
    title: 'Horizon Deck',
    description: 'An infinity-edge sanctuary that seamlessly blends the azure pool with the Hyderabad skyline.',
    image: 'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=2070&auto=format&fit=crop',
    details: ['Infinity Pool', 'Dusk Lighting', 'Outdoor Lounge']
  },
  {
    id: '04',
    title: 'Aura Cinema',
    description: 'State-of-the-art Dolby Atmos theater with acoustic calibration and plush velvet seating.',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format&fit=crop',
    details: ['120" Screen', 'Atmos Sound', 'Leather Seating']
  }
];

export function InteractiveLayout() {
  const [activeItem, setActiveItem] = useState(0);
  
  return (
    <section 
      className="relative min-h-screen bg-[#0A0A0A] flex items-center justify-center overflow-hidden"
      id="exploration"
    >
      {/* Background Container */}
      <div className="absolute inset-0 w-full h-full">
        {/* Immersive Background Images with cross-fade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={NAV_ITEMS[activeItem].image} 
              alt={NAV_ITEMS[activeItem].title}
              className="w-full h-full object-cover brightness-[0.4]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-[1440px] px-6 md:px-16 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-20">
          
          {/* Left: Interactive Navigation */}
          <div className="flex flex-col gap-8">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-accent font-body text-[11px] tracking-[0.4em] uppercase"
            >
              INTERACTIVE LAYOUT
            </motion.p>
            
            <div className="flex flex-col gap-6">
              <h2 className="text-white font-display italic text-4xl mb-4">Immersive Navigation</h2>
              {NAV_ITEMS.map((item, index) => (
                <button
                  key={item.id}
                  onMouseEnter={() => setActiveItem(index)}
                  className={cn(
                    "group flex items-start gap-6 transition-all duration-500",
                    activeItem === index ? "opacity-100 translate-x-4" : "opacity-30 hover:opacity-100"
                  )}
                >
                  <span className="font-display italic text-[24px] text-accent mt-2">
                    {item.id}
                  </span>
                  <div className="flex flex-col items-start text-left">
                    <h3 className="font-display italic text-[32px] md:text-[48px] text-white leading-tight">
                      {item.title}
                    </h3>
                    {activeItem === index && (
                      <motion.div 
                        layoutId="nav-details"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 max-w-sm"
                      >
                        <p className="font-body text-[16px] text-white/70 leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Detailed Specification Table (Refined) */}
          <div className="hidden lg:block">
            <motion.div
              key={activeItem + "-details"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-sm"
            >
              <h4 className="text-accent font-body text-[10px] tracking-[0.4em] uppercase mb-10">
                Room Specifications
              </h4>
              <div className="space-y-8">
                {NAV_ITEMS[activeItem].details.map((detail, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-white/40 font-body text-[14px]">{detail}</span>
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                ))}
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="mt-12 w-full py-4 bg-accent text-white font-body text-[12px] tracking-[0.2em] uppercase"
              >
                Explore in 360°
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Overlay Grain Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay" 
            style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
    </section>
  );
}
