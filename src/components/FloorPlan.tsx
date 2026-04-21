import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProgressiveImage } from './ProgressiveImage';

const hotspots = [
  { id: 'living', name: 'Living Room', x: 30, y: 40, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6e9gqVFGOQ8quVhyAvn5x-BQNfPQdIbACgJoCStpOiI7QbEb7H9Rfl76QdisdGWl3Vgt4JLZlDr07-zkVMPVDjkm8uqeYJv5YmDQTCXjiX26bfySmsr_C35XQKIoBFG-LAfx63FRBq0rkJSYRAE0HNZQbCuAY2x9u1vJhFQhnztn00_OnDKejo3fFmvMYUJLZL2Bj9wa1ZFFsMUZg6VET7k9GtYrsRN8dooHXbE-Y8zPAg6bLiG8dAuQ4R4VEnabXWKMY3ukL72-q' },
  { id: 'kitchen', name: 'Chef Kitchen', x: 65, y: 35, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBE_kJiCI_jU5G5OmrTKqSb95SfAarNQwlrqPFd596TEzli4sxH3sqbvfOb6-dOnTPf0XKcsije19tGm9jxkm8__UxY1pwyPlzswVlpkjw99BNbBKzJdbcGE8QEsfzhb0FuFb4724jcjNS6iuDIXUpS5yBFGzjKycc8BRk7wSik8ZDxTcTIehrmmRIHZElMylA-wR33f0gaTrydYdTLEU_PnupA0dXQROKmu-FJ1LKsSkr9HquyXr_hu9KMd1P0ThF17oCsj1a1GPcZ' },
  { id: 'master', name: 'Master Suite', x: 75, y: 70, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjWHUCKKoZqknRUEcBWKWzz8Qh3E2icBTaa1IwZgtiJz5MSualKXTSXJVyU0q22s5MlbCIbnR1M4hnhbrx0gQRAq8HrT3y5BWVry32LcPKf_DzdvpG0vBB18qE81iGlCVaDZO0E899MmExaaGhcJoiFBhgcHPRpPO953ZEfOQELHqwJ8jfwtinj-Vphqf7rqMYDVDA7fkFDSmn9BFVboL0tCfHscCV07CQ7loL_lPEnou2-AoV3JHGkVOzJzLUF2KQ-urDfzUyRhQL' },
  { id: 'outdoor', name: 'Pool Deck', x: 20, y: 80, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn5Mcow2VEaoeOAHq_fbKbJ60pyq76sbovvGe4W7THrzkDe6g-x7C1Pc_WQUAo9tM2QMAzRiD8PtfIYPp3tv6GafJztV7t1NU-D7rG3VuMubdUMO6FVQQO9AeZLMsD-cKIAxHbaVQsiael6211-NYK7_PH5F5V9qPQJ__8Ff9C45fQgxlwo1FM24uNMLaWexurA2v6hqMSbShBHgvlv7Ddfm0QdX8Qngf1usJJf8hILouz5h09re3Th2ikngfPz6O05PB8c-_ZMzJm' }
];

export function FloorPlan() {
  const [activeId, setActiveId] = useState(hotspots[0].id);

  const activeHotspot = hotspots.find(h => h.id === activeId) || hotspots[0];

  return (
    <section className="py-24 px-6 md:px-16 w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        
        {/* Left: Interactive Floor Plan */}
        <div className="w-full md:w-1/2 relative bg-gray-50 border border-black/5 p-8 flex items-center justify-center min-h-[500px]">
          {/* Abstract SVG Floor Plan representing the Villa */}
          <svg viewBox="0 0 100 100" className="w-full h-auto text-gray-300 drop-shadow-sm max-w-[400px]">
             {/* Walls / Layout */}
             <path d="M 10,10 L 90,10 L 90,90 L 10,90 Z" fill="none" stroke="currentColor" strokeWidth="2" />
             <path d="M 50,10 L 50,50 L 90,50" fill="none" stroke="currentColor" strokeWidth="2" />
             <path d="M 10,60 L 60,60 L 60,90" fill="none" stroke="currentColor" strokeWidth="2" />
             {/* Doors/Windows cuts could be added, but minimal abstract works well */}
          </svg>

          {/* Hotspots */}
          {hotspots.map((hotspot) => (
              <motion.div
              key={hotspot.id}
              className="absolute w-12 h-12 -ml-6 -mt-6 rounded-full flex items-center justify-center cursor-pointer group z-10"
              style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
              onHoverStart={() => setActiveId(hotspot.id)}
              onClick={() => setActiveId(hotspot.id)}
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-500 ease-out ${activeId === hotspot.id ? 'bg-accent scale-150' : 'bg-black/40 group-hover:bg-accent/70 group-hover:scale-125'}`} />
              <div className={`absolute inset-0 rounded-full border border-accent animate-ping opacity-0 ${activeId === hotspot.id ? 'opacity-30' : ''}`} style={{ animationDuration: '2s' }} />
            </motion.div>
          ))}
        </div>

        {/* Right: Preview Image Details */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center h-[500px]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-body text-[11px] tracking-[0.4em] uppercase mb-4"
          >
            INTERACTIVE LAYOUT
          </motion.p>
          <h2 className="font-display italic text-[40px] md:text-[56px] leading-[1.1] text-primary mb-8" style={{ paddingBottom: '0.1em' }}>
            Immersive Navigation
          </h2>
          
          <div className="w-full h-full relative overflow-hidden bg-gray-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0"
              >
                <ProgressiveImage
                  src={activeHotspot.img}
                  alt={activeHotspot.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Name */}
                <div className="absolute bottom-6 left-6 px-6 py-3 bg-white/90 backdrop-blur-md">
                  <p className="font-display text-xl tracking-wide">{activeHotspot.name}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
