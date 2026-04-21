"use client"

import { useEffect } from "react"
import { motion, stagger, useAnimate } from "framer-motion"
import Floating, {
  FloatingElement,
} from "./ui/parallax-floating"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import { CircularGallery, type GalleryItem } from "./ui/circular-gallery"

export function Gallery() {
  const [scope, animate] = useAnimate()

  const circularGalleryItems: GalleryItem[] = siteConfig.gallery.map(img => ({
    common: img.title,
    binomial: "Architectural Vision",
    photo: {
      url: img.url,
      text: img.title,
      by: siteConfig.company
    }
  }))

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) })
  }, [])

  return (
    <section id="gallery" className="relative bg-white py-24 min-h-[800px] flex flex-col items-center">
      <div className="absolute top-24 left-6 md:left-16 z-10 pointer-events-none">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-body text-[10px] text-accent tracking-[0.4em] uppercase"
        >
          GALLERY
        </motion.p>
      </div>

      <motion.div
        className="z-50 text-center space-y-4 items-center hidden lg:flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.88, delay: 0.5 }}
      >
        <p className="text-5xl md:text-8xl text-accent font-serif italic tracking-tighter">
          Excellence.
        </p>
        <p className="text-[10px] tracking-[0.2em] uppercase text-accent/60">
          The Art of Living
        </p>
      </motion.div>

      {/* Desktop View */}
      <div className="hidden lg:block w-full h-[800px] relative mt-12" ref={scope}>
        <Floating sensitivity={-1} className="overflow-hidden">
          {siteConfig.gallery.slice(0, 8).map((image, idx) => {
             // Position mapping for the first 8 items
             const positions = [
               { depth: 0.5, class: "top-[10%] left-[15%]", size: "w-32 h-32 md:w-48 md:h-48" },
               { depth: 1, class: "top-[15%] left-[40%]", size: "w-40 h-40 md:w-56 md:h-56" },
               { depth: 2, class: "top-[5%] left-[65%]", size: "w-48 h-64 md:w-64 md:h-80" },
               { depth: 1, class: "top-[10%] left-[85%]", size: "w-32 h-32 md:w-48 md:h-48" },
               { depth: 1, class: "top-[50%] left-[5%]", size: "w-48 h-48 md:w-64 md:h-64" },
               { depth: 2, class: "top-[60%] left-[80%]", size: "w-48 h-48 md:w-64 md:h-80" },
               { depth: 4, class: "top-[70%] left-[20%]", size: "w-56 md:w-72 h-48 md:h-96" },
               { depth: 1, class: "top-[70%] left-[55%]", size: "w-40 h-40 md:w-56 md:h-56" },
             ];
             const pos = positions[idx] || positions[0];
             
             return (
               <FloatingElement key={idx} depth={pos.depth} className={pos.class}>
                 <motion.img
                   initial={{ opacity: 0 }}
                   src={image.url}
                   className={cn(pos.size, "object-cover border border-accent/20 hover:scale-105 duration-500 cursor-pointer transition-transform shadow-2xl")}
                 />
               </FloatingElement>
             );
          })}
        </Floating>
      </div>

      {/* Mobile/Tablet Sticky View */}
      <div className="lg:hidden w-full h-[300vh] relative">
        <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
          <div className="w-full h-full">
            <CircularGallery 
              items={circularGalleryItems} 
              radius={window.innerWidth < 640 ? 350 : 500} 
              className="h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
