import { useState } from 'react';
import { motion } from 'framer-motion';

export function ProgressiveImage({ src, alt, className, style }: { src: string, alt: string, className?: string, style?: React.CSSProperties }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-gray-100 ${className}`} style={style}>
      {/* Placeholder animation */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      {/* High-res image */}
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
        animate={isLoaded ? { opacity: 1, filter: "blur(0px)", scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
