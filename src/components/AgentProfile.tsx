import { useState } from 'react';
import { motion } from 'framer-motion';
import { DestinationCard } from './ui/destination-card';

export function AgentProfile() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <section className="w-full bg-[#fcfcfc] py-32 px-6 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
        
        {/* Left: Branding & Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start relative">
          {/* Decorative Backtext */}
          <span className="absolute -top-20 -left-10 text-[180px] font-display text-accent/5 select-none pointer-events-none">
            Expert
          </span>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <p className="text-accent font-body text-[12px] tracking-[0.5em] uppercase mb-6">Expertise</p>
            <h2 className="font-display text-[48px] md:text-[64px] text-primary leading-[1.1] mb-10 italic">
              Experience Personal <br />
              Consultation
            </h2>
            
            <div className="w-32 h-[1px] bg-accent mb-10" />
            
            <div className="max-w-md">
              <p className="font-body text-[18px] text-muted leading-relaxed italic mb-12">
                "Finding a home at LUMA is more than a transaction; it's the beginning of a legacy. I'm here to ensure your journey is as exceptional as your future address."
              </p>
              
              <motion.button 
                whileHover={{ x: 10 }}
                className="group flex items-center gap-4 text-primary font-body text-[13px] tracking-[0.3em] uppercase"
              >
                Schedule A Private Conversation 
                <span className="w-12 h-[1px] bg-primary group-hover:bg-accent group-hover:w-20 transition-all duration-500" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Right: The Profile Card */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="w-full max-w-[440px] h-[640px] relative"
          >
            {/* Background flourish */}
            <div className="absolute -inset-4 border border-accent/20 -z-10 translate-x-4 translate-y-4" />
            
            <DestinationCard
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBEPnnSDtZUeLROtDcRZr3vWdR9dNY4H6cFJowUc1_DsUy2PQX-vWmmCI90LhZVMcGbiAlLLJbAiLYqEfvqocsZE74_TzS649vUQjvKDFVFYFvHpEmOVRYUENni6Cl3-KzTm33IFfn9VQ63bMkGxqpN2M0SyQ4tha6TNdY64OqZd_9SUtyxB4p4tpheZDn4zj3pNPIB_ZH2qdfml3odxMZuKSl96Wz5D2A_hjBYnB86hmlA_FF8CNN2kPdW2I9dzCqTagETMeYDXe_p"
              category="Senior Consultant"
              title="Arjun Mehta"
              isLiked={isLiked}
              onLike={() => setIsLiked(!isLiked)}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
