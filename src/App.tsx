import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PropertyStats } from './components/PropertyStats';
import { PropertyStory } from './components/PropertyStory';
import { InteractiveLayout } from './components/InteractiveLayout';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { MarketStats } from './components/MarketStats';
import { Neighbourhood } from './components/Neighbourhood';
import { AgentProfile } from './components/AgentProfile';
import { LeadCapture } from './components/LeadCapture';
import { Footer } from './components/Footer';

import { useCustomCursor } from './hooks/useCustomCursor';
import { useScrollProgress } from './hooks/useScrollProgress';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const cursor = useCustomCursor();
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    // Artificial delay for preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Use a hack to hide scrollbar while preloader is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <div className="relative bg-white w-full min-h-screen">
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[60] origin-left"
        style={{ scaleX: scrollProgress }}
      />

      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-[8px] h-[8px] rounded-full bg-accent pointer-events-none z-[9999]"
        style={{
          x: cursor.x,
          y: cursor.y
        }}
      />

      <Preloader isLoading={isLoading} />
      <Navbar />

      <main>
        <section id="properties">
          <Hero />
          <PropertyStats />
          <PropertyStory />
        </section>
        <section id="explore">
          <InteractiveLayout />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <MarketStats />
        <section id="location">
          <Neighbourhood />
        </section>
        <AgentProfile />
        <section id="contact">
          <LeadCapture />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
