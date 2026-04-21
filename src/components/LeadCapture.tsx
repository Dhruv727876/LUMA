import { motion } from 'framer-motion';
import { useState } from 'react';
import { CosmicParallaxBg } from './ui/parallax-cosmic-background';
import { siteConfig } from '@/config/site';

function FloatingInput({ label, type = "text", isTextArea = false }: { label: string, type?: string, isTextArea?: boolean }) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const active = isFocused || value.length > 0;

  return (
    <div className="relative mb-10 w-full group">
      <motion.label
        initial={false}
        animate={{
          y: active ? -28 : 0,
          scale: active ? 0.85 : 1,
          color: isFocused ? '#C9A96E' : 'rgba(255, 255, 255, 0.4)'
        }}
        className="absolute left-0 top-0 origin-left font-body pointer-events-none transition-colors duration-300 z-10"
      >
        {label}
      </motion.label>
      
      {isTextArea ? (
        <textarea
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setValue(e.target.value)}
          className="w-full bg-transparent border-b border-white/20 focus:border-accent outline-none pb-4 font-body text-[16px] text-white resize-none transition-all duration-300"
          rows={2}
        />
      ) : (
        <input
          type={type}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setValue(e.target.value)}
          className="w-full bg-transparent border-b border-white/20 focus:border-accent outline-none pb-4 font-body text-[16px] text-white transition-all duration-300"
        />
      )}
      <motion.div 
        className="absolute bottom-0 left-0 h-[1px] bg-accent"
        initial={{ width: 0 }}
        animate={{ width: isFocused ? '100%' : '0%' }}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}

export function LeadCapture() {
  const subParts = ["Vision", "Heritage", "Exclusivity"];

  return (
    <section id="contact" className="w-full relative py-32 overflow-hidden min-h-[900px] flex items-center bg-[#090A0F]">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <CosmicParallaxBg 
          head={siteConfig.name} 
          text={`${subParts.join(', ')}`} 
          loop={true}
          showContent={false}
          className="opacity-30"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/40" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          
          {/* Left Column: Animating Brand Tokens */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="mb-20">
              <h2 id="title" className="!text-left font-display italic !text-[70px] md:!text-[140px] text-white leading-none !tracking-[0.1em] mb-12">
                {siteConfig.name}
              </h2>
              <div id="subtitle" className="flex flex-col gap-8">
                {subParts.map((part, index) => (
                  <div key={index} className="!text-left font-body !text-[12px] md:!text-[16px] !tracking-[0.4em] text-white/50 uppercase">
                    <span className={`subtitle-part-${index + 1} inline-block`}>{part}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="h-[1px] w-full bg-white/10" />
          </motion.div>

          {/* Right Column: Glassmorphic Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[560px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-10 md:p-16 rounded-sm shadow-2xl relative overflow-hidden">
              {/* Accents inside the card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl -z-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 blur-3xl -z-10" />

              <h3 className="text-white font-display text-[28px] italic mb-12">Inquiry Form</h3>
              
              <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                  <FloatingInput label="Full Name" />
                  <FloatingInput label="Phone Number" type="tel" />
                </div>
                <FloatingInput label="Email Address" type="email" />
                <FloatingInput label="Specific Interest / Message" isTextArea={true} />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-[64px] bg-accent text-white font-body text-[13px] tracking-[0.4em] uppercase mt-4 mb-8 flex items-center justify-center relative overflow-hidden group"
                >
                  <span className="relative z-10">{siteConfig.contact.buttonText}</span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </motion.button>

                <div className="flex items-center justify-center gap-3 opacity-40">
                  <span className="text-[14px]">🔒</span>
                  <p className="font-body text-[11px] tracking-[0.1em] text-white uppercase">
                    Your Privacy is our top priority
                  </p>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
      
    </section>
  );
}
