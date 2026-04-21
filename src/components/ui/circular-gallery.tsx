import React, { useState, useEffect, useRef, type HTMLAttributes } from 'react';
import { useScroll, useSpring } from 'framer-motion';
import { cn } from "@/lib/utils";

// Define the type for a single gallery item
export interface GalleryItem {
  common: string;
  binomial: string;
  photo: {
    url: string; 
    text: string;
    pos?: string;
    by: string;
  };
}

// Define the props for the CircularGallery component
interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  /** Controls how far the items are from the center. */
  radius?: number;
  /** Controls the speed of auto-rotation when not scrolling. */
  autoRotateSpeed?: number;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, radius = 600, autoRotateSpeed = 0.05, ...props }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const scrollTrackerRef = useRef<HTMLDivElement | null>(null);
    
    const [rotation, setRotation] = useState(0);
    const scrollRotationRef = useRef(0);
    const autoRotationRef = useRef(0);
    const lastTimeRef = useRef(performance.now());

    // Use Framer Motion's useScroll for better performance and cross-browser reliability
    const { scrollYProgress } = useScroll({
      target: scrollTrackerRef,
      offset: ["start start", "end end"]
    });

    // Add a spring for smoother rotation
    const rotationSpring = useSpring(scrollYProgress, {
      stiffness: 80,
      damping: 25,
      restDelta: 0.001
    });

    // Update the scroll tracker on mount
    useEffect(() => {
      // Find the tall h-[300vh] parent which is the 3rd parent up in Gallery.tsx
      const tracker = internalRef.current?.parentElement?.parentElement?.parentElement;
      if (tracker) {
        scrollTrackerRef.current = tracker as HTMLDivElement;
      }
    }, []);

    useEffect(() => {
      return rotationSpring.on("change", (latest) => {
        scrollRotationRef.current = latest * 540;
      });
    }, [rotationSpring]);

    // Handle auto-rotation and combined state updates
    useEffect(() => {
      let frameId: number;
      
      const animate = (time: number) => {
        const delta = time - lastTimeRef.current;
        lastTimeRef.current = time;
        
        // Accumulate autonomous rotation
        autoRotationRef.current += (autoRotateSpeed * delta * 0.2); 
        
        // combine scroll + auto
        setRotation(scrollRotationRef.current + autoRotationRef.current);
        
        frameId = requestAnimationFrame(animate);
      };

      frameId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frameId);
    }, [autoRotateSpeed]);

    const anglePerItem = 360 / items.length;
    
    return (
      <div
        ref={(node) => {
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
          (internalRef as any).current = node;
        }}
        className={cn("relative w-full h-full flex items-center justify-center overflow-hidden", className)}
        style={{ perspective: '2000px' }}
        {...props}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.1s linear'
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            // Calculate opacity based on relative angle to the center front
            const currentTotalRotation = rotation % 360;
            const relativeAngle = (itemAngle + currentTotalRotation + 360) % 360;
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
            
            // Items fade as they move away from the front center (normalizedAngle 0)
            const opacity = Math.max(0, 1 - (normalizedAngle / 100)); 

            return (
              <div
                key={item.photo.url + i}
                className="absolute w-[280px] h-[380px] sm:w-[320px] sm:h-[420px]"
                style={{
                  transform: `translate(-50%, -50%) rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  left: '50%',
                  top: '50%',
                  opacity: opacity,
                  transition: 'opacity 0.4s ease-out',
                  backfaceVisibility: 'hidden',
                  zIndex: normalizedAngle < 90 ? 20 : 10
                }}
              >
                <div className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden border border-white/20 bg-stone-900 group">
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    style={{ objectPosition: item.photo.pos || 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                    <h2 className="text-2xl font-display italic tracking-tight">{item.common}</h2>
                    <p className="text-[10px] font-body uppercase tracking-[0.3em] opacity-60 mt-2">
                       {item.binomial}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };
